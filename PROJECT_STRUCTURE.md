# Project Structure and Implementation Guide

This document explains how the Angular portfolio is organized, how the app boots, how state is managed, and how the main UI sections fit together.

## 1. High-Level Overview

This repository is a single-page Angular portfolio application built as a standalone component app. The site is composed of a root shell plus a set of feature sections:

- Header and navigation
- Hero / intro section
- About section
- Skills section
- Projects section
- Contact section
- Floating WhatsApp CTA
- Footer

The app is intentionally structured as a one-page experience. There are no routed pages in the current implementation; section navigation is handled by in-page anchors and smooth scrolling.

## 2. Tech Stack

The project uses:

- Angular 20 standalone components
- Angular Material for common UI controls and icons
- `@ngx-translate/core` for Arabic / English localization
- RxJS and Angular signals for local UI state
- GSAP for animation support
- TypeScript 5.8
- Modern CSS with custom properties and component-scoped styles

## 3. Repository Layout

```text
Mahmoud-NET/
├── angular.json
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.spec.json
├── DEPLOYMENT.md
├── public/
│   └── 404.html
└── src/
    ├── index.html
    ├── main.ts
    ├── styles.css
    ├── app/
    │   ├── app.ts
    │   ├── app.html
    │   ├── app.css
    │   ├── app.config.ts
    │   ├── app.routes.ts
    │   ├── app.spec.ts
    │   ├── components/
    │   │   ├── header/
    │   │   ├── hero/
    │   │   ├── about/
    │   │   ├── skills/
    │   │   ├── projects/
    │   │   └── contact/
    │   └── services/
    │       ├── language.service.ts
    │       ├── project.service.ts
    │       └── theme.service.ts
    └── assets/
        └── i18n/
            ├── en.json
            └── ar.json
```

## 4. Application Bootstrap

### `src/main.ts`

The app starts from `bootstrapApplication(AppComponent, appConfig)`. This is the entry point for the standalone Angular setup. There is no NgModule bootstrap layer.

### `src/app/app.config.ts`

The global providers are registered here:

- Router provider
- Browser animations support
- HTTP client
- Translation loader and fallback language
- Zone change-detection configuration
- Browser error listeners

This file is the central place for cross-cutting Angular setup.

### `src/app/app.ts`

The root component imports all top-level feature components directly:

- `HeaderComponent`
- `HeroComponent`
- `AboutComponent`
- `SkillsComponent`
- `ProjectsComponent`
- `ContactComponent`

Because these are standalone components, the app shell simply composes them without an intermediate module.

### `src/app/app.html`

The root template acts as the page layout wrapper. It renders each section in order and also includes the floating WhatsApp button and footer.

## 5. Routing Model

### `src/app/app.routes.ts`

The route list is currently empty. That matches the portfolio’s one-page layout. All navigation is section-based, not route-based.

If routed pages are ever added later, this is the file where the route map would be introduced.

## 6. Global Styling and Theme System

### `src/styles.css`

This is the global style entry point configured in `angular.json`. It contains:

- Global typography and layout rules
- CSS custom properties for the theme system
- Light and dark theme variable sets
- RTL support helpers
- Floating WhatsApp button styling
- Global body transition and accessibility behavior

The theme system is implemented using CSS variables that are switched by theme state on the document body.

### Theme Behavior

`ThemeService` applies theme state to the document using:

- `data-theme="dark"` or `data-theme="light"`
- `body.dark-theme` and `body.light-theme` classes

The current theme is persisted in `localStorage` under the key `theme`.

## 7. Theme Service

### `src/app/services/theme.service.ts`

This service owns the dark/light mode state. It uses Angular signals so the UI reacts immediately when the theme changes.

Implementation details:

- The current mode is stored in a private signal.
- `isDarkMode` is exposed as a computed signal.
- `toggleTheme()` flips the current mode.
- `setTheme()` allows an explicit override.
- An `effect()` keeps the body attributes and classes in sync with the signal.

This means the visual theme is not manually pushed into each component; the document-level state is the source of truth.

## 8. Language and Localization

### `src/app/services/language.service.ts`

This service manages the current UI language. It also uses Angular signals and persists the selected language in `localStorage`.

Implementation details:

- Supported languages are `en` and `ar`
- The default language is English
- The service calls `TranslateService.use(lang)` to switch translation data
- It updates `document.documentElement.lang`
- It updates `document.documentElement.dir` to `rtl` for Arabic and `ltr` for English

### Translation Assets

Translation files live in:

- `src/assets/i18n/en.json`
- `src/assets/i18n/ar.json`

