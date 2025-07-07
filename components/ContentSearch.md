# ContentSearch

::warning{to="https://ui.nuxt.com/getting-started/content"}
This component is only available when the `@nuxt/content` module is installed.
::

## Usage

The ContentSearch component extends the [CommandPalette](https://ui.nuxt.com/components/command-palette) component, so you can pass any property such as `icon`, `placeholder`, etc.

Use the `files` and `navigation` props with the `files`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} and `navigation`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} values you fetched using the `queryCollectionSearchSections` and `queryCollectionNavigation` composables from `@nuxt/content`.

```vue [ContentSearchExample.vue]
<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const { data: files } = useLazyAsyncData('search', () => queryCollectionSearchSections('content'), {
  server: false
})

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')

const searchTerm = ref('')
</script>

<template>
  <ClientOnly>
    <LazyUContentSearch
      v-model:search-term="searchTerm"
      open
      :autofocus="false"
      :files="files"
      :navigation="navigation"
      :fuse="{ resultLimit: 42 }"
    />
  </ClientOnly>
</template>
```

::tip
You can open the CommandPalette by pressing `` ``, by using the [ContentSearchButton](https://ui.nuxt.com/components/content-search-button) component or by using the `useContentSearch` composable: `const { open } = useContentSearch()`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts"}.
::

### Shortcut

Use the `shortcut` prop to change the shortcut used in [defineShortcuts](https://ui.nuxt.com/composables/define-shortcuts) to open the ContentSearch component. Defaults to `meta_k` (`` ``).

```vue [app.vue] {6}
<template>
  <UApp>
    <ClientOnly>
      <LazyUContentSearch
        v-model:search-term="searchTerm"
        shortcut="meta_k"
        :files="files"
        :navigation="navigation"
        :fuse="{ resultLimit: 42 }"
      />
    </ClientOnly>
  </UApp>
</template>
```

### Color Mode

By default, a group of commands will be added to the command palette so you can switch between light and dark mode. This will only take effect if the `colorMode` is not forced in a specific page which can be achieved through `definePageMeta`:

```vue [pages/index.vue]
<script setup lang="ts">
definePageMeta({
  colorMode: 'dark'
})
</script>
```

You can disable this behavior by setting the `color-mode` prop to `false`:

```vue [app.vue] {6}
<template>
  <UApp>
    <ClientOnly>
      <LazyUContentSearch
        v-model:search-term="searchTerm"
        :color-mode="false"
        :files="files"
        :navigation="navigation"
        :fuse="{ resultLimit: 42 }"
      />
    </ClientOnly>
  </UApp>
</template>
```

## Examples

### Within `app.vue`

Use the ContentSearch component in your `app.vue` or in a layout:

```vue [app.vue]
<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('content'))
const { data: files } = useLazyAsyncData('search', () => queryCollectionSearchSections('content'), {
  server: false
})

const links = [{
  label: 'Docs',
  icon: 'i-lucide-book',
  to: '/getting-started'
}, {
  label: 'Components',
  icon: 'i-lucide-box',
  to: '/components'
}, {
  label: 'Roadmap',
  icon: 'i-lucide-chart-no-axes-gantt',
  to: '/roadmap'
}]

const searchTerm = ref('')
</script>

<template>
  <UApp>
    <ClientOnly>
      <LazyUContentSearch
        v-model:search-term="searchTerm"
        :files="files"
        shortcut="meta_k"
        :navigation="navigation"
        :links="links"
        :fuse="{ resultLimit: 42 }"
      />
    </ClientOnly>
  </UApp>
</template>
```

::tip
It is recommended to wrap the `ContentSearch` component in a [ClientOnly](https://nuxt.com/docs/api/components/client-only){rel="nofollow"} component so it's not rendered on the server.
::

## API

### Props

```ts
/**
 * Props for the ContentSearch component
 */
interface ContentSearchProps {
  /**
   * The icon displayed in the input.
   */
  icon?: string | undefined;
  /**
   * The placeholder text for the input.
   */
  placeholder?: string | undefined;
  /**
   * Automatically focus the input when component is mounted.
   */
  autofocus?: boolean | undefined;
  /**
   * When `true`, the loading icon will be displayed.
   */
  loading?: boolean | undefined;
  /**
   * The icon when the `loading` prop is `true`.
   */
  loadingIcon?: string | undefined;
  /**
   * Display a close button in the input (useful when inside a Modal for example).
   * `{ size: 'md', color: 'neutral', variant: 'ghost' }`{lang="ts-type"}
   * @default "true"
   */
  close?: boolean | Partial<ButtonProps> | undefined;
  /**
   * The icon displayed in the close button.
   */
  closeIcon?: string | undefined;
  /**
   * Keyboard shortcut to open the search (used by [`defineShortcuts`](https://ui.nuxt.com/composables/define-shortcuts))
   * @default "\"meta_k\""
   */
  shortcut?: string | undefined;
  /**
   * Links group displayed as the first group in the command palette.
   */
  links?: ContentSearchLink[] | undefined;
  navigation?: ContentNavigationItem[] | undefined;
  /**
   * Custom groups displayed between navigation and color mode group.
   */
  groups?: CommandPaletteGroup<ContentSearchItem>[] | undefined;
  files?: ContentSearchFile[] | undefined;
  /**
   * Options for [useFuse](https://vueuse.org/integrations/useFuse) passed to the [CommandPalette](https://ui.nuxt.com/components/command-palette).
   */
  fuse?: UseFuseOptions<ContentSearchLink> | undefined;
  /**
   * When `true`, the theme command will be added to the groups.
   * @default "true"
   */
  colorMode?: boolean | undefined;
  ui?: ({ modal?: ClassNameValue; input?: ClassNameValue; } & { root?: ClassNameValue; input?: ClassNameValue; close?: ClassNameValue; ... 20 more ...; itemLabelSuffix?: ClassNameValue; }) | undefined;
  description?: string | undefined;
  title?: string | undefined;
  /**
   * The content of the modal.
   */
  content?: (Omit<DialogContentProps, "as" | "asChild" | "forceMount"> & Partial<EmitsToProps<DialogContentImplEmits>>) | undefined;
  /**
   * Animate the modal when opening or closing.
   */
  transition?: boolean | undefined;
  /**
   * Render an overlay behind the modal.
   */
  overlay?: boolean | undefined;
  /**
   * When `false`, the modal will not close when clicking outside or pressing escape.
   */
  dismissible?: boolean | undefined;
  /**
   * When `true`, the modal will take up the full screen.
   */
  fullscreen?: boolean | undefined;
  /**
   * The modality of the dialog When set to `true`, <br>
   * interaction with outside elements will be disabled and only dialog content will be visible to screen readers.
   */
  modal?: boolean | undefined;
  /**
   * Render the modal in a portal.
   */
  portal?: string | boolean | HTMLElement | undefined;
  searchTerm?: string | undefined;
}
```

### Slots

```ts
/**
 * Slots for the ContentSearch component
 */
interface ContentSearchSlots {
  empty(): any;
  back(): any;
  close(): any;
  item(): any;
  item-leading(): any;
  item-label(): any;
  item-trailing(): any;
  content(): any;
}
```

### Emits

```ts
/**
 * Emitted events for the ContentSearch component
 */
interface ContentSearchEmits {
  update:searchTerm: (payload: string) => void;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  uiPro: {
    contentSearch: {
      slots: {
        modal: 'sm:max-w-3xl sm:h-[28rem]',
        input: '[&>input]:text-base/5'
      }
    }
  }
})
```

