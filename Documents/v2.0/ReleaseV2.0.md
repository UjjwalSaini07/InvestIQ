# 🚀 Release Notes – Invest IQ v2.0

**Release Date:** September 9, 2025  
**Repository:** [Invest IQ](https://github.com/UjjwalSaini07/InvestIQ)  
**Release Tag:** v2.0 (`2519149`) - [Release v2.0](https://github.com/UjjwalSaini07/InvestIQ/releases/tag/v2.0.0)  
**Authors:** Ujjwal Saini ([ujjwalsaini.dev](https://ujjwalsaini.dev)), Gayatri Singh ([gayatrisingh.dev](https://portfolio-gayatri-singhs-projects.vercel.app/))

## 📌 Overview

This release marks the **major v2.0 upgrade** of **Invest IQ**, focusing on **modernized dependency management, improved containerization, enhanced workflows, and expanded developer tooling**.

The transition from **npm → pnpm**, new **Docker/Nginx setup**, and **workflow APIs** ensure greater **performance, maintainability, and scalability**.


## ✨ Grouped Features & Changes

### 🎨 Frontend & UI/UX

- e5a904c (2025-09-07) – Added `chart.js` dependency for advanced charting
- ad31235 (2025-09-09) – Updated ToastContainer config and meta tags
- e77bf24 (2025-09-09) – Removed redundant ToastContainer components
- 25daba5 (2025-09-08) – Added `LayoutMetaData` component and metadata.json

### ⚙️ Dependency & Package Management

- 99c3747 (2025-09-07) – Switched to **pnpm** and updated requirements files
- e8f642f (2025-09-07) – Added pnpm lockfile for dependency management
- de7334d (2025-09-07) – Updated package name to `workflows`
- e51df0a (2025-09-08) – Finalized switch from **npm → pnpm**
- Dependabot bumps reverted (9ac9d09, 89952af, 1ca93db, f2e3cf4) to maintain stability

### 📦 DevOps, CI/CD & Infrastructure

- f046cab (2025-09-07) – Moved Action workflows into `workflows/` directory
- 20ce845 (2025-09-07) – Updated workflows to use pnpm and new structure
- 27434b8 (2025-09-08) – Added CODEOWNERS documentation
- 0c42098 (2025-09-08) – Added Dependabot configuration

### 🐳 Docker & Deployment

- 49796ed (2025-09-07) – Updated license year & frontend Docker context
- e835a6c (2025-09-08) – Enhanced docker-compose with networks, healthchecks & labels
- 50c1b93 (2025-09-08) – Added Docker Compose files for dev & prod environments
- 66feb60 (2025-09-08) – Added Nginx Dockerfile and removed legacy docker-compose.yml
- e039c60 (2025-09-08) – Added NGINX config and startup script
- 69804de (2025-09-08) – Added Dockerfile for workflows build/runtime

### 🖥️ Backend & APIs

- e758ec9 (2025-09-08) – Added Express server with workflow API endpoints
- 765c092 (2025-09-08) – Added Express 5 and types to dependencies
- 8b38f3a (2025-09-08) – Added Firebase config and hello function with CORS
- d8dbdab (2025-09-09) – Updated email sender config & added Resend dependency

### 📝 Documentation & Project Metadata

- 2519149 (2025-09-08) – Updated project metadata and version → 2.0.0
- 60410bc (2025-09-08) – Updated `package.json` metadata for functions/workflows
- 6d0529a (2025-09-08) – Added ReleaseV1.0_commits.txt
- f12c711 (2025-09-08) – Added release notes for v1.0
- affe8a7 (2025-09-08) – Added release notes for v1.1 and v1.2
- c15fcdd (2025-09-08) – Added ReleaseV2.0.md with git log commands
- 6141585 (2025-09-09) – Revised README for clarity & feature updates
- 838052a (2025-09-09) – Revised README for installation & Docker setup
- d40e2ea (2025-09-08) – Cleaned README formatting

### 📂 Miscellaneous Enhancements

- c99cca1 (2025-09-08) – Removed unused funding provider placeholders
- a953cc6 (2025-09-08) – Revamped and expanded GitHub issue templates
- 47767e7 (2025-09-08) – Updated .dockerignore & enhanced SECURITY.md
- d679a8b (2025-09-09) – Added contributor badge


## 📂 Notable Commits & Tags

| Commit ID | Date       | Description                                      |
| --------- | ---------- | ------------------------------------------------ |
| 2519149   | 2025-09-08 | Updated project metadata and version → 2.0.0     |
| e758ec9   | 2025-09-08 | Added Express server with workflow API endpoints |
| e835a6c   | 2025-09-08 | Enhanced docker-compose with networks & labels   |
| 99c3747   | 2025-09-07 | Switched to pnpm and updated requirements        |
| e5a904c   | 2025-09-07 | Added chart.js dependency to frontend            |
| 6141585   | 2025-09-09 | Revised README for clarity & feature updates     |


## ✅ Final Notes

Version **v2.0** is a **major milestone** for Invest IQ.  
It introduces **pnpm**, improves **Dockerized deployments**, adds **Express APIs**, and strengthens **workflow automation**.

This release lays the groundwork for **future integrations, scalable architecture, and production readiness**.


## 🙏 Acknowledgements

Thanks to all contributors and automation tools (Dependabot, GitHub Actions) for supporting this release.  
For issues or suggestions, please use [GitHub Issues](https://github.com/UjjwalSaini07/InvestIQ/issues).

**Invest-IQ v2.0.0** – Scalable, modern, and production-ready.
