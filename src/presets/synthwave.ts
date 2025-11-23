import { VibePreset } from '../core/types';

export const synthwavePreset: VibePreset = {
  colors: {
    background: '#1a0b2e',
    backgroundAlt: '#2d1b4e',
    text: '#ff6ec7',
    textSecondary: '#ffd1dc',
    accent: '#ff2975',
    accentSecondary: '#c9a0dc',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #ff2975 0%, #ff6ec7 50%, #c9a0dc 100%)',
    secondary: 'linear-gradient(180deg, #ff6ec7 0%, #f72585 100%)',
    radial: 'radial-gradient(circle at center, #ff2975 0%, #1a0b2e 80%)',
  },
  shadows: {
    sm: '0 2px 8px rgba(255, 41, 117, 0.3)',
    md: '0 4px 16px rgba(255, 110, 199, 0.4)',
    lg: '0 8px 32px rgba(201, 160, 220, 0.35)',
    glow: '0 0 15px rgba(255, 41, 117, 0.8), 0 0 30px rgba(201, 160, 220, 0.5)',
  },
  motion: {
    duration: {
      fast: '0.2s',
      normal: '0.5s',
      slow: '0.9s',
    },
    easing: {
      default: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      in: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
      out: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      inOut: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
    spring: {
      stiffness: 350,
      damping: 25,
    },
  },
  particles: {
    enabled: true,
    count: 60,
    size: {
      min: 2,
      max: 5,
    },
    speed: 0.3,
    color: '#ff6ec7',
    opacity: 0.6,
  },
};
