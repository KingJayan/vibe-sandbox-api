import { VibePreset } from '../core/types';

export const glassmorphismPreset: VibePreset = {
  colors: {
    background: '#e0f7fa',
    backgroundAlt: 'rgba(255, 255, 255, 0.15)',
    text: '#01579b',
    textSecondary: '#0277bd',
    accent: '#00acc1',
    accentSecondary: '#00bcd4',
  },
  gradients: {
    primary: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)',
    secondary: 'linear-gradient(135deg, #00acc1 0%, #00bcd4 100%)',
    radial: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 70%)',
  },
  shadows: {
    sm: '0 4px 6px rgba(0, 0, 0, 0.1)',
    md: '0 8px 16px rgba(0, 0, 0, 0.15)',
    lg: '0 16px 32px rgba(0, 0, 0, 0.2)',
    glow: '0 0 20px rgba(0, 172, 193, 0.3)',
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
    count: 30,
    size: {
      min: 3,
      max: 6,
    },
    speed: 0.2,
    color: '#00bcd4',
    opacity: 0.3,
  },
};
