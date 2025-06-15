# GitHub Profile Finder

A sleek, responsive web application built with **HTML5**, **CSS3**, **JavaScript**, and **React** (powered by Vite) that lets you look up any GitHub user’s public profile. Fetches real‑time data from the GitHub REST API and displays avatar, bio, key stats, and top repositories—perfect for demoing front‑end skills and API integration.

<p align="center">
  <img src="./screenshots/demo.png" alt="App Demo" width="600"/>
</p>

---

## ⚙️ Prerequisites

> **Important:** This repository does **not** include `node_modules`, Vite cache, or build artifacts. You must install all essential dependencies locally.

- **Node.js** (v16+) & **npm** or **Yarn**  
- A **GitHub Personal Access Token** (to increase API rate limits & avoid unauthenticated restrictions)  
  1. Go to [GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)](https://github.com/settings/tokens)  
  2. Generate a token with `public_repo` scope (no write access required)  
  3. Copy the token for use in your local environment  

---

## 🚀 Getting Started

1. **Clone the repository**  
   ```bash
   git clone https://github.com/vatsalsharma1234/Github-profile-finder.git
   cd Github-profile-finder
