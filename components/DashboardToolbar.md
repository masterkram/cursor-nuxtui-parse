# DashboardToolbar

## Usage

The DashboardToolbar component is used to display a toolbar under the [DashboardNavbar](https://ui.nuxt.com/components/dashboard-navbar) component.

Use it inside the `header` slot of the [DashboardPanel](https://ui.nuxt.com/components/dashboard-panel) component:

```vue [pages/index.vue] {9-13}
<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar />

      <UDashboardToolbar />
    </template>
  </UDashboardPanel>
</template>
```

Use the `left`, `default` and `right` slots to customize the toolbar.

```vue [DashboardToolbarExample.vue]
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[][] = [[{
  label: 'General',
  icon: 'i-lucide-user',
  active: true
}, {
  label: 'Members',
  icon: 'i-lucide-users'
}, {
  label: 'Notifications',
  icon: 'i-lucide-bell'
}], [{
  label: 'Documentation',
  icon: 'i-lucide-book-open',
  to: 'https://ui.nuxt.com/getting-started/installation/pro/nuxt',
  target: '_blank'
}, {
  label: 'Buy now',
  icon: 'i-lucide-shopping-cart',
  to: 'https://ui.nuxt.com/pro/purchase',
  target: '_blank'
}]]
</script>

<template>
  <UDashboardToolbar>
    <UNavigationMenu :items="items" highlight class="flex-1" />
  </UDashboardToolbar>
</template>
```

::note
In this example, we use the [NavigationMenu](https://ui.nuxt.com/components/navigation-menu) component to render some links.
::

## API

### Props

```ts
/**
 * Props for the DashboardToolbar component
 */
interface DashboardToolbarProps {
  /**
   * The element or component this component should render as.
   */
  as?: any;
  ui?: { root?: ClassNameValue; left?: ClassNameValue; right?: ClassNameValue; } | undefined;
}
```

### Slots

```ts
/**
 * Slots for the DashboardToolbar component
 */
interface DashboardToolbarSlots {
  default(): any;
  left(): any;
  right(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  uiPro: {
    dashboardToolbar: {
      slots: {
        root: 'shrink-0 flex items-center justify-between border-b border-default px-4 sm:px-6 gap-1.5 overflow-x-auto min-h-[49px]',
        left: 'flex items-center gap-1.5',
        right: 'flex items-center gap-1.5'
      }
    }
  }
})
```

