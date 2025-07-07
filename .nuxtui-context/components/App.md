# App

## Usage

This component implements Reka UI [ConfigProvider](https://reka-ui.com/docs/utilities/config-provider){rel="nofollow"} to provide global configuration to all components:

- Enables all primitives to inherit global reading direction.
- Enables changing the behavior of scroll body when setting body lock.
- Much more controls to prevent layout shifts.

It's also using [ToastProvider](https://reka-ui.com/docs/components/toast#provider){rel="nofollow"} and [TooltipProvider](https://reka-ui.com/docs/components/tooltip#provider){rel="nofollow"} to provide global toasts and tooltips, as well as programmatic modals and slideovers.

Use it at the root of your app:

```vue [app.vue]
<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
```

::framework-only
#nuxt
  :::tip{to="https://ui.nuxt.com/getting-started/i18n/nuxt#locale"}
  Learn how to use the `locale` prop to change the locale of your app.
  :::

#vue
  :::tip{to="https://ui.nuxt.com/getting-started/i18n/vue#locale"}
  Learn how to use the `locale` prop to change the locale of your app.
  :::
::

## API

### Props

```ts
/**
 * Props for the App component
 */
interface AppProps {
  tooltip?: TooltipProviderProps | undefined;
  toaster?: ToasterProps | null | undefined;
  locale?: Locale<Messages> | undefined;
  /**
   * @default "\"body\""
   */
  portal?: string | HTMLElement | undefined;
  /**
   * The global scroll body behavior of your application. This will be inherited by the related primitives.
   */
  scrollBody?: boolean | ScrollBodyOption | undefined;
  /**
   * The global `nonce` value of your application. This will be inherited by the related primitives.
   */
  nonce?: string | undefined;
}
```

### Slots

```ts
/**
 * Slots for the App component
 */
interface AppSlots {
  default(): any;
}
```