The app uses the translation pipe throughout the templates, so text content stays out of the components and remains easy to localize.

## 9. Project Data Layer

### `src/app/services/project.service.ts`

This service is the portfolio data source for the projects section. It contains the project list as a typed in-memory array.

The data model includes:

- `id`
- `title`
- `titleAr`
- `description`
- `descriptionAr`
- `technologies`
- `githubUrl`
- `liveUrl`
- `imageUrl`
- `featured`
- `category`

The service exposes helper methods such as:

- `getProjects()`
- `getProjectById()`
- `getFeaturedProjects()`
- `getProjectsByCategory()`

This keeps the projects component focused on presentation and filtering behavior instead of hardcoding the dataset inside the UI.

## 10. Feature Components

## 10.1 Header

### `src/app/components/header/header.ts`

The header handles:

- Theme toggling
- Language toggling
- Mobile navigation state
- Section scrolling
- Scroll-based styling changes

It injects both `ThemeService` and `LanguageService` so the header becomes the main control surface for site-wide UI settings.

### `src/app/components/header/header.html`

The template includes:

- Brand / logo area
- Desktop nav links
- Theme toggle button
- Language toggle button
- Get in touch button
- Mobile menu toggle

Navigation links call `scrollToSection()` to move the viewport to the requested section.

## 10.2 Hero

### `src/app/components/hero/hero.ts`

The hero section provides the introductory content and simple scroll helpers.

### `src/app/components/hero/hero.html`

The template includes:

- Name
- Subtitle
- Location
- Description
- CTA buttons
- Social links
- Contact details
- Profile image

This is the first major visual section on the page and is designed to establish identity and contact options quickly.

## 10.3 About

### `src/app/components/about/about.ts`

The about component is a presentation-only standalone component. It exists to render the profile summary and delivery points.

### `src/app/components/about/about.html`

The template contains:

- Section title
- Role badge
- Profile summary
- Deliverables list

## 10.4 Skills

### `src/app/components/skills/skills.ts`

The skills component is also presentation-only and renders grouped technical skill categories.

### `src/app/components/skills/skills.html`

The template groups skills into categories such as:

- Programming
- Frameworks
- Desktop
- Tools
- Methodologies

Each category is rendered as a grid of badges and icons, which makes the section easy to scan.

## 10.5 Projects

### `src/app/components/projects/projects.ts`

This is the most stateful feature component in the app. It manages:

- Project loading from `ProjectService`
- Category filtering
- Expanded / collapsed descriptions
- Local language-aware title and description selection

The filter state is local to the component, so switching categories does not require router navigation or global state.

### `src/app/components/projects/projects.html`

The template renders:

- Section heading and subtitle
- Category filter buttons
- A responsive project grid
- Featured badges
- Read more / read less control
- Technology tags
- GitHub and live demo links
- Empty state for no results
- Additional call-to-action to view more work on GitHub

The projects section is the main content showcase for the portfolio.

## 10.6 Contact

### `src/app/components/contact/contact.ts`

The contact component now includes a reactive email form in addition to the static contact details. It collects the visitor's name, email, and message, then submits the payload through EmailJS from the frontend.

### `src/app/components/contact/contact.html`

The template includes:

- Email
- Location
- Phone / WhatsApp contact
- Name, email, and message form fields
- Inline validation and submit status messages
- Social cards for GitHub and LinkedIn
- Contact CTA button

### Email Sending Configuration

The form does not send mail by itself without external configuration. It uses EmailJS, and credentials are loaded from environment files:

- `src/environments/environment.ts`
- `src/environments/environment.development.ts`

Replace these values in the `emailjs` object:

- Service ID
- Template ID
- Public Key

The EmailJS template should map these fields:

- `from_name`
- `from_email`
- `reply_to`
- `message`
- `to_name`

Recommended setup steps:

1. Create an EmailJS account.
2. Add an email service that points to your inbox.
3. Create a template that accepts the fields above.
4. Replace the placeholder values in both environment files.
5. Test the form locally before deploying.

If you prefer a backend-based solution later, this form can be switched to an API endpoint without changing the visible UI.

## 11. Assets and Static Content

### `public/`

The `public` folder is used for static output assets served as-is by Angular. It also contains `404.html`, which is useful for GitHub Pages style hosting.

### `src/assets/`

This folder holds app assets such as translations and images that are imported by the Angular app.

### `src/app/assets/`

This directory is included in the Angular asset pipeline as well, allowing component-adjacent static files to be bundled and served.

## 12. Build and Deployment

### `angular.json`

This file defines:

- The browser entry point
- Polyfills
- Asset inclusion
- Global styles
- Production and development configurations
- GitHub Pages base href for deployment

