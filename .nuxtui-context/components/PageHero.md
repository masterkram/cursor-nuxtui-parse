# PageHero

## Usage

The PageHero component wraps your content in a [Container](https://ui.nuxt.com/components/container) while maintaining full-width flexibility making it easy to add background colors, images or patterns. It provides a flexible way to display content with an illustration in the default slot.

::code-preview
  :::u-page-hero
  ---
  description: A Nuxt/Vue-integrated UI library providing a rich set of
    fully-styled, accessible and highly customizable components for building
    modern web applications.
  title: Ultimate Vue UI library
  ---
    ::::u-page-card
    ---
    class: rounded-lg
    variant: subtle
    ---
    #default{unwrap="p"}
    ![App screenshot](https://ui.nuxt.com/templates/dashboard1.png){.rounded-sm.shadow-2xl.ring.ring-default height="3000" width="4804"}
    ::::
  :::
::

### Title

Use the `title` prop to set the title of the hero.

```vue
<template>
  <UPageHero title="Ultimate Vue UI library" />
</template>
```

### Description

Use the `description` prop to set the description of the hero.

```vue
<template>
  <UPageHero title="Ultimate Vue UI library" description="A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications." />
</template>
```

### Headline

Use the `headline` prop to set the headline of the hero.

```vue
<template>
  <UPageHero title="Ultimate Vue UI library" description="A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications." headline="New release" />
</template>
```

### Links

Use the `links` prop to display a list of [Button](https://ui.nuxt.com/components/button) under the description.

```vue
<template>
  <UPageHero title="Ultimate Vue UI library" description="A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications." />
</template>
```

### Orientation

Use the `orientation` prop to change the orientation with the default slot. Defaults to `vertical`.

```vue
<template>
  <UPageHero title="Ultimate Vue UI library" description="A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications." headline="New release" orientation="horizontal">
    <img src="https://ui.nuxt.com/templates/dashboard1.png" alt="App screenshot" class="rounded-lg shadow-2xl ring ring-default" />
  </UPageHero>
</template>
```

### Reverse

Use the `reverse` prop to reverse the orientation of the default slot.

```vue
<template>
  <UPageHero title="Ultimate Vue UI library" description="A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications." headline="New release" orientation="horizontal" reverse>
    <img src="https://ui.nuxt.com/templates/dashboard1.png" alt="App screenshot" class="rounded-lg shadow-2xl ring ring-default" />
  </UPageHero>
</template>
```

## API

### Props

```ts
/**
 * Props for the PageHero component
 */
interface PageHeroProps {
  /**
   * The element or component this component should render as.
   */
  as?: any;
  headline?: string | undefined;
  title?: string | undefined;
  description?: string | undefined;
  /**
   * Display a list of Button under the description.
   * `{ size: 'xl' }`{lang="ts-type"}
   */
  links?: ButtonProps[] | undefined;
  /**
   * The orientation of the page hero.
   * @default "\"vertical\""
   */
  orientation?: "horizontal" | "vertical" | undefined;
  /**
   * Reverse the order of the default slot.
   */
  reverse?: boolean | undefined;
  ui?: { root?: ClassNameValue; container?: ClassNameValue; wrapper?: ClassNameValue; header?: ClassNameValue; headline?: ClassNameValue; ... 4 more ...; links?: ClassNameValue; } | undefined;
}
```

### Slots

```ts
/**
 * Slots for the PageHero component
 */
interface PageHeroSlots {
  top(): any;
  header(): any;
  headline(): any;
  title(): any;
  description(): any;
  body(): any;
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
    pageHero: {
      slots: {
        root: 'relative isolate',
        container: 'flex flex-col lg:grid py-24 sm:py-32 lg:py-40 gap-16 sm:gap-y-24',
        wrapper: '',
        header: '',
        headline: 'mb-4',
        title: 'text-5xl sm:text-7xl text-pretty tracking-tight font-bold text-highlighted',
        description: 'text-lg sm:text-xl/8 text-muted',
        body: 'mt-10',
        footer: 'mt-10',
        links: 'flex flex-wrap gap-x-6 gap-y-3'
      },
      variants: {
        orientation: {
          horizontal: {
            container: 'lg:grid-cols-2 lg:items-center',
            description: 'text-pretty'
          },
          vertical: {
            container: '',
            headline: 'justify-center',
            wrapper: 'text-center',
            description: 'text-balance',
            links: 'justify-center'
          }
        },
        reverse: {
          true: {
            wrapper: 'order-last'
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
        }
      }
    }
  }
})
```

