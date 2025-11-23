import { VibePreset } from '../core/types';

export const forestCanopyPreset: VibePreset = {
  colors: {
    background: '#1a2f23',
    backgroundAlt: '#2d4a35',
    text: '#d4e7d4',
    textSecondary: '#8fbc8f',
    accent: '#4caf50',
    accentSecondary: '#81c784',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #1a2f23 0%, #2d4a35 50%, #4caf50 100%)',
    secondary: 'linear-gradient(180deg, #4caf50 0%, #81c784 100%)',
    radial: 'radial-gradient(circle at 50% 50%, #4caf50 0%, #1a2f23 70%)',
  },
  shadows: {
    sm: '0 2px 8px rgba(76, 175, 80, 0.2)',
    md: '0 4px 16px rgba(129, 199, 132, 0.25)',
    lg: '0 8px 32px rgba(76, 175, 80, 0.3)',
    glow: '0 0 20px rgba(76, 175, 80, 0.4)',
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
      stiffness: 200,
      damping: 25,
    },
  },
  particles: {
    enabled: true,
    count: 50,
    size: {
      min: 1,
      max: 3,
    },
    speed: 0.15,
    color: '#81c784',
    opacity: 0.4,
  },
};
