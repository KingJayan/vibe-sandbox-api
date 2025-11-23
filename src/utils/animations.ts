export const easingFunctions = {
  linear: 'linear',
  easeIn: 'cubic-bezier(0.42, 0, 1, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.58, 1)',
  easeInOut: 'cubic-bezier(0.42, 0, 0.58, 1)',
  easeInQuad: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
  easeOutQuad: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  easeInOutQuad: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
  easeInCubic: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
  easeOutCubic: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  easeInOutCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  easeInQuart: 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
  easeOutQuart: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
  easeInOutQuart: 'cubic-bezier(0.77, 0, 0.175, 1)',
  easeInQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
  easeOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
  easeInOutQuint: 'cubic-bezier(0.86, 0, 0.07, 1)',
  easeInExpo: 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
  easeOutExpo: 'cubic-bezier(0.19, 1, 0.22, 1)',
  easeInOutExpo: 'cubic-bezier(1, 0, 0, 1)',
  easeInCirc: 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
  easeOutCirc: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
  easeInOutCirc: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
  easeInBack: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
  easeOutBack: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  easeInOutBack: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
};

export interface KeyframeConfig {
  name: string;
  steps: Record<string, Record<string, string>>;
}

export function generateKeyframes(config: KeyframeConfig): string {
  const { name, steps } = config;
  let keyframesString = `@keyframes ${name} {\n`;

  for (const [percentage, properties] of Object.entries(steps)) {
    keyframesString += `  ${percentage} {\n`;
    for (const [property, value] of Object.entries(properties)) {
      keyframesString += `    ${property}: ${value};\n`;
    }
    keyframesString += `  }\n`;
  }

  keyframesString += '}';
  return keyframesString;
}

export const builtInKeyframes = {
  pulse: generateKeyframes({
    name: 'vibe-pulse',
    steps: {
      '0%': { opacity: '1', transform: 'scale(1)' },
      '50%': { opacity: '0.8', transform: 'scale(1.05)' },
      '100%': { opacity: '1', transform: 'scale(1)' },
    },
  }),
  fadeIn: generateKeyframes({
    name: 'vibe-fadeIn',
    steps: {
      '0%': { opacity: '0' },
      '100%': { opacity: '1' },
    },
  }),
  slideUp: generateKeyframes({
    name: 'vibe-slideUp',
    steps: {
      '0%': { transform: 'translateY(20px)', opacity: '0' },
      '100%': { transform: 'translateY(0)', opacity: '1' },
    },
  }),
  glow: generateKeyframes({
    name: 'vibe-glow',
    steps: {
      '0%': { filter: 'brightness(1)' },
      '50%': { filter: 'brightness(1.3)' },
      '100%': { filter: 'brightness(1)' },
    },
  }),
  float: generateKeyframes({
    name: 'vibe-float',
    steps: {
      '0%': { transform: 'translateY(0px)' },
      '50%': { transform: 'translateY(-10px)' },
      '100%': { transform: 'translateY(0px)' },
    },
  }),
};

export function motionStyle(motion: any, animationEnabled = true) {
  if (!animationEnabled) {
    return {
      transition: 'none',
      animation: 'none',
    };
  }

  return {
    transitionDuration: motion.duration.normal,
    transitionTimingFunction: motion.easing.default,
  };
}
