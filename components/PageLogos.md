# PageLogos

## Usage

The PageLogos component provides a flexible way to display a list of logos or images in your pages.

### Title

Use the `title` prop to set the title above the logos.

```vue
<script setup lang="ts">
const items = ref([
  'i-simple-icons-github',
  'i-simple-icons-discord',
  'i-simple-icons-x',
  'i-simple-icons-instagram',
  'i-simple-icons-linkedin',
  'i-simple-icons-facebook',
])
</script>

<template>
  <UPageLogos title="Trusted by the best front-end teams" :items="items" />
</template>
```

### Items

You can display logos in two ways:

1. Using the `items` prop to provide a list of logos. Each item can be either:

- An icon name (e.g., `i-simple-icons-github`)
- An object containing `src` and `alt` properties for images, which will be utilized in a `UAvatar` component

2. Using the default slot to have complete control over the content

::tabs{.gap-0}
```vue [PageLogosWithItems.vue]
<script setup lang="ts">
const items = [
  'i-simple-icons-github',
  'i-simple-icons-discord',
  'i-simple-icons-x',
  'i-simple-icons-instagram',
  'i-simple-icons-linkedin',
  'i-simple-icons-facebook'
]
</script>

<template>
  <UPageLogos title="Trusted by the best front-end teams" :items="items" />
</template>
```

```vue [PageLogosWithSlot.vue]
<template>
  <UPageLogos title="Trusted by the best front-end teams">
    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
  </UPageLogos>
</template>
```
::

### Marquee

Use the `marquee` prop to enable a marquee effect for the logos.

```vue
<script setup lang="ts">
const items = ref([
  'i-simple-icons-github',
  'i-simple-icons-discord',
  'i-simple-icons-x',
  'i-simple-icons-instagram',
  'i-simple-icons-linkedin',
  'i-simple-icons-facebook',
])
</script>

<template>
  <UPageLogos title="Trusted by the best front-end teams" marquee :items="items" />
</template>
```

::note{to="https://ui.nuxt.com/components/page-marquee"}
When you use `marquee` mode, you can customize its behavior by passing props. For more info, check out the [PageMarquee](https://ui.nuxt.com/components/page-marquee) component.
::

## API

### Props

```ts
/**
 * Props for the PageLogos component
 */
interface PageLogosProps {
  /**
   * The element or component this component should render as.
   */
  as?: any;
  title?: string | undefined;
  items?: PageLogosItem[] | undefined;
  /**
   * @default "false"
   */
  marquee?: boolean | PageMarqueeProps | undefined;
  ui?: { root?: ClassNameValue; title?: ClassNameValue; logos?: ClassNameValue; logo?: ClassNameValue; } | undefined;
}
```

### Slots

```ts
/**
 * Slots for the PageLogos component
 */
interface PageLogosSlots {
  default(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  uiPro: {
    pageLogos: {
      slots: {
        root: 'relative overflow-hidden',
        title: 'text-lg text-center font-semibold text-highlighted',
        logos: 'mt-10',
        logo: 'size-10 shrink-0'
      },
      variants: {
        marquee: {
          false: {
            logos: 'flex items-center shrink-0 justify-around gap-(--gap) [--gap:--spacing(16)]'
          }
        }
      }
    }
  }
})
```

