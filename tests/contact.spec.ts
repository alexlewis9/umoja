import { expect, test } from "@playwright/test";
import { buildContactMailto } from "../src/app/contactMailto";

const contactUrl = "http://localhost:3000/contact";
const specialName = "Ada Lovelace-Smith";
const specialPhone = "+1 (289) 200-3413 ext. 42";
const specialEmail = "ada+umoja.test@example.co";
const specialMessage =
  "Line 1: Hello Umoja!\n" +
  "Line 2: Symbols & < > \" ' / ? = + % # @\n" +
  "Line 3: Accents cafe naive and emoji test";

test.describe("contact form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(contactUrl);
  });

  test("blocks invalid email with native validation", async ({ page }) => {
    await page.locator('input[name="name"]').fill("Invalid Email User");
    await page.locator('input[name="email"]').fill("not-an-email");
    await page.locator('textarea[name="message"]').fill("Testing invalid email");
    await page.getByRole("button", { name: "Send" }).click();

    const emailState = await page.locator('input[name="email"]').evaluate((element) => {
      const input = element as HTMLInputElement;

      return {
        valid: input.validity.valid,
        typeMismatch: input.validity.typeMismatch,
        validationMessage: input.validationMessage,
        currentUrl: window.location.href,
      };
    });

    expect(emailState.valid).toBe(false);
    expect(emailState.typeMismatch).toBe(true);
    expect(emailState.validationMessage.length).toBeGreaterThan(0);
    expect(emailState.currentUrl).toContain("/contact");
  });

  test("requires name, email, and message but not phone", async ({ page }) => {
    await page.getByRole("button", { name: "Send" }).click();

    const requiredState = await page.evaluate(() => {
      const name = document.querySelector<HTMLInputElement>('input[name="name"]');
      const email = document.querySelector<HTMLInputElement>('input[name="email"]');
      const message = document.querySelector<HTMLTextAreaElement>('textarea[name="message"]');

      return {
        nameMissing: name?.validity.valueMissing,
        emailMissing: email?.validity.valueMissing,
        messageMissing: message?.validity.valueMissing,
        currentUrl: window.location.href,
      };
    });

    expect(requiredState).toMatchObject({
      nameMissing: true,
      emailMissing: true,
      messageMissing: true,
    });
    expect(requiredState.currentUrl).toContain("/contact");

    await page.locator('input[name="name"]').fill("No Phone User");
    await page.locator('input[name="email"]').fill("no.phone@example.com");
    await page.locator('textarea[name="message"]').fill("No phone provided");

    await expect(
      page.locator("form").evaluate((form) => (form as HTMLFormElement).checkValidity()),
    ).resolves.toBe(true);
  });

  test("preserves special characters and new lines in form values", async ({ page }) => {
    const nameInput = page.locator('input[name="name"]');

    await nameInput.click();
    await nameInput.pressSequentially(specialName);
    await page.locator('input[name="phone"]').fill(specialPhone);
    await page.locator('input[name="email"]').fill(specialEmail);
    await page.locator('textarea[name="message"]').fill(specialMessage);
    await expect(nameInput).toHaveValue(specialName);

    const formState = await page.evaluate(() => {
      const form = document.querySelector<HTMLFormElement>("form");
      const message = document.querySelector<HTMLTextAreaElement>('textarea[name="message"]');
      const email = document.querySelector<HTMLInputElement>('input[name="email"]');
      const data = new FormData(form ?? undefined);

      return {
        formValid: form?.checkValidity(),
        emailValid: email?.validity.valid,
        name: data.get("name"),
        phone: data.get("phone"),
        email: data.get("email"),
        message: data.get("message"),
        lineCount: String(message?.value).split("\n").length,
      };
    });

    expect(formState).toMatchObject({
      formValid: true,
      emailValid: true,
      name: specialName,
      phone: specialPhone,
      email: specialEmail,
      message: specialMessage,
      lineCount: 3,
    });
  });

  test("encodes mailto subject and body content", async () => {
    const expectedMailto = buildContactMailto({
      name: specialName,
      phone: specialPhone,
      email: specialEmail,
      message: specialMessage,
    });

    expect(expectedMailto).toContain("%0A");
    expect(expectedMailto).toContain("%26");
    expect(expectedMailto).toContain("%3C");
    expect(expectedMailto).toContain("%25");
    expect(expectedMailto).toContain("ada%2Bumoja.test%40example.co");
  });

  test("fits the mobile viewport", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(contactUrl);

    const layout = await page.evaluate(() => {
      const form = document.querySelector("form")?.getBoundingClientRect();
      const button = Array.from(document.querySelectorAll("button"))
        .find((candidate) => candidate.textContent?.trim() === "Send")
        ?.getBoundingClientRect();

      return {
        formWidth: form?.width ?? 0,
        buttonWidth: button?.width ?? 0,
        viewport: window.innerWidth,
      };
    });

    expect(layout.formWidth).toBeLessThanOrEqual(layout.viewport);
    expect(layout.buttonWidth).toBeGreaterThan(0);
  });
});
