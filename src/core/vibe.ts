import { VibeConfig, VibeTheme, VibePreset } from './types';
import { getPreset, getEffect } from './registry';

class VibeThemeImpl implements VibeTheme {
  colors;
  gradients;
  shadows;
  motion;
  particles;

  constructor(preset: VibePreset, intensity: number = 1.0, animation: boolean = true) {
    this.colors = { ...preset.colors };
    this.gradients = { ...preset.gradients };
    this.shadows = { ...preset.shadows };
    this.motion = { ...preset.motion };
    this.particles = preset.particles ? { ...preset.particles } : undefined;

    if (!animation) {
      this.motion = {
        duration: {
          fast: '0s',
          normal: '0s',
          slow: '0s',
        },
        easing: {
          default: 'linear',
          in: 'linear',
          out: 'linear',
          inOut: 'linear',
        },
      };
      if (this.particles) {
        this.particles.enabled = false;
      }
    }

    if (intensity !== 1.0 && this.particles) {
      this.particles.count = Math.round((this.particles.count || 50) * intensity);
      this.particles.opacity = Math.min(1, (this.particles.opacity || 0.5) * intensity);
    }
  }

  applyEffect(effectName: string, ...args: any[]): VibeTheme {
    const effect = getEffect(effectName);
    if (!effect) {
      throw new Error(`Effect "${effectName}" not found. Please register it first using registerEffect().`);
    }
    effect(this, ...args);
    return this;
  }

  toCSS(): string {
    let css = ':root {\n';

    css += `  --vibe-bg: ${this.colors.background};\n`;
    css += `  --vibe-bg-alt: ${this.colors.backgroundAlt};\n`;
    css += `  --vibe-text: ${this.colors.text};\n`;
    css += `  --vibe-text-secondary: ${this.colors.textSecondary};\n`;
    css += `  --vibe-accent: ${this.colors.accent};\n`;
    if (this.colors.accentSecondary) {
      css += `  --vibe-accent-secondary: ${this.colors.accentSecondary};\n`;
    }

    css += `  --vibe-gradient-primary: ${this.gradients.primary};\n`;
    if (this.gradients.secondary) {
      css += `  --vibe-gradient-secondary: ${this.gradients.secondary};\n`;
    }
    if (this.gradients.radial) {
      css += `  --vibe-gradient-radial: ${this.gradients.radial};\n`;
    }

    css += `  --vibe-shadow-sm: ${this.shadows.sm};\n`;
    css += `  --vibe-shadow-md: ${this.shadows.md};\n`;
    css += `  --vibe-shadow-lg: ${this.shadows.lg};\n`;
    if (this.shadows.glow) {
      css += `  --vibe-shadow-glow: ${this.shadows.glow};\n`;
    }

    css += `  --vibe-duration-fast: ${this.motion.duration.fast};\n`;
    css += `  --vibe-duration-normal: ${this.motion.duration.normal};\n`;
    css += `  --vibe-duration-slow: ${this.motion.duration.slow};\n`;

    css += `  --vibe-easing-default: ${this.motion.easing.default};\n`;
    css += `  --vibe-easing-in: ${this.motion.easing.in};\n`;
    css += `  --vibe-easing-out: ${this.motion.easing.out};\n`;
    css += `  --vibe-easing-in-out: ${this.motion.easing.inOut};\n`;

    if (this.motion.spring) {
      css += `  --vibe-spring-stiffness: ${this.motion.spring.stiffness};\n`;
      css += `  --vibe-spring-damping: ${this.motion.spring.damping};\n`;
    }

    css += '}\n';
    return css;
  }
}

export function createVibe(config: VibeConfig = {}): VibeTheme {
  const { preset = 'cosmic', intensity = 1.0, animation = true, effects = [] } = config;

  const presetData = getPreset(preset);
  if (!presetData) {
    throw new Error(`Preset "${preset}" not found. Available presets: cosmic, soft-neon, retro-terminal`);
  }

  const theme = new VibeThemeImpl(presetData, intensity, animation);

  for (const effectName of effects) {
    theme.applyEffect(effectName);
  }

  return theme;
}
