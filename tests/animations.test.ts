import { describe, it, expect } from 'vitest';
import { easingFunctions, generateKeyframes, motionStyle } from '../src';

describe('Animation utilities', () => {
  it('should have easing functions', () => {
    expect(easingFunctions.linear).toBe('linear');
    expect(easingFunctions.easeInOut).toBeDefined();
    expect(easingFunctions.easeOutBack).toBeDefined();
  });

  it('should generate keyframes correctly', () => {
    const keyframes = generateKeyframes({
      name: 'test-animation',
      steps: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
    });

    expect(keyframes).toContain('@keyframes test-animation');
    expect(keyframes).toContain('0%');
    expect(keyframes).toContain('opacity: 0');
    expect(keyframes).toContain('100%');
    expect(keyframes).toContain('opacity: 1');
  });

  it('should return motion styles', () => {
    const motion = {
      duration: {
        fast: '0.2s',
        normal: '0.4s',
        slow: '0.8s',
      },
      easing: {
        default: 'ease',
        in: 'ease-in',
        out: 'ease-out',
        inOut: 'ease-in-out',
      },
    };

    const styles = motionStyle(motion, true);
    expect(styles.transitionDuration).toBe('0.4s');
    expect(styles.transitionTimingFunction).toBe('ease');
  });

  it('should disable animations when requested', () => {
    const motion = {
      duration: {
        fast: '0.2s',
        normal: '0.4s',
        slow: '0.8s',
      },
      easing: {
        default: 'ease',
        in: 'ease-in',
        out: 'ease-out',
        inOut: 'ease-in-out',
      },
    };

    const styles = motionStyle(motion, false);
    expect(styles.transition).toBe('none');
    expect(styles.animation).toBe('none');
  });
});
