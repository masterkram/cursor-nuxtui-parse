# ColorModeSelect

## Usage

The ColorModeSelect component extends the [SelectMenu](https://ui.nuxt.com/components/select-menu) component, so you can pass any property such as `color`, `variant`, `size`, etc.

```vue
<template>
  <UColorModeSelect />
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
        system: 'i-ph-desktop',
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
 * Props for the ColorModeSelect component
 */
interface ColorModeSelectProps {
  /**
   * The icon displayed to open the menu.
   */
  trailingIcon?: string | undefined;
  /**
   * When `true`, prevents the user from interacting with listbox
   */
  disabled?: boolean | undefined;
  ui?: { base?: ClassNameValue; leading?: ClassNameValue; leadingIcon?: ClassNameValue; leadingAvatar?: ClassNameValue; ... 22 more ...; focusScope?: ClassNameValue; } | undefined;
  color?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral" | undefined;
  size?: "md" | "xs" | "sm" | "lg" | "xl" | undefined;
  /**
   * The content of the menu.
   */
  content?: (Omit<ComboboxContentProps, "as" | "asChild" | "forceMount"> & Partial<EmitsToProps<DismissableLayerEmits>>) | undefined;
  variant?: "outline" | "soft" | "subtle" | "ghost" | "none" | undefined;
  /**
   * Render the menu in a portal.
   */
  portal?: string | boolean | HTMLElement | undefined;
  /**
   * Display an arrow alongside the menu.
   */
  arrow?: boolean | Omit<ComboboxArrowProps, "as" | "asChild"> | undefined;
  /**
   * The icon displayed when an item is selected.
   */
  selectedIcon?: string | undefined;
}
```

