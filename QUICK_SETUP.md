# 🚀 Quick Setup Guide

## Step 1: Copy Files to Your Repo

```bash
# Navigate to your cloned repo
cd /path/to/steelflow-website

# Copy all files from the generated project
# (Copy everything from the steelflow-website folder you downloaded)
```

## Step 2: Install Dependencies

```bash
npm install
```

This will install:
- React 18.3.1
- Three.js & React Three Fiber (for 3D steel beam)
- Framer Motion (for animations)
- Tailwind CSS (for styling)
- Lucide React (for icons)
- And all other dependencies

## Step 3: Run Development Server

```bash
npm run dev
```

The site will open automatically at `http://localhost:3000`

## Step 4: Make Your Changes

### Key Files to Customize:

1. **Colors** → `tailwind.config.js`
2. **Content** → `src/components/*.jsx`
3. **Fonts** → `index.html` (Google Fonts)
4. **3D Beam** → `src/components/Hero.jsx` (SteelBeam component)

## Step 5: Build for Production

```bash
npm run build
```

Output goes to `dist/` folder.

## Step 6: Deploy

### Option A: GitHub Pages
1. Push to GitHub
2. Go to Settings → Pages
3. Set source to `gh-pages` branch (or use GitHub Actions)

### Option B: Vercel (Recommended - Easiest)
1. Push to GitHub
2. Go to https://vercel.com
3. Import your repo
4. Vercel auto-detects Vite and deploys
5. Your site is live at `your-project.vercel.app`

### Option C: Netlify
1. Push to GitHub
2. Go to https://netlify.com
3. Import your repo
4. Build command: `npm run build`
5. Publish directory: `dist`

## 🎨 Customization Tips

### Change Colors
In `tailwind.config.js`, edit the color values:
```js
forge: { DEFAULT: '#FF6B35', ... }
```

### Add New Sections
1. Create component in `src/components/YourSection.jsx`
2. Import in `src/App.jsx`
3. Add to navigation in `src/components/Navigation.jsx`

### Modify 3D Beam
Edit `src/components/Hero.jsx` → `SteelBeam` component
- Change geometry (boxGeometry dimensions)
- Modify materials (color, metalness, roughness)
- Add more shapes

### Change Animations
Edit Framer Motion props:
```jsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
```

## 🐛 Troubleshooting

### Port already in use
```bash
npm run dev -- --port 3001
```

### Build errors
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Three.js errors
Make sure all @react-three packages are compatible versions.

## 📚 Useful Commands

```bash
npm run dev       # Start dev server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

## 🎯 Next Steps

1. ✅ Get the site running locally
2. 🎨 Customize colors and content
3. 📸 Add screenshots from SteelFlow MRP
4. 🚀 Deploy to Vercel/Netlify
5. 🔗 Update domain to steelflowmrp.com

## Need Help?

- Check the main README.md for detailed docs
- React Three Fiber docs: https://docs.pmnd.rs/react-three-fiber
- Framer Motion docs: https://www.framer.com/motion
- Tailwind CSS docs: https://tailwindcss.com/docs

---

Ready to build something jaw-dropping! 🔥
