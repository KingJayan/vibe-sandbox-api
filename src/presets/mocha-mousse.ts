import { VibePreset } from '../core/types';

export const mochaMoussePreset: VibePreset = {
  colors: {
    background: '#f5e6d3',
    backgroundAlt: '#e8d5c4',
    text: '#2e2e2e',
    textSecondary: '#5a4a42',
    accent: '#6b4423',
    accentSecondary: '#8b5a3c',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #6b4423 0%, #d4a574 100%)',
    secondary: 'linear-gradient(180deg, #f5e6d3 0%, #d4a574 100%)',
    radial: 'radial-gradient(circle at 50% 50%, #d4a574 0%, #f5e6d3 70%)',
  },
  shadows: {
    sm: '0 2px 8px rgba(107, 68, 35, 0.15)',
    md: '0 4px 16px rgba(107, 68, 35, 0.2)',
    lg: '0 8px 32px rgba(107, 68, 35, 0.25)',
    glow: '0 0 20px rgba(139, 90, 60, 0.3)',
  },
  motion: {
    duration: {
      fast: '0.2s',
      normal: '0.4s',
      slow: '0.8s',
    },
    easing: {
      default: 'cubic-bezier(0.4, 0, 0.2, 1)',
      in: 'cubic-bezier(0.42, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.58, 1)',
      inOut: 'cubic-bezier(0.42, 0, 0.58, 1)',
    },
    spring: {
      stiffness: 280,
      damping: 28,
    },
  },
  particles: {
    enabled: false,
  },
};
