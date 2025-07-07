# PageHeader

## Usage

The PageHeader component displays a header for your page.

Use it inside the default slot of the [Page](https://ui.nuxt.com/components/page) component, before the [PageBody](https://ui.nuxt.com/components/page-body) component:

```vue {3}
<template>
  <UPage>
    <UPageHeader />

    <UPageBody />
  </UPage>
</template>
```

### Title

Use the `title` prop to display a title in the header.

```vue
<template>
  <UPageHeader title="PageHeader" />
</template>
```

### Description

Use the `description` prop to display a description in the header.

```vue
<template>
  <UPageHeader title="PageHeader" description="A responsive page header with title, description and actions." />
</template>
```

### Headline

Use the `headline` prop to display a headline in the header.

```vue
<template>
  <UPageHeader title="PageHeader" description="A responsive page header with title, description and actions." headline="Components" />
</template>
```

### Links

Use the `links` prop to display a list of [Button](https://ui.nuxt.com/components/button) in the header.

```vue
<template>
  <UPageHeader title="PageHeader" description="A responsive page header with title, description and actions." headline="Components" />
</template>
```

## Examples

::note
While these examples use [Nuxt Content](https://content.nuxt.com){rel="nofollow"}, the components can be integrated with any content management system.
::

### Within a page

Use the PageHeader component in a page to display the header of the page:

```vue [pages/[...slug\\].vue] {19-24}
<script setup lang="ts">
const route = useRoute()

definePageMeta({
  layout: 'docs'
})

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => {
  return queryCollectionItemSurroundings('content', route.path)
})
</script>

<template>
  <UPage>
    <UPageHeader
      :title="page.title"
      :description="page.description"
      :headline="page.headline"
      :links="page.links"
    />

    <UPageBody>
      <ContentRenderer :value="page" />

      <USeparator />

      <UContentSurround :surround="surround" />
    </UPageBody>

    <template #right>
      <UContentToc :links="page.body.toc.links" />
    </template>
  </UPage>
</template>
```

## API

### Props

```ts
/**
 * Props for the PageHeader component
 */
interface PageHeaderProps {
  /**
   * The element or component this component should render as.
   */
  as?: any;
  headline?: string | undefined;
  title?: string | undefined;
  description?: string | undefined;
  /**
   * Display a list of Button next to the title.
   * `{ color: 'neutral', variant: 'outline' }`{lang="ts-type"}
   */
  links?: ButtonProps[] | undefined;
  ui?: { root?: ClassNameValue; container?: ClassNameValue; wrapper?: ClassNameValue; headline?: ClassNameValue; title?: ClassNameValue; description?: ClassNameValue; links?: ClassNameValue; } | undefined;
}
```

### Slots

```ts
/**
 * Slots for the PageHeader component
 */
interface PageHeaderSlots {
  headline(): any;
  title(): any;
  description(): any;
  links(): any;
  default(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  uiPro: {
    pageHeader: {
      slots: {
        root: 'relative border-b border-default py-8',
        container: '',
        wrapper: 'flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4',
        headline: 'mb-2.5 text-sm font-semibold text-primary flex items-center gap-1.5',
        title: 'text-3xl sm:text-4xl text-pretty font-bold text-highlighted',
        description: 'text-lg text-pretty text-muted',
        links: 'flex flex-wrap items-center gap-1.5'
      },
      variants: {
        title: {
          true: {
            description: 'mt-4'
          }
        }
      }
    }
  }
})
```

