# Header

## Usage

The Header component renders a `<header>` element. Its height is defined through a `--ui-header-height` CSS variable, which you can customize by overriding it in your CSS:

```css
:root {
  --ui-header-height: --spacing(16);
}
```

Use the `left`, `default` and `right` slots to customize the header and the `body` or `content` slots to customize the header menu.

```vue [HeaderExample.vue]
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Docs',
  to: '/getting-started',
  active: route.path.startsWith('/getting-started')
}, {
  label: 'Components',
  to: '/components',
  active: route.path.startsWith('/components')
}, {
  label: 'Roadmap',
  to: '/roadmap'
}, {
  label: 'Figma',
  to: 'https://www.figma.com/community/file/1288455405058138934',
  target: '_blank'
}, {
  label: 'Releases',
  to: 'https://github.com/nuxt/ui/releases',
  target: '_blank'
}])
</script>

<template>
  <UHeader>
    <template #title>
      <Logo class="h-6 w-auto" />
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />

      <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/nuxt/ui"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </UTooltip>
    </template>
  </UHeader>
</template>
```

::note
In this example, we use the [NavigationMenu](https://ui.nuxt.com/components/navigation-menu) component to render the header links in the center.
::

### Title

Use the `title` prop to change the title of the header. Defaults to `Nuxt UI Pro`.

```vue
<template>
  <UHeader title="Nuxt UI Pro" />
</template>
```

You can also use the `title` slot to add your own logo.

```vue
<template>
  <UHeader>
    <template #title>
      <Logo class="h-6 w-auto" />
    </template></UHeader>
</template>
```

### To

Use the `to` prop to change the link of the title. Defaults to `/`.

```vue
<template>
  <UHeader to="/getting-started" />
</template>
```

You can also use the `left` slot to override the link entirely.

```vue
<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/getting-started">
        <Logo class="h-6 w-auto" />
      </NuxtLink>
    </template></UHeader>
</template>
```

### Mode

Use the `mode` prop to change the mode of the header menu. Defaults to `modal`.

Use the `body` slot to fill the menu body (under the header) or the `content` slot to fill the entire menu.

::tip{to="https://ui.nuxt.com/#props"}
You can use the `menu` prop to customize the menu of the header, it will adapt depending on the mode you choose.
::

```vue [HeaderMenuExample.vue]
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Docs',
  to: '/getting-started',
  icon: 'i-lucide-book-open',
  active: route.path.startsWith('/getting-started')
}, {
  label: 'Components',
  to: '/components',
  icon: 'i-lucide-box',
  active: route.path.startsWith('/components')
}, {
  label: 'Roadmap',
  icon: 'i-lucide-map',
  to: '/roadmap'
}, {
  label: 'Figma',
  icon: 'i-simple-icons-figma',
  to: 'https://www.figma.com/community/file/1288455405058138934',
  target: '_blank'
}, {
  label: 'Releases',
  icon: 'i-lucide-rocket',
  to: 'https://github.com/nuxt/ui/releases',
  target: '_blank'
}])
</script>

<template>
  <UHeader>
    <template #title>
      <Logo class="h-6 w-auto" />
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />

      <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/nuxt/ui"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </UTooltip>
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
```

### Toggle

Use the `toggle` prop to customize the toggle button displayed on mobile.

You can pass any property from the [Button](https://ui.nuxt.com/components/button) component to customize it.

```vue [HeaderToggleExample.vue]
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Docs',
  to: '/getting-started',
  icon: 'i-lucide-book-open',
  active: route.path.startsWith('/getting-started')
}, {
  label: 'Components',
  to: '/components',
  icon: 'i-lucide-box',
  active: route.path.startsWith('/components')
}, {
  label: 'Roadmap',
  icon: 'i-lucide-map',
  to: '/roadmap'
}, {
  label: 'Figma',
  icon: 'i-simple-icons-figma',
  to: 'https://www.figma.com/community/file/1288455405058138934',
  target: '_blank'
}, {
  label: 'Releases',
  icon: 'i-lucide-rocket',
  to: 'https://github.com/nuxt/ui/releases',
  target: '_blank'
}])
</script>

<template>
  <UHeader
    :toggle="{
      color: 'primary',
      variant: 'subtle',
      class: 'rounded-full'
    }"
  >
    <template #title>
      <Logo class="h-6 w-auto" />
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />

      <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/nuxt/ui"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </UTooltip>
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
```

### Toggle Side

Use the `toggle-side` prop to change the side of the toggle button. Defaults to `right`.

```vue [HeaderToggleSideExample.vue]
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Docs',
  to: '/getting-started',
  icon: 'i-lucide-book-open',
  active: route.path.startsWith('/getting-started')
}, {
  label: 'Components',
  to: '/components',
  icon: 'i-lucide-box',
  active: route.path.startsWith('/components')
}, {
  label: 'Roadmap',
  icon: 'i-lucide-map',
  to: '/roadmap'
}, {
  label: 'Figma',
  icon: 'i-simple-icons-figma',
  to: 'https://www.figma.com/community/file/1288455405058138934',
  target: '_blank'
}, {
  label: 'Releases',
  icon: 'i-lucide-rocket',
  to: 'https://github.com/nuxt/ui/releases',
  target: '_blank'
}])
</script>

<template>
  <UHeader toggle-side="left">
    <template #title>
      <Logo class="h-6 w-auto" />
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />

      <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/nuxt/ui"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </UTooltip>
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
```

## Examples

### Within `app.vue`

Use the Header component in your `app.vue` or in a layout:

```vue [app.vue] {28-51}
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Docs',
  to: '/getting-started',
  active: route.path.startsWith('/getting-started')
}, {
  label: 'Components',
  to: '/components',
  active: route.path.startsWith('/components')
}, {
  label: 'Roadmap',
  to: '/roadmap'
}, {
  label: 'Figma',
  to: 'https://www.figma.com/community/file/1288455405058138934',
  target: '_blank'
}, {
  label: 'Releases',
  to: 'https://github.com/nuxt/ui/releases',
  target: '_blank'
}])
</script>

<template>
  <UApp>
    <UHeader>
      <template #title>
        <Logo class="h-6 w-auto" />
      </template>

      <UNavigationMenu :items="items" />

      <template #right>
        <UColorModeButton />

        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/nuxt/ui"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </template>

      <template #body>
        <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
      </template>
    </UHeader>

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <UFooter />
  </UApp>
</template>
```

## API

### Props

```ts
/**
 * Props for the Header component
 */
interface HeaderProps {
  /**
   * The element or component this component should render as.
   * @default "\"header\""
   */
  as?: any;
  /**
   * @default "\"Nuxt UI Pro\""
   */
  title?: string | undefined;
  /**
   * @default "\"/\""
   */
  to?: string | undefined;
  /**
   * The mode of the header menu.
   * @default "\"modal\""
   */
  mode?: HeaderMode | undefined;
  /**
   * The props for the header menu component.
   */
  menu?: ModalProps | SlideoverProps | DrawerProps | undefined;
  /**
   * Customize the toggle button to open the header menu displayed when the `content` slot is used.
   * `{ color: 'neutral', variant: 'ghost' }`{lang="ts-type"}
   * @default "true"
   */
  toggle?: boolean | Partial<ButtonProps> | undefined;
  /**
   * The side to render the toggle button on.
   * @default "\"right\""
   */
  toggleSide?: "right" | "left" | undefined;
  ui?: { root?: ClassNameValue; container?: ClassNameValue; left?: ClassNameValue; center?: ClassNameValue; right?: ClassNameValue; ... 5 more ...; body?: ClassNameValue; } | undefined;
  open?: boolean | undefined;
}
```

### Slots

```ts
/**
 * Slots for the Header component
 */
interface HeaderSlots {
  title(): any;
  left(): any;
  default(): any;
  right(): any;
  toggle(): any;
  top(): any;
  bottom(): any;
  body(): any;
  content(): any;
}
```

### Emits

```ts
/**
 * Emitted events for the Header component
 */
interface HeaderEmits {
  update:open: (payload: boolean) => void;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  uiPro: {
    header: {
      slots: {
        root: 'bg-default/75 backdrop-blur border-b border-default h-(--ui-header-height) sticky top-0 z-50',
        container: 'flex items-center justify-between gap-3 h-full',
        left: 'lg:flex-1 flex items-center gap-1.5',
        center: 'hidden lg:flex',
        right: 'flex items-center justify-end lg:flex-1 gap-1.5',
        title: 'shrink-0 font-bold text-xl text-highlighted flex items-end gap-1.5',
        toggle: 'lg:hidden',
        content: 'lg:hidden',
        overlay: 'lg:hidden',
        header: 'px-4 sm:px-6 h-(--ui-header-height) shrink-0 flex items-center justify-between gap-3',
        body: 'p-4 sm:p-6 overflow-y-auto'
      },
      variants: {
        toggleSide: {
          left: {
            toggle: '-ms-1.5'
          },
          right: {
            toggle: '-me-1.5'
          }
        }
      }
    }
  }
})
```

