import { describe, it, expect } from 'vitest';
import { createVibe, registerPreset, registerEffect, getPreset, getAllPresets } from '../src';
import type { VibePreset, VibeTheme } from '../src';

describe('createVibe', () => {
  it('should create a theme with default cosmic preset', () => {
    const vibe = createVibe();
    expect(vibe.colors).toBeDefined();
    expect(vibe.gradients).toBeDefined();
    expect(vibe.shadows).toBeDefined();
    expect(vibe.motion).toBeDefined();
  });

  it('should create a theme with soft-neon preset', () => {
    const vibe = createVibe({ preset: 'soft-neon' });
    expect(vibe.colors.accent).toBe('#ff2e97');
    expect(vibe.colors.background).toBe('#0f0f23');
  });

  it('should create a theme with retro-terminal preset', () => {
    const vibe = createVibe({ preset: 'retro-terminal' });
    expect(vibe.colors.text).toBe('#33ff33');
    expect(vibe.colors.background).toBe('#000000');
  });

  it('should disable animations when animation is false', () => {
    const vibe = createVibe({ preset: 'cosmic', animation: false });
    expect(vibe.motion.duration.normal).toBe('0s');
    expect(vibe.motion.duration.fast).toBe('0s');
    expect(vibe.motion.duration.slow).toBe('0s');
  });

  it('should adjust particle count based on intensity', () => {
    const vibe = createVibe({ preset: 'cosmic', intensity: 2.0 });
    expect(vibe.particles?.count).toBeGreaterThan(100);
  });

  it('should throw error for unknown preset', () => {
    expect(() => createVibe({ preset: 'unknown' })).toThrow();
  });
});

describe('CSS generation', () => {
  it('should generate CSS variables', () => {
    const vibe = createVibe({ preset: 'cosmic' });
    const css = vibe.toCSS();
    expect(css).toContain(':root {');
    expect(css).toContain('--vibe-bg:');
    expect(css).toContain('--vibe-text:');
    expect(css).toContain('--vibe-accent:');
    expect(css).toContain('--vibe-gradient-primary:');
    expect(css).toContain('--vibe-shadow-sm:');
    expect(css).toContain('--vibe-duration-normal:');
    expect(css).toContain('--vibe-easing-default:');
  });

  it('should include optional variables when present', () => {
    const vibe = createVibe({ preset: 'cosmic' });
    const css = vibe.toCSS();
    expect(css).toContain('--vibe-shadow-glow:');
    expect(css).toContain('--vibe-spring-stiffness:');
  });
});

describe('Plugin system', () => {
  it('should register custom preset', () => {
    const customPreset: VibePreset = {
      colors: {
        background: '#ffffff',
        backgroundAlt: '#f0f0f0',
        text: '#000000',
        textSecondary: '#666666',
        accent: '#ff0000',
      },
      gradients: {
        primary: 'linear-gradient(to right, #ff0000, #00ff00)',
      },
      shadows: {
        sm: '0 2px 4px rgba(0,0,0,0.1)',
        md: '0 4px 8px rgba(0,0,0,0.2)',
        lg: '0 8px 16px rgba(0,0,0,0.3)',
      },
      motion: {
        duration: {
          fast: '0.1s',
          normal: '0.2s',
          slow: '0.4s',
        },
        easing: {
          default: 'ease',
          in: 'ease-in',
          out: 'ease-out',
          inOut: 'ease-in-out',
        },
      },
    };

    registerPreset('custom', customPreset);
    const retrievedPreset = getPreset('custom');
    expect(retrievedPreset).toBeDefined();
    expect(retrievedPreset?.colors.accent).toBe('#ff0000');

    const vibe = createVibe({ preset: 'custom' });
    expect(vibe.colors.accent).toBe('#ff0000');
  });

  it('should list all presets including built-in ones', () => {
    const allPresets = getAllPresets();
    expect(allPresets).toHaveProperty('cosmic');
    expect(allPresets).toHaveProperty('soft-neon');
    expect(allPresets).toHaveProperty('retro-terminal');
  });

  it('should register and apply custom effect', () => {
    registerEffect('darken', (theme: VibeTheme) => {
      theme.colors.background = '#000000';
      theme.colors.backgroundAlt = '#111111';
    });

    const vibe = createVibe({ preset: 'cosmic' });
    vibe.applyEffect('darken');

    expect(vibe.colors.background).toBe('#000000');
    expect(vibe.colors.backgroundAlt).toBe('#111111');
  });

  it('should apply effects through config', () => {
    registerEffect('brighten', (theme: VibeTheme) => {
      theme.colors.background = '#ffffff';
    });

    const vibe = createVibe({ preset: 'cosmic', effects: ['brighten'] });
    expect(vibe.colors.background).toBe('#ffffff');
  });

  it('should throw error for unknown effect', () => {
    const vibe = createVibe({ preset: 'cosmic' });
    expect(() => vibe.applyEffect('nonexistent')).toThrow();
  });

  it('should pass arguments to effect generators', () => {
    registerEffect('tint', (theme: VibeTheme, color: string) => {
      theme.colors.accent = color;
    });

    const vibe = createVibe({ preset: 'cosmic' });
    vibe.applyEffect('tint', '#00ff00');

    expect(vibe.colors.accent).toBe('#00ff00');
  });

  it('should chain multiple effects', () => {
    registerEffect('effect1', (theme: VibeTheme) => {
      theme.colors.text = '#aaaaaa';
    });
    registerEffect('effect2', (theme: VibeTheme) => {
      theme.colors.textSecondary = '#bbbbbb';
    });

    const vibe = createVibe({ preset: 'cosmic', effects: ['effect1', 'effect2'] });
    expect(vibe.colors.text).toBe('#aaaaaa');
    expect(vibe.colors.textSecondary).toBe('#bbbbbb');
  });
});
