# ChatPromptSubmit

## Usage

The ChatPromptSubmit component is used inside the [ChatPrompt](https://ui.nuxt.com/components/chat-prompt) component to submit the prompt. It automatically handles the different `status` values to control the chat.

It extends the [Button](https://ui.nuxt.com/components/button) component, so you can pass any property such as `color`, `variant`, `size`, etc.

::code-preview
  :::u-chat-prompt-submit
  :::

#code
```vue
<template>
  <UChatPrompt>
    <UChatPromptSubmit />
  </UChatPrompt>
</template>
```
::

::note
You can also use it inside the `footer` slot of the [`ChatPrompt`](https://ui.nuxt.com/components/chat-prompt) component.
::

### Ready

When its status is `ready`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}, use the `color`, `variant` and `icon` props to customize the Button. Defaults to:

- `color="primary"`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `variant="solid"`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `icon="i-lucide-arrow-up"`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

```vue
<template>
  <UChatPromptSubmit color="primary" variant="solid" icon="i-lucide-arrow-up" />
</template>
```

::framework-only
#nuxt
  :::tip{to="https://ui.nuxt.com/getting-started/icons/nuxt#theme"}
  You can customize this icon globally in your `app.config.ts` under `ui.icons.arrowUp` key.
  :::

#vue
  :::tip{to="https://ui.nuxt.com/getting-started/icons/vue#theme"}
  You can customize this icon globally in your `vite.config.ts` under `ui.icons.arrowUp` key.
  :::
::

### Submitted

When its status is `submitted`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}, use the `submitted-color`, `submitted-variant` and `submitted-icon` props to customize the Button. Defaults to:

- `submittedColor="neutral"`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `submittedVariant="subtle"`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `submittedIcon="i-lucide-square"`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

::note
The `stop` event is emitted when the user clicks on the Button.
::

```vue
<template>
  <UChatPromptSubmit submitted-color="neutral" submitted-variant="subtle" submitted-icon="i-lucide-square" status="submitted" />
</template>
```

::framework-only
#nuxt
  :::tip{to="https://ui.nuxt.com/getting-started/icons/nuxt#theme"}
  You can customize this icon globally in your `app.config.ts` under `ui.icons.stop` key.
  :::

#vue
  :::tip{to="https://ui.nuxt.com/getting-started/icons/vue#theme"}
  You can customize this icon globally in your `vite.config.ts` under `ui.icons.stop` key.
  :::
::

### Streaming

When its status is `streaming`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}, use the `streaming-color`, `streaming-variant` and `streaming-icon` props to customize the Button. Defaults to:

- `streamingColor="neutral"`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `streamingVariant="subtle"`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `streamingIcon="i-lucide-square"`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

::note
The `stop` event is emitted when the user clicks on the Button.
::

```vue
<template>
  <UChatPromptSubmit streaming-color="neutral" streaming-variant="subtle" streaming-icon="i-lucide-square" status="streaming" />
</template>
```

::framework-only
#nuxt
  :::tip{to="https://ui.nuxt.com/getting-started/icons/nuxt#theme"}
  You can customize this icon globally in your `app.config.ts` under `ui.icons.stop` key.
  :::

#vue
  :::tip{to="https://ui.nuxt.com/getting-started/icons/vue#theme"}
  You can customize this icon globally in your `vite.config.ts` under `ui.icons.stop` key.
  :::
::

### Error

When its status is `error`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}, use the `error-color`, `error-variant` and `error-icon` props to customize the Button. Defaults to:

- `errorColor="error"`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `errorVariant="soft"`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `errorIcon="i-lucide-rotate-ccw"`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

::note
The `reload` event is emitted when the user clicks on the Button.
::

```vue
<template>
  <UChatPromptSubmit error-color="error" error-variant="soft" error-icon="i-lucide-rotate-ccw" status="error" />
</template>
```

::framework-only
#nuxt
  :::tip{to="https://ui.nuxt.com/getting-started/icons/nuxt#theme"}
  You can customize this icon globally in your `app.config.ts` under `ui.icons.reload` key.
  :::

#vue
  :::tip{to="https://ui.nuxt.com/getting-started/icons/vue#theme"}
  You can customize this icon globally in your `vite.config.ts` under `ui.icons.reload` key.
  :::
::

## Examples

