# BlogPosts

## Usage

The BlogPosts component provides a flexible layout to display a list of [BlogPost](https://ui.nuxt.com/components/blog-post) components using either the default slot or the `posts` prop.

```vue {2,8}
<template>
  <UBlogPosts>
    <UBlogPost
      v-for="(post, index) in posts"
      :key="index"
      v-bind="post"
    />
  </UBlogPosts>
</template>
```

### Posts

Use the `posts` prop as an array of objects with the properties of the [BlogPost](https://ui.nuxt.com/components/blog-post#props) component.

```vue
<template>
  <UBlogPosts />
</template>
```

### Orientation

Use the `orientation` prop to change the orientation of the BlogPosts. Defaults to `horizontal`.

```vue
<template>
  <UBlogPosts orientation="vertical" />
</template>
```

::tip
When using the `posts` prop instead of the default slot, the `orientation` of the posts is automatically reversed, `horizontal` to `vertical` and vice versa.
::

## Examples

::note
While these examples use [Nuxt Content](https://content.nuxt.com){rel="nofollow"}, the components can be integrated with any content management system.
::

### Within a page

Use the BlogPosts component in a page to create a blog page:

```vue [pages/blog/index.vue] {11-18}
<script setup lang="ts">
const { data: posts } = await useAsyncData('posts', () => queryCollection('posts').all())
</script>

<template>
  <UPage>
    <UPageHero title="Blog" />

    <UPageBody>
      <UContainer>
        <UBlogPosts>
          <UBlogPost
            v-for="(post, index) in posts"
            :key="index"
            v-bind="post"
            :to="post.path"
          />
        </UBlogPosts>
      </UContainer>
    </UPageBody>
  </UPage>
</template>
```

::note
In this example, the `posts` are fetched using `queryCollection` from the `@nuxt/content` module.
::

::tip
The `to` prop is overridden here since `@nuxt/content` uses the `path` property.
::

## API

### Props

```ts
/**
 * Props for the BlogPosts component
 */
interface BlogPostsProps {
  /**
   * The element or component this component should render as.
   */
  as?: any;
  posts?: BlogPostProps[] | undefined;
  /**
   * The orientation of the blog posts.
   * @default "\"horizontal\""
   */
  orientation?: "horizontal" | "vertical" | undefined;
}
```

### Slots

```ts
/**
 * Slots for the BlogPosts component
 */
interface BlogPostsSlots {
  default(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  uiPro: {
    blogPosts: {
      base: 'flex flex-col gap-8 lg:gap-y-16',
      variants: {
        orientation: {
          horizontal: 'sm:grid sm:grid-cols-2 lg:grid-cols-3',
          vertical: ''
        }
      }
    }
  }
})
```

