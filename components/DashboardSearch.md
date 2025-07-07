# DashboardSearch

## Usage

The DashboardSearch component extends the [CommandPalette](https://ui.nuxt.com/components/command-palette) component, so you can pass any property such as `icon`, `placeholder`, etc.

Use it inside the default slot of the [DashboardGroup](https://ui.nuxt.com/components/dashboard-group) component:

```vue [layouts/dashboard.vue] {3}
<template>
  <UDashboardGroup>
    <UDashboardSidebar>
      <UDashboardSearchButton />
    </UDashboardSidebar>

    <UDashboardSearch />

    <slot />
  </UDashboardGroup>
</template>
```

::tip
You can open the CommandPalette by pressing `` ``, by using the [DashboardSearchButton](https://ui.nuxt.com/components/dashboard-search-button) component or by using a `v-model:open`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts"} directive.
::

### Shortcut

Use the `shortcut` prop to change the shortcut used in [defineShortcuts](https://ui.nuxt.com/composables/define-shortcuts) to open the ContentSearch component. Defaults to `meta_k` (`` ``).

```vue [app.vue] {4}
<template>
  <UDashboardSearch
    v-model:search-term="searchTerm"
    shortcut="meta_k"
    :groups="groups"
    :fuse="{ resultLimit: 42 }"
  />
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

```vue [app.vue] {4}
<template>
  <UDashboardSearch
    v-model:search-term="searchTerm"
    :color-mode="false"
    :groups="groups"
    :fuse="{ resultLimit: 42 }"
  />
</template>
```

## API

### Props

```ts
/**
 * Props for the DashboardSearch component
 */
interface DashboardSearchProps {
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
  groups?: CommandPaletteGroup<CommandPaletteItem>[] | undefined;
  /**
   * Options for [useFuse](https://vueuse.org/integrations/useFuse) passed to the [CommandPalette](https://ui.nuxt.com/components/command-palette).
   */
  fuse?: UseFuseOptions<CommandPaletteItem> | undefined;
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
  open?: boolean | undefined;
  searchTerm?: string | undefined;
}
```

### Slots

```ts
/**
 * Slots for the DashboardSearch component
 */
interface DashboardSearchSlots {
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
 * Emitted events for the DashboardSearch component
 */
interface DashboardSearchEmits {
  update:open: (payload: [value: boolean]) => void;
  update:searchTerm: (payload: [value: string]) => void;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  uiPro: {
    dashboardSearch: {
      slots: {
        modal: 'sm:max-w-3xl sm:h-[28rem]',
        input: '[&>input]:text-base/5'
      }
    }
  }
})
```

