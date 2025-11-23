import { VibePreset } from '../core/types';

export const midnightOceanPreset: VibePreset = {
  colors: {
    background: '#0d1b2a',
    backgroundAlt: '#1b263b',
    text: '#e0e7ff',
    textSecondary: '#a5b4fc',
    accent: '#3b82f6',
    accentSecondary: '#60a5fa',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #3b82f6 100%)',
    secondary: 'linear-gradient(180deg, #3b82f6 0%, #60a5fa 100%)',
    radial: 'radial-gradient(circle at 50% 50%, #3b82f6 0%, #0d1b2a 70%)',
  },
  shadows: {
    sm: '0 2px 8px rgba(59, 130, 246, 0.2)',
    md: '0 4px 16px rgba(96, 165, 250, 0.25)',
    lg: '0 8px 32px rgba(59, 130, 246, 0.3)',
    glow: '0 0 20px rgba(59, 130, 246, 0.4), 0 0 40px rgba(96, 165, 250, 0.3)',
  },
  motion: {
    duration: {
      fast: '0.2s',
      normal: '0.4s',
      slow: '0.8s',
    },
    easing: {
      default: 'cubic-bezier(0.4, 0, 0.2, 1)',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    spring: {
      stiffness: 300,
      damping: 30,
    },
  },
  particles: {
    enabled: true,
    count: 45,
    size: {
      min: 1,
      max: 3,
    },
    speed: 0.25,
    color: '#60a5fa',
    opacity: 0.5,
  },
};
