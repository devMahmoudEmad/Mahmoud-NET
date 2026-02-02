# 🚀 Portfolio Deployment Guide

## Live Portfolio
Your portfolio is published at `https://devmahmoudemad.github.io/Mahmoud-NET/`.

## Deployment Status
✅ Automatic GitHub Pages deploys run on every push to `master` (and can be triggered manually via the **Deploy Angular Portfolio to GitHub Pages** workflow).

## Deployment Process
GitHub Actions builds and deploys to GitHub Pages.

### What happens when you push to GitHub
1. **Build**: GitHub Actions installs dependencies and builds the Angular app with the production configuration.
2. **Artifact**: The build output is uploaded as a Pages artifact.
3. **Deploy**: GitHub Pages publishes from the artifact to the `gh-pages` branch/site.
4. **Live**: The site updates automatically at the URL above.

### Manual Commands (if needed)
```bash
# Build for production
npm run build

# Preview production build locally
npm run build && npx http-server dist/portfolio/browser -p 4200
```

### Important Files:
- `.github/workflows/deploy.yml` - GitHub Actions deployment workflow
- `angular.json` - Build configuration with proper base href
- `public/` - Static assets (images, favicon)

### Adding New Projects:
1. Add project images to the `public/` folder
2. Update `src/app/services/project.service.ts` with new project data
3. Push changes - deployment happens automatically!

### Custom Domain (Optional):
To use a custom domain like `mahmoudemad.dev`:
1. Add a `CNAME` file to `public/` folder with your domain
2. Configure DNS records with your domain provider
3. Enable custom domain in GitHub Pages settings

## 🎯 Features Deployed:
- ✅ Professional .NET-inspired design
- ✅ Your real profile picture and project screenshots
- ✅ Responsive design for all devices
- ✅ Dark/light theme toggle
- ✅ Contact information and social links
- ✅ Dynamic projects system
- ✅ SEO-optimized meta tags
