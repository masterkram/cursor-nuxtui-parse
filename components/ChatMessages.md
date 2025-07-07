# ChatMessages

## Usage

The ChatMessages component displays a list of [ChatMessage](https://ui.nuxt.com/components/chat-message) components using either the default slot or the `messages` prop.

```vue {2,8}
<template>
  <UChatMessages>
    <UChatMessage
      v-for="(message, index) in messages"
      :key="index"
      v-bind="message"
    />
  </UChatMessages>
</template>
```

::callout{icon="i-lucide-rocket"}
This component is purpose-built for AI chatbots with features like:

- Initial scroll to the bottom upon loading ([`shouldScrollToBottom`](https://ui.nuxt.com/#should-scroll-to-bottom)).
- Continuous scrolling down as new messages arrive ([`shouldAutoScroll`](https://ui.nuxt.com/#should-auto-scroll)).
- An "Auto scroll" button appears when scrolled up, allowing users to jump back to the latest messages ([`autoScroll`](https://ui.nuxt.com/#auto-scroll)).
- A loading indicator displays while the assistant is processing ([`status`](https://ui.nuxt.com/#status)).
- Submitted messages are scrolled to the top of the viewport and the height of the last user message is dynamically adjusted.
::

### Messages

Use the `messages` prop to display a list of chat messages.

```vue
<template>
  <UChatMessages />
</template>
```

### Status

Use the `status` prop to display a visual indicator when the assistant is processing.

```vue
<template>
  <UChatMessages status="submitted" />
</template>
```

::note
Here's the detail of the different statuses sent by the `useChat` composable:

- `submitted`: The message has been sent to the API and we're awaiting the start of the response stream.
- `streaming`: The response is actively streaming in from the API, receiving chunks of data.
- `ready`: The full response has been received and processed; a new user message can be submitted.
- `error`: An error occurred during the API request, preventing successful completion.
::

### User

Use the `user` prop to change the [ChatMessage](https://ui.nuxt.com/components/chat-message) props for `user` messages. Defaults to:

- `side: 'right'`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `variant: 'soft'`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

```vue
<template>
  <UChatMessages />
</template>
```

### Assistant

Use the `assistant` prop to change the [ChatMessage](https://ui.nuxt.com/components/chat-message) props for `assistant` messages. Defaults to:

- `side: 'left'`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `variant: 'naked'`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

```vue
<template>
  <UChatMessages />
</template>
```

### Auto Scroll

Use the `auto-scroll` prop to customize or hide the auto scroll button (with `false` value) displayed when scrolling to the top of the chat. Defaults to:

- `color: 'neutral'`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `variant: 'outline'`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

You can pass any property from the [Button](https://ui.nuxt.com/components/button) component to customize it.

```vue
<template>
  <UChatMessages :should-scroll-to-bottom="false" />
</template>
```

### Auto Scroll Icon

Use the `auto-scroll-icon` prop to customize the auto scroll button [Icon](https://ui.nuxt.com/components/icon). Defaults to `i-lucide-arrow-down`.

```vue
<template>
  <UChatMessages auto-scroll-icon="i-lucide-chevron-down" :should-scroll-to-bottom="false" />
</template>
```

::framework-only
#nuxt
  :::tip{to="https://ui.nuxt.com/getting-started/icons/nuxt#theme"}
  You can customize this icon globally in your `app.config.ts` under `ui.icons.arrowDown` key.
  :::

#vue
  :::tip{to="https://ui.nuxt.com/getting-started/icons/vue#theme"}
  You can customize this icon globally in your `vite.config.ts` under `ui.icons.arrowDown` key.
  :::
::

### Should Auto Scroll

Use the `should-auto-scroll` prop to enable/disable continuous auto scroll while messages are streaming. Defaults to `false`.

```vue
<template>
  <UChatMessages :messages="messages" should-auto-scroll />
</template>
```

### Should Scroll To Bottom

Use the `should-scroll-to-bottom` prop to enable/disable bottom auto scroll when the component is mounted. Defaults to `true`.

```vue
<template>
  <UChatMessages :messages="messages" :should-scroll-to-bottom="false" />
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

Use the ChatMessages component with the `useChat` composable to display a list of chat messages within a page.

Pass the `messages` prop alongside the `status` prop that will be used for the auto scroll and the indicator display.

```vue [pages/[id\\].vue] {4,11-15}
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

::note
In this example, we use the `MDC` component from [`@nuxtjs/mdc`](https://github.com/nuxt-modules/mdc){rel="nofollow"} to render the content of the message. As Nuxt UI Pro provides pre-styled prose components, your content will be automatically styled.
::

## API

### Props

```ts
/**
 * Props for the ChatMessages component
 */
interface ChatMessagesProps {
  messages?: Message[] | undefined;
  status?: "error" | "submitted" | "streaming" | "ready" | undefined;
  /**
   * Whether to automatically scroll to the bottom when a message is streaming.
   * @default "false"
   */
  shouldAutoScroll?: boolean | undefined;
  /**
   * Whether to scroll to the bottom on mounted.
   * @default "true"
   */
  shouldScrollToBottom?: boolean | undefined;
  /**
   * Display an auto scroll button.
   * `{ size: 'md', color: 'neutral', variant: 'outline' }`{lang="ts-type"}
   * @default "true"
   */
  autoScroll?: boolean | Partial<ButtonProps> | undefined;
  /**
   * The icon displayed in the auto scroll button.
   */
  autoScrollIcon?: string | undefined;
  /**
   * The `user` messages props.
   * `{ side: 'right', variant: 'soft' }`{lang="ts-type"}
   */
  user?: Pick<ChatMessageProps, "icon" | "variant" | "avatar" | "side" | "actions"> | undefined;
  /**
   * The `assistant` messages props.
   * `{ side: 'left', variant: 'naked' }`{lang="ts-type"}
   */
  assistant?: Pick<ChatMessageProps, "icon" | "variant" | "avatar" | "side" | "actions"> | undefined;
  /**
   * Render the messages in a compact style.
   * This is done automatically when used inside a `UChatPalette`{lang="ts-type"}.
   */
  compact?: boolean | undefined;
  /**
   * The spacing offset for the last message in px. Can be useful when the prompt is sticky for example.
   * @default "0"
   */
  spacingOffset?: number | undefined;
  ui?: { root?: ClassNameValue; indicator?: ClassNameValue; viewport?: ClassNameValue; autoScroll?: ClassNameValue; } | undefined;
}
```

### Slots

```ts
/**
 * Slots for the ChatMessages component
 */
interface ChatMessagesSlots {
  default(): any;
  indicator(): any;
  viewport(): any;
  content(): any;
  leading(): any;
  actions(): any;
}
```

::tip
You can use all the slots of the [`ChatMessage`](https://ui.nuxt.com/components/chat-message#slots) component inside ChatMessages, they are automatically forwarded allowing you to customize individual messages when using the `messages` prop.

```vue {3-5}
<template>
  <UChatMessages :messages="messages" :status="status">
    <template #content="{ message }">
      <MDC :value="message.content" :cache-key="message.id" unwrap="p" />
    </template>
  </UChatMessages>
</template>
```
::

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  uiPro: {
    chatMessages: {
      slots: {
        root: 'w-full flex flex-col gap-1 flex-1 px-2.5 [&>article]:last-of-type:min-h-(--last-message-height)',
        indicator: 'h-6 flex items-center gap-1 py-3 *:size-2 *:rounded-full *:bg-elevated [&>*:nth-child(1)]:animate-[bounce_1s_infinite] [&>*:nth-child(2)]:animate-[bounce_1s_0.15s_infinite] [&>*:nth-child(3)]:animate-[bounce_1s_0.3s_infinite]',
        viewport: 'absolute inset-x-0 top-[86%] data-[state=open]:animate-[fade-in_200ms_ease-out] data-[state=closed]:animate-[fade-out_200ms_ease-in]',
        autoScroll: 'rounded-full absolute right-1/2 translate-x-1/2 bottom-0'
      },
      variants: {
        compact: {
          true: '',
          false: ''
        }
      }
    }
  }
})
```

