import { VibePreset } from '../core/types';

export const retroTerminalPreset: VibePreset = {
  colors: {
    background: '#000000',
    backgroundAlt: '#0a0a0a',
    text: '#33ff33',
    textSecondary: '#00cc00',
    accent: '#ffaa00',
    accentSecondary: '#ff5500',
  },
  gradients: {
    primary: 'linear-gradient(180deg, #33ff33 0%, #00aa00 100%)',
    secondary: 'linear-gradient(180deg, #ffaa00 0%, #ff5500 100%)',
    radial: 'radial-gradient(circle at center, #004400 0%, #000000 80%)',
  },
  shadows: {
    sm: '0 2px 4px rgba(51, 255, 51, 0.2)',
    md: '0 4px 8px rgba(51, 255, 51, 0.3)',
    lg: '0 8px 16px rgba(51, 255, 51, 0.4)',
    glow: '0 0 10px rgba(51, 255, 51, 0.6), 0 0 20px rgba(51, 255, 51, 0.4)',
  },
  motion: {
    duration: {
      fast: '0.1s',
      normal: '0.2s',
      slow: '0.4s',
    },
    easing: {
      default: 'steps(5)',
      in: 'steps(3)',
      out: 'steps(3)',
      inOut: 'steps(5)',
    },
    spring: {
      stiffness: 500,
      damping: 40,
    },
  },
  particles: {
    enabled: false,
  },
};
