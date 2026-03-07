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
