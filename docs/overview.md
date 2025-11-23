# Vibe Sandbox - Overview

A framework-agnostic TypeScript library for generating aesthetic UI themes, animations, and style presets.

## Features

- **Preset System**: Pre-built aesthetic themes (cosmic, soft-neon, retro-terminal)
- **Dynamic Theme Generation**: Create custom vibes with intensity and animation controls
- **CSS Variable Output**: Easy integration with any framework or vanilla CSS
- **Animation Utilities**: Easing functions and keyframe generators
- **Plugin System**: Extensible architecture for custom presets and effects
- **TypeScript Support**: Full type definitions included

## Quick Start

```typescript
import { createVibe } from 'vibe-sandbox';

const vibe = createVibe({ preset: 'cosmic' });

// Use directly in JS
element.style.background = vibe.gradients.primary;

// Or inject CSS variables
const style = document.createElement('style');
style.textContent = vibe.toCSS();
document.head.appendChild(style);
```

## Documentation

See [API Documentation](./api.md) for detailed usage instructions.
