# DashboardGroup

## Usage

The DashboardGroup component is the main layout that wraps the [DashboardSidebar](https://ui.nuxt.com/components/dashboard-sidebar) and [DashboardPanel](https://ui.nuxt.com/components/dashboard-panel) components to create a responsive dashboard interface.

Use it in a layout or in your `app.vue`:

```vue [layouts/dashboard.vue] {2,6}
<template>
  <UDashboardGroup>
    <UDashboardSidebar />

    <slot />
  </UDashboardGroup>
</template>
```

## API

### Props

```ts
/**
 * Props for the DashboardGroup component
 */
interface DashboardGroupProps {
  /**
   * The element or component this component should render as.
   */
  as?: any;
  /**
   * The storage to use for the size.
   * @default "\"cookie\""
   */
  storage?: "cookie" | "local" | undefined;
  /**
   * Unique id used to auto-save size.
   * @default "\"dashboard\""
   */
  storageKey?: string | undefined;
  /**
   * Whether to persist the size in the storage.
   * @default "true"
   */
  persistent?: boolean | undefined;
  /**
   * The unit to use for size values.
   * @default "\"%\""
   */
  unit?: "%" | "rem" | "px" | undefined;
}
```

### Slots

```ts
/**
 * Slots for the DashboardGroup component
 */
interface DashboardGroupSlots {
  default(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  uiPro: {
    dashboardGroup: {
      base: 'fixed inset-0 flex overflow-hidden'
    }
  }
})
```

