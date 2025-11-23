import { VibePreset } from '../core/types';
import { cosmicPreset } from './cosmic';
import { softNeonPreset } from './soft-neon';
import { retroTerminalPreset } from './retro-terminal';

export const presets: Record<string, VibePreset> = {
  cosmic: cosmicPreset,
  'soft-neon': softNeonPreset,
  'retro-terminal': retroTerminalPreset,
};

export { cosmicPreset, softNeonPreset, retroTerminalPreset };
