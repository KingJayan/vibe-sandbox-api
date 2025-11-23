import { VibePreset } from '../core/types';

export const brutalistPreset: VibePreset = {
  colors: {
    background: '#ffffff',
    backgroundAlt: '#f5f5f5',
    text: '#000000',
    textSecondary: '#333333',
    accent: '#ff0000',
    accentSecondary: '#0000ff',
  },
  gradients: {
    primary: 'linear-gradient(0deg, #000000 0%, #ffffff 100%)',
    secondary: 'linear-gradient(90deg, #ff0000 0%, #0000ff 100%)',
    radial: 'radial-gradient(circle at 50% 50%, #ffffff 0%, #cccccc 100%)',
  },
  shadows: {
    sm: '4px 4px 0px #000000',
    md: '8px 8px 0px #000000',
    lg: '12px 12px 0px #000000',
    glow: '0 0 0 4px #ff0000',
  },
  motion: {
    duration: {
      fast: '0.1s',
      normal: '0.2s',
      slow: '0.3s',
    },
    easing: {
      default: 'steps(3)',
      in: 'steps(2)',
      out: 'steps(2)',
      inOut: 'steps(4)',
    },
    spring: {
      stiffness: 600,
      damping: 50,
    },
  },
  particles: {
    enabled: false,
  },
};
