# Caracara Software — Website

Below is the information provided by CoPilot on this app and the tools used.

---

A sleek, modern static marketing website for **Caracara Software**, a software consulting agency. Built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com), designed for GitHub Pages deployment.

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Content Customization](#content-customization)
- [Contact Form Setup](#contact-form-setup)
- [Deploying to GitHub Pages](#deploying-to-github-pages)
- [Custom Domain (Optional)](#custom-domain-optional)

---

## Tech Stack

| Tool | Purpose |
|---|---|
| [Astro](https://astro.build) | Static site framework (zero JS by default) |
| [Tailwind CSS v4](https://tailwindcss.com) | Utility-first styling |
| [GitHub Pages](https://pages.github.com) | Hosting |
| [GitHub Actions](https://github.com/features/actions) | CI/CD automated deployment |
| [Formspree](https://formspree.io) | Contact form backend (free tier) |

---

## Project Structure

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD pipeline
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Services.astro
│   │   ├── Portfolio.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro        # Base HTML layout (meta, fonts, etc.)
│   ├── pages/
│   │   └── index.astro         # Single-page entry point
│   └── styles/
│       └── global.css          # Tailwind import + custom CSS utilities
├── astro.config.mjs
└── package.json
```

---

## Getting Started

### Prerequisites

- **Node.js** v18 or higher — [download](https://nodejs.org)
- **npm** v8 or higher (comes with Node)

### Install & run locally

```bash
# 1. Clone the repo
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open **http://localhost:4321** in your browser.

### Available commands

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with hot reload at `localhost:4321` |
| `npm run build` | Build production static files to `./dist/` |
| `npm run preview` | Preview the production build locally |

---

## Content Customization

All content lives directly in the component files — no CMS or database.

| What to change | File |
|---|---|
| Hero headline / subtext / stats | `src/components/Hero.astro` |
| About story and values cards | `src/components/About.astro` |
| Service descriptions and bullets | `src/components/Services.astro` |
| Portfolio / case study projects | `src/components/Portfolio.astro` |
| Contact email and info | `src/components/Contact.astro` |
| Footer links and social URLs | `src/components/Footer.astro` |
| Page `<title>` and meta description | `src/layouts/Layout.astro` |

### Colors

The palette is defined as CSS variables in `src/styles/global.css`:

```css
:root {
  --color-bg: #080b12;       /* page background */
  --color-primary: #6366f1;  /* indigo — primary brand color */
  --color-accent: #22d3ee;   /* cyan — accent/highlight */
}
```

---

## Contact Form Setup

The contact form is wired to [Formspree](https://formspree.io) — a free, no-backend form service built for static sites.

1. Sign up at [formspree.io](https://formspree.io) and create a new form.
2. Copy your form ID (e.g. `xpwzrqab`).
3. Open `src/components/Contact.astro` and replace `YOUR_FORM_ID`:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" ...>
<!-- becomes -->
<form action="https://formspree.io/f/xpwzrqab" ...>
```

Formspree will forward submissions to your registered email. The free tier allows 50 submissions/month.

---

## Deploying to GitHub Pages

This project ships with a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys the site whenever you push to `main`.

### Step 1 — Push to GitHub

```bash
git init               # if not already a git repo
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/your-repo-name.git
git push -u origin main
```

### Step 2 — Enable GitHub Pages via GitHub Actions

1. Go to your repository on GitHub.
2. Click **Settings** → **Pages** (in the left sidebar).
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.

That's it. The workflow will trigger on the next push to `main` and your site will be live at:

- **Project site:** `https://your-username.github.io/your-repo-name`
- **User/org site:** `https://your-username.github.io` (if the repo is named `your-username.github.io`)

### Step 3 — Update `astro.config.mjs`

Open `astro.config.mjs` and set `site` (and `base` if using a project site) to match your actual URL:

```js
// Project site (username.github.io/repo-name)
export default defineConfig({
  site: 'https://your-username.github.io',
  base: '/your-repo-name',
  // ...
});

// User/org site (username.github.io) or custom domain
export default defineConfig({
  site: 'https://your-username.github.io',
  // base is not needed
  // ...
});
```

Commit and push — the Action will redeploy automatically.

### Checking the deployment

After pushing, go to **Actions** tab in your GitHub repo to watch the build run. A green checkmark means the site is live. A red X means something failed — click the run to view logs.

---

## Custom Domain (Optional)

To use a custom domain like `www.caracarasoftware.com`:

1. **Add a `CNAME` file** to the `public/` directory:

   ```
   www.caracarasoftware.com
   ```

2. **Update `astro.config.mjs`** — set `site` to your custom domain and remove `base`:

   ```js
   export default defineConfig({
     site: 'https://www.caracarasoftware.com',
     // ...
   });
   ```

3. **Configure DNS** at your domain registrar:
   - **Apex domain** (`caracarasoftware.com`): add four `A` records pointing to GitHub's IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - **Subdomain** (`www.caracarasoftware.com`): add a `CNAME` record pointing to `your-username.github.io`.

4. In GitHub → **Settings** → **Pages**, enter your custom domain and enable **Enforce HTTPS**.

DNS changes can take up to 24 hours to propagate, but usually resolve within minutes.
