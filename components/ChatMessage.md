# ChatMessage

## Usage

The ChatMessage component renders an `<article>` element for a `user` or `assistant` chat message.

::code-preview
  :::u-chat-message
  ---
  avatar:
    src: https://github.com/benjamincanac.png
  content: Hello! Tell me more about building AI chatbots with Nuxt UI Pro.
  side: right
  variant: soft
  ---
  :::
::

::tip{to="https://ui.nuxt.com/components/chat-messages"}
Use the [`ChatMessages`](https://ui.nuxt.com/components/chat-messages) component to display a list of chat messages.
::

### Content

Use the `content` prop to display the message content.

```vue
<template>
  <UChatMessage content="Hello! Tell me more about building AI chatbots with Nuxt UI Pro." />
</template>
```

### Side

Use the `side` prop to display the message on the left or right.

```vue
<template>
  <UChatMessage side="right" content="Hello! Tell me more about building AI chatbots with Nuxt UI Pro." />
</template>
```

::note
When using the [`ChatMessages`](https://ui.nuxt.com/components/chat-messages) component, the `side` prop is set to `left` for `assistant` messages and `right` for `user` messages.
::

### Variant

Use the `variant` prop to change style of the message.

```vue
<template>
  <UChatMessage variant="soft" content="Hello! Tell me more about building AI chatbots with Nuxt UI Pro." />
</template>
```

::note
When using the [`ChatMessages`](https://ui.nuxt.com/components/chat-messages) component, the `variant` prop is set to `naked` for `assistant` messages and `soft` for `user` messages.
::

### Icon

Use the `icon` prop to display an [Icon](https://ui.nuxt.com/components/icon) component next to the message.

```vue
<template>
  <UChatMessage icon="i-lucide-user" variant="soft" side="right" content="Hello! Tell me more about building AI chatbots with Nuxt UI Pro." />
</template>
```

### Avatar

Use the `avatar` prop to display an [Avatar](https://ui.nuxt.com/components/avatar) component next to the message.

```vue
<template>
  <UChatMessage variant="soft" side="right" content="Hello! Tell me more about building AI chatbots with Nuxt UI Pro." />
</template>
```

You can also use the `avatar.icon` prop to display an icon as the avatar.

```vue
<template>
  <UChatMessage content="Nuxt UI Pro offers several features for building AI chatbots including the ChatMessage, ChatMessages, and ChatPrompt components. Best practices include using the useChat composable from Vercel AI SDK, implementing proper message styling with variants, and utilizing the built-in actions for message interactions. The components are fully customizable with theming support and responsive design." />
</template>
```

### Actions

Use the `actions` prop to display actions below the message that will be displayed when hovering over the message.

```vue
<template>
  <UChatMessage content="Nuxt UI Pro offers several features for building AI chatbots including the ChatMessage, ChatMessages, and ChatPrompt components. Best practices include using the useChat composable from Vercel AI SDK, implementing proper message styling with variants, and utilizing the built-in actions for message interactions. The components are fully customizable with theming support and responsive design." />
</template>
```

## API

### Props

```ts
/**
 * Props for the ChatMessage component
 */
interface ChatMessageProps {
  /**
   * A unique identifier for the message.
   */
  id: string;
  /**
   * Text content of the message. Use parts when possible.
   */
  content: string;
  /**
   * The 'data' role is deprecated.
   */
  role: "data" | "user" | "system" | "assistant";
  /**
   * The element or component this component should render as.
   * @default "\"article\""
   */
  as?: any;
  icon?: string | undefined;
  avatar?: (AvatarProps & { [key: string]: any; }) | undefined;
  variant?: "solid" | "outline" | "soft" | "subtle" | "naked" | undefined;
  side?: "right" | "left" | undefined;
  /**
   * Display a list of actions under the message.
   * The `label` will be used in a tooltip.
   * `{ size: 'xs', color: 'neutral', variant: 'ghost' }`{lang="ts-type"}
   */
  actions?: (Omit<ButtonProps, "onClick"> & { onClick?: ((e: MouseEvent, message: Message) => void) | undefined; })[] | undefined;
  /**
   * Render the message in a compact style.
   * This is done automatically when used inside a `UChatPalette`{lang="ts-type"}.
   */
  compact?: boolean | undefined;
  ui?: { root?: ClassNameValue; container?: ClassNameValue; leading?: ClassNameValue; leadingIcon?: ClassNameValue; leadingAvatar?: ClassNameValue; leadingAvatarSize?: ClassNameValue; content?: ClassNameValue; actions?: ClassNameValue; } | undefined;
  /**
   * The timestamp of the message.
   */
  createdAt?: Date | undefined;
  /**
   * Reasoning for the message.
   */
  reasoning?: string | undefined;
  /**
   * Additional attachments to be sent along with the message.
   */
  experimental_attachments?: Attachment[] | undefined;
  /**
   * For data messages.
   */
  data?: JSONValue | undefined;
  /**
   * Additional message-specific information added on the server via StreamData
   */
  annotations?: JSONValue[] | undefined;
  /**
   * Tool invocations (that can be tool calls or tool results, depending on whether or not the invocation has finished)
   * that the assistant made as part of this message.
   */
  toolInvocations?: ToolInvocation[] | undefined;
  /**
   * The parts of the message. Use this for rendering the message in the UI.
   * 
   * Assistant messages can have text, reasoning and tool invocation parts.
   * User messages can have text parts.
   */
  parts?: (TextUIPart | ReasoningUIPart | ToolInvocationUIPart | SourceUIPart | FileUIPart | StepStartUIPart)[] | undefined;
}
```

### Slots

```ts
/**
 * Slots for the ChatMessage component
 */
interface ChatMessageSlots {
  leading(): any;
  content(): any;
  actions(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  uiPro: {
    chatMessage: {
      slots: {
        root: 'group/message relative w-full',
        container: 'relative flex items-start group-data-[role=user]/message:max-w-[75%]',
        leading: 'inline-flex items-center justify-center min-h-6',
        leadingIcon: 'shrink-0',
        leadingAvatar: 'shrink-0',
        leadingAvatarSize: '',
        content: 'relative text-pretty min-w-0',
        actions: [
          'opacity-0 group-hover/message:opacity-100 absolute bottom-0 flex items-center',
          'transition-opacity'
        ]
      },
      variants: {
        variant: {
          solid: {
            content: 'bg-inverted text-inverted'
          },
          outline: {
            content: 'bg-default ring ring-default'
          },
          soft: {
            content: 'bg-elevated/50'
          },
          subtle: {
            content: 'bg-elevated/50 ring ring-default'
          },
          naked: {
            content: ''
          }
        },
        side: {
          left: {
            container: 'rtl:justify-end'
          },
          right: {
            container: 'ltr:justify-end ms-auto'
          }
        },
        leading: {
          true: ''
        },
        actions: {
          true: ''
        },
        compact: {
          true: {
            root: 'scroll-mt-3',
            container: 'gap-1.5 pb-3',
            leadingIcon: 'size-5',
            leadingAvatarSize: '2xs'
          },
          false: {
            root: 'scroll-mt-4 sm:scroll-mt-6',
            container: 'gap-3 pb-8',
            leadingIcon: 'size-8',
            leadingAvatarSize: 'md'
          }
        }
      },
      compoundVariants: [
        {
          compact: true,
          actions: true,
          class: {
            container: 'pb-8'
          }
        },
        {
          leading: true,
          compact: false,
          side: 'left',
          class: {
            actions: 'left-11'
          }
        },
        {
          leading: true,
          compact: true,
          side: 'left',
          class: {
            actions: 'left-6.5'
          }
        },
        {
          variant: [
            'solid',
            'outline',
            'soft',
            'subtle'
          ],
          compact: false,
          class: {
            content: 'px-4 py-3 rounded-lg min-h-12',
            leading: 'mt-2'
          }
        },
        {
          variant: [
            'solid',
            'outline',
            'soft',
            'subtle'
          ],
          compact: true,
          class: {
            content: 'px-2 py-1 rounded-lg min-h-8',
            leading: 'mt-1'
          }
        }
      ],
      defaultVariants: {
        variant: 'naked'
      }
    }
  }
})
```

