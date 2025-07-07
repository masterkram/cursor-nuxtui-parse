# ColorModeImage

## Usage

The ColorModeImage component uses the `<NuxtImg>` component when [`@nuxt/image`](https://github.com/nuxt/image){rel="nofollow"} is installed, falling back to `img` otherwise.

```vue
<template>
  <UColorModeImage light="https://picsum.photos/id/29/400" dark="https://picsum.photos/id/46/400" :width="200" :height="200" />
</template>
```

::note
Switch between light and dark mode to see the different images: :u-color-mode-select{size="sm"}
::

## API

### Props

```ts
/**
 * Props for the ColorModeImage component
 */
interface ColorModeImageProps {
  dark: string;
  light: string;
}
```

