# Framework Integration Examples

Vibe Sandbox is framework-agnostic and works seamlessly with all major frontend frameworks. Here are practical examples for React, Next.js, Vue, and Svelte.

## React

### Basic Usage with CSS Variables

```jsx
import { useEffect } from 'react';
import { createVibe } from 'vibe-sandbox';

function App() {
  useEffect(() => {
    const vibe = createVibe({ preset: 'cyberpunk' });
    
    // Inject CSS variables into the document
    const style = document.createElement('style');
    style.textContent = vibe.toCSS();
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div style={{
      background: 'var(--vibe-bg)',
      color: 'var(--vibe-text)',
      padding: '2rem'
    }}>
      <h1 style={{ color: 'var(--vibe-accent)' }}>
        Cyberpunk Theme
      </h1>
    </div>
  );
}
```

### Custom Hook for Vibe Management

```jsx
import { useState, useEffect } from 'react';
import { createVibe } from 'vibe-sandbox';

function useVibe(presetName = 'cosmic', options = {}) {
  const [vibe, setVibe] = useState(null);

  useEffect(() => {
    const theme = createVibe({ preset: presetName, ...options });
    setVibe(theme);
    
    // Inject CSS
    const style = document.createElement('style');
    style.id = 'vibe-sandbox-css';
    style.textContent = theme.toCSS();
    
    const existing = document.getElementById('vibe-sandbox-css');
    if (existing) {
      existing.replaceWith(style);
    } else {
      document.head.appendChild(style);
    }
  }, [presetName, options]);

  return vibe;
}

// Usage
function MyComponent() {
  const vibe = useVibe('synthwave', { intensity: 1.5 });

  if (!vibe) return null;

  return (
    <div style={{
      background: vibe.gradients.primary,
      padding: '2rem',
      color: vibe.colors.text
    }}>
      <h1>Synthwave Theme</h1>
    </div>
  );
}
```

### With Effects

```jsx
import { useEffect } from 'react';
import { createVibe, registerEffect } from 'vibe-sandbox';

function App() {
  useEffect(() => {
    // Register custom effect
    registerEffect('darkMode', (theme) => {
      theme.colors.background = '#000000';
      theme.colors.backgroundAlt = '#111111';
    });

    const vibe = createVibe({ 
      preset: 'pastel-dream',
      effects: ['darkMode']
    });
    
    const style = document.createElement('style');
    style.textContent = vibe.toCSS();
    document.head.appendChild(style);
  }, []);

  return <div>Your app</div>;
}
```

---

## Next.js

### App Router (app directory)

```jsx
// app/layout.js
import { createVibe } from 'vibe-sandbox';
import './globals.css';

export default function RootLayout({ children }) {
  const vibe = createVibe({ preset: 'mocha-mousse' });
  
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: vibe.toCSS() }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### Pages Router

```jsx
// pages/_app.js
import { createVibe } from 'vibe-sandbox';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const vibe = createVibe({ preset: 'midnight-ocean' });
    const style = document.createElement('style');
    style.textContent = vibe.toCSS();
    document.head.appendChild(style);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
```

### Dynamic Theme Switching

```jsx
// components/ThemeSwitcher.js
'use client';

import { useState, useEffect } from 'react';
import { createVibe } from 'vibe-sandbox';

export default function ThemeSwitcher() {
  const [preset, setPreset] = useState('cosmic');

  useEffect(() => {
    const vibe = createVibe({ preset });
    const styleId = 'vibe-theme';
    
    let style = document.getElementById(styleId);
    if (!style) {
      style = document.createElement('style');
      style.id = styleId;
      document.head.appendChild(style);
    }
    
    style.textContent = vibe.toCSS();
  }, [preset]);

  return (
    <select value={preset} onChange={(e) => setPreset(e.target.value)}>
      <option value="cosmic">Cosmic</option>
      <option value="cyberpunk">Cyberpunk</option>
      <option value="pastel-dream">Pastel Dream</option>
      <option value="brutalist">Brutalist</option>
    </select>
  );
}
```

---

## Vue 3

### Composition API

```vue
<script setup>
import { ref, onMounted, watch } from 'vue';
import { createVibe } from 'vibe-sandbox';

const preset = ref('vaporwave');
const vibe = ref(null);

const loadTheme = () => {
  vibe.value = createVibe({ preset: preset.value });
  
  const style = document.createElement('style');
  style.id = 'vibe-theme';
  style.textContent = vibe.value.toCSS();
  
  const existing = document.getElementById('vibe-theme');
  if (existing) {
    existing.replaceWith(style);
  } else {
    document.head.appendChild(style);
  }
};

onMounted(() => {
  loadTheme();
});

watch(preset, () => {
  loadTheme();
});
</script>

<template>
  <div :style="{
    background: `var(--vibe-bg)`,
    color: `var(--vibe-text)`,
    padding: '2rem'
  }">
    <h1 :style="{ color: `var(--vibe-accent)` }">Vaporwave Theme</h1>
    
    <select v-model="preset">
      <option value="vaporwave">Vaporwave</option>
      <option value="synthwave">Synthwave</option>
      <option value="arcade">Arcade</option>
    </select>
  </div>
