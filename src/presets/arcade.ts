import { VibePreset } from '../core/types';

export const arcadePreset: VibePreset = {
  colors: {
    background: '#000080',
    backgroundAlt: '#191970',
    text: '#ffff00',
    textSecondary: '#ffd700',
    accent: '#ff1493',
    accentSecondary: '#00ff00',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #ff1493 0%, #ffff00 50%, #00ff00 100%)',
    secondary: 'linear-gradient(180deg, #000080 0%, #4b0082 100%)',
    radial: 'radial-gradient(circle at 50% 50%, #ff1493 0%, #000080 60%)',
  },
  shadows: {
    sm: '0 2px 4px rgba(255, 20, 147, 0.4)',
    md: '0 4px 8px rgba(255, 255, 0, 0.5)',
    lg: '0 8px 16px rgba(0, 255, 0, 0.4)',
    glow: '0 0 20px rgba(255, 20, 147, 0.8), 0 0 40px rgba(255, 255, 0, 0.6)',
  },
  motion: {
    duration: {
      fast: '0.1s',
      normal: '0.2s',
      slow: '0.4s',
    },
    easing: {
      default: 'steps(4)',
      in: 'steps(2)',
      out: 'steps(2)',
      inOut: 'steps(5)',
    },
    spring: {
      stiffness: 500,
      damping: 35,
    },
  },
  particles: {
    enabled: true,
    count: 70,
    size: {
      min: 2,
      max: 4,
    },
    speed: 0.5,
    color: '#ffff00',
    opacity: 0.8,
  },
};
