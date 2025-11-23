import { VibePreset } from '../core/types';
import { cosmicPreset } from './cosmic';
import { softNeonPreset } from './soft-neon';
import { retroTerminalPreset } from './retro-terminal';
import { cyberpunkPreset } from './cyberpunk';
import { synthwavePreset } from './synthwave';
import { brutalistPreset } from './brutalist';
import { glassmorphismPreset } from './glassmorphism';
import { pastelDreamPreset } from './pastel-dream';
import { forestCanopyPreset } from './forest-canopy';
import { desertSunsetPreset } from './desert-sunset';
import { arcadePreset } from './arcade';
import { vaporwavePreset } from './vaporwave';
import { mochaMoussePreset } from './mocha-mousse';
import { natureZenPreset } from './nature-zen';
import { midnightOceanPreset } from './midnight-ocean';

export interface PresetMetadata {
  name: string;
  category: 'futuristic' | 'minimalist' | 'organic' | 'retro' | 'professional';
  tags: string[];
  description: string;
}

export const presetMetadata: Record<string, PresetMetadata> = {
  cosmic: {
    name: 'Cosmic',
    category: 'futuristic',
    tags: ['dark', 'purple', 'space', 'glow'],
    description: 'Deep blues and purples with soft glowing effects, perfect for space-themed interfaces',
  },
  'soft-neon': {
    name: 'Soft Neon',
    category: 'futuristic',
    tags: ['dark', 'neon', 'vibrant', 'pink'],
    description: 'Neon accents on dark backgrounds with pulsing energy',
  },
  'retro-terminal': {
    name: 'Retro Terminal',
    category: 'retro',
    tags: ['dark', 'green', 'monochrome', 'vintage'],
    description: 'Classic green terminal aesthetic with scanline effects',
  },
  cyberpunk: {
    name: 'Cyberpunk',
    category: 'futuristic',
    tags: ['dark', 'neon', 'cyan', 'pink', 'high-tech'],
    description: 'High-tech dystopian aesthetic with electric cyan and hot pink accents',
  },
  synthwave: {
    name: 'Synthwave',
    category: 'retro',
    tags: ['dark', 'pink', 'purple', '80s', 'retro-futurism'],
    description: 'Retro-futuristic 80s aesthetic with pink and purple gradients',
  },
  brutalist: {
    name: 'Brutalist',
    category: 'minimalist',
    tags: ['light', 'bold', 'stark', 'geometric'],
    description: 'Bold, stark design with hard shadows and primary colors',
  },
  glassmorphism: {
    name: 'Glassmorphism',
    category: 'minimalist',
    tags: ['light', 'transparent', 'frosted', 'modern'],
    description: 'Frosted glass effect with soft transparency and subtle colors',
  },
  'pastel-dream': {
    name: 'Pastel Dream',
    category: 'organic',
    tags: ['light', 'pastel', 'soft', 'dreamy'],
    description: 'Soft pastel colors creating a dreamy, ethereal atmosphere',
  },
  'forest-canopy': {
    name: 'Forest Canopy',
    category: 'organic',
    tags: ['dark', 'green', 'nature', 'calm'],
    description: 'Deep forest greens evoking natural tranquility',
  },
  'desert-sunset': {
    name: 'Desert Sunset',
    category: 'organic',
    tags: ['warm', 'orange', 'sunset', 'earthy'],
    description: 'Warm desert tones with sunset orange and terracotta hues',
  },
  arcade: {
    name: 'Arcade',
    category: 'retro',
    tags: ['bright', 'colorful', 'game', 'playful'],
    description: 'Classic arcade game aesthetic with bright primary colors',
  },
  vaporwave: {
    name: 'Vaporwave',
    category: 'retro',
    tags: ['dark', 'pink', 'cyan', '90s', 'aesthetic'],
    description: '90s internet aesthetic with pink, cyan, and purple gradients',
  },
  'mocha-mousse': {
    name: 'Mocha Mousse',
    category: 'professional',
    tags: ['light', 'warm', 'brown', 'cozy', 'pantone-2025'],
    description: 'Pantone 2025 Color of the Year - warm, comforting mocha and cream tones',
  },
  'nature-zen': {
    name: 'Nature Zen',
    category: 'organic',
    tags: ['light', 'green', 'calm', 'peaceful'],
    description: 'Calming nature-inspired palette for wellness and meditation',
  },
  'midnight-ocean': {
    name: 'Midnight Ocean',
    category: 'professional',
    tags: ['dark', 'blue', 'elegant', 'corporate'],
    description: 'Deep ocean blues for professional and sophisticated interfaces',
  },
};

export const presets: Record<string, VibePreset> = {
  cosmic: cosmicPreset,
  'soft-neon': softNeonPreset,
  'retro-terminal': retroTerminalPreset,
  cyberpunk: cyberpunkPreset,
  synthwave: synthwavePreset,
  brutalist: brutalistPreset,
  glassmorphism: glassmorphismPreset,
  'pastel-dream': pastelDreamPreset,
  'forest-canopy': forestCanopyPreset,
  'desert-sunset': desertSunsetPreset,
  arcade: arcadePreset,
  vaporwave: vaporwavePreset,
  'mocha-mousse': mochaMoussePreset,
  'nature-zen': natureZenPreset,
  'midnight-ocean': midnightOceanPreset,
};

export {
  cosmicPreset,
  softNeonPreset,
  retroTerminalPreset,
  cyberpunkPreset,
  synthwavePreset,
  brutalistPreset,
  glassmorphismPreset,
  pastelDreamPreset,
  forestCanopyPreset,
  desertSunsetPreset,
  arcadePreset,
  vaporwavePreset,
  mochaMoussePreset,
  natureZenPreset,
  midnightOceanPreset,
};
