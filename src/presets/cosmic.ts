import { VibePreset } from '../core/types';

export const cosmicPreset: VibePreset = {
  colors: {
    background: '#0a0e27',
    backgroundAlt: '#1a1f3a',
    text: '#e0e7ff',
    textSecondary: '#a5b4fc',
    accent: '#8b5cf6',
    accentSecondary: '#6366f1',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    secondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    radial: 'radial-gradient(circle at 50% 50%, #667eea 0%, #0a0e27 70%)',
  },
  shadows: {
    sm: '0 2px 8px rgba(139, 92, 246, 0.15)',
    md: '0 4px 16px rgba(139, 92, 246, 0.2)',
    lg: '0 8px 32px rgba(139, 92, 246, 0.25)',
    glow: '0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)',
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
    count: 100,
    size: {
      min: 1,
      max: 3,
    },
    speed: 0.5,
    color: '#8b5cf6',
    opacity: 0.6,
  },
};
