# Tooltip

## Usage

Use a [Button](https://ui.nuxt.com/components/button) or any other component in the default slot of the Tooltip.

::warning
Make sure to wrap your app with the [`App`](https://ui.nuxt.com/components/app) component which uses the [`TooltipProvider`](https://reka-ui.com/docs/components/tooltip#provider){rel="nofollow"} component from Reka UI.
::

::tip{to="https://ui.nuxt.com/components/app#props"}
You can check the `App` component `tooltip` prop to see how to configure the Tooltip globally.
::

### Text

Use the `text` prop to set the content of the Tooltip.

```vue
<template>
  <UTooltip text="Open on GitHub">
    <UButton label="Open" color="neutral" variant="subtle" />
  </UTooltip>
</template>
```

### Kbds

Use the `kbds` prop to render [Kbd](https://ui.nuxt.com/components/kbd) components in the Tooltip.

```vue
<template>
  <UTooltip text="Open on GitHub">
    <UButton label="Open" color="neutral" variant="subtle" />
  </UTooltip>
</template>
```

::tip
You can use special keys like `meta` that displays as `⌘` on macOS and `Ctrl` on other platforms.
::

### Delay

Use the `delay-duration` prop to change the delay before the Tooltip appears. For example, you can make it appear instantly by setting it to `0`.

```vue
<template>
  <UTooltip :delay-duration="0" text="Open on GitHub">
    <UButton label="Open" color="neutral" variant="subtle" />
  </UTooltip>
</template>
```

::tip
This can be configured globally through the `tooltip.delayDuration` option in the [`App`](https://ui.nuxt.com/components/app) component.
::

### Content

Use the `content` prop to control how the Tooltip content is rendered, like its `align` or `side` for example.

```vue
<template>
  <UTooltip text="Open on GitHub">
    <UButton label="Open" color="neutral" variant="subtle" />
  </UTooltip>
</template>
```

### Arrow

Use the `arrow` prop to display an arrow on the Tooltip.

```vue
<template>
  <UTooltip arrow text="Open on GitHub">
    <UButton label="Open" color="neutral" variant="subtle" />
  </UTooltip>
</template>
```

### Disabled

Use the `disabled` prop to disable the Tooltip.

```vue
<template>
  <UTooltip disabled text="Open on GitHub">
    <UButton label="Open" color="neutral" variant="subtle" />
  </UTooltip>
</template>
```

## Examples

### Control open state

You can control the open state by using the `default-open` prop or the `v-model:open` directive.

```vue [TooltipOpenExample.vue]
<script setup lang="ts">
const open = ref(false)

defineShortcuts({
  o: () => open.value = !open.value
})
</script>

<template>
  <UTooltip v-model:open="open" text="Open on GitHub">
    <UButton label="Open" color="neutral" variant="subtle" />
  </UTooltip>
</template>
```

::note
In this example, leveraging [`defineShortcuts`](https://ui.nuxt.com/composables/define-shortcuts), you can toggle the Tooltip by pressing ``.
::

## API

### Props

```ts
/**
 * Props for the Tooltip component
 */
interface TooltipProps {
  /**
   * The text content of the tooltip.
   */
  text?: string | undefined;
  /**
   * The keyboard keys to display in the tooltip.
   */
  kbds?: (string | undefined)[] | KbdProps[] | undefined;
  /**
   * The content of the tooltip.
   */
  content?: (Omit<TooltipContentProps, "as" | "asChild"> & Partial<EmitsToProps<TooltipContentImplEmits>>) | undefined;
  /**
   * Display an arrow alongside the tooltip.
   */
  arrow?: boolean | Omit<TooltipArrowProps, "as" | "asChild"> | undefined;
  /**
   * Render the tooltip in a portal.
   * @default "true"
   */
  portal?: string | boolean | HTMLElement | undefined;
  ui?: { content?: ClassNameValue; arrow?: ClassNameValue; text?: ClassNameValue; kbds?: ClassNameValue; kbdsSize?: ClassNameValue; } | undefined;
  /**
   * The open state of the tooltip when it is initially rendered.
   * Use when you do not need to control its open state.
   */
  defaultOpen?: boolean | undefined;
  /**
   * The controlled open state of the tooltip.
   */
  open?: boolean | undefined;
  /**
   * Override the duration given to the `Provider` to customise
   * the open delay for a specific tooltip.
   */
  delayDuration?: number | undefined;
  /**
   * Prevents Tooltip.Content from remaining open when hovering.
   * Disabling this has accessibility consequences. Inherits
   * from Tooltip.Provider.
   */
  disableHoverableContent?: boolean | undefined;
  /**
   * When `true`, clicking on trigger will not close the content.
   */
  disableClosingTrigger?: boolean | undefined;
  /**
   * When `true`, disable tooltip
   */
  disabled?: boolean | undefined;
  /**
   * Prevent the tooltip from opening if the focus did not come from
   * the keyboard by matching against the `:focus-visible` selector.
   * This is useful if you want to avoid opening it when switching
   * browser tabs or closing a dialog.
   */
  ignoreNonKeyboardFocus?: boolean | undefined;
}
```

### Slots

```ts
/**
 * Slots for the Tooltip component
 */
interface TooltipSlots {
  default(): any;
  content(): any;
}
```

### Emits

```ts
/**
 * Emitted events for the Tooltip component
 */
interface TooltipEmits {
  update:open: (payload: [value: boolean]) => void;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    tooltip: {
      slots: {
        content: 'flex items-center gap-1 bg-default text-highlighted shadow-sm rounded-sm ring ring-default h-6 px-2.5 py-1 text-xs select-none data-[state=delayed-open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-tooltip-content-transform-origin) pointer-events-auto',
        arrow: 'fill-default',
        text: 'truncate',
        kbds: "hidden lg:inline-flex items-center shrink-0 gap-0.5 before:content-['·'] before:me-0.5",
        kbdsSize: 'sm'
      }
    }
  }
})
```

