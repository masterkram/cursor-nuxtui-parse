# PageCard

## Usage

The PageCard component provides a flexible way to display content in a card with an illustration in the default slot.

::code-preview
  :::u-page-card
  ---
  class: w-96
  description: Nuxt UI v3 integrates with latest Tailwind CSS v4, bringing
    significant improvements.
  icon: i-simple-icons-tailwindcss
  title: Tailwind CSS
  ---
  ![Tailwind CSS](https://ui.nuxt.com/tailwindcss-v4.svg){.w-full}
  :::
::

::tip
Use the [PageGrid](https://ui.nuxt.com/components/page-grid), [PageColumns](https://ui.nuxt.com/components/page-columns) or [PageList](https://ui.nuxt.com/components/page-list) components to display multiple PageCard.
::

### Title

Use the `title` prop to set the title of the card.

```vue
<template>
  <UPageCard title="Tailwind CSS" />
</template>
```

### Description

Use the `description` prop to set the description of the card.

```vue
<template>
  <UPageCard title="Tailwind CSS" description="Nuxt UI v3 integrates with latest Tailwind CSS v4, bringing significant improvements." />
</template>
```

### Icon

Use the `icon` prop to set the icon of the card.

```vue
<template>
  <UPageCard title="Tailwind CSS" description="Nuxt UI v3 integrates with latest Tailwind CSS v4, bringing significant improvements." icon="i-simple-icons-tailwindcss" />
</template>
```

### Link

You can pass any property from the [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link){rel="nofollow"} component such as `to`, `target`, `rel`, etc.

```vue
<template>
  <UPageCard title="Tailwind CSS" description="Nuxt UI v3 integrates with latest Tailwind CSS v4, bringing significant improvements." icon="i-simple-icons-tailwindcss" to="https://tailwindcss.com/docs/v4-beta" target="_blank" />
</template>
```

### Variant

Use the `variant` prop to change the style of the card.

```vue
<template>
  <UPageCard title="Tailwind CSS" description="Nuxt UI v3 integrates with latest Tailwind CSS v4, bringing significant improvements." icon="i-simple-icons-tailwindcss" to="https://tailwindcss.com/docs/v4-beta" target="_blank" variant="soft" />
</template>
```

::tip
You can apply the `light` or `dark` class to the `links` slot when using the `solid` variant to reverse the colors.
::

### Orientation

Use the `orientation` prop to change the orientation with the default slot. Defaults to `vertical`.

```vue
<template>
  <UPageCard title="Tailwind CSS" description="Nuxt UI v3 integrates with latest Tailwind CSS v4, bringing significant improvements." icon="i-simple-icons-tailwindcss" orientation="horizontal">
    <img src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full" />
  </UPageCard>
</template>
```

### Reverse

Use the `reverse` prop to reverse the orientation of the default slot.

```vue
<template>
  <UPageCard title="Tailwind CSS" description="Nuxt UI v3 integrates with latest Tailwind CSS v4, bringing significant improvements." icon="i-simple-icons-tailwindcss" orientation="horizontal" reverse>
    <img src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full" />
  </UPageCard>
</template>
```

### Highlight

Use the `highlight` and `highlight-color` props to display a highlighted border around the card.

```vue
<template>
  <UPageCard title="Tailwind CSS" description="Nuxt UI v3 integrates with latest Tailwind CSS v4, bringing significant improvements." icon="i-simple-icons-tailwindcss" orientation="horizontal" highlight highlight-color="primary">
    <img src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full" />
  </UPageCard>
</template>
```

### Spotlight

Use the `spotlight` and `spotlight-color` props to display a spotlight effect that follows your mouse cursor and highlights borders on hover.

::note
The spotlight effect will take over hover effects when using a `to` prop. It's best to use it with the `outline` variant.
::

```vue
<template>
  <UPageCard title="Tailwind CSS" description="Nuxt UI v3 integrates with latest Tailwind CSS v4, bringing significant improvements." icon="i-simple-icons-tailwindcss" orientation="horizontal" spotlight spotlight-color="primary">
    <img src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full" />
  </UPageCard>
</template>
```

::tip
You can also customize the color and size by using the `--spotlight-color` and `--spotlight-size` CSS variables:

```vue
<template>
  <UPageCard spotlight class="[--spotlight-color:var(--ui-error)] [--spotlight-size:200px]" />
</template>
```
::

## Examples

### As a testimonial

Use the [User](https://ui.nuxt.com/components/user) component in the `header` or `footer` slot to make the card look like a testimonial.

```vue [PageCardTestimonialExample.vue]
<script setup lang="ts">
const testimonial = ref({
  user: {
    name: 'Evan You',
    description: 'Author of Vue.js and Vite',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/499550?v=4',
      alt: 'Evan You'
    }
  },
  quote: '“Nuxt on Cloudflare infra with minimal effort - this is huge!”'
})
</script>

<template>
  <UPageCard :description="testimonial.quote" class="w-60">
    <template #footer>
      <UUser v-bind="testimonial.user" />
    </template>
  </UPageCard>
</template>
```

::tip{to="https://ui.nuxt.com/components/page-columns"}
You can use the [`PageColumns`](https://ui.nuxt.com/components/page-columns) component to display multiple PageCard in a multi-column layout.
::

## API

### Props

```ts
/**
 * Props for the PageCard component
 */
interface PageCardProps {
  /**
   * The element or component this component should render as.
   */
  as?: any;
  /**
   * The icon displayed above the title.
   */
  icon?: string | undefined;
  title?: string | undefined;
  description?: string | undefined;
  /**
   * The orientation of the page card.
   * @default "\"vertical\""
   */
  orientation?: "horizontal" | "vertical" | undefined;
  /**
   * Reverse the order of the default slot.
   */
  reverse?: boolean | undefined;
  /**
   * Display a line around the page card.
   */
  highlight?: boolean | undefined;
  highlightColor?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral" | undefined;
  /**
   * Display a spotlight effect that follows your mouse cursor and highlights borders on hover.
   */
  spotlight?: boolean | undefined;
  spotlightColor?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral" | undefined;
  variant?: "solid" | "outline" | "soft" | "subtle" | "ghost" | "naked" | undefined;
  to?: string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric | undefined;
  target?: "_blank" | "_parent" | "_self" | "_top" | (string & {}) | null | undefined;
  ui?: { root?: ClassNameValue; spotlight?: ClassNameValue; container?: ClassNameValue; wrapper?: ClassNameValue; header?: ClassNameValue; ... 5 more ...; description?: ClassNameValue; } | undefined;
}
```

### Slots

```ts
/**
 * Slots for the PageCard component
 */
interface PageCardSlots {
  header(): any;
  body(): any;
  leading(): any;
  title(): any;
  description(): any;
  footer(): any;
  default(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  uiPro: {
    pageCard: {
      slots: {
        root: 'relative flex rounded-lg',
        spotlight: 'absolute inset-0 rounded-[inherit] pointer-events-none bg-default/90',
        container: 'relative flex flex-col flex-1 lg:grid gap-x-8 gap-y-4 p-4 sm:p-6',
        wrapper: 'flex flex-col flex-1 items-start',
        header: 'mb-4',
        body: 'flex-1',
        footer: 'pt-4 mt-auto',
        leading: 'inline-flex items-center mb-2.5',
        leadingIcon: 'size-5 shrink-0 text-primary',
        title: 'text-base text-pretty font-semibold text-highlighted',
        description: 'text-[15px] text-pretty'
      },
      variants: {
        orientation: {
          horizontal: {
            container: 'lg:grid-cols-2 lg:items-center'
          },
          vertical: {
            container: ''
          }
        },
        reverse: {
          true: {
            wrapper: 'lg:order-last'
          }
        },
        variant: {
          solid: {
            root: 'bg-inverted text-inverted',
            title: 'text-inverted',
            description: 'text-dimmed'
          },
          outline: {
            root: 'bg-default ring ring-default',
            description: 'text-muted'
          },
          soft: {
            root: 'bg-elevated/50',
            description: 'text-toned'
          },
          subtle: {
            root: 'bg-elevated/50 ring ring-default',
            description: 'text-toned'
          },
          ghost: {
            description: 'text-muted'
          },
          naked: {
            container: 'p-0 sm:p-0',
            description: 'text-muted'
          }
        },
        to: {
          true: {
            root: [
              'transition'
            ]
          }
        },
        title: {
          true: {
            description: 'mt-1'
          }
        },
        highlight: {
          true: {
            root: 'ring-2'
          }
        },
        highlightColor: {
          primary: '',
          secondary: '',
          success: '',
          info: '',
          warning: '',
          error: '',
          neutral: ''
        },
        spotlight: {
          true: {
            root: '[--spotlight-size:400px] before:absolute before:-inset-px before:pointer-events-none before:rounded-[inherit] before:bg-[radial-gradient(var(--spotlight-size)_var(--spotlight-size)_at_calc(var(--spotlight-x,0px))_calc(var(--spotlight-y,0px)),var(--spotlight-color),transparent_70%)]'
          }
        },
        spotlightColor: {
          primary: '',
          secondary: '',
          success: '',
          info: '',
          warning: '',
          error: '',
          neutral: ''
        }
      },
      compoundVariants: [
        {
          variant: 'solid',
          to: true,
          class: {
            root: 'hover:bg-inverted/90'
          }
        },
        {
          variant: 'outline',
          to: true,
          class: {
            root: 'hover:bg-elevated/50'
          }
        },
        {
          variant: 'soft',
          to: true,
          class: {
            root: 'hover:bg-elevated'
          }
        },
        {
          variant: 'subtle',
          to: true,
          class: {
            root: 'hover:bg-elevated'
          }
        },
        {
          variant: 'subtle',
          to: true,
          highlight: false,
          class: {
            root: 'hover:ring-accented'
          }
        },
        {
          variant: 'ghost',
          to: true,
          class: {
            root: 'hover:bg-elevated/50'
          }
        },
        {
          highlightColor: 'primary',
          highlight: true,
          class: {
            root: 'ring-primary'
          }
        },
        {
          highlightColor: 'secondary',
          highlight: true,
          class: {
            root: 'ring-secondary'
          }
        },
        {
          highlightColor: 'success',
          highlight: true,
          class: {
            root: 'ring-success'
          }
        },
        {
          highlightColor: 'info',
          highlight: true,
          class: {
            root: 'ring-info'
          }
        },
        {
          highlightColor: 'warning',
          highlight: true,
          class: {
            root: 'ring-warning'
          }
        },
        {
          highlightColor: 'error',
          highlight: true,
          class: {
            root: 'ring-error'
          }
        },
        {
          highlightColor: 'neutral',
          highlight: true,
          class: {
            root: 'ring-inverted'
          }
        },
        {
          spotlightColor: 'primary',
          spotlight: true,
          class: {
            root: '[--spotlight-color:var(--ui-primary)]'
          }
        },
        {
          spotlightColor: 'secondary',
          spotlight: true,
          class: {
            root: '[--spotlight-color:var(--ui-secondary)]'
          }
        },
        {
          spotlightColor: 'success',
          spotlight: true,
          class: {
            root: '[--spotlight-color:var(--ui-success)]'
          }
        },
        {
          spotlightColor: 'info',
          spotlight: true,
          class: {
            root: '[--spotlight-color:var(--ui-info)]'
          }
        },
        {
          spotlightColor: 'warning',
          spotlight: true,
          class: {
            root: '[--spotlight-color:var(--ui-warning)]'
          }
        },
        {
          spotlightColor: 'error',
          spotlight: true,
          class: {
            root: '[--spotlight-color:var(--ui-error)]'
          }
        },
        {
          spotlightColor: 'neutral',
          spotlight: true,
          class: {
            root: '[--spotlight-color:var(--ui-bg-inverted)]'
          }
        }
      ],
      defaultVariants: {
        variant: 'outline',
        highlightColor: 'primary',
        spotlightColor: 'primary'
      }
    }
  }
})
```

