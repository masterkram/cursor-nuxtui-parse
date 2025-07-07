# ContentSearchButton

::warning{to="https://ui.nuxt.com/getting-started/content"}
This component is only available when the `@nuxt/content` module is installed.
::

## Usage

The ContentSearchButton component is used to open the [ContentSearch](https://ui.nuxt.com/components/content-search) modal.

```vue
<template>
  <UContentSearchButton />
</template>
```

It extends the [Button](https://ui.nuxt.com/components/button) component, so you can pass any property such as `color`, `variant`, `size`, etc.

```vue
<template>
  <UContentSearchButton variant="subtle" />
</template>
```

::note{to="https://ui.nuxt.com/#collapsed"}
The button defaults to `color="neutral"` and `variant="outline"` when not collapsed, `variant="ghost"` when collapsed.
::

### Collapsed

Use the `collapsed` prop to show the button's label and [kbds](https://ui.nuxt.com/#kbds). Defaults to `true`.

```vue
<template>
  <UContentSearchButton :collapsed="false" />
</template>
```

### Kbds

Use the `kbds` prop to display keyboard keys in the button. Defaults to `['meta', 'K']`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} to match the default shortcut of the [ContentSearch](https://ui.nuxt.com/components/content-search#shortcut) component.

```vue
<template>
  <UContentSearchButton :collapsed="false" />
</template>
```

## API

### Props

```ts
/**
 * Props for the ContentSearchButton component
 */
interface ContentSearchButtonProps {
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
   * @default "true"
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
 * Slots for the ContentSearchButton component
 */
interface ContentSearchButtonSlots {
  leading(): any;
  default(): any;
  trailing(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  uiPro: {
    contentSearchButton: {
      slots: {
        base: '',
        trailing: 'hidden lg:flex items-center gap-0.5 ms-auto'
      }
    }
  }
})
```

