import { VibePreset } from '../core/types';

export const softNeonPreset: VibePreset = {
  colors: {
    background: '#0f0f23',
    backgroundAlt: '#1a1a2e',
    text: '#f0f0f0',
    textSecondary: '#b0b0b0',
    accent: '#ff2e97',
    accentSecondary: '#00d9ff',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #ff2e97 0%, #ff6b6b 100%)',
    secondary: 'linear-gradient(135deg, #00d9ff 0%, #0099ff 100%)',
    radial: 'radial-gradient(circle at 50% 50%, #ff2e97 0%, #0f0f23 60%)',
  },
  shadows: {
    sm: '0 2px 8px rgba(255, 46, 151, 0.3)',
    md: '0 4px 16px rgba(255, 46, 151, 0.4)',
    lg: '0 8px 32px rgba(255, 46, 151, 0.5)',
    glow: '0 0 15px rgba(255, 46, 151, 0.8), 0 0 30px rgba(0, 217, 255, 0.5)',
  },
  motion: {
    duration: {
      fast: '0.15s',
      normal: '0.3s',
      slow: '0.6s',
    },
    easing: {
      default: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      in: 'cubic-bezier(0.42, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.58, 1)',
      inOut: 'cubic-bezier(0.42, 0, 0.58, 1)',
    },
    spring: {
      stiffness: 400,
      damping: 25,
    },
  },
  particles: {
    enabled: true,
    count: 50,
    size: {
      min: 2,
      max: 4,
    },
    speed: 0.3,
    color: '#ff2e97',
    opacity: 0.8,
  },
};
