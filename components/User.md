# User

## Usage

### Name

Use the `name` prop to display a name for the user.

```vue
<template>
  <UUser name="John Doe" />
</template>
```

### Description

Use the `description` prop to display a description for the user.

```vue
<template>
  <UUser name="John Doe" description="Software Engineer" />
</template>
```

### Avatar

Use the `avatar` prop to display an [Avatar](https://ui.nuxt.com/components/avatar) component.

```vue
<template>
  <UUser name="John Doe" description="Software Engineer" />
</template>
```

::collapsible{name="all avatar properties"}
```ts
/**
 * Props for the Avatar component
 */
interface AvatarProps {
  /**
   * The element or component this component should render as.
   * @default "\"span\""
   */
  as?: any;
  src?: string | undefined;
  alt?: string | undefined;
  icon?: string | undefined;
  text?: string | undefined;
  size?: "md" | "3xs" | "2xs" | "xs" | "sm" | "lg" | "xl" | "2xl" | "3xl" | undefined;
  chip?: boolean | ChipProps | undefined;
  ui?: { root?: ClassNameValue; image?: ClassNameValue; fallback?: ClassNameValue; icon?: ClassNameValue; } | undefined;
}
```
::

### Chip

Use the `chip` prop to display a [Chip](https://ui.nuxt.com/components/chip) component.

```vue
<template>
  <UUser name="John Doe" description="Software Engineer" />
</template>
```

::collapsible{name="all chip properties"}
```ts
/**
 * Props for the Chip component
 */
interface ChipProps {
  /**
   * The element or component this component should render as.
   */
  as?: any;
  /**
   * Display some text inside the chip.
   */
  text?: string | number | undefined;
  color?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral" | undefined;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "3xs" | "2xs" | "2xl" | "3xl" | undefined;
  /**
   * The position of the chip.
   */
  position?: "top-right" | "bottom-right" | "top-left" | "bottom-left" | undefined;
  /**
   * When `true`, keep the chip inside the component for rounded elements.
   * @default "false"
   */
  inset?: boolean | undefined;
  /**
   * When `true`, render the chip relatively to the parent.
   * @default "false"
   */
  standalone?: boolean | undefined;
  ui?: { root?: ClassNameValue; base?: ClassNameValue; } | undefined;
  /**
   * @default "true"
   */
  show?: boolean | undefined;
}
```
::

### Size

Use the `size` prop to change the size of the user avatar and text.

```vue
<template>
  <UUser name="John Doe" description="Software Engineer" chip size="xl" />
</template>
```

### Orientation

Use the `orientation` prop to change the orientation. Defaults to `horizontal`.

```vue
<template>
  <UUser orientation="vertical" name="John Doe" description="Software Engineer" />
</template>
```

### Link

You can pass any property from the [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link){rel="nofollow"} component such as `to`, `target`, `rel`, etc.

```vue
<template>
  <UUser to="https://github.com/nuxt/ui-pro" target="_blank" name="Nuxt UI Pro" description="Premium components for Vue" />
</template>
```

::note
The `NuxtLink` component will inherit all other attributes you pass to the `User` component.
::

## API

### Props

```ts
/**
 * Props for the User component
 */
interface UserProps {
  /**
   * The element or component this component should render as.
   */
  as?: any;
  name?: string | undefined;
  description?: string | undefined;
  avatar?: (Omit<AvatarProps, "size"> & { [key: string]: any; }) | undefined;
  chip?: boolean | Omit<ChipProps, "size" | "inset"> | undefined;
  size?: "md" | "xs" | "sm" | "lg" | "xl" | "3xs" | "2xs" | "2xl" | "3xl" | undefined;
  /**
   * The orientation of the user.
   * @default "\"horizontal\""
   */
  orientation?: "horizontal" | "vertical" | undefined;
  to?: string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric | undefined;
  target?: "_blank" | "_parent" | "_self" | "_top" | (string & {}) | null | undefined;
  ui?: { root?: ClassNameValue; wrapper?: ClassNameValue; name?: ClassNameValue; description?: ClassNameValue; avatar?: ClassNameValue; } | undefined;
}
```

### Slots

```ts
/**
 * Slots for the User component
 */
interface UserSlots {
  avatar(): any;
  name(): any;
  description(): any;
  default(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  uiPro: {
    user: {
      slots: {
        root: 'relative group/user',
        wrapper: '',
        name: 'font-medium',
        description: 'text-muted',
        avatar: 'shrink-0'
      },
      variants: {
        orientation: {
          horizontal: {
            root: 'flex items-center'
          },
          vertical: {
            root: 'flex flex-col'
          }
        },
        to: {
          true: {
            name: [
              'text-default peer-hover:text-highlighted',
              'transition-colors'
            ],
            description: [
              'peer-hover:text-toned',
              'transition-colors'
            ],
            avatar: 'transform transition-transform duration-200 group-hover/user:scale-115'
          },
          false: {
            name: 'text-highlighted',
            description: ''
          }
        },
        size: {
          '3xs': {
            root: 'gap-1',
            wrapper: 'flex items-center gap-1',
            name: 'text-xs',
            description: 'text-xs'
          },
          '2xs': {
            root: 'gap-1.5',
            wrapper: 'flex items-center gap-1.5',
            name: 'text-xs',
            description: 'text-xs'
          },
          xs: {
            root: 'gap-1.5',
            wrapper: 'flex items-center gap-1.5',
            name: 'text-xs',
            description: 'text-xs'
          },
          sm: {
            root: 'gap-2',
            name: 'text-xs',
            description: 'text-xs'
          },
          md: {
            root: 'gap-2',
            name: 'text-sm',
            description: 'text-xs'
          },
          lg: {
            root: 'gap-2.5',
            name: 'text-sm',
            description: 'text-sm'
          },
          xl: {
            root: 'gap-2.5',
            name: 'text-base',
            description: 'text-sm'
          },
          '2xl': {
            root: 'gap-3',
            name: 'text-base',
            description: 'text-base'
          },
          '3xl': {
            root: 'gap-3',
            name: 'text-lg',
            description: 'text-base'
          }
        }
      },
      defaultVariants: {
        size: 'md'
      }
    }
  }
})
```

