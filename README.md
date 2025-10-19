# Portfolio Website

A personal portfolio site built with **React** and **Vite**. This project showcases the site owner, experience, and selected projects with image previews and links for further exploration.

## ✨ Key Features

- Hero section and navigation with light/dark mode support.
- Projects section with interactive cards showing preview images above descriptions.
- Contact form and call-to-action areas to make it easy to get in touch.
- Custom styling using a combination of Tailwind base and modular CSS.

## 🗂️ Project Structure

```
portfolio-website/
├── public/                # Static public assets
├── src/
│   ├── assets/            # Images, icons, and project media
│   ├── components/        # Reusable UI components
│   ├── sections/          # Page sections (Hero, Projects, Contact, etc.)
│   └── App.jsx, App.css   # Root component and global styles
├── package.json           # Dependencies and npm scripts
└── vite.config.js         # Vite configuration
```

## 🚀 Running Locally

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Start the development server**
   ```bash
   npm run dev
   ```
   The dev server runs at `http://localhost:5173` by default.
3. **Build for production**
   ```bash
   npm run build
   ```
4. **Preview the production build**
   ```bash
   npm run preview
   ```

## 🖼️ Adding or Updating Projects

Project data lives in `src/sections/ProjectsSection.jsx`. Each entry can be updated with:

- `title`: Project name.
- `description`: Short summary.
- `image`: Import a local asset from `src/assets/projects/` or use a public URL.
- `href`: Link to the repository or demo.

Add new visual assets to `src/assets/projects/` and import them in the projects file so previews display above descriptions.

## 🧪 Quality Check

Before deploying, run a build to make sure there are no errors:

```bash
npm run build
```
