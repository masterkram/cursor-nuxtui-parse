# DashboardSidebarToggle

## Usage

The DashboardSidebarToggle component is used by the [DashboardNavbar](https://ui.nuxt.com/components/dashboard-navbar) and [DashboardSidebar](https://ui.nuxt.com/components/dashboard-sidebar) components.

It is automatically displayed on mobile to toggle the sidebar, **you don't have to add it manually**.

```vue
<template>
  <UDashboardSidebarToggle />
</template>
```

It extends the [Button](https://ui.nuxt.com/components/button) component, so you can pass any property such as `color`, `variant`, `size`, etc.

```vue
<template>
  <UDashboardSidebarToggle variant="subtle" />
</template>
```

::note
The button defaults to `color="neutral"` and `variant="ghost"`.
::

## Examples

### Within `toggle` slot

Even though this component is automatically displayed on mobile, you can use the `toggle` slot of the [DashboardNavbar](https://ui.nuxt.com/components/dashboard-navbar) and [DashboardSidebar](https://ui.nuxt.com/components/dashboard-sidebar) components to customize the button.

::code-group
```vue [layouts/dashboard.vue] {4-6}
<template>
  <UDashboardGroup>
    <UDashboardSidebar>
      <template #toggle>
        <UDashboardSidebarToggle variant="subtle" />
      </template>
    </UDashboardSidebar>

    <slot />
  </UDashboardGroup>
</template>
```

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
        <template #toggle>
          <UDashboardSidebarToggle variant="subtle" />
        </template>
      </UDashboardNavbar>
    </template>
  </UDashboardPanel>
</template>
```
::

::tip
When using the `toggle-side` prop of the `DashboardSidebar` and `DashboardNavbar` components, the button will be displayed on the specified side.
::

## API

### Props

```ts
/**
 * Props for the DashboardSidebarToggle component
 */
interface DashboardSidebarToggleProps {
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
    dashboardSidebarToggle: {
      base: 'lg:hidden',
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

