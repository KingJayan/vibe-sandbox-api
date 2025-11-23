import { VibePreset, EffectGenerator } from './types';
import { presets } from '../presets';

const customPresets: Record<string, VibePreset> = {};
const customEffects: Record<string, EffectGenerator> = {};

export function registerPreset(name: string, preset: VibePreset): void {
  customPresets[name] = preset;
}

export function registerEffect(name: string, generator: EffectGenerator): void {
  customEffects[name] = generator;
}

export function getPreset(name: string): VibePreset | undefined {
  return customPresets[name] || presets[name];
}

export function getEffect(name: string): EffectGenerator | undefined {
  return customEffects[name];
}

export function getAllPresets(): Record<string, VibePreset> {
  return { ...presets, ...customPresets };
}

export function getAllEffects(): Record<string, EffectGenerator> {
  return { ...customEffects };
}
