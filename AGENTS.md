# AGENTS.md - Steelflow Website

## Project Overview
This is a React website built with Vite, using Tailwind CSS for styling. The project appears to be the landing page for Steelflow, featuring components like Hero, Navigation, Features, etc.

## Essential Commands

### Development
- `npm install` - Install dependencies
- `npm run dev` - Start development server (typically runs on localhost:5173)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Linting/Formatting
- Uses Prettier configured in `.prettierrc`
- Tailwind CSS configured in `tailwind.config.js`
- PostCSS configured in `postcss.config.js`

### Deployment
- GitHub Actions CI/CD pipeline in `.github/workflows/ci.yml`
- Deploys to GitHub Pages on main branch pushes

## Project Structure

```
├── src/
│   ├── components/          # React components
│   │   ├── Hero.jsx        # Landing hero section
│   │   ├── Navigation.jsx  # Site navigation
│   │   ├── Features.jsx    # Feature list
│   │   ├── WhyItMatters.jsx # Why section
│   │   ├── GetInvolved.jsx # Call to action
│   │   ├── DesignSystem.jsx # Design component library
│   │   └── Architecture.jsx # Architecture diagram/section
│   ├── App.css             # Main app styles
│   ├── index.css           # Global CSS (includes Tailwind imports)
│   ├── main.jsx            # Entry point
│   └── App.jsx             # Root component
├── .github/workflows/
│   └── ci.yml              # CI/CD pipeline
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS config
├── postcss.config.js       # PostCSS config
├── QUICK_SETUP.md          # Quick setup instructions
├── CI_SETUP.md             # CI setup documentation
└── structure.txt           # Project structure overview
```

## Code Conventions

### React Patterns
- Components exported as default named functions
- Props destructuring in function parameters
- Simple functional components using hooks where needed
- Components follow PascalCase naming (Hero, Navigation, etc.)

### Styling
- Uses Tailwind CSS utility classes extensively
- Custom CSS in separate files (App.css, index.css)
- Responsive design with Tailwind breakpoints (sm:, md:, lg:)

### File Naming
- React components: PascalCase with .jsx extension
- Config files: standard naming (tailwind.config.js, etc.)
- Documentation: UPPERCASE.md for important docs

### Import Style
- Standard ES6 imports
- Import CSS files at beginning of components that need them

## Testing Approach
No test files or test configuration observed. Appears to be a small landing page project without automated testing setup.

## CI/CD Pipeline
- GitHub Actions workflow runs on push to main and pull requests
- Installs Node.js 18
- Runs `npm ci` for clean install
- Runs `npm run build` for production build
- Deploys to GitHub Pages using peaceiris/actions-gh-pages

## Gotchas and Important Notes
- Build process may fail due to CSS issues (recent commit fixed CSS errors)
- Recent merge resolved some bug fixes and CI pipeline additions
- Uses modern React with JSX Transform (no React import needed in components)
- Vite handles hot reloading in development mode
- Project uses git for version control, with recent commits focusing on CSS fixes and CI setup

## Common Patterns
- Header/navigation components use flex layouts
- Hero sections often use full-width backgrounds
- Feature lists use grid layouts with responsive columns
- Cards and sections use consistent padding/margin spacing

## Recent Changes
- Fixed CSS errors (commit e6635edf)
- Moved App.css to src directory (commit 3de668ce)
- Added CI/CD pipeline and removed node_modules from tracking
- File structure refined with documentation files (QUICK_SETUP.md, CI_SETUP.md, structure.txt)