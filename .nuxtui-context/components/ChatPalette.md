# ChatPalette

## Usage

The ChatPalette component is a structured layout wrapper that organizes [ChatMessages](https://ui.nuxt.com/components/chat-messages) in a scrollable content area and [ChatPrompt](https://ui.nuxt.com/components/chat-prompt) in a fixed bottom section, creating cohesive chatbot interfaces for modals, slideovers, or drawers.

```vue {2,8}
<template>
  <UChatPalette>
    <UChatMessages />

    <template #prompt>
      <UChatPrompt />
    </template>
  </UChatPalette>
</template>
```

## Examples

::note{target="_blank" to="https://sdk.vercel.ai/docs/getting-started/nuxt"}
These chat components are designed to be used with the `useChat` composable from **Vercel AI SDK**.
::

### Within a Modal

You can use the ChatPalette component inside a [Modal](https://ui.nuxt.com/components/modal)'s content.

```vue [ChatPaletteModalExample.vue]
<script setup lang="ts">
import { useChat } from '@ai-sdk/vue'

const { messages, input, handleSubmit, status, error } = useChat()
</script>

<template>
  <UModal open :ui="{ content: 'sm:h-[28rem]' }">
    <template #content>
      <UChatPalette>
        <UChatMessages
          :messages="messages"
          :status="status"
          :user="{ side: 'left', variant: 'naked', avatar: { src: 'https://github.com/benjamincanac.png' } }"
          :assistant="{ icon: 'i-lucide-bot' }"
        >
          <template #content="{ message }">
            <MDC :value="message.content" :cache-key="message.id" unwrap="p" />
          </template>
        </UChatMessages>

        <template #prompt>
          <UChatPrompt
            v-model="input"
            icon="i-lucide-search"
            variant="naked"
            :error="error"
            @submit="handleSubmit"
          />
        </template>
      </UChatPalette>
    </template>
  </UModal>
</template>
```

### Within ContentSearch

You can use the ChatPalette component conditionally inside [ContentSearch](https://ui.nuxt.com/components/content-search)'s content to display a chatbot interface when a user selects an item.

```vue [ChatPaletteContentSearchExample.vue]
<script setup lang="ts">
import { useChat } from '@ai-sdk/vue'

const groups = computed(() => [{
  id: 'ai',
  ignoreFilter: true,
  items: [{
    label: searchTerm.value ? `Ask AI for “${searchTerm.value}”` : 'Ask AI',
    icon: 'i-lucide-bot',
    onSelect: (e: any) => {
      e.preventDefault()

      ai.value = true

      if (searchTerm.value) {
        setMessages([{
          id: '1',
          role: 'user',
          content: searchTerm.value
        }])

        reload()
      }
    }
  }]
}])

const ai = ref(false)
const searchTerm = ref('')

const { messages, input, handleSubmit, status, error, reload, setMessages } = useChat()

function onClose(e: Event) {
  e.preventDefault()

  ai.value = false
}
</script>

<template>
  <ClientOnly>
    <LazyUContentSearch v-model:search-term="searchTerm" open :groups="groups">
      <template v-if="ai" #content>
        <UChatPalette>
          <UChatMessages
            :messages="messages"
            :status="status"
            :user="{ side: 'left', variant: 'naked', avatar: { src: 'https://github.com/benjamincanac.png' } }"
            :assistant="{ icon: 'i-lucide-bot' }"
          >
            <template #content="{ message }">
              <MDC :value="message.content" :cache-key="message.id" unwrap="p" />
            </template>
          </UChatMessages>

          <template #prompt>
            <UChatPrompt
              v-model="input"
              icon="i-lucide-search"
              variant="naked"
              :error="error"
              @submit="handleSubmit"
              @close="onClose"
            />
          </template>
        </UChatPalette>
      </template>
    </LazyUContentSearch>
  </ClientOnly>
</template>
```

## API

### Props

```ts
/**
 * Props for the ChatPalette component
 */
interface ChatPaletteProps {
  /**
   * The element or component this component should render as.
   */
  as?: any;
  ui?: { root?: ClassNameValue; prompt?: ClassNameValue; close?: ClassNameValue; content?: ClassNameValue; } | undefined;
}
```

### Slots

```ts
/**
 * Slots for the ChatPalette component
 */
interface ChatPaletteSlots {
  default(): any;
  prompt(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  uiPro: {
    chatPalette: {
      slots: {
        root: 'relative flex-1 flex flex-col min-h-0 min-w-0',
        prompt: 'px-0 rounded-t-none border-t border-default',
        close: '',
        content: 'overflow-y-auto flex-1 flex flex-col py-3'
      }
    }
  }
})
```

