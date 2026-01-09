# SteelFlow Website

> Showcase website for [SteelFlow MRP](https://github.com/meistro57/SteelFlow-MRP) - A modern, open-source Material Requirements Planning system for steel fabrication shops.

## 🎨 Features

- **3D Interactive Hero** - Three.js steel beam with floating UI elements
- **Industrial Design System** - Authentic steel fabrication aesthetic
- **Smooth Animations** - Framer Motion scroll-triggered effects
- **Responsive Design** - Desktop, tablet, and mobile optimized
- **Performance Optimized** - Vite for lightning-fast dev and builds

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/meistro57/steelflow-website.git
cd steelflow-website

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:3000`

## 📦 Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

## 🎨 Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| **Forge Orange** | `#FF6B35` | Primary actions, hot states |
| **Weld Blue** | `#4A90E2` | Info, links, active states |
| **Plasma Purple** | `#9B59B6` | Accents, special states |
| **Steel Gray** | `#2C3E50` | Structural elements |
| **Carbon Black** | `#1A1A1A` | Backgrounds |

### Typography

- **Display**: Rajdhani (headings, labels)
- **Technical**: JetBrains Mono (codes, data)
- **Body**: Inter (content)

## 🏗️ Project Structure

```
steelflow-website/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Hero.jsx
│   │   ├── Navigation.jsx
│   │   ├── WhyItMatters.jsx
│   │   ├── DesignSystem.jsx
│   │   ├── Features.jsx
│   │   ├── Architecture.jsx
│   │   └── GetInvolved.jsx
│   ├── App.jsx          # Main app component
│   ├── App.css          # Additional styles
│   ├── index.css        # Tailwind + custom styles
│   └── main.jsx         # Entry point
├── index.html           # HTML template
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── package.json
```

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Icons**: Lucide React

## 📝 Development

### Adding New Sections

1. Create component in `src/components/`
2. Import and add to `src/App.jsx`
3. Add navigation link in `src/components/Navigation.jsx`

### Customizing Colors

Edit `tailwind.config.js` to modify the industrial color palette:

```js
colors: {
  forge: { DEFAULT: '#FF6B35', ... },
  weld: { DEFAULT: '#4A90E2', ... },
  // ... more colors
}
```

### Custom Animations

Add keyframes in `tailwind.config.js` under `theme.extend.keyframes`.

## 🚢 Deployment

### GitHub Pages

```bash
npm run build
# Deploy the 'dist' folder to GitHub Pages
```

### Vercel / Netlify

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [SteelFlow MRP Repository](https://github.com/meistro57/SteelFlow-MRP)
- [SteelFlow Documentation](https://github.com/meistro57/SteelFlow-MRP#readme)
- [Report Issues](https://github.com/meistro57/steelflow-website/issues)

## 📧 Contact

Mark - Creator of SteelFlow MRP

---

Built with ⚙️ by the SteelFlow community
