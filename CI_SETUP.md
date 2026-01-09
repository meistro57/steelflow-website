# CI/CD & Quality Checks Setup Guide

Your repo now has automated testing and quality checks! 🎉

## What's Included

### 1. GitHub Actions CI Pipeline
**Location**: `.github/workflows/ci.yml`

Runs on every push and pull request:
- ✅ **Lint Check** - Ensures code follows style guidelines
- ✅ **Build Test** - Verifies production build works
- ✅ **Security Audit** - Checks for vulnerable dependencies
- ✅ **File Structure** - Validates all required files exist

### 2. Code Quality Tools

**ESLint** - Code linting
```bash
npm run lint          # Check for issues
npm run lint:fix      # Auto-fix issues
```

**Prettier** - Code formatting
```bash
npm run format        # Format all files
npm run format:check  # Check if files are formatted
```

**Validation** - Run all checks
```bash
npm run validate      # Lint + Format + Build
```

### 3. GitHub Templates

- **Pull Request Template** - Ensures PRs have proper info
- **Issue Templates** - Bug reports and feature requests
- **Contributing Guide** - How to contribute

## Setup Instructions

### 1. Copy Files to Your Repo

```bash
cd ~/steelflow-website

# Copy the new files
# .github/workflows/ci.yml
# .github/PULL_REQUEST_TEMPLATE.md
# .github/ISSUE_TEMPLATE/*.md
# .prettierrc
# .prettierignore
# CONTRIBUTING.md
# package.json (updated with new scripts)
```

### 2. Install New Dependencies

```bash
npm install --save-dev prettier
```

### 3. Commit and Push

```bash
git add .
git commit -m "feat: add CI/CD pipeline and quality checks"
git push
```

### 4. Verify CI is Working

1. Go to your repo: https://github.com/meistro57/steelflow-website
2. Click "Actions" tab
3. You should see your workflow running
4. All checks should pass ✅

## Using the CI/CD Pipeline

### Before Every Commit

```bash
# Run validation locally
npm run validate

# If it passes, commit
git add .
git commit -m "your message"
git push
```

### Creating a Pull Request

1. Create a feature branch: `git checkout -b feature/my-feature`
2. Make your changes
3. Run `npm run validate` - must pass!
4. Commit and push
5. Open a PR on GitHub
6. CI will automatically run
7. All checks must pass before merging

### Status Badges (Optional)

Add this to your README.md to show CI status:

```markdown
![CI Status](https://github.com/meistro57/steelflow-website/actions/workflows/ci.yml/badge.svg)
```

## CI Workflow Details

### Lint Job
- Runs ESLint on all JS/JSX files
- Fails if there are any errors
- Reports warnings but doesn't fail

### Build Job
- Installs dependencies with `npm ci` (faster, more reliable)
- Runs production build: `npm run build`
- Verifies `dist/` folder was created
- Uploads build artifacts (available for 7 days)

### Security Job
- Runs `npm audit` to check for vulnerabilities
- Warns about moderate+ severity issues
- Continues even if vulnerabilities found (won't block merge)

### Structure Job
- Validates all required files exist:
  - Root: package.json, vite.config.js, tailwind.config.js, index.html
  - Source: main.jsx, App.jsx, App.css, index.css
  - Components: Hero.jsx, Navigation.jsx, etc.

### Status Job
- Runs after all other jobs
- Provides overall pass/fail summary
- This is what shows the ✅ or ❌ on your PR

## Troubleshooting

### CI Fails but works locally?
- Make sure you committed all files
- Run `npm ci` instead of `npm install` locally
- Check the Actions tab for detailed error logs

### Lint errors?
```bash
npm run lint:fix
```

### Build fails?
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Want to skip CI for a commit?
```bash
git commit -m "docs: update README [skip ci]"
```

## Advanced: Branch Protection

Want to enforce CI checks? Set up branch protection:

1. Go to: Settings → Branches
2. Add rule for `main` branch
3. Enable:
   - ☑️ Require status checks to pass
   - ☑️ Require branches to be up to date
   - Select: `CI Status`
4. Save

Now nobody (including you!) can merge without passing CI! 🔒

## Next Steps

- [ ] Copy files to your repo
- [ ] Install Prettier: `npm install -D prettier`
- [ ] Commit and push
- [ ] Verify CI runs successfully
- [ ] (Optional) Add CI badge to README
- [ ] (Optional) Enable branch protection

Your code quality is now automated! 🚀
