import { VibePreset } from '../core/types';

export const cyberpunkPreset: VibePreset = {
  colors: {
    background: '#0a0e17',
    backgroundAlt: '#141824',
    text: '#00f0ff',
    textSecondary: '#ff10f0',
    accent: '#39ff14',
    accentSecondary: '#ff10f0',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #00f0ff 0%, #ff10f0 100%)',
    secondary: 'linear-gradient(135deg, #39ff14 0%, #00f0ff 100%)',
    radial: 'radial-gradient(circle at 50% 50%, #ff10f0 0%, #0a0e17 70%)',
  },
  shadows: {
    sm: '0 2px 8px rgba(0, 240, 255, 0.3)',
    md: '0 4px 16px rgba(255, 16, 240, 0.4)',
    lg: '0 8px 32px rgba(57, 255, 20, 0.3)',
    glow: '0 0 20px rgba(0, 240, 255, 0.8), 0 0 40px rgba(255, 16, 240, 0.6)',
  },
  motion: {
    duration: {
      fast: '0.15s',
      normal: '0.3s',
      slow: '0.6s',
    },
    easing: {
      default: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    spring: {
      stiffness: 400,
      damping: 28,
    },
  },
  particles: {
    enabled: true,
    count: 80,
    size: {
      min: 1,
      max: 3,
    },
    speed: 0.4,
    color: '#00f0ff',
    opacity: 0.7,
  },
};
