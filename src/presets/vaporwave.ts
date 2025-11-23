import { VibePreset } from '../core/types';

export const vaporwavePreset: VibePreset = {
  colors: {
    background: '#2d1b4e',
    backgroundAlt: '#3d2b5e',
    text: '#ff71ce',
    textSecondary: '#01cdfe',
    accent: '#05ffa1',
    accentSecondary: '#b967ff',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #ff71ce 0%, #01cdfe 50%, #05ffa1 100%)',
    secondary: 'linear-gradient(180deg, #b967ff 0%, #01cdfe 100%)',
    radial: 'radial-gradient(circle at 50% 50%, #ff71ce 0%, #2d1b4e 70%)',
  },
  shadows: {
    sm: '0 2px 8px rgba(255, 113, 206, 0.3)',
    md: '0 4px 16px rgba(1, 205, 254, 0.35)',
    lg: '0 8px 32px rgba(5, 255, 161, 0.3)',
    glow: '0 0 20px rgba(255, 113, 206, 0.7), 0 0 40px rgba(5, 255, 161, 0.5)',
  },
  motion: {
    duration: {
      fast: '0.2s',
      normal: '0.5s',
      slow: '1s',
    },
    easing: {
      default: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      in: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
      out: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      inOut: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
    spring: {
      stiffness: 320,
      damping: 24,
    },
  },
  particles: {
    enabled: true,
    count: 55,
    size: {
      min: 2,
      max: 4,
    },
    speed: 0.35,
    color: '#01cdfe',
    opacity: 0.65,
  },
};