::note{target="_blank" to="https://sdk.vercel.ai/docs/getting-started/nuxt"}
These chat components are designed to be used with the `useChat` composable from **Vercel AI SDK**.
::

::callout
---
icon: i-simple-icons-github
target: _blank
to: https://github.com/nuxt-ui-pro/chat
---
Check out the source code of our **AI Chat template** on GitHub for a real-life example.
::

### Within a page

Use the ChatPromptSubmit component with the `useChat` composable to display a chat prompt within a page.

Pass the `status` prop and listen to the `stop` and `reload` events to control the chat.

```vue [pages/[id\\].vue] {4,22}
<script setup lang="ts">
import { useChat } from '@ai-sdk/vue'

const { messages, input, handleSubmit, reload, stop, status, error } = useChat()
</script>

<template>
  <UDashboardPanel>
    <template #body>
      <UContainer>
        <UChatMessages :messages="messages" :status="status">
          <template #content="{ message }">
            <MDC :value="message.content" :cache-key="message.id" unwrap="p" />
          </template>
        </UChatMessages>
      </UContainer>
    </template>

    <template #footer>
      <UContainer>
        <UChatPrompt v-model="input" :error="error" @submit="handleSubmit">
          <UChatPromptSubmit :status="status" @stop="stop" @reload="reload" />
        </UChatPrompt>
      </UContainer>
    </template>
  </UDashboardPanel>
</template>
```

## API

### Props

```ts
/**
 * Props for the ChatPromptSubmit component
 */
interface ChatPromptSubmitProps {
  /**
   * @default "\"ready\""
   */
  status?: "error" | "submitted" | "streaming" | "ready" | undefined;
  /**
   * The icon displayed in the button when the status is `ready`.
   */
  icon?: string | undefined;
  /**
   * The color of the button when the status is `ready`.
   */
  color?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral" | undefined;
  /**
   * The variant of the button when the status is `ready`.
   */
  variant?: "link" | "solid" | "outline" | "soft" | "subtle" | "ghost" | undefined;
  /**
   * The icon displayed in the button when the status is `streaming`.
   */
  streamingIcon?: string | undefined;
  /**
   * The color of the button when the status is `streaming`.
   * @default "\"neutral\""
   */
  streamingColor?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral" | undefined;
  /**
   * The variant of the button when the status is `streaming`.
   * @default "\"subtle\""
   */
  streamingVariant?: "link" | "solid" | "outline" | "soft" | "subtle" | "ghost" | undefined;
  /**
   * The icon displayed in the button when the status is `submitted`.
   */
  submittedIcon?: string | undefined;
  /**
   * The color of the button when the status is `submitted`.
   * @default "\"neutral\""
   */
  submittedColor?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral" | undefined;
  /**
   * The variant of the button when the status is `submitted`.
   * @default "\"subtle\""
   */
  submittedVariant?: "link" | "solid" | "outline" | "soft" | "subtle" | "ghost" | undefined;
  /**
   * The icon displayed in the button when the status is `error`.
   */
  errorIcon?: string | undefined;
  /**
   * The color of the button when the status is `error`.
   * @default "\"error\""
   */
  errorColor?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral" | undefined;
  /**
   * The variant of the button when the status is `error`.
   * @default "\"soft\""
   */
  errorVariant?: "link" | "solid" | "outline" | "soft" | "subtle" | "ghost" | undefined;
  ui?: ({ base?: ClassNameValue; } & { base?: ClassNameValue; label?: ClassNameValue; leadingIcon?: ClassNameValue; leadingAvatar?: ClassNameValue; leadingAvatarSize?: ClassNameValue; trailingIcon?: ClassNameValue; }) | undefined;
  label?: string | undefined;
  size?: "md" | "xs" | "sm" | "lg" | "xl" | undefined;
}
```

### Slots

```ts
/**
 * Slots for the ChatPromptSubmit component
 */
interface ChatPromptSubmitSlots {
  leading(): any;
  default(): any;
  trailing(): any;
}
```

### Emits

```ts
/**
 * Emitted events for the ChatPromptSubmit component
 */
interface ChatPromptSubmitEmits {
  stop: (payload: []) => void;
  reload: (payload: []) => void;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  uiPro: {
    chatPromptSubmit: {
      slots: {
        base: ''
      }
    }
  }
})
```

