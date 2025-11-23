# Vibe Sandbox

## Overview

Vibe Sandbox is a framework-agnostic TypeScript library that generates aesthetic UI themes, animations, and style presets. The library provides a simple API for creating visually appealing color palettes, gradients, shadows, and animation configurations based on preset "vibes" (cosmic, soft-neon, retro-terminal). It outputs both JavaScript objects and CSS variables, making it compatible with any frontend framework or vanilla JavaScript/CSS.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Core Design Pattern

The library follows a **preset-based theme generation** pattern with an extensible plugin architecture:

1. **Preset System**: Pre-defined aesthetic configurations (cosmic, soft-neon, retro-terminal) that define complete theme objects
2. **Registry Pattern**: Centralized storage for presets and effects, allowing runtime registration of custom themes
3. **Effect System**: Composable theme modifiers that can be applied to any theme instance
4. **Immutable Theme Generation**: Each `createVibe()` call produces a new theme instance

**Rationale**: This architecture separates theme definitions from theme generation logic, making the library highly extensible while maintaining type safety.

### Module Structure

```
src/
├── core/           # Core functionality
│   ├── types.ts    # TypeScript interfaces and types
│   ├── vibe.ts     # Main theme generation logic
│   └── registry.ts # Preset and effect registration
├── presets/        # Built-in theme presets
│   ├── cosmic.ts
│   ├── soft-neon.ts
│   └── retro-terminal.ts
└── utils/          # Helper utilities
    └── animations.ts # Easing functions and keyframe generators
```

**Design Decision**: Separation of concerns with distinct modules for types, logic, data, and utilities. This makes the codebase maintainable and allows users to import only what they need.

### Theme Object Architecture

Each `VibeTheme` contains:
- **ColorPalette**: Background, text, and accent colors
- **Gradients**: Linear and radial gradient definitions
- **Shadows**: Box shadow presets including glow effects
- **Motion**: Duration and easing configurations
- **ParticlesConfig**: Optional particle system settings
- **CSS Output**: `toCSS()` method for generating CSS custom properties
- **Effect Application**: `applyEffect()` method for runtime theme modification

**Rationale**: Comprehensive theme objects provide everything needed for consistent UI styling while remaining framework-agnostic.

### Effect System

Effects are registered functions that modify theme objects in-place:

```typescript
registerEffect('darken', (theme) => {
  theme.colors.background = '#000000';
});
```

**Implementation**:
- Effects can be applied via `config.effects` array in `createVibe()`
- Effects can be applied directly via `theme.applyEffect(effectName, ...args)`
- Effects receive the theme instance and can mutate it
- Effects support chaining for composability

**Pros**: 
- Simple, functional approach
- Allows composition of multiple effects
- Type-safe with TypeScript
- Supports runtime theme customization

**Cons**:
- Mutates theme objects (not fully immutable)
- Effect execution order matters

### Build Configuration

**Technology**: tsup (esbuild-based bundler)

**Output Formats**:
- ESM (`dist/index.mjs`)
- CommonJS (`dist/index.cjs`)
- TypeScript declarations (`dist/index.d.ts`)

**Rationale**: Dual ESM/CJS output ensures compatibility with both modern and legacy module systems. tsup provides fast builds with minimal configuration.

### Type System

Full TypeScript coverage with exported interfaces:
- `VibeConfig` - Input configuration
- `VibeTheme` - Output theme object
- `VibePreset` - Preset definition structure
- `EffectGenerator` - Effect function signature

**Rationale**: Strong typing improves developer experience and catches errors at compile time while maintaining flexibility through optional parameters.

### Animation Utilities

Provides:
- 24 pre-defined easing functions (cubic-bezier values)
- `generateKeyframes()` function for creating CSS @keyframes
- `motionStyle()` helper for applying motion configs

**Design Decision**: CSS-based animations rather than JavaScript animation engine. This keeps the library lightweight and leverages browser-native performance.

**Alternative Considered**: JavaScript animation library integration (rejected due to bundle size and framework constraints)

## External Dependencies

### Development Dependencies

- **TypeScript** (^5.3.0): Type system and compilation
- **tsup** (^8.0.0): Build tool for dual ESM/CJS output
- **vitest** (^1.0.0): Testing framework
- **@types/node** (^20.10.0): Node.js type definitions

### Runtime Dependencies

**None** - The library has zero runtime dependencies, making it lightweight and reducing supply chain security concerns.

**Rationale**: Framework-agnostic design means no UI framework dependencies. All functionality is self-contained to minimize bundle size impact on consuming applications.

### Distribution

- **Package Registry**: npm
- **Module Formats**: ESM (primary), CommonJS (compatibility)
- **Entry Points**: Configured via `package.json` exports field for optimal module resolution
- **Type Definitions**: Bundled .d.ts files for TypeScript consumers

## Recent Changes

- **November 23, 2025**: Initial library implementation with complete preset system, animation utilities, and effect plugin architecture
- Fixed effect system to be fully functional (effects can now be applied via config or applyEffect method)
- Added comprehensive test coverage (19 tests passing)
- Updated documentation with effect system API and examples
