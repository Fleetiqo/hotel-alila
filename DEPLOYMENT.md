# Deployment Instructions for GitHub Pages

## Quick Deploy

1. **Initialize Git Repository**
```bash
git init
git add .
git commit -m "Initial commit - Hotel Alila website"
```

2. **Create GitHub Repository**
- Go to GitHub and create a new repository named `hotel-alila`
- Don't initialize with README, .gitignore, or license

3. **Push to GitHub**
```bash
git remote add origin https://github.com/YOUR_USERNAME/hotel-alila.git
git branch -M main
git push -u origin main
```

4. **Enable GitHub Pages**
- Go to your repository Settings
- Navigate to Pages (left sidebar)
- Under "Build and deployment":
  - Source: Select "GitHub Actions"
- The site will automatically deploy on every push to main

5. **Access Your Site**
Your site will be available at: `https://YOUR_USERNAME.github.io/hotel-alila/`

## Manual Build

If you want to build locally:
```bash
npm run build
```

The built files will be in the `dist/` folder.

## Local Development

To run the development server:
```bash
npm run dev
```

## Notes

- The site is configured with base path `/hotel-alila/` for GitHub Pages
- All images are stored in the `public/` folder
- The GitHub Actions workflow automatically builds and deploys on push to main
- Make sure to enable GitHub Pages in your repository settings

## Troubleshooting

If images don't load:
1. Check that all images are in the `public/` folder
2. Verify the base path in `vite.config.js` matches your repository name
3. Ensure GitHub Pages is enabled in repository settings

If deployment fails:
1. Check the Actions tab in your GitHub repository
2. Verify that Pages is set to deploy from GitHub Actions (not branch)
3. Make sure the workflow file is in `.github/workflows/deploy.yml`
