# UMOJA Website

## Updating Content

**Files**

The editable content is in the `src/content` folder:

- [src/content/about.yaml](src/content/about.yaml)
- [src/content/events.yaml](src/content/events.yaml)
- [src/content/faqs.yaml](src/content/faq.yaml)
- [src/content/footer.yaml](src/content/footer.yaml)
- [src/content/photos.yaml](src/content/photos.yaml)
- [src/content/registration.yaml](src/content/registration.yaml)
- [src/content/resources.yaml](src/content/resources.yaml)
- [src/content/site.yaml](src/content/site.yaml)
- [src/content/team.yaml](src/content/team.yaml)
- [src/content/testimonials.yaml](src/content/testimonials.yaml)

**Edit**

- Open the repository on GitHub and navigate to the file you want to change (e.g., [src/content/about.yaml](src/content/about.yaml)).
- Click the pencil icon to edit the file.
- Make your changes (keep the same format).
- Click "Commit changes" to save.

**Formatting**

- Keep YAML structure and indentation exactly. Use the existing keys.
- When changing or adding items to lists, keep the YAML list format (leading `-` for items).

## Developer Guidelines

**Set up**

- Clone repo

```bash
cd umoja
npm install
```

**Run**

```bash
npm run dev -- --webpack
```

**Contributing**

1. Branch from `main` using the Linear ticket: e.g., `UMO-123`
2. Open a PR to `main` titled with the ticket: e.g., `UMO-123: Add navbar`, include summary + testing notes. Include screenshots if applicable.
