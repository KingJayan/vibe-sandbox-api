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

## Presets

- **cosmic**: Deep blues, purples, star/particle settings, soft glow
- **soft-neon**: Neon accents, dark base, slight pulsing animations
- **retro-terminal**: Green/amber monochrome palette, scanline effect configs

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

## License

MIT