### `package.json`

The main scripts are:

- `npm run start`
- `npm run build`
- `npm run build:prod`
- `npm run watch`
- `npm run test`

### Deployment Notes

Deployment is documented in `DEPLOYMENT.md`. The repository is configured for GitHub Pages publishing with production builds using the `baseHref` path in `angular.json`.

## 13. Why the App Is Structured This Way

The structure favors simplicity and clear ownership:

- Root shell composition keeps the app easy to understand
- Services own persistent UI state and data
- Components stay focused on one section each
- Global styling handles theme switching without duplicating logic
- Translation files separate content from layout

This makes the portfolio easy to extend with new sections, new projects, or additional language strings without changing the app’s basic architecture.

## 14. Common Extension Points

If you want to expand the project later, the main places to change are:

- Add a new section component under `src/app/components/`
- Add new portfolio entries in `src/app/services/project.service.ts`
- Add or update translations in `src/assets/i18n/`
- Extend the theme tokens in `src/styles.css`
- Add new app-wide providers in `src/app/app.config.ts`

## 15. Summary

This is a standalone Angular portfolio with a small, explicit architecture. The app boots from `main.ts`, configures cross-cutting services in `app.config.ts`, renders the one-page shell from `app.html`, and keeps the major concerns separated into services, section components, and translation assets.

The result is a maintainable portfolio that is easy to localize, theme, deploy, and extend.

## 16. Weak Points and Improvements

The current implementation is functional and well-structured, but a few areas would make it stronger.

### 16.1 Performance

The app is still shipped as a single-page experience with all major sections loaded up front. That is fine for a small portfolio, but it increases the initial bundle size and makes the first render heavier than necessary.

Recommended improvements:

- Lazy-load heavy sections such as projects and contact if the portfolio grows further.
- Optimize large images before shipping them in `public/` or `src/assets/`.
- Review third-party dependencies and remove anything unused.
- Consider deferring non-critical animations until after the first paint.

### 16.2 Data Ownership

The project list lives in `ProjectService` as a hardcoded array. This is simple, but it mixes content management with application logic and makes updates more manual.

Recommended improvements:

- Move portfolio content into JSON files or a small content model.
- Separate display data from runtime behavior in the service layer.
- If the content grows, consider a markdown or CMS-backed approach.

### 16.3 SEO and Discoverability

The app currently behaves like a one-page landing site with no real route structure. That keeps navigation simple, but it limits deep linking and section-level indexing.

Recommended improvements:

- Add meaningful metadata for title, description, and social sharing.
- Introduce hash-based or route-based section URLs where useful.
- Add structured data for profile and project information.
- Make sure images have descriptive alt text and important content is text-based, not only visual.

### 16.4 Accessibility

The site uses custom controls, animated transitions, and icon-heavy interactions, so accessibility needs to stay deliberate rather than assumed.

Recommended improvements:

- Audit keyboard focus order and visible focus states.
- Confirm all icon-only controls have useful accessible labels.
- Verify color contrast across both themes.
- Respect reduced-motion preferences for GSAP and CSS animations.
- Add a skip-to-content link for faster keyboard navigation.

### 16.5 Routing and Structure

`app.routes.ts` is empty, which matches the current single-page model, but it also means there is no structural separation for future growth.

Recommended improvements:

- Add routes if you plan to split sections into dedicated pages.
- Keep section anchors even if routes are introduced so in-page navigation still works.
- Use lazy-loaded feature routes if the app expands.

### 16.6 Testing

The project has a clean architecture, but there is little visible test coverage around the actual user flows.

Recommended improvements:

- Add unit tests for `ThemeService`, `LanguageService`, and `ProjectService`.
- Add component tests for theme toggling and project filtering.
- Add one end-to-end smoke test for navigation, language switching, and contact links.

### 16.7 Maintainability

Some styling and behavior still rely on component-level conventions and global class names. That is manageable now, but it becomes more fragile as the site grows.

Recommended improvements:

- Centralize reusable UI tokens in `src/styles.css`.
- Keep component APIs small and explicit.
- Avoid duplicating animation logic across components.
- Prefer one source of truth for theme state, language state, and portfolio data.

### 16.8 Highest-Impact Next Steps

If you want the biggest improvement for the least effort, do these first:

1. Move project content out of `ProjectService` and into data files.
2. Add accessibility improvements for keyboard and motion handling.
3. Add metadata and social-sharing improvements for SEO.
4. Add a small test suite for theme, language, and filtering.
5. Trim the first-load cost by optimizing images and deferring non-critical behavior.
