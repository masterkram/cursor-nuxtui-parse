# DashboardSearchButton

## Usage

The DashboardSearchButton component is used to open the [DashboardSearch](https://ui.nuxt.com/components/dashboard-search) modal.

```vue
<template>
  <UDashboardSearchButton />
</template>
```

It extends the [Button](https://ui.nuxt.com/components/button) component, so you can pass any property such as `color`, `variant`, `size`, etc.

```vue
<template>
  <UDashboardSearchButton variant="subtle" />
</template>
```

::note{to="https://ui.nuxt.com/#collapsed"}
The button defaults to `color="neutral"` and `variant="outline"` when not collapsed, `variant="ghost"` when collapsed.
::

### Collapsed

Use the `collapsed` prop to hide the button's label and [kbds](https://ui.nuxt.com/#kbds). Defaults to `false`.

```vue
<template>
  <UDashboardSearchButton collapsed />
</template>
```

::tip{to="https://ui.nuxt.com/components/dashboard-sidebar#slots"}
When using the button in the **DashboardSidebar** component, use the `collapsed` slot prop directly.
::

### Kbds

Use the `kbds` prop to display keyboard keys in the button. Defaults to `['meta', 'K']`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} to match the default shortcut of the [DashboardSearch](https://ui.nuxt.com/components/dashboard-search#shortcut) component.

```vue
<template>
  <UDashboardSearchButton :collapsed="false" />
</template>
```

## API

### Props

```ts
/**
 * Props for the DashboardSearchButton component
 */
interface DashboardSearchButtonProps {
  /**
   * The icon displayed in the button.
   */
  icon?: string | undefined;
  /**
   * The label displayed in the button.
   */
  label?: string | undefined;
  /**
   * The color of the button.
   * @default "\"neutral\""
   */
  color?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral" | undefined;
  /**
   * The variant of the button.
   * Defaults to 'outline' when not collapsed, 'ghost' when collapsed.
   */
  variant?: "link" | "solid" | "outline" | "soft" | "subtle" | "ghost" | undefined;
  size?: "md" | "xs" | "sm" | "lg" | "xl" | undefined;
  /**
   * Whether the button is collapsed.
   * @default "false"
   */
  collapsed?: boolean | undefined;
  /**
   * Display a tooltip on the button when is collapsed with the button label.
   * This has priority over the global `tooltip` prop.
   * @default "false"
   */
  tooltip?: boolean | TooltipProps | undefined;
  /**
   * The keyboard keys to display in the button.
   * `{ variant: 'subtle' }`{lang="ts-type"}
   * @default "[\"meta\", \"k\"]"
   */
  kbds?: (string | undefined)[] | KbdProps[] | undefined;
  ui?: ({ base?: ClassNameValue; trailing?: ClassNameValue; } & { base?: ClassNameValue; label?: ClassNameValue; leadingIcon?: ClassNameValue; leadingAvatar?: ClassNameValue; leadingAvatarSize?: ClassNameValue; trailingIcon?: ClassNameValue; }) | undefined;
}
```

### Slots

```ts
/**
 * Slots for the DashboardSearchButton component
 */
interface DashboardSearchButtonSlots {
  leading(): any;
  default(): any;
  trailing(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  uiPro: {
    dashboardSearchButton: {
      slots: {
        base: '',
        trailing: 'hidden lg:flex items-center gap-0.5 ms-auto'
      }
    }
  }
})
```

