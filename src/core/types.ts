export interface VibeConfig {
  preset?: string;
  intensity?: number;
  animation?: boolean;
  effects?: string[];
}

export interface ColorPalette {
  background: string;
  backgroundAlt: string;
  text: string;
  textSecondary: string;
  accent: string;
  accentSecondary?: string;
}

export interface Gradients {
  primary: string;
  secondary?: string;
  radial?: string;
}

export interface Shadows {
  sm: string;
  md: string;
  lg: string;
  glow?: string;
}

export interface Motion {
  duration: {
    fast: string;
    normal: string;
    slow: string;
  };
  easing: {
    default: string;
    in: string;
    out: string;
    inOut: string;
  };
  spring?: {
    stiffness: number;
    damping: number;
  };
}

export interface ParticlesConfig {
  enabled: boolean;
  count?: number;
  size?: {
    min: number;
    max: number;
  };
  speed?: number;
  color?: string;
  opacity?: number;
}

export interface VibeTheme {
  colors: ColorPalette;
  gradients: Gradients;
  shadows: Shadows;
  motion: Motion;
  particles?: ParticlesConfig;
  toCSS(): string;
  applyEffect(effectName: string, ...args: any[]): VibeTheme;
}

export interface VibePreset {
  colors: ColorPalette;
  gradients: Gradients;
  shadows: Shadows;
  motion: Motion;
  particles?: ParticlesConfig;
}

export type EffectGenerator = (theme: VibeTheme, ...args: any[]) => void;
