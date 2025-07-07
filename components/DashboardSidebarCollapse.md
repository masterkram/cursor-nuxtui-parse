# DashboardSidebarCollapse

## Usage

The DashboardSidebarCollapse component is used to collapse/expand the [DashboardSidebar](https://ui.nuxt.com/components/dashboard-sidebar) component **when its `collapsible` prop is set**.

```vue
<template>
  <UDashboardSidebarCollapse />
</template>
```

It extends the [Button](https://ui.nuxt.com/components/button) component, so you can pass any property such as `color`, `variant`, `size`, etc.

```vue
<template>
  <UDashboardSidebarCollapse variant="subtle" />
</template>
```

::note
The button defaults to `color="neutral"` and `variant="ghost"`.
::

## Examples

### Within `header` slot

You can put this component in the `header` slot of the [DashboardSidebar](https://ui.nuxt.com/components/dashboard-sidebar) component and use the `collapsed` prop to hide the left part of the header for example:

```vue [layouts/dashboard.vue] {4-8}
<template>
  <UDashboardGroup>
    <UDashboardSidebar collapsible>
      <template #header="{ collapsed }">
        <Logo v-if="!collapsed" />

        <UDashboardSidebarCollapse variant="subtle" />
      </template>
    </UDashboardSidebar>

    <slot />
  </UDashboardGroup>
</template>
```

### Within `leading` slot

You can put this component in the `leading` slot of the [DashboardNavbar](https://ui.nuxt.com/components/dashboard-navbar) component to display it before the title for example:

```vue [pages/index.vue] {11-13}
<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar title="Home">
        <template #leading>
          <UDashboardSidebarCollapse variant="subtle" />
        </template>
      </UDashboardNavbar>
    </template>
  </UDashboardPanel>
</template>
```

## API

### Props

```ts
/**
 * Props for the DashboardSidebarCollapse component
 */
interface DashboardSidebarCollapseProps {
  /**
   * @default "\"left\""
   */
  side?: "right" | "left" | undefined;
  /**
   * @default "\"neutral\""
   */
  color?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral" | undefined;
  /**
   * @default "\"ghost\""
   */
  variant?: "link" | "solid" | "outline" | "soft" | "subtle" | "ghost" | undefined;
  disabled?: boolean | undefined;
  ui?: { base?: ClassNameValue; label?: ClassNameValue; leadingIcon?: ClassNameValue; leadingAvatar?: ClassNameValue; leadingAvatarSize?: ClassNameValue; trailingIcon?: ClassNameValue; } | undefined;
  /**
   * The element or component this component should render as when not a link.
   */
  as?: any;
  size?: "md" | "xs" | "sm" | "lg" | "xl" | undefined;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  uiPro: {
    dashboardSidebarCollapse: {
      base: 'hidden lg:flex',
      variants: {
        side: {
          left: '',
          right: ''
        }
      }
    }
  }
})
```

