# Main

## Usage

The Main component renders a `<main>` element that works together with the [Header](https://ui.nuxt.com/components/header) component to create a full-height layout that extends to the viewport's available height.

::note
The Header component defines its height through a `--ui-header-height` CSS variable, which you can customize by overriding it in your CSS:

```css
:root {
  --ui-header-height: --spacing(16);
}
```
::

## Examples

### Within `app.vue`

Use the Main component in your `app.vue` or in a layout:

```vue [app.vue] {5-9}
<template>
  <UApp>
    <UHeader />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <UFooter />
  </UApp>
</template>
```

## API

### Props

```ts
/**
 * Props for the Main component
 */
interface MainProps {
  /**
   * The element or component this component should render as.
   * @default "\"main\""
   */
  as?: any;
}
```

### Slots

```ts
/**
 * Slots for the Main component
 */
interface MainSlots {
  default(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  uiPro: {
    main: {
      base: 'min-h-[calc(100vh-var(--ui-header-height))]'
    }
  }
})
```

