# 🚀 Portfolio Deployment Guide

## Live Portfolio
Your portfolio will be available at: `https://devmahmoudemad.github.io/portfolio/`

## Deployment Process
This portfolio uses GitHub Actions for automatic deployment to GitHub Pages.

### What happens when you push to GitHub:
1. **Build Process**: GitHub Actions automatically builds your Angular app
2. **Optimization**: Code is minified and optimized for production
3. **Deployment**: Built files are deployed to GitHub Pages
4. **Live Update**: Your portfolio is automatically updated online

### Manual Commands (if needed):
```bash
# Build for production
npm run build

# Preview production build locally
npm run build && npx http-server dist/portfolio -p 4200
```

### Important Files:
- `.github/workflows/deploy.yml` - Automated deployment configuration
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
