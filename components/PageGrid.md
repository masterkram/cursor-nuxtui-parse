# PageGrid

## Usage

The PageGrid component provides a responsive grid layout for displaying [PageCard](https://ui.nuxt.com/components/page-card) components or any other elements, automatically adjusting from 1 to 3 columns based on screen size.

```vue [PageGridExample.vue]
<script setup lang="ts">
const cards = ref([
  {
    title: 'Icons',
    description: 'Nuxt UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.',
    icon: 'i-lucide-smile',
    to: '/getting-started/icons'
  },
  {
    title: 'Fonts',
    description: 'Nuxt UI integrates with Nuxt Fonts to provide plug-and-play font optimization.',
    icon: 'i-lucide-a-large-small',
    to: '/getting-started/fonts'
  },
  {
    title: 'Color Mode',
    description: 'Nuxt UI integrates with Nuxt Color Mode to switch between light and dark.',
    icon: 'i-lucide-sun-moon',
    to: '/getting-started/color-mode'
  }
])
</script>

<template>
  <UPageGrid>
    <UPageCard
      v-for="(card, index) in cards"
      :key="index"
      v-bind="card"
    />
  </UPageGrid>
</template>
```

You can also use it to display a list of cards in a bento style layout by using `col-span-*` and `row-span-*` utility classes.

```vue [PageGridBentoExample.vue]
<script setup lang="ts">
const cards = ref([
  {
    title: 'Theme',
    description: 'Learn how to customize Nuxt UI components using Tailwind CSS v4.',
    icon: 'i-lucide-swatch-book',
    to: '/getting-started/theme',
    class: 'lg:col-span-2',
    image: {
      path: 'https://ui2.nuxt.com/illustrations/color-palette',
      width: 363,
      height: 152
    },
    orientation: 'horizontal' as const
  },
  {
    title: 'Fonts',
    description: 'Nuxt UI integrates with Nuxt Fonts to provide plug-and-play font optimization.',
    icon: 'i-lucide-a-large-small',
    to: '/getting-started/fonts',
    variant: 'soft' as const
  },
  {
    title: 'Color Mode',
    description: 'Nuxt UI integrates with Nuxt Color Mode to switch between light and dark.',
    icon: 'i-lucide-sun-moon',
    to: '/getting-started/color-mode',
    variant: 'soft' as const
  },
  {
    title: 'Icons',
    description: 'Nuxt UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.',
    icon: 'i-lucide-smile',
    to: '/getting-started/icons',
    image: {
      path: 'https://ui2.nuxt.com/illustrations/icon-library',
      width: 362,
      height: 184
    },
    class: 'lg:col-span-2',
    orientation: 'horizontal' as const,
    reverse: true
  }
])
</script>

<template>
  <UPageGrid>
    <UPageCard
      v-for="(card, index) in cards"
      :key="index"
      v-bind="card"
    >
      <UColorModeImage
        v-if="card.image"
        :light="`${card.image.path}-light.svg`"
        :dark="`${card.image.path}-dark.svg`"
        :width="card.image.width"
        :height="card.image.height"
        :alt="card.title"
        loading="lazy"
        class="w-full"
      />
    </UPageCard>
  </UPageGrid>
</template>
```

## API

### Props

```ts
/**
 * Props for the PageGrid component
 */
interface PageGridProps {
  /**
   * The element or component this component should render as.
   */
  as?: any;
}
```

### Slots

```ts
/**
 * Slots for the PageGrid component
 */
interface PageGridSlots {
  default(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  uiPro: {
    pageGrid: {
      base: 'relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'
    }
  }
})
```

