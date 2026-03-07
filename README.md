## My React Website

Modern single-page React application with automated daily commits and CI powered by GitHub Actions.

---

### Table of contents

- [Overview](#overview)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Available scripts](#available-scripts)
- [Project structure](#project-structure)
- [Automation & CI](#automation--ci)
- [Deployment](#deployment)
- [Development guidelines](#development-guidelines)
- [Roadmap](#roadmap)
- [License](#license)

---

## Overview

**My React Website** is a single-page web app built with React and `react-scripts`.  
It is designed to be:

- **Fast**: client-side routing and production-optimized build.
- **Maintainable**: clear structure, tested via Jest and React Testing Library.
- **Automated**: GitHub Actions keep the repository active with a daily auto-commit workflow.

Use it as a personal site, portfolio, or starter for React projects.

---

## Features

- **Modern React setup** using `create-react-app` conventions.
- **React Router v6** for client-side navigation.
- **Testing setup** with Jest + React Testing Library.
- **Daily auto-commit workflow** that appends a timestamp to `auto-update-log.txt` and pushes changes.
- **Ready for deployment** to GitHub Pages, Netlify, Vercel, or any static host.

---

## Tech stack

- **Framework**: React 17 (`react`, `react-dom`)
- **Tooling**: `react-scripts` (Webpack, Babel, dev server)
- **Routing**: `react-router-dom` v6
- **Testing**: Jest, `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`
- **Automation**: GitHub Actions (`.github/workflows/auto-commit.yml`)
- **Package manager**: npm

---

## Getting started

### Prerequisites

- **Node.js**: v16+ (LTS recommended)
- **npm**: v8+ (bundled with recent Node versions)
- Git installed and configured.

### Installation

```bash
# clone the repository
git clone https://github.com/Engr-BenitoIshimwe/My-React-Website.git
cd My-React-Website

# install dependencies
npm install
```

### Running the app locally

```bash
npm start
```

This starts the development server at `http://localhost:3000`.  
The page reloads automatically when you edit code, and lint errors appear in the console.

---

## Available scripts

All scripts are defined in `package.json` under `scripts`:

- **`npm start`**  
  Starts the development server with hot reload.

- **`npm test`**  
  Runs the test watcher in interactive mode.

- **`npm run build`**  
  Builds an optimized production bundle into the `build` folder.

- **`npm run eject`**  
  Ejects the CRA configuration. **Irreversible – avoid unless you know exactly why you need it.**

- **`npm run deploy`**  
  Builds the app and deploys the contents of `build` to GitHub Pages (see [Deployment](#deployment)).

---

## Project structure

Typical structure (may vary slightly as you evolve the app):

```text
My-React-Website/
  ├─ public/
  ├─ src/
  │  ├─ components/
  │  ├─ pages/
  │  ├─ App.js / App.tsx
  │  ├─ index.js / index.tsx
  │  └─ ...
  ├─ .github/
  │  └─ workflows/
  │     └─ auto-commit.yml
  ├─ package.json
  ├─ README.md
  └─ ...
```

- **`src/`** contains the application code (components, routes, styles).
- **`.github/workflows/auto-commit.yml`** defines the daily auto-commit CI job.

---

## Automation & CI

### Auto-commit workflow

The **Auto Commit** GitHub Actions workflow runs daily (and can be triggered manually) to:

- Append a timestamp to `auto-update-log.txt`.
- Commit the change with a standard message.
- Push to the `main` branch.

Key parts of `.github/workflows/auto-commit.yml`:

```yaml
name: Auto Commit

on:
  schedule:
    - cron: "0 10 * * *"   # every day at 10:00 UTC
  workflow_dispatch:

permissions:
  contents: write

jobs:
  auto-commit:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v3
        with:
          token: ${{ secrets.PAT_TOKEN }}   # Personal Access Token (see below)

      - name: Make changes
        run: |
          echo "Updated at $(date)" >> auto-update-log.txt

      - name: Commit changes
        run: |
          git config --global user.name "github-actions[bot]"
          git config --global user.email "github-actions[bot]@users.noreply.github.com"
          git add .
          git commit -m "Automated commit" || echo "No changes to commit"
          git push origin HEAD:main
```

### Required secret: `PAT_TOKEN`

To allow the workflow to push back to the repository:

1. Create a **Personal Access Token** (PAT) with `repo` permissions (or a fine-grained token with `contents: read/write` for this repo).
2. In the repository, go to **Settings → Secrets and variables → Actions → New repository secret**.
3. Name the secret **`PAT_TOKEN`** and paste the token value.
4. Save and re-run the workflow from the **Actions** tab.

---

## Deployment

You can deploy the built app to any static host.

### Build

```bash
npm run build
```

This creates an optimized production bundle in the `build` directory.

### GitHub Pages

One common setup:

1. Ensure the following entries exist in `package.json`:

   ```json
   "homepage": "https://engr-benitoishimwe.github.io/My-React-Website/",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

2. Deploy:

   ```bash
   npm run deploy
   ```

3. In the GitHub repository settings, set the **Website** field to the deployed URL.

You can similarly deploy to Netlify, Vercel, or any static hosting provider.

---

## Development guidelines

- **Branching**
  - Use feature branches (e.g., `feature/home-page`, `chore/dependencies`).
  - Keep `main` always in a deployable state.

- **Commits**
  - Prefer clear, action-based messages:
    - `feat: add contact section`
    - `fix: correct router path for about page`
    - `chore: update dependencies`

- **Code style**
  - Follow the default ESLint + Prettier rules from `react-scripts`.
  - Keep components focused and reusable; extract shared UI into `components/`.

- **Testing**
  - Add tests for new behavior where it adds value.
  - Keep tests fast and deterministic.

---

## Roadmap

Some potential improvements:

- **Add typed support** with TypeScript.
- **Introduce global state** management if needed (Context API, Zustand, Redux Toolkit).
- **Improve accessibility (a11y)** and Lighthouse scores.
- **Set up additional workflows** (lint, test on PRs, deploy on main merge).

---

## License

This project currently does not declare a license.  
If you plan to make the code public and reusable, consider adding a `LICENSE` file (for example, MIT) and updating this section accordingly.
