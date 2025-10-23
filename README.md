# 🎮 Tic-Tac-Toe Game

A beautiful, optimized React Tic-Tac-Toe game with modern design and accessibility features.

![Tic-Tac-Toe Game](https://img.shields.io/badge/React-19.2.0-blue?logo=react)
![Version](https://img.shields.io/badge/version-1.0.0-green)
![License](https://img.shields.io/badge/license-MIT-blue)

## ✨ Features

- 🎨 **Beautiful Modern Design** - Gradient backgrounds, smooth animations, and responsive layout
- 🚀 **Optimized Performance** - Uses React hooks like `useMemo` and `useCallback` for optimal rendering
- ♿ **Full Accessibility** - ARIA labels, keyboard navigation, and screen reader support
- 🎯 **Game Features** - Win detection, tie detection, and play again functionality
- 📱 **Responsive** - Works perfectly on desktop and mobile devices
- 🐳 **Docker Ready** - Optimized Dockerfile for easy deployment

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Open http://localhost:3000
```

### Production Build

```bash
# Create production build
npm run build

# Serve locally
npm run analyze
```

### Docker Deployment

```bash
# Build image
docker build -t tic-tac-toe .

# Run container
docker run -p 80:80 tic-tac-toe
```

## 🏗️ Project Structure

```
src/
├── App.js          # Main game component with optimized React hooks
├── index.js        # React app entry point
└── styles.css      # Modern CSS with custom properties and animations
```

## 🎨 Technical Highlights

### Performance Optimizations

- **Memoized Components**: Square components are optimized to prevent unnecessary re-renders
- **Calculated Values**: Winner detection and game status are memoized with `useMemo`
- **Callback Optimization**: Click handlers use `useCallback` for stable references
- **CSS Custom Properties**: Variables for consistent theming and easy maintenance

### Accessibility Features

- **ARIA Labels**: Descriptive labels for screen readers
- **Keyboard Navigation**: Full keyboard support with Enter/Space keys
- **Focus Management**: Proper tab order and focus indicators
- **Semantic HTML**: Proper button elements with disabled states

### Modern CSS

- **CSS Variables**: Centralized theming system
- **Animations**: Smooth transitions and engaging micro-interactions
- **Responsive Design**: Mobile-first approach with breakpoints
- **Performance**: GPU-accelerated transforms and optimized selectors

## 🐳 Docker Features

- **Multi-stage Build**: Optimized for production with minimal image size
- **Security**: Non-root user, security headers, and updated base images
- **Performance**: Gzip compression, static asset caching, and health checks
- **Nginx Configuration**: Optimized for SPA routing and caching

## 📋 Available Scripts

- `npm start` - Start development server
- `npm run build` - Create production build
- `npm test` - Run test suite
- `npm run lint` - Run ESLint with auto-fix
- `npm run format` - Format code with Prettier
- `npm run analyze` - Build and serve for analysis

## 🔧 Configuration Files

- **ESLint**: `.eslintrc.json` - Code quality rules
- **Prettier**: `.prettierrc` - Code formatting
- **Docker**: `Dockerfile` + `.dockerignore` - Containerization
- **Git**: `.gitignore` - Version control exclusions

## 🎮 How to Play

1. Players take turns clicking empty squares
2. X goes first, then O
3. Get three in a row (horizontal, vertical, or diagonal) to win
4. Game detects ties automatically
5. Click "Play Again" to start a new game

## 🚀 Deployment

This app is optimized for deployment on:

- **Dokploy** - Use the included Dockerfile
- **Netlify** - Connect your Git repo for automatic deploys
- **Vercel** - Zero-config deployment for React apps
- **Any Docker Platform** - Use the production-ready container

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `npm run lint` and `npm run format`
5. Submit a pull request

## 📄 License

MIT License - feel free to use this project for learning or your own applications!

---

**Built with ❤️ using React 19 and modern web technologies**
