# DashboardPanel

## Usage

The DashboardPanel component is used to display a panel. Its state (size, collapsed, etc.) will be saved based on the `storage` and `storage-key` props you provide to the [DashboardGroup](https://ui.nuxt.com/components/dashboard-group#props) component.

Use it inside the default slot of the [DashboardGroup](https://ui.nuxt.com/components/dashboard-group) component, you can put multiple panels next to each other:

```vue [pages/index.vue] {8,10}
<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})
</script>

<template>
  <UDashboardPanel id="inbox-1" resizable />

  <UDashboardPanel id="inbox-2" class="hidden lg:flex" />
</template>
```

::caution
It is recommended to set an `id` when using multiple panels in different pages to avoid conflicts.
::

Use the `header`, `body` and `footer` slots to customize the panel or the default slot if you don't want a scrollable body with padding.

```vue [DashboardPanelExample.vue]
<template>
  <UDashboardPanel resizable>
    <template #header>
      <UDashboardNavbar title="Inbox">
        <template #leading>
          <UDashboardSidebarCollapse />
        </template>
      </UDashboardNavbar>
    </template>

    <template #body>
      <Placeholder class="h-full" />
    </template>
  </UDashboardPanel>
</template>
```

::note
Most of the time, you will use the [`DashboardNavbar`](https://ui.nuxt.com/components/dashboard-navbar) component in the `header` slot.
::

### Resizable

Use the `resizable` prop to make the panel resizable.

```vue
<template>
  <UDashboardPanel resizable>
    <template #body>
      <Placeholder class="h-96" />
    </template></UDashboardPanel>
</template>
```

### Size

Use the `min-size`, `max-size` and `default-size` props to customize the size of the panel.

```vue
<template>
  <UDashboardPanel resizable :min-size="22" :default-size="35" :max-size="40">
    <template #body>
      <Placeholder class="h-96" />
    </template></UDashboardPanel>
</template>
```

## API

### Props

```ts
/**
 * Props for the DashboardPanel component
 */
interface DashboardPanelProps {
  ui?: { root?: ClassNameValue; body?: ClassNameValue; handle?: ClassNameValue; } | undefined;
  /**
   * The id of the panel.
   */
  id?: string | undefined;
  /**
   * The minimum size of the panel.
   * @default "15"
   */
  minSize?: number | undefined;
  /**
   * The maximum size of the panel.
   */
  maxSize?: number | undefined;
  /**
   * The default size of the panel.
   */
  defaultSize?: number | undefined;
  /**
   * Whether to allow the user to resize the panel.
   * @default "false"
   */
  resizable?: boolean | undefined;
}
```

### Slots

```ts
/**
 * Slots for the DashboardPanel component
 */
interface DashboardPanelSlots {
  default(): any;
  header(): any;
  body(): any;
  footer(): any;
  resize-handle(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  uiPro: {
    dashboardPanel: {
      slots: {
        root: 'relative flex flex-col min-w-0 min-h-svh lg:not-last:border-r lg:not-last:border-default shrink-0',
        body: 'flex flex-col gap-4 sm:gap-6 flex-1 overflow-y-auto p-4 sm:p-6',
        handle: ''
      },
      variants: {
        size: {
          true: {
            root: 'w-full lg:w-(--width)'
          },
          false: {
            root: 'flex-1'
          }
        }
      }
    }
  }
})
```

