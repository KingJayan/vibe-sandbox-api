import { describe, it, expect } from 'vitest';
import { createVibe, listPresets, getPresetMetadata, presetMetadata } from '../src';

describe('All Presets', () => {
  const allPresetNames = [
    'cosmic', 'soft-neon', 'retro-terminal',
    'cyberpunk', 'synthwave', 'brutalist', 'glassmorphism',
    'pastel-dream', 'forest-canopy', 'desert-sunset',
    'arcade', 'vaporwave', 'mocha-mousse', 'nature-zen', 'midnight-ocean'
  ];

  it('should have 15 total presets', () => {
    expect(allPresetNames.length).toBe(15);
  });

  allPresetNames.forEach(presetName => {
    describe(`Preset: ${presetName}`, () => {
      it(`should create ${presetName} theme successfully`, () => {
        const vibe = createVibe({ preset: presetName });
        expect(vibe).toBeDefined();
        expect(vibe.colors).toBeDefined();
        expect(vibe.gradients).toBeDefined();
        expect(vibe.shadows).toBeDefined();
        expect(vibe.motion).toBeDefined();
      });

      it(`should have all required color properties for ${presetName}`, () => {
        const vibe = createVibe({ preset: presetName });
        expect(vibe.colors.background).toBeDefined();
        expect(vibe.colors.backgroundAlt).toBeDefined();
        expect(vibe.colors.text).toBeDefined();
        expect(vibe.colors.textSecondary).toBeDefined();
        expect(vibe.colors.accent).toBeDefined();
      });

      it(`should generate valid CSS for ${presetName}`, () => {
        const vibe = createVibe({ preset: presetName });
        const css = vibe.toCSS();
        expect(css).toContain(':root {');
        expect(css).toContain('--vibe-bg:');
        expect(css).toContain('--vibe-text:');
        expect(css).toContain('--vibe-accent:');
      });

      it(`should have metadata for ${presetName}`, () => {
        const metadata = getPresetMetadata(presetName);
        expect(metadata).toBeDefined();
        expect(metadata?.name).toBeDefined();
        expect(metadata?.category).toBeDefined();
        expect(metadata?.tags).toBeDefined();
        expect(metadata?.description).toBeDefined();
      });
    });
  });
});

describe('Preset Metadata System', () => {
  it('should have metadata for all presets', () => {
    expect(Object.keys(presetMetadata).length).toBe(15);
  });

  it('should list all presets', () => {
    const presets = listPresets();
    expect(presets.length).toBe(15);
    expect(presets[0]).toHaveProperty('name');
    expect(presets[0]).toHaveProperty('preset');
    expect(presets[0]).toHaveProperty('metadata');
  });

  it('should filter presets by category', () => {
    const futuristicPresets = listPresets({ category: 'futuristic' });
    expect(futuristicPresets.length).toBeGreaterThan(0);
    futuristicPresets.forEach(p => {
      expect(p.metadata?.category).toBe('futuristic');
    });
  });

  it('should filter presets by tag', () => {
    const darkPresets = listPresets({ tag: 'dark' });
    expect(darkPresets.length).toBeGreaterThan(0);
    darkPresets.forEach(p => {
      expect(p.metadata?.tags).toContain('dark');
    });
  });

  it('should have correct categories', () => {
    const categories = new Set(Object.values(presetMetadata).map(m => m.category));
    expect(categories).toContain('futuristic');
    expect(categories).toContain('minimalist');
    expect(categories).toContain('organic');
    expect(categories).toContain('retro');
    expect(categories).toContain('professional');
  });
});

describe('Preset Variations', () => {
  it('should support intensity parameter', () => {
    const vibe1 = createVibe({ preset: 'cosmic', intensity: 0.5 });
    const vibe2 = createVibe({ preset: 'cosmic', intensity: 2.0 });
    
    if (vibe1.particles && vibe2.particles) {
      expect(vibe1.particles.count).toBeLessThan(vibe2.particles.count!);
    }
  });

  it('should support animation toggle', () => {
    const animated = createVibe({ preset: 'synthwave', animation: true });
    const noAnimation = createVibe({ preset: 'synthwave', animation: false });
    
    expect(animated.motion.duration.normal).not.toBe('0s');
    expect(noAnimation.motion.duration.normal).toBe('0s');
  });
});
