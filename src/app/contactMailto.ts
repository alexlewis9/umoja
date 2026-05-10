export const contactEmail = "info@durham1.ca";

type ContactMailtoInput = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export function buildContactMailto({ name, phone, email, message }: ContactMailtoInput) {
  const subject = `Contact request from ${name || "DurhamONE website"}`;
  const body = [
    `Name: ${name}`,
    `Phone: ${phone || "Not provided"}`,
    `Email: ${email}`,
    "",
    "Message:",
    message,
  ].join("\n");

  return `mailto:${contactEmail}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}
