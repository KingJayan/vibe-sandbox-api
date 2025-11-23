import { VibePreset } from '../core/types';

export const pastelDreamPreset: VibePreset = {
  colors: {
    background: '#fef9f3',
    backgroundAlt: '#ffe4e1',
    text: '#5a4a42',
    textSecondary: '#8b7b73',
    accent: '#ffb6c1',
    accentSecondary: '#e6e6fa',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #ffb6c1 0%, #e6e6fa 50%, #fffacd 100%)',
    secondary: 'linear-gradient(180deg, #ffe4e1 0%, #f5fffa 100%)',
    radial: 'radial-gradient(circle at 50% 50%, #ffb6c1 0%, #fef9f3 60%)',
  },
  shadows: {
    sm: '0 2px 8px rgba(255, 182, 193, 0.2)',
    md: '0 4px 16px rgba(230, 230, 250, 0.25)',
    lg: '0 8px 32px rgba(255, 182, 193, 0.3)',
    glow: '0 0 20px rgba(255, 182, 193, 0.5)',
  },
  motion: {
    duration: {
      fast: '0.25s',
      normal: '0.5s',
      slow: '1s',
    },
    easing: {
      default: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      in: 'cubic-bezier(0.42, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.58, 1)',
      inOut: 'cubic-bezier(0.42, 0, 0.58, 1)',
    },
    spring: {
      stiffness: 250,
      damping: 20,
    },
  },
  particles: {
    enabled: true,
    count: 40,
    size: {
      min: 2,
      max: 4,
    },
    speed: 0.25,
    color: '#ffb6c1',
    opacity: 0.5,
  },
};
