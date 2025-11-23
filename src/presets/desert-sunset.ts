import { VibePreset } from '../core/types';

export const desertSunsetPreset: VibePreset = {
  colors: {
    background: '#2e1a0f',
    backgroundAlt: '#4a2d1a',
    text: '#ffd1a3',
    textSecondary: '#d4a574',
    accent: '#ff7f50',
    accentSecondary: '#cd853f',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #ff7f50 0%, #ff6b6b 50%, #c9485b 100%)',
    secondary: 'linear-gradient(180deg, #ffd1a3 0%, #ff7f50 100%)',
    radial: 'radial-gradient(circle at 50% 30%, #ff7f50 0%, #2e1a0f 70%)',
  },
  shadows: {
    sm: '0 2px 8px rgba(255, 127, 80, 0.25)',
    md: '0 4px 16px rgba(205, 133, 63, 0.3)',
    lg: '0 8px 32px rgba(255, 127, 80, 0.35)',
    glow: '0 0 25px rgba(255, 127, 80, 0.6)',
  },
  motion: {
    duration: {
      fast: '0.25s',
      normal: '0.5s',
      slow: '1s',
    },
    easing: {
      default: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      in: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      out: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      inOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    },
    spring: {
      stiffness: 280,
      damping: 22,
    },
  },
  particles: {
    enabled: true,
    count: 35,
    size: {
      min: 2,
      max: 5,
    },
    speed: 0.2,
    color: '#ff7f50',
    opacity: 0.5,
  },
};
