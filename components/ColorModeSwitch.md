# ColorModeSwitch

## Usage

The ColorModeSwitch component extends the [Switch](https://ui.nuxt.com/components/switch) component, so you can pass any property such as `color`, `size`, etc.

```vue
<template>
  <UColorModeSwitch />
</template>
```

## Examples

### With custom icons

::framework-only
#nuxt
  :::div
  Use the `app.config.ts` to customize the icon with the `ui.icons` property:
  
  ```ts [app.config.ts]
  export default defineAppConfig({
    ui: {
      icons: {
        light: 'i-ph-sun',
        dark: 'i-ph-moon'
      }
    }
  })
  ```
  :::

#vue
  :::div
  Use the `vite.config.ts` to customize the icon with the `ui.icons` property:
  
  ```ts [vite.config.ts]
  import { defineConfig } from 'vite'
  import vue from '@vitejs/plugin-vue'
  import ui from '@nuxt/ui/vite'
  
  export default defineConfig({
    plugins: [
      vue(),
      ui({
        ui: {
          icons: {
            light: 'i-ph-sun',
            dark: 'i-ph-moon'
          }
        }
      })
    ]
  })
  ```
  :::
::

## API

### Props

```ts
/**
 * Props for the ColorModeSwitch component
 */
interface ColorModeSwitchProps {
  /**
   * When `true`, prevents the user from interacting with the switch.
   */
  disabled?: boolean | undefined;
  ui?: { root?: ClassNameValue; base?: ClassNameValue; container?: ClassNameValue; thumb?: ClassNameValue; icon?: ClassNameValue; wrapper?: ClassNameValue; label?: ClassNameValue; description?: ClassNameValue; } | undefined;
  /**
   * The element or component this component should render as.
   */
  as?: any;
  color?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral" | undefined;
  size?: "md" | "xs" | "sm" | "lg" | "xl" | undefined;
}
```

