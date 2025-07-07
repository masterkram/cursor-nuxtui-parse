# ColorModeAvatar

## Usage

The ColorModeAvatar component extends the [Avatar](https://ui.nuxt.com/components/avatar) component, so you can pass any property such as `size`, `icon`, etc.

Use the `light` and `dark` props to define the source for light and dark mode.

```vue
<template>
  <UColorModeAvatar light="https://github.com/vuejs.png" dark="https://github.com/nuxt.png" />
</template>
```

::note
Switch between light and dark mode to see the different images: :u-color-mode-select{size="sm"}
::

## API

### Props

```ts
/**
 * Props for the ColorModeAvatar component
 */
interface ColorModeAvatarProps {
  light: string;
  dark: string;
  icon?: string | undefined;
  ui?: { root?: ClassNameValue; image?: ClassNameValue; fallback?: ClassNameValue; icon?: ClassNameValue; } | undefined;
  /**
   * The element or component this component should render as.
   */
  as?: any;
  size?: "md" | "xs" | "sm" | "lg" | "xl" | "3xs" | "2xs" | "2xl" | "3xl" | undefined;
  alt?: string | undefined;
  chip?: boolean | ChipProps | undefined;
  text?: string | undefined;
}
```

