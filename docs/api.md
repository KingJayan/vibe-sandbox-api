# Vibe Sandbox - API Documentation

## Core Functions

### `createVibe(config?: VibeConfig): VibeTheme`

Creates a new vibe theme based on the provided configuration.

**Parameters:**
- `config.preset?`: Preset name (`'cosmic'` | `'soft-neon'` | `'retro-terminal'`)
- `config.intensity?`: Intensity multiplier (default: `1.0`)
- `config.animation?`: Enable animations (default: `true`)
- `config.effects?`: Array of effect names to apply (default: `[]`)

**Returns:** `VibeTheme` object with colors, gradients, shadows, motion, and particles.

**Example:**
```typescript
const vibe = createVibe({
  preset: 'cosmic',
  intensity: 1.5,
  effects: ['darken', 'glow']
});
```

### `registerPreset(name: string, preset: VibePreset): void`

Register a custom preset.

### `registerEffect(name: string, generator: EffectGenerator): void`

Register a custom effect generator that can modify themes.

**Parameters:**
- `name`: Unique effect identifier
- `generator`: Function that receives `(theme: VibeTheme, ...args: any[]) => void`

**Example:**
```typescript
registerEffect('darken', (theme) => {
  theme.colors.background = '#000000';
  theme.colors.backgroundAlt = '#111111';
});

registerEffect('tint', (theme, color: string) => {
  theme.colors.accent = color;
});
```

## Types

### `VibeTheme`

The main theme object with the following properties:
- `colors`: Color palette
- `gradients`: Gradient definitions
- `shadows`: Shadow styles
- `motion`: Animation timing and easing
- `particles`: Particle configuration (optional)
- `toCSS()`: Generate CSS variables
- `applyEffect(effectName: string, ...args: any[]): VibeTheme`: Apply a registered effect to the theme

**Example:**
```typescript
const vibe = createVibe({ preset: 'cosmic' });

// Apply effect with method
vibe.applyEffect('darken');

// Apply effect with arguments
vibe.applyEffect('tint', '#00ff00');

// Chain multiple effects
vibe.applyEffect('darken').applyEffect('glow');
```

## Animation Utilities

### `easingFunctions`

Pre-defined easing function values for CSS animations.

### `generateKeyframes(config: KeyframeConfig): string`

Generate CSS keyframe animation strings.

### `motionStyle(motion, animationEnabled?): object`

Generate motion style object for inline use.

## Presets

Vibe Sandbox includes 15 beautifully crafted presets across 5 categories:

### Futuristic (4 presets)
- `cosmic` - Deep blues and purples with soft glowing effects
- `soft-neon` - Neon accents on dark backgrounds with pulsing energy
- `cyberpunk` - High-tech dystopian with electric cyan and hot pink
- `synthwave` - Retro-futuristic 80s aesthetic with pink and purple gradients

### Minimalist (2 presets)
- `brutalist` - Bold, stark design with hard shadows and primary colors
- `glassmorphism` - Frosted glass effect with soft transparency

### Organic / Nature (4 presets)
- `pastel-dream` - Soft pastel colors creating a dreamy atmosphere
- `forest-canopy` - Deep forest greens evoking natural tranquility
- `desert-sunset` - Warm desert tones with sunset orange and terracotta
- `nature-zen` - Calming nature-inspired palette for wellness

### Retro (3 presets)
- `retro-terminal` - Classic green terminal aesthetic
- `arcade` - Classic arcade game aesthetic with bright primary colors
- `vaporwave` - 90s internet aesthetic with pink, cyan, and purple

### Professional (2 presets)
- `mocha-mousse` - Pantone 2025 Color of the Year - warm, comforting mocha tones
- `midnight-ocean` - Deep ocean blues for professional interfaces

### Filtering Presets

```typescript
import { listPresets } from 'vibe-sandbox';

// Get all presets
const all = listPresets();

// Filter by category
const futuristic = listPresets({ category: 'futuristic' });

// Filter by tag
const darkThemes = listPresets({ tag: 'dark' });
```

## Complete Examples

### Basic Usage
```typescript
import { createVibe } from 'vibe-sandbox';

const vibe = createVibe({ preset: 'cosmic' });
console.log(vibe.colors.accent); // '#8b5cf6'
```

### Custom Effects
```typescript
import { createVibe, registerEffect } from 'vibe-sandbox';

// Register an effect
registerEffect('sepia', (theme) => {
  theme.colors.background = '#f4ecd8';
  theme.colors.text = '#704214';
});

// Apply via config
const vibe1 = createVibe({ preset: 'cosmic', effects: ['sepia'] });

// Or apply directly
const vibe2 = createVibe({ preset: 'cosmic' });
vibe2.applyEffect('sepia');
```

### CSS Integration
```typescript
import { createVibe } from 'vibe-sandbox';

const vibe = createVibe({ preset: 'soft-neon' });

// Generate and inject CSS
const style = document.createElement('style');
style.textContent = vibe.toCSS();
document.head.appendChild(style);

// Now use CSS variables in your styles
// var(--vibe-bg), var(--vibe-accent), etc.
```
