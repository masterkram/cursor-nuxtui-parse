# PageSection

## Usage

The PageSection component wraps your content in a [Container](https://ui.nuxt.com/components/container) while maintaining full-width flexibility making it easy to add background colors, images or patterns. It provides a flexible way to display content with an illustration in the default slot.

::code-preview
  :::u-page-section
  ---
  features:
    - title: Icons
      description: Nuxt UI integrates with Nuxt Icon to access over 200,000+ icons
        from Iconify.
      icon: i-lucide-smile
      to: /getting-started/icons
    - title: Fonts
      description: Nuxt UI integrates with Nuxt Fonts to provide plug-and-play font
        optimization.
      icon: i-lucide-a-large-small
      to: /getting-started/fonts
    - title: Color Mode
      description: Nuxt UI integrates with Nuxt Color Mode to switch between light and dark.
      icon: i-lucide-sun-moon
      to: /getting-started/color-mode
  description: Nuxt UI provides a comprehensive suite of components and utilities
    to help you build beautiful and accessible web applications with Vue and Nuxt.
  headline: Features
  title: Beautiful Vue UI components
  ---
  :::
::

Use it after a [PageHero](https://ui.nuxt.com/components/page-hero) component:

```vue {4}
<template>
  <UPageHero />

  <UPageSection />
</template>
```

### Title

Use the `title` prop to set the title of the section.

```vue
<template>
  <UPageSection title="Beautiful Vue UI components" />
</template>
```

### Description

Use the `description` prop to set the description of the section.

```vue
<template>
  <UPageSection title="Beautiful Vue UI components" description="Nuxt UI provides a comprehensive suite of components and utilities to help you build beautiful and accessible web applications with Vue and Nuxt." />
</template>
```

### Headline

Use the `headline` prop to set the headline of the section.

```vue
<template>
  <UPageSection title="Beautiful Vue UI components" description="Nuxt UI provides a comprehensive suite of components and utilities to help you build beautiful and accessible web applications with Vue and Nuxt." headline="Features" />
</template>
```

### Icon

Use the `icon` prop to set the icon of the section.

```vue
<template>
  <UPageSection title="Beautiful Vue UI components" description="Nuxt UI provides a comprehensive suite of components and utilities to help you build beautiful and accessible web applications with Vue and Nuxt." icon="i-lucide-rocket" />
</template>
```

### Features

Use the `features` prop to display a list of [PageFeature](https://ui.nuxt.com/components/page-feature) under the description as an array of objects with the following properties:

- `title?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `description?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `icon?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `orientation?: 'horizontal' | 'vertical'`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

You can pass any property from the [Link](https://ui.nuxt.com/components/link#props) component such as `to`, `target`, etc.

```vue
<template>
  <UPageSection title="Beautiful Vue UI components" description="Nuxt UI provides a comprehensive suite of components and utilities to help you build beautiful and accessible web applications with Vue and Nuxt." />
</template>
```

### Links

Use the `links` prop to display a list of [Button](https://ui.nuxt.com/components/button) under the description.

```vue
<template>
  <UPageSection title="Beautiful Vue UI components" description="Nuxt UI provides a comprehensive suite of components and utilities to help you build beautiful and accessible web applications with Vue and Nuxt." />
</template>
```

### Orientation

Use the `orientation` prop to change the orientation with the default slot. Defaults to `vertical`.

```vue
<template>
  <UPageSection title="Beautiful Vue UI components" description="Nuxt UI provides a comprehensive suite of components and utilities to help you build beautiful and accessible web applications with Vue and Nuxt." icon="i-lucide-rocket" orientation="horizontal">
    <img src="https://picsum.photos/704/1294" width="352" height="647" alt="Illustration" class="w-full rounded-lg" />
  </UPageSection>
</template>
```

### Reverse

Use the `reverse` prop to reverse the orientation of the default slot.

```vue
<template>
  <UPageSection title="Beautiful Vue UI components" description="Nuxt UI provides a comprehensive suite of components and utilities to help you build beautiful and accessible web applications with Vue and Nuxt." icon="i-lucide-rocket" orientation="horizontal" reverse>
    <img src="https://picsum.photos/704/1294" width="352" height="647" alt="Illustration" class="w-full rounded-lg" />
  </UPageSection>
</template>
```

## API

### Props

```ts
/**
 * Props for the PageSection component
 */
interface PageSectionProps {
  /**
   * The element or component this component should render as.
   * @default "\"section\""
   */
  as?: any;
  /**
   * The headline displayed above the title.
   */
  headline?: string | undefined;
  /**
   * The icon displayed above the title.
   */
  icon?: string | undefined;
  title?: string | undefined;
  description?: string | undefined;
  /**
   * Display a list of Button under the description.
   * `{ size: 'lg' }`{lang="ts-type"}
   */
  links?: ButtonProps[] | undefined;
  /**
   * Display a list of PageFeature under the description.
   */
  features?: PageFeatureProps[] | undefined;
  /**
   * The orientation of the section.
   * @default "\"vertical\""
   */
  orientation?: "horizontal" | "vertical" | undefined;
  /**
   * Reverse the order of the default slot.
   */
  reverse?: boolean | undefined;
  ui?: { root?: ClassNameValue; container?: ClassNameValue; wrapper?: ClassNameValue; header?: ClassNameValue; leading?: ClassNameValue; ... 7 more ...; links?: ClassNameValue; } | undefined;
}
```

### Slots

```ts
/**
 * Slots for the PageSection component
 */
interface PageSectionSlots {
  top(): any;
  header(): any;
  leading(): any;
  headline(): any;
  title(): any;
  description(): any;
  body(): any;
  features(): any;
  footer(): any;
  links(): any;
  default(): any;
  bottom(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  uiPro: {
    pageSection: {
      slots: {
        root: 'relative isolate',
        container: 'flex flex-col lg:grid py-16 sm:py-24 lg:py-32 gap-8 sm:gap-16',
        wrapper: '',
        header: '',
        leading: 'flex items-center mb-6',
        leadingIcon: 'size-10 shrink-0 text-primary',
        headline: 'mb-3',
        title: 'text-3xl sm:text-4xl lg:text-5xl text-pretty tracking-tight font-bold text-highlighted',
        description: 'text-base sm:text-lg text-muted',
        body: 'mt-8',
        features: 'grid',
        footer: 'mt-8',
        links: 'flex flex-wrap gap-x-6 gap-y-3'
      },
      variants: {
        orientation: {
          horizontal: {
            container: 'lg:grid-cols-2 lg:items-center',
            description: 'text-pretty',
            features: 'gap-4'
          },
          vertical: {
            container: '',
            headline: 'justify-center',
            leading: 'justify-center',
            title: 'text-center',
            description: 'text-center text-balance',
            links: 'justify-center',
            features: 'sm:grid-cols-2 lg:grid-cols-3 gap-8'
          }
        },
        reverse: {
          true: {
            wrapper: 'lg:order-last'
          }
        },
        headline: {
          true: {
            headline: 'font-semibold text-primary flex items-center gap-1.5'
          }
        },
        title: {
          true: {
            description: 'mt-6'
          }
        },
        description: {
          true: ''
        },
        body: {
          true: ''
        }
      },
      compoundVariants: [
        {
          orientation: 'vertical',
          title: true,
          class: {
            body: 'mt-16'
          }
        },
        {
          orientation: 'vertical',
          description: true,
          class: {
            body: 'mt-16'
          }
        },
        {
          orientation: 'vertical',
          body: true,
          class: {
            footer: 'mt-16'
          }
        }
      ]
    }
  }
})
```

