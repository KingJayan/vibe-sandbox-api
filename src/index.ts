export { createVibe } from './core/vibe';
export { registerPreset, registerEffect, getPreset, getEffect, getAllPresets, getAllEffects } from './core/registry';
export { easingFunctions, generateKeyframes, builtInKeyframes, motionStyle } from './utils/animations';
export { cosmicPreset, softNeonPreset, retroTerminalPreset, presets } from './presets';
export type {
  VibeConfig,
  VibeTheme,
  VibePreset,
  ColorPalette,
  Gradients,
  Shadows,
  Motion,
  ParticlesConfig,
  EffectGenerator,
} from './core/types';
