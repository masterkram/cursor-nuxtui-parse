# ChangelogVersion

## Usage

The ChangelogVersion component provides a flexible way to display an `<article>` element with customizable content including title, description, image, etc.

::code-preview
  :::u-changelog-version
  ---
  authors:
    - name: Benjamin Canac
      description: "@benjamincanac"
      avatar:
        src: https://github.com/benjamincanac.png
      to: https://x.com/benjamincanac
      target: _blank
    - name: Sebastien Chopin
      description: "@atinux"
      avatar:
        src: https://github.com/atinux.png
      to: https://x.com/atinux
      target: _blank
    - name: Hugo Richard
      description: "@hugorcd__"
      avatar:
        src: https://github.com/hugorcd.png
      to: https://x.com/hugorcd__
      target: _blank
  ui:
    container: max-w-lg
  class: w-full
  date: 2025-03-12
  description: Nuxt UI v3 is out! After 1500+ commits, this major redesign brings
    improved accessibility, Tailwind CSS v4 support, and full Vue compatibility.
  image: https://nuxt.com/assets/blog/nuxt-ui-v3.png
  target: _blank
  title: Introducing Nuxt UI v3
  to: https://nuxt.com/blog/nuxt-ui-v3
  ---
  :::
::

::tip{to="https://ui.nuxt.com/components/changelog-versions"}
Use the [`ChangelogVersions`](https://ui.nuxt.com/components/changelog-versions) component to display multiple changelog versions in a timeline with an indicator bar on the left.
::

### Title

Use the `title` prop to display the title of the ChangelogVersion.

```vue
<template>
  <UChangelogVersion title="Introducing Nuxt UI v3" />
</template>
```

### Description

Use the `description` prop to display the description of the ChangelogVersion.

```vue
<template>
  <UChangelogVersion title="Introducing Nuxt UI v3" description="Nuxt UI v3 is out! After 1500+ commits, this major redesign brings improved accessibility, Tailwind CSS v4 support, and full Vue compatibility." />
</template>
```

### Date

Use the `date` prop to display the date of the ChangelogVersion.

::tip
The date is automatically formatted to the [current locale](https://ui.nuxt.com/getting-started/i18n/nuxt#locale). You can either pass a `Date` object or a string.
::

```vue
<template>
  <UChangelogVersion title="Introducing Nuxt UI v3" description="Nuxt UI v3 is out! After 1500+ commits, this major redesign brings improved accessibility, Tailwind CSS v4 support, and full Vue compatibility." date="2025-03-12" />
</template>
```

### Badge

Use the `badge` prop to display a [Badge](https://ui.nuxt.com/components/badge) on the ChangelogVersion.

```vue
<template>
  <UChangelogVersion title="Introducing Nuxt UI v3" description="Nuxt UI v3 is out! After 1500+ commits, this major redesign brings improved accessibility, Tailwind CSS v4 support, and full Vue compatibility." date="2025-03-12" badge="Release" />
</template>
```

You can pass any property from the [Badge](https://ui.nuxt.com/components/badge#props) component to customize it.

```vue
<template>
  <UChangelogVersion title="Introducing Nuxt UI v3" description="Nuxt UI v3 is out! After 1500+ commits, this major redesign brings improved accessibility, Tailwind CSS v4 support, and full Vue compatibility." date="2025-03-12" />
</template>
```

### Image

Use the `image` prop to display an image in the BlogPost.

::note
If [`@nuxt/image`](https://image.nuxt.com/get-started/installation){rel="nofollow"} is installed, the `<NuxtImg>` component will be used instead of the native `img` tag.
::

```vue
<template>
  <UChangelogVersion title="Introducing Nuxt UI v3" description="Nuxt UI v3 is out! After 1500+ commits, this major redesign brings improved accessibility, Tailwind CSS v4 support, and full Vue compatibility." date="2025-03-12" image="https://nuxt.com/assets/blog/nuxt-ui-v3.png" />
</template>
```

### Authors

Use the `authors` prop to display a list of [User](https://ui.nuxt.com/components/user) in the ChangelogVersion as an array of objects with the following properties:

- `name?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `description?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `avatar?: Omit<AvatarProps, 'size'>`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `chip?: boolean | Omit<ChipProps, 'size' | 'inset'>`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `size?: UserProps['size']`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `orientation?: UserProps['orientation']`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

You can pass any property from the [Link](https://ui.nuxt.com/components/link#props) component such as `to`, `target`, etc.

```vue
<template>
  <UChangelogVersion title="Introducing Nuxt UI v3" description="Nuxt UI v3 is out! After 1500+ commits, this major redesign brings improved accessibility, Tailwind CSS v4 support, and full Vue compatibility." date="2025-03-12" image="https://nuxt.com/assets/blog/nuxt-ui-v3.png" />
</template>
```

### Link

You can pass any property from the [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link){rel="nofollow"} component such as `to`, `target`, `rel`, etc.

```vue
<template>
  <UChangelogVersion title="Introducing Nuxt UI v3" description="Nuxt UI v3 is out! After 1500+ commits, this major redesign brings improved accessibility, Tailwind CSS v4 support, and full Vue compatibility." date="2025-03-12" image="https://nuxt.com/assets/blog/nuxt-ui-v3.png" to="https://nuxt.com/blog/nuxt-ui-v3" target="_blank" />
</template>
```

### Indicator

Use the `indicator` prop to hide the indicator dot on the left. Defaults to `true`.

```vue
<template>
  <UChangelogVersion title="Introducing Nuxt UI v3" description="Nuxt UI v3 is out! After 1500+ commits, this major redesign brings improved accessibility, Tailwind CSS v4 support, and full Vue compatibility." date="2025-03-12" image="https://nuxt.com/assets/blog/nuxt-ui-v3.png" :indicator="false" />
</template>
```

::note
When the `indicator` prop is `false`, the date will be displayed over the title.
::

## Examples

### With body slot

You can use the `body` slot to display custom content between the image and the authors.

::note{to="https://ui.nuxt.com/getting-started/typography"}
To display some markdown you can use the `MDC` component from [`@nuxtjs/mdc`](https://github.com/nuxt-modules/mdc){rel="nofollow"} or directly use the `:u-changelog-version` component in your markdown as Nuxt UI Pro provides pre-styled prose components.
::

```vue [ChangelogVersionMarkdownExample.vue]
<script setup lang="ts">
const content = `
![Nuxt UI v3](https://nuxt.com/assets/blog/nuxt-ui-v3.png)

We are thrilled to introduce Nuxt UI v3, a comprehensive redesign of our UI library that delivers significant improvements in accessibility, performance, and developer experience. This major update represents over 1,500 commits of dedicated work, collaboration, and innovation from our team and the community.

Read the blog post announcement: https://nuxt.com/blog/nuxt-ui-v3

**[Get started with Nuxt UI v3 →](https://ui.nuxt.com/getting-started/installation/nuxt)**

### 🧩 Reka UI: A New Foundation

We've transitioned from [Headless UI](https://headlessui.com/) to [Reka UI](https://reka-ui.com/) as our core component foundation, bringing:

- **Expanded Component Library**: Access to 55+ primitives, significantly expanding our component offerings
- **Future-Proof Development**: Benefit from Reka UI's growing popularity and continuous improvements
- **First-Class Accessibility**: Built-in accessibility features aligned with our commitment to inclusive design

### 🚀 Tailwind CSS v4 Integration

Nuxt UI now leverages the latest [Tailwind CSS v4](https://tailwindcss.com), delivering:

- **Exceptional Performance**: Full builds up to 5× faster, with incremental builds over 100× faster
- **Streamlined Toolchain**: Built-in import handling, vendor prefixing, and syntax transforms with zero additional tooling
- **CSS-First Configuration**: Customize and extend the framework directly in CSS instead of JavaScript configuration

### 🎨 Tailwind Variants

We've adopted [Tailwind Variants](https://www.tailwind-variants.org/) to power our design system, offering:

- **Dynamic Styling**: Create flexible component variants with a powerful, intuitive API
- **Type Safety**: Full TypeScript support with intelligent auto-completion
- **Smart Conflict Resolution**: Efficiently merge conflicting styles with predictable results

## Migration from v2

We want to be transparent: migrating from Nuxt UI v2 to v3 requires significant effort. While we've maintained core concepts and components, Nuxt UI v3 has been rebuilt from the ground up to provide enhanced capabilities.

To upgrade your project:

1. Read our detailed [migration guide](https://ui.nuxt.com/getting-started/migration)
2. Review the new documentation and components before attempting to upgrade
3. Report any issues on our [GitHub repository](https://github.com/nuxt/ui/issues)

## 🙏 Acknowledgements

This release represents thousands of hours of work from our team and the community. We'd like to thank everyone who contributed to making Nuxt UI v3 a reality, especially @romhml, @sandros94, and @hywax for their tremendous work.
`

const version = {
  title: 'Introducing Nuxt UI v3',
  description: 'Nuxt UI v3 is out! After 1500+ commits, this major redesign brings improved accessibility, Tailwind CSS v4 support, and full Vue compatibility.',
  date: '2025-03-12T00:00:00.000Z',
  badge: 'Release',
  to: 'https://nuxt.com/blog/nuxt-ui-v3',
  target: '_blank',
  content,
  authors: [{
    name: 'Benjamin Canac',
    avatar: {
      src: 'https://github.com/benjamincanac.png',
      alt: 'Benjamin Canac'
    },
    to: 'https://github.com/benjamincanac',
    target: '_blank'
  }]
}
</script>

<template>
  <UChangelogVersion v-bind="version" :ui="{ container: 'max-w-lg' }" class="w-full">
    <template #body>
      <MDC :value="version.content" />
    </template>
  </UChangelogVersion>
</template>
```

## API

### Props

```ts
/**
 * Props for the ChangelogVersion component
 */
interface ChangelogVersionProps {
  /**
   * The element or component this component should render as.
   * @default "\"article\""
   */
  as?: any;
  title?: string | undefined;
  description?: string | undefined;
  /**
   * The date of the changelog version. Can be a string or a Date object.
   */
  date?: string | Date | undefined;
  /**
   * Display a badge on the changelog version.
   * Can be a string or an object.
   * `{ color: 'neutral', variant: 'solid' }`{lang="ts-type"}
   */
  badge?: string | BadgeProps | undefined;
  /**
   * The authors of the changelog version.
   */
  authors?: UserProps[] | undefined;
  /**
   * The image of the changelog version. Can be a string or an object.
   */
  image?: string | Partial<HTMLImageElement> | undefined;
  /**
   * Display an indicator dot on the left.
   * @default "true"
   */
  indicator?: boolean | undefined;
  to?: string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric | undefined;
  target?: "_blank" | "_parent" | "_self" | "_top" | (string & {}) | null | undefined;
  ui?: { root?: ClassNameValue; container?: ClassNameValue; header?: ClassNameValue; meta?: ClassNameValue; date?: ClassNameValue; ... 9 more ...; dotInner?: ClassNameValue; } | undefined;
}
```

### Slots

```ts
/**
 * Slots for the ChangelogVersion component
 */
interface ChangelogVersionSlots {
  header(): any;
  badge(): any;
  date(): any;
  title(): any;
  description(): any;
  image(): any;
  body(): any;
  footer(): any;
  authors(): any;
  actions(): any;
  indicator(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  uiPro: {
    changelogVersion: {
      slots: {
        root: 'relative',
        container: 'flex flex-col mx-auto max-w-2xl',
        header: '',
        meta: 'flex items-center gap-3 mb-2',
        date: 'text-sm/6 text-toned truncate',
        badge: '',
        title: 'relative text-xl text-pretty font-semibold text-highlighted',
        description: 'text-base text-pretty text-muted mt-1',
        imageWrapper: 'relative overflow-hidden rounded-lg aspect-[16/9] mt-5 group/changelog-version-image',
        image: 'object-cover object-top w-full h-full',
        authors: 'flex flex-wrap gap-x-4 gap-y-1.5',
        footer: 'border-t border-default pt-5 flex items-center justify-between',
        indicator: 'absolute left-0 top-0 w-32 hidden lg:flex items-center justify-end gap-3 min-w-0',
        dot: 'size-4 rounded-full bg-default ring ring-default flex items-center justify-center my-1',
        dotInner: 'size-2 rounded-full bg-primary'
      },
      variants: {
        body: {
          false: {
            footer: 'mt-5'
          }
        },
        badge: {
          false: {
            meta: 'lg:hidden'
          }
        },
        to: {
          true: {
            image: 'transform transition-transform duration-200 group-hover/changelog-version-image:scale-105'
          }
        },
        hidden: {
          true: {
            date: 'lg:hidden'
          }
        }
      }
    }
  }
})
```

