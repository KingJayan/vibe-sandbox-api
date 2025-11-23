# vibe-sandbox

A framework-agnostic TypeScript library for generating aesthetic UI themes, animations, and style presets based on simple "vibe" configurations.

## Installation

```bash
npm install vibe-sandbox
```

## Quick Start

```typescript
import { createVibe, registerEffect } from 'vibe-sandbox';

// Create a theme with the cosmic preset
const vibe = createVibe({ preset: 'cosmic' });

// Use directly in JavaScript
element.style.background = vibe.gradients.primary;

// Or generate CSS variables
const cssVars = vibe.toCSS();
// Inject into a <style> tag or export

// Register and apply custom effects
registerEffect('darken', (theme) => {
  theme.colors.background = '#000000';
});

const darkVibe = createVibe({ preset: 'cosmic', effects: ['darken'] });
```

## Presets (15 Total)

### Futuristic
- **cosmic**: Deep blues and purples with soft glowing effects
- **soft-neon**: Neon accents on dark backgrounds with pulsing energy
- **cyberpunk**: High-tech dystopian with electric cyan and hot pink
- **synthwave**: Retro-futuristic 80s aesthetic with pink and purple gradients

### Minimalist
- **brutalist**: Bold, stark design with hard shadows and primary colors
- **glassmorphism**: Frosted glass effect with soft transparency

### Organic / Nature
- **pastel-dream**: Soft pastel colors creating a dreamy atmosphere
- **forest-canopy**: Deep forest greens evoking natural tranquility
- **desert-sunset**: Warm desert tones with sunset orange and terracotta
- **nature-zen**: Calming nature-inspired palette for wellness

### Retro
- **retro-terminal**: Classic green terminal aesthetic
- **arcade**: Classic arcade game aesthetic with bright primary colors
- **vaporwave**: 90s internet aesthetic with pink, cyan, and purple

### Professional
- **mocha-mousse**: Pantone 2025 Color of the Year - warm, comforting mocha tones
- **midnight-ocean**: Deep ocean blues for professional interfaces

[View all preset details with categories and tags →](./docs/api.md#presets)

## Features

- 🎨 Beautiful preset themes
- ⚡ Framework-agnostic (works with React, Vue, Svelte, vanilla JS)
- 🔧 Extensible plugin system (custom presets & effects)
- 📦 ESM + CJS builds
- 💪 Full TypeScript support
- 🎬 Animation utilities included
- 🎨 CSS variable output for easy integration
- 🔌 Runtime theme modification with effects

## Documentation

See the [docs](./docs) folder for detailed documentation:
- [Overview](./docs/overview.md)
- [API Reference](./docs/api.md)
- [Framework Examples](./docs/framework-examples.md) - React, Next.js, Vue, and Svelte integration guides

## License

MIT
