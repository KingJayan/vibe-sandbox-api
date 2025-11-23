import { VibePreset } from '../core/types';

export const natureZenPreset: VibePreset = {
  colors: {
    background: '#f4f8f4',
    backgroundAlt: '#e8f3e8',
    text: '#2d4a2d',
    textSecondary: '#5a7a5a',
    accent: '#8fbc8f',
    accentSecondary: '#b0c4de',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #8fbc8f 0%, #b0c4de 100%)',
    secondary: 'linear-gradient(180deg, #f4f8f4 0%, #e8f3e8 100%)',
    radial: 'radial-gradient(circle at 50% 50%, #8fbc8f 0%, #f4f8f4 70%)',
  },
  shadows: {
    sm: '0 2px 8px rgba(143, 188, 143, 0.15)',
    md: '0 4px 16px rgba(176, 196, 222, 0.2)',
    lg: '0 8px 32px rgba(143, 188, 143, 0.25)',
    glow: '0 0 15px rgba(143, 188, 143, 0.35)',
  },
  motion: {
    duration: {
      fast: '0.3s',
      normal: '0.6s',
      slow: '1.2s',
    },
    easing: {
      default: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      in: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
      out: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      inOut: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
    },
    spring: {
      stiffness: 220,
      damping: 26,
    },
  },
  particles: {
    enabled: true,
    count: 25,
    size: {
      min: 1,
      max: 2,
    },
    speed: 0.1,
    color: '#8fbc8f',
    opacity: 0.3,
  },
};
