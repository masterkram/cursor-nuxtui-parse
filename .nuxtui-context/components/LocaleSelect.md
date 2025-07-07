# LocaleSelect

## Usage

The LocaleSelect component extends the [SelectMenu](https://ui.nuxt.com/components/select-menu) component, so you can pass any property such as `color`, `variant`, `size`, etc.

::framework-only
#nuxt
  :::note{to="https://ui.nuxt.com/getting-started/i18n/nuxt"}
  This component is meant to be used with the **i18n** system. Learn more about it in the guide.
  :::

#vue
  :::note{to="https://ui.nuxt.com/getting-started/i18n/vue"}
  This component is meant to be used with the **i18n** system. Learn more about it in the guide.
  :::
::

::warning
The flags are displayed using Unicode characters. This may result in a different display, e.g. Microsoft Edge under Windows displays the ISO 3166-1 alpha-2 code instead, as no flag icons are shipped with the OS fonts.
::

### Locales

Use the `locales` prop with an array of locales from `@nuxt/ui/locale`.

```vue [LocaleSelectExample.vue]
<script setup lang="ts">
import * as locales from '@nuxt/ui/locale'

const locale = ref('en')
</script>

<template>
  <ULocaleSelect v-model="locale" :locales="Object.values(locales)" class="w-48" />
</template>
```

You can pass only the locales you need in your application:

```vue
<script setup lang="ts">
import { en, es, fr } from '@nuxt/ui/locale'

const locale = ref('en')
</script>

<template>
  <ULocaleSelect v-model="locale" :locales="[en, es, fr]" />
</template>
```

### Dynamic locale

::framework-only
#nuxt
  :::div
  You can use it with Nuxt i18n:
  
  ```vue
  <script setup lang="ts">
  import * as locales from '@nuxt/ui/locale'
  
  const { locale } = useI18n()
  </script>
  
  <template>
    <ULocaleSelect v-model="locale" :locales="Object.values(locales)" />
  </template>
  ```
  :::

#vue
  :::div
  You can use it with Vue i18n:
  
  ```vue
  <script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import * as locales from '@nuxt/ui/locale'
  
  const { locale } = useI18n()
  </script>
  
  <template>
    <ULocaleSelect v-model="locale" :locales="Object.values(locales)" />
  </template>
  ```
  :::
::

## API

### Props

```ts
/**
 * Props for the LocaleSelect component
 */
interface LocaleSelectProps {
  locales?: Locale<any>[] | undefined;
  /**
   * The icon displayed to open the menu.
   */
  trailingIcon?: string | undefined;
  /**
   * When `true`, prevents the user from interacting with listbox
   */
  disabled?: boolean | undefined;
  ui?: { base?: ClassNameValue; leading?: ClassNameValue; leadingIcon?: ClassNameValue; leadingAvatar?: ClassNameValue; ... 22 more ...; focusScope?: ClassNameValue; } | undefined;
  color?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral" | undefined;
  size?: "md" | "xs" | "sm" | "lg" | "xl" | undefined;
  /**
   * The content of the menu.
   */
  content?: (Omit<ComboboxContentProps, "as" | "asChild" | "forceMount"> & Partial<EmitsToProps<DismissableLayerEmits>>) | undefined;
  variant?: "outline" | "soft" | "subtle" | "ghost" | "none" | undefined;
  /**
   * Render the menu in a portal.
   */
  portal?: string | boolean | HTMLElement | undefined;
  /**
   * Display an arrow alongside the menu.
   */
  arrow?: boolean | Omit<ComboboxArrowProps, "as" | "asChild"> | undefined;
  /**
   * The icon displayed when an item is selected.
   */
  selectedIcon?: string | undefined;
  modelValue?: string | undefined;
}
```

