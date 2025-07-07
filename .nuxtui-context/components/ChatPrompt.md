# ChatPrompt

## Usage

The ChatPrompt component renders a `<form>` element and extends the [Textarea](https://ui.nuxt.com/components/textarea) component so you can pass any property such as `icon`, `placeholder`, `autofocus`, etc.

::code-preview
  :::u-chat-prompt
  ---
  variant: subtle
  ---
    ::::u-chat-prompt-submit{.rounded-full color="neutral"}
    ::::
  
  #footer
    ::::u-select
    ---
    items:
      - label: Gemini 2.5 Pro
        value: gemini-2.5-pro
        icon: i-simple-icons-googlegemini
      - label: GPT-4o
        value: gpt-4o
        icon: i-simple-icons-openai
      - label: Claude 3.5 Sonnet
        value: claude-3.5-sonnet
        icon: i-simple-icons-anthropic
      - label: Llama 4
        value: llama-4
        icon: i-simple-icons-ollama
    icon: i-simple-icons-openai
    modelValue: gpt-4o
    placeholder: Select a model
    variant: ghost
    ---
    ::::
  :::
::

::note
The ChatPrompt handles the following events:

- The form is submitted when the user presses `` or when the user clicks on the submit button.
- The textarea is blurred when `` is pressed and emits a `close` event.
::

### Variant

Use the `variant` prop to change the style of the prompt. Defaults to `outline`.

```vue
<template>
  <UChatPrompt variant="soft" />
</template>
```

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

Use the ChatPrompt component with the `useChat` composable to display a chat prompt within a page.

Pass the `input` prop alongside the `error` prop to disable the textarea when an error occurs.

```vue [pages/[id\\].vue] {4,21,23}
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

You can also use it as a starting point for a chat interface.

```vue [pages/index.vue] {23,25}
<script setup lang="ts">
const input = ref('')
const loading = ref(false)

async function onSubmit() {
  loading.value = true

  const chat = await $fetch('/api/chats', {
    method: 'POST',
    body: { input }
  })

  navigateTo(`/chat/${chat.id}`)
}
</script>

<template>
  <UDashboardPanel>
    <template #body>
      <UContainer>
        <h1>How can I help you today?</h1>

        <UChatPrompt v-model="input" :status="loading ? 'streaming' : 'ready'" @submit="onSubmit">
          <UChatPromptSubmit />
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
 * Props for the ChatPrompt component
 */
interface ChatPromptProps {
  /**
   * The element or component this component should render as.
   * @default "\"form\""
   */
  as?: any;
  /**
   * The placeholder text for the textarea.
   */
  placeholder?: string | undefined;
  /**
   * @default "true"
   */
  autofocus?: boolean | undefined;
  /**
   * @default "true"
   */
  autoresize?: boolean | undefined;
  /**
   * @default "1"
   */
  rows?: number | undefined;
  variant?: "outline" | "soft" | "subtle" | "naked" | undefined;
  error?: Error | undefined;
  ui?: ({ root?: ClassNameValue; header?: ClassNameValue; body?: ClassNameValue; footer?: ClassNameValue; base?: ClassNameValue; } & { ...; }) | undefined;
  /**
   * Display an icon based on the `leading` and `trailing` props.
   */
  icon?: string | undefined;
  /**
   * When `true`, the loading icon will be displayed.
   */
  loading?: boolean | undefined;
  /**
   * The icon when the `loading` prop is `true`.
   */
  loadingIcon?: string | undefined;
  /**
   * Display an avatar on the left side.
   */
  avatar?: AvatarProps | undefined;
  autofocusDelay?: number | undefined;
  autoresizeDelay?: number | undefined;
  maxrows?: number | undefined;
  modelValue?: string | undefined;
}
```

### Slots

```ts
/**
 * Slots for the ChatPrompt component
 */
interface ChatPromptSlots {
  header(): any;
  footer(): any;
  leading(): any;
  default(): any;
  trailing(): any;
}
```

### Emits

```ts
/**
 * Emitted events for the ChatPrompt component
 */
interface ChatPromptEmits {
  close: (payload: [event: Event]) => void;
  submit: (payload: [event: Event]) => void;
  update:modelValue: (payload: [value: string]) => void;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  uiPro: {
    chatPrompt: {
      slots: {
        root: 'relative flex flex-col items-stretch gap-2 px-2.5 py-2 w-full rounded-lg backdrop-blur',
        header: 'flex items-center gap-1.5',
        body: 'items-start',
        footer: 'flex items-center justify-between gap-1.5',
        base: 'text-base/5'
      },
      variants: {
        variant: {
          outline: {
            root: 'bg-default/75 ring ring-default'
          },
          soft: {
            root: 'bg-elevated/50'
          },
          subtle: {
            root: 'bg-elevated/50 ring ring-default'
          },
          naked: {
            root: ''
          }
        }
      },
      defaultVariants: {
        variant: 'outline'
      }
    }
  }
})
```

