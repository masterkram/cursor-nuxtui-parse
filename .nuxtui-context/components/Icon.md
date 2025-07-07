# Icon

## Usage

Use the `name` prop to display an icon:

```vue
<template>
  <UIcon name="i-lucide-lightbulb" class="size-5" />
</template>
```

::framework-only
#nuxt
  :::caution{to="https://ui.nuxt.com/getting-started/icons/nuxt#collections"}
  It's highly recommended to install the icons collections you need, read more about this.
  :::
::

## API

### Props

```ts
/**
 * Props for the Icon component
 */
interface IconProps {
  name: string;
  mode?: "svg" | "css" | undefined;
  size?: string | number | undefined;
  customize?: ((content: string, name?: string | undefined, prefix?: string | undefined, provider?: string | undefined) => string) | undefined;
}
```

