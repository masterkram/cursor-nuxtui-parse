# BlogPost

## Usage

The BlogPost component provides a flexible way to display an `<article>` element with customizable content including title, description, image, etc.

::code-preview
  :::u-blog-post
  ---
  authors:
    - name: Anthony Fu
      description: antfu7
      avatar:
        src: https://github.com/antfu.png
      to: https://github.com/antfu
      target: _blank
  class: w-96
  date: 2024-11-25
  description: Discover Nuxt Icon v1 - a modern, versatile, and customizable icon
    solution for your Nuxt projects.
  image: https://nuxt.com/assets/blog/nuxt-icon/cover.png
  target: _blank
  title: Introducing Nuxt Icon v1
  to: https://nuxt.com/blog/nuxt-icon-v1-0
  ---
  :::
::

::tip{to="https://ui.nuxt.com/components/blog-posts"}
Use the [`BlogPosts`](https://ui.nuxt.com/components/blog-posts) component to display multiple blog posts in a responsive grid layout.
::

### Title

Use the `title` prop to display the title of the BlogPost.

```vue
<template>
  <UBlogPost title="Introducing Nuxt Icon v1" />
</template>
```

### Description

Use the `description` prop to display the description of the BlogPost.

```vue
<template>
  <UBlogPost title="Introducing Nuxt Icon v1" description="Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects." />
</template>
```

### Date

Use the `date` prop to display the date of the BlogPost.

::tip
The date is automatically formatted to the [current locale](https://ui.nuxt.com/getting-started/i18n/nuxt#locale). You can either pass a `Date` object or a string.
::

```vue
<template>
  <UBlogPost title="Introducing Nuxt Icon v1" description="Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects." date="2024-11-25" />
</template>
```

### Badge

Use the `badge` prop to display a [Badge](https://ui.nuxt.com/components/badge) in the BlogPost.

```vue
<template>
  <UBlogPost title="Introducing Nuxt Icon v1" description="Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects." badge="Release" />
</template>
```

You can pass any property from the [Badge](https://ui.nuxt.com/components/badge#props) component to customize it.

```vue
<template>
  <UBlogPost title="Introducing Nuxt Icon v1" description="Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects." />
</template>
```

### Image

Use the `image` prop to display an image in the BlogPost.

::note
If [`@nuxt/image`](https://image.nuxt.com/get-started/installation){rel="nofollow"} is installed, the `<NuxtImg>` component will be used instead of the native `img` tag.
::

```vue
<template>
  <UBlogPost title="Introducing Nuxt Icon v1" description="Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects." image="https://nuxt.com/assets/blog/nuxt-icon/cover.png" date="2024-11-25" />
</template>
```

### Authors

Use the `authors` prop to display a list of [User](https://ui.nuxt.com/components/user) in the BlogPost as an array of objects with the following properties:

- `name?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `description?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `avatar?: Omit<AvatarProps, 'size'>`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `chip?: boolean | Omit<ChipProps, 'size' | 'inset'>`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `size?: UserProps['size']`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `orientation?: UserProps['orientation']`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

You can pass any property from the [Link](https://ui.nuxt.com/components/link#props) component such as `to`, `target`, etc.

```vue
<template>
  <UBlogPost title="Introducing Nuxt Icon v1" description="Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects." image="https://nuxt.com/assets/blog/nuxt-icon/cover.png" date="2024-11-25" />
</template>
```

When the `authors` prop has more than one item, the [AvatarGroup](https://ui.nuxt.com/components/avatar-group) component is used.

```vue
<template>
  <UBlogPost title="Introducing Nuxt Icon v1" description="Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects." image="https://nuxt.com/assets/blog/nuxt-icon/cover.png" date="2024-11-25" />
</template>
```

### Link

You can pass any property from the [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link){rel="nofollow"} component such as `to`, `target`, `rel`, etc.

```vue
<template>
  <UBlogPost title="Introducing Nuxt Icon v1" description="Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects." image="https://nuxt.com/assets/blog/nuxt-icon/cover.png" date="2024-11-25" to="https://nuxt.com/blog/nuxt-icon-v1-0" target="_blank" />
</template>
```

### Variant

Use the `variant` prop to change the style of the BlogPost.

```vue
<template>
  <UBlogPost title="Introducing Nuxt Icon v1" description="Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects." image="https://nuxt.com/assets/blog/nuxt-icon/cover.png" date="2024-11-25" to="https://nuxt.com/blog/nuxt-icon-v1-0" target="_blank" variant="naked" />
</template>
```

::note
The styling will be different wether you provide a `to` prop or an `image`.
::

### Orientation

Use the `orientation` prop to change the BlogPost orientation. Defaults to `vertical`.

```vue
<template>
  <UBlogPost title="Introducing Nuxt Icon v1" description="Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects." image="https://nuxt.com/assets/blog/nuxt-icon/cover.png" date="2024-11-25" to="https://nuxt.com/blog/nuxt-icon-v1-0" target="_blank" orientation="horizontal" variant="outline" />
</template>
```

## API

### Props

```ts
/**
 * Props for the BlogPost component
 */
interface BlogPostProps {
  /**
   * The element or component this component should render as.
   * @default "\"article\""
   */
  as?: any;
  title?: string | undefined;
  description?: string | undefined;
  /**
   * The date of the blog post. Can be a string or a Date object.
   */
  date?: string | Date | undefined;
  /**
   * Display a badge on the blog post.
   * Can be a string or an object.
   * `{ color: 'neutral', variant: 'subtle' }`{lang="ts-type"}
   */
  badge?: string | BadgeProps | undefined;
  /**
   * The authors of the blog post.
   */
  authors?: UserProps[] | undefined;
  /**
   * The image of the blog post. Can be a string or an object.
   */
  image?: string | Partial<HTMLImageElement> | undefined;
  /**
   * The orientation of the blog post.
   * @default "\"vertical\""
   */
  orientation?: "horizontal" | "vertical" | undefined;
  variant?: "outline" | "soft" | "subtle" | "ghost" | "naked" | undefined;
  to?: string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric | undefined;
  target?: "_blank" | "_parent" | "_self" | "_top" | (string & {}) | null | undefined;
  ui?: { root?: ClassNameValue; header?: ClassNameValue; body?: ClassNameValue; footer?: ClassNameValue; image?: ClassNameValue; ... 6 more ...; badge?: ClassNameValue; } | undefined;
}
```

### Slots

```ts
/**
 * Slots for the BlogPost component
 */
interface BlogPostSlots {
  date(): any;
  badge(): any;
  title(): any;
  description(): any;
  authors(): any;
  header(): any;
  body(): any;
  footer(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  uiPro: {
    blogPost: {
      slots: {
        root: 'relative group/blog-post flex flex-col rounded-lg overflow-hidden',
        header: 'relative overflow-hidden aspect-[16/9] w-full pointer-events-none',
        body: 'min-w-0 flex-1 flex flex-col',
        footer: '',
        image: 'object-cover object-top w-full h-full',
        title: 'text-xl text-pretty font-semibold text-highlighted',
        description: 'mt-1 text-base text-pretty',
        authors: 'pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5',
        avatar: '',
        meta: 'flex items-center gap-2 mb-2',
        date: 'text-sm',
        badge: ''
      },
      variants: {
        orientation: {
          horizontal: {
            root: 'lg:grid lg:grid-cols-2 lg:items-center gap-x-8',
            body: 'justify-center p-4 sm:p-6 lg:px-0'
          },
          vertical: {
            root: 'flex flex-col',
            body: 'p-4 sm:p-6'
          }
        },
        variant: {
          outline: {
            root: 'bg-default ring ring-default',
            date: 'text-toned',
            description: 'text-muted'
          },
          soft: {
            root: 'bg-elevated/50',
            date: 'text-muted',
            description: 'text-toned'
          },
          subtle: {
            root: 'bg-elevated/50 ring ring-default',
            date: 'text-muted',
            description: 'text-toned'
          },
          ghost: {
            date: 'text-toned',
            description: 'text-muted',
            header: 'shadow-lg rounded-lg'
          },
          naked: {
            root: 'p-0 sm:p-0',
            date: 'text-toned',
            description: 'text-muted',
            header: 'shadow-lg rounded-lg'
          }
        },
        to: {
          true: {
            root: [
              'transition'
            ],
            image: 'transform transition-transform duration-200 group-hover/blog-post:scale-110',
            avatar: 'transform transition-transform duration-200 hover:scale-115'
          }
        },
        image: {
          true: ''
        }
      },
      compoundVariants: [
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
            root: 'hover:bg-elevated hover:ring-accented'
          }
        },
        {
          variant: 'ghost',
          to: true,
          class: {
            root: 'hover:bg-elevated/50',
            header: [
              'group-hover/blog-post:shadow-none',
              'transition-all'
            ]
          }
        },
        {
          variant: 'ghost',
          to: true,
          orientation: 'vertical',
          class: {
            header: 'group-hover/blog-post:rounded-b-none'
          }
        },
        {
          variant: 'ghost',
          to: true,
          orientation: 'horizontal',
          class: {
            header: 'group-hover/blog-post:rounded-r-none'
          }
        },
        {
          orientation: 'vertical',
          image: false,
          variant: 'naked',
          class: {
            body: 'p-0 sm:p-0'
          }
        }
      ],
      defaultVariants: {
        variant: 'outline'
      }
    }
  }
})
```

