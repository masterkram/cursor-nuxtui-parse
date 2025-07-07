# Error

## Usage

Like the [Main](https://ui.nuxt.com/components/main) component, the Error component renders a `<main>` element that works together with the [Header](https://ui.nuxt.com/components/header) component to create a full-height layout that extends to the viewport's available height.

::note
The Header component defines its height through a `--ui-header-height` CSS variable, which you can customize by overriding it in your CSS:

```css
:root {
  --ui-header-height: --spacing(16);
}
```
::

### Error

Use the `error` prop to display an error message.

::note
---
target: _blank
to: https://nuxt.com/docs/guide/directory-structure/error
---
In most cases, you will receive the `error` prop in your `error.vue` file.
::

```vue
<template>
  <UError />
</template>
```

### Clear

Use the `clear` prop to customize or hide the clear button (with `false` value).

You can pass any property from the [Button](https://ui.nuxt.com/components/button) component to customize it.

```vue
<template>
  <UError />
</template>
```

### Redirect

Use the `redirect` prop to redirect the user to a different page when the clear button is clicked. Defaults to `/`.

```vue
<template>
  <UError redirect="/getting-started" />
</template>
```

## Examples

### Within `error.vue`

Use the Error component in your `error.vue`:

```vue [error.vue] {13}
<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()
</script>

<template>
  <UApp>
    <UHeader />

    <UError :error="error" />

    <UFooter />
  </UApp>
</template>
```

::tip
You might want to replicate the code of your `app.vue` inside your `error.vue` file to have the same layout and features, here is an example: <https://github.com/nuxt/ui/blob/v3/docs/app/error.vue>{rel="nofollow"}
::

::note
You can read more about how to handle errors in the [Nuxt documentation](https://nuxt.com/docs/getting-started/error-handling#error-page){rel="nofollow"}, but when using `nuxt generate` it is recommended to add `fatal: true` inside your `createError` call to make sure the error page is displayed:

```vue [pages/[...slug\\].vue]
<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>
```
::

## API

### Props

```ts
/**
 * Props for the Error component
 */
interface ErrorProps {
  /**
   * The element or component this component should render as.
   * @default "\"main\""
   */
  as?: any;
  error?: Partial<NuxtError<unknown> & { message: string; }> | undefined;
  /**
   * The URL to redirect to when the error is cleared.
   * @default "\"/\""
   */
  redirect?: string | undefined;
  /**
   * Display a button to clear the error in the links slot.
   * `{ size: 'lg', color: 'primary', variant: 'solid', label: 'Back to home' }`{lang="ts-type"}
   * @default "true"
   */
  clear?: boolean | Partial<ButtonProps> | undefined;
  ui?: { root?: ClassNameValue; statusCode?: ClassNameValue; statusMessage?: ClassNameValue; message?: ClassNameValue; links?: ClassNameValue; } | undefined;
}
```

### Slots

```ts
/**
 * Slots for the Error component
 */
interface ErrorSlots {
  default(): any;
  statusCode(): any;
  statusMessage(): any;
  links(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  uiPro: {
    error: {
      slots: {
        root: 'min-h-[calc(100vh-var(--ui-header-height))] flex flex-col items-center justify-center text-center',
        statusCode: 'text-base font-semibold text-primary',
        statusMessage: 'mt-2 text-4xl sm:text-5xl font-bold text-highlighted text-balance',
        message: 'mt-4 text-lg text-muted text-balance',
        links: 'mt-8 flex items-center justify-center gap-6'
      }
    }
  }
})
```