</template>
```

### Options API

```vue
<script>
import { createVibe } from 'vibe-sandbox';

export default {
  data() {
    return {
      preset: 'forest-canopy',
      vibe: null
    };
  },
  mounted() {
    this.loadTheme();
  },
  watch: {
    preset() {
      this.loadTheme();
    }
  },
  methods: {
    loadTheme() {
      this.vibe = createVibe({ preset: this.preset });
      
      const style = document.createElement('style');
      style.textContent = this.vibe.toCSS();
      document.head.appendChild(style);
    }
  }
};
</script>
```

### Composable

```js
// composables/useVibe.js
import { ref, watch } from 'vue';
import { createVibe } from 'vibe-sandbox';

export function useVibe(presetName = 'cosmic') {
  const vibe = ref(null);
  const preset = ref(presetName);

  const loadTheme = () => {
    vibe.value = createVibe({ preset: preset.value });
    
    const style = document.createElement('style');
    style.id = 'vibe-sandbox';
    style.textContent = vibe.value.toCSS();
    
    const existing = document.getElementById('vibe-sandbox');
    if (existing) {
      existing.replaceWith(style);
    } else {
      document.head.appendChild(style);
    }
  };

  watch(preset, loadTheme, { immediate: true });

  return { vibe, preset };
}

// Usage in component
import { useVibe } from '@/composables/useVibe';

const { vibe, preset } = useVibe('nature-zen');
```

---

## Svelte

### Basic Usage

```svelte
<script>
  import { onMount } from 'svelte';
  import { createVibe } from 'vibe-sandbox';

  let preset = 'desert-sunset';
  let vibe;

  function loadTheme() {
    vibe = createVibe({ preset });
    
    const style = document.createElement('style');
    style.id = 'vibe-theme';
    style.textContent = vibe.toCSS();
    
    const existing = document.getElementById('vibe-theme');
    if (existing) {
      existing.replaceWith(style);
    } else {
      document.head.appendChild(style);
    }
  }

  onMount(() => {
    loadTheme();
  });

  $: if (preset) loadTheme();
</script>

<div style="background: var(--vibe-bg); color: var(--vibe-text); padding: 2rem;">
  <h1 style="color: var(--vibe-accent)">Desert Sunset Theme</h1>
  
  <select bind:value={preset}>
    <option value="desert-sunset">Desert Sunset</option>
    <option value="forest-canopy">Forest Canopy</option>
    <option value="glassmorphism">Glassmorphism</option>
  </select>
</div>
```

### With Svelte Stores

```js
// stores/theme.js
import { writable } from 'svelte/store';
import { createVibe } from 'vibe-sandbox';

function createThemeStore() {
  const { subscribe, set, update } = writable({
    preset: 'cosmic',
    vibe: null
  });

  return {
    subscribe,
    setPreset: (presetName) => {
      const vibe = createVibe({ preset: presetName });
      
      const style = document.createElement('style');
      style.id = 'vibe-theme';
      style.textContent = vibe.toCSS();
      
      const existing = document.getElementById('vibe-theme');
      if (existing) {
        existing.replaceWith(style);
      } else {
        document.head.appendChild(style);
      }
      
      set({ preset: presetName, vibe });
    },
    applyEffect: (effectName) => {
      update(state => {
        if (state.vibe) {
          state.vibe.applyEffect(effectName);
          
          const style = document.getElementById('vibe-theme');
          if (style) {
            style.textContent = state.vibe.toCSS();
          }
        }
        return state;
      });
    }
  };
}

export const theme = createThemeStore();
```

```svelte
<!-- Usage in component -->
<script>
  import { theme } from './stores/theme';
  import { onMount } from 'svelte';

  onMount(() => {
    theme.setPreset('brutalist');
  });
</script>

<div>
  <button on:click={() => theme.setPreset('cosmic')}>Cosmic</button>
  <button on:click={() => theme.setPreset('synthwave')}>Synthwave</button>
</div>
```

---

## Common Patterns

### Direct Style Application (All Frameworks)

Instead of CSS variables, you can apply styles directly:

```jsx
const vibe = createVibe({ preset: 'glassmorphism' });

const containerStyle = {
  background: vibe.colors.background,
  color: vibe.colors.text,
  boxShadow: vibe.shadows.lg
};

const buttonStyle = {
  background: vibe.gradients.primary,
  padding: '1rem 2rem',
  border: 'none',
  color: vibe.colors.text
};
```

### SSR-Safe Implementation (All Frameworks)

For server-side rendering, ensure you only access `document` on the client:

```js
if (typeof window !== 'undefined') {
  const vibe = createVibe({ preset: 'midnight-ocean' });
  const style = document.createElement('style');
  style.textContent = vibe.toCSS();
  document.head.appendChild(style);
}
```

---

## Summary

All frameworks work the same way:
1. Import `createVibe` from `vibe-sandbox`
2. Create a theme: `const vibe = createVibe({ preset: 'your-preset' })`
3. Either:
   - Inject CSS variables: `vibe.toCSS()`
   - Use theme object properties directly: `vibe.colors.accent`

No special configuration needed - it's pure JavaScript!
