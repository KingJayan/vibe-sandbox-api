import { VibePreset, EffectGenerator } from './types';
import { presets, presetMetadata, PresetMetadata } from '../presets';

const customPresets: Record<string, VibePreset> = {};
const customEffects: Record<string, EffectGenerator> = {};
const customMetadata: Record<string, PresetMetadata> = {};

export function registerPreset(name: string, preset: VibePreset, metadata?: PresetMetadata): void {
  customPresets[name] = preset;
  if (metadata) {
    customMetadata[name] = metadata;
  }
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

export function getPresetMetadata(name: string): PresetMetadata | undefined {
  return customMetadata[name] || presetMetadata[name];
}

export function listPresets(filter?: { category?: string; tag?: string }): Array<{ name: string; preset: VibePreset; metadata?: PresetMetadata }> {
  const allPresets = getAllPresets();
  const allMetadata = { ...presetMetadata, ...customMetadata };
  
  let presetList = Object.entries(allPresets).map(([name, preset]) => ({
    name,
    preset,
    metadata: allMetadata[name],
  }));

  if (filter?.category) {
    presetList = presetList.filter(p => p.metadata?.category === filter.category);
  }

  if (filter?.tag) {
    presetList = presetList.filter(p => p.metadata?.tags?.includes(filter.tag!));
  }

  return presetList;
}

export type { PresetMetadata } from '../presets';
