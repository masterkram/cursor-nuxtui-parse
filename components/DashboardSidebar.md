# DashboardSidebar

## Usage

The DashboardSidebar component is used to display a sidebar. Its state (size, collapsed, etc.) will be saved based on the `storage` and `storage-key` props you provide to the [DashboardGroup](https://ui.nuxt.com/components/dashboard-group#props) component.

Use it inside the default slot of the [DashboardGroup](https://ui.nuxt.com/components/dashboard-group) component:

```vue [layouts/dashboard.vue] {3}
<template>
  <UDashboardGroup>
    <UDashboardSidebar />

    <slot />
  </UDashboardGroup>
</template>
```

Use the `left`, `default` and `right` slots to customize the sidebar and the `body` or `content` slots to customize the sidebar menu.

```vue [DashboardSidebarExample.vue]
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[][] = [[{
  label: 'Home',
  icon: 'i-lucide-house',
  active: true
}, {
  label: 'Inbox',
  icon: 'i-lucide-inbox',
  badge: '4'
}, {
  label: 'Contacts',
  icon: 'i-lucide-users'
}, {
  label: 'Settings',
  icon: 'i-lucide-settings',
  defaultOpen: true,
  children: [{
    label: 'General'
  }, {
    label: 'Members'
  }, {
    label: 'Notifications'
  }]
}], [{
  label: 'Feedback',
  icon: 'i-lucide-message-circle',
  to: 'https://github.com/nuxt-ui-pro/dashboard',
  target: '_blank'
}, {
  label: 'Help & Support',
  icon: 'i-lucide-info',
  to: 'https://github.com/nuxt/ui-pro',
  target: '_blank'
}]]
</script>

<template>
  <UDashboardSidebar collapsible resizable :ui="{ footer: 'border-t border-default' }">
    <template #header="{ collapsed }">
      <LogoPro :collapsed="collapsed" class="h-5 w-auto shrink-0" />
    </template>

    <template #default="{ collapsed }">
      <UButton
        :label="collapsed ? undefined : 'Search...'"
        icon="i-lucide-search"
        color="neutral"
        variant="outline"
        block
        :square="collapsed"
      >
        <template v-if="!collapsed" #trailing>
          <div class="flex items-center gap-0.5 ms-auto">
            <UKbd value="meta" variant="subtle" />
            <UKbd value="K" variant="subtle" />
          </div>
        </template>
      </UButton>

      <UNavigationMenu
        :collapsed="collapsed"
        :items="items[0]"
        orientation="vertical"
      />

      <UNavigationMenu
        :collapsed="collapsed"
        :items="items[1]"
        orientation="vertical"
        class="mt-auto"
      />
    </template>

    <template #footer="{ collapsed }">
      <UButton
        :avatar="{
          src: 'https://github.com/benjamincanac.png'
        }"
        :label="collapsed ? undefined : 'Benjamin'"
        color="neutral"
        variant="ghost"
        class="w-full"
        :block="collapsed"
      />
    </template>
  </UDashboardSidebar>
</template>
```

::note
Drag the sidebar near the left edge of the screen to collapse it.
::

### Resizable

Use the `resizable` prop to make the sidebar resizable.

```vue
<template>
  <UDashboardSidebar resizable>
    <Placeholder class="h-96" />
  </UDashboardSidebar>
</template>
```

### Collapsible

Use the `collapsible` prop to make the sidebar collapsible when dragging near the edge of the screen.

::warning
The [`DashboardSidebarCollapse`](https://ui.nuxt.com/components/dashboard-sidebar-collapse) component will have no effect if the sidebar is not **collapsible**.
::

```vue
<template>
  <UDashboardSidebar resizable collapsible>
    <Placeholder class="h-96" />
  </UDashboardSidebar>
</template>
```

::tip{to="https://ui.nuxt.com/#slots"}
You can access the `collapsed` state in the slot props to customize the content of the sidebar when it is collapsed.
::

### Size

Use the `min-size`, `max-size`, `default-size` and `collapsed-size` props to customize the size of the sidebar.

```vue
<template>
  <UDashboardSidebar resizable collapsible :min-size="22" :default-size="35" :max-size="40" :collapsed-size="0">
    <Placeholder class="h-96" />
  </UDashboardSidebar>
</template>
```

::note
The `collapsed-size` prop is set to `0` by default but the sidebar has a `min-w-16` to make sure it is visible.
::

### Side

Use the `side` prop to change the side of the sidebar. Defaults to `left`.

```vue
<template>
  <UDashboardSidebar side="right" resizable collapsible>
    <Placeholder class="h-96" />
  </UDashboardSidebar>
</template>
```

### Mode

Use the `mode` prop to change the mode of the sidebar menu. Defaults to `slideover`.

Use the `body` slot to fill the menu body (under the header) or the `content` slot to fill the entire menu.

::tip{to="https://ui.nuxt.com/#props"}
You can use the `menu` prop to customize the menu of the sidebar, it will adapt depending on the mode you choose.
::

```vue [DashboardSidebarModeExample.vue]
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

defineProps<{
  mode: 'drawer' | 'slideover' | 'modal'
}>()

const items: NavigationMenuItem[] = [{
  label: 'Home',
  icon: 'i-lucide-house',
  active: true
}, {
  label: 'Inbox',
  icon: 'i-lucide-inbox'
}, {
  label: 'Contacts',
  icon: 'i-lucide-users'
}]
</script>

<template>
  <UDashboardGroup>
    <UDashboardSidebar :mode="mode">
      <template #header>
        <LogoPro class="h-5 w-auto" />
      </template>

      <UNavigationMenu
        :items="items"
        orientation="vertical"
      />
    </UDashboardSidebar>

    <UDashboardPanel>
      <template #header>
        <UDashboardNavbar title="Dashboard" />
      </template>
    </UDashboardPanel>
  </UDashboardGroup>
</template>
```

::note
These examples contain the [`DashboardGroup`](https://ui.nuxt.com/components/dashboard-group), [`DashboardPanel`](https://ui.nuxt.com/components/dashboard-panel) and [`DashboardNavbar`](https://ui.nuxt.com/components/dashboard-navbar) components as they are required to demonstrate the sidebar on mobile.
::

### Toggle

Use the `toggle` prop to customize the [DashboardSidebarToggle](https://ui.nuxt.com/components/dashboard-sidebar-toggle) component displayed on mobile.

You can pass any property from the [Button](https://ui.nuxt.com/components/button) component to customize it.

```vue [DashboardSidebarToggleExample.vue]
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [{
  label: 'Home',
  icon: 'i-lucide-house',
  active: true
}, {
  label: 'Inbox',
  icon: 'i-lucide-inbox'
}, {
  label: 'Contacts',
  icon: 'i-lucide-users'
}]
</script>

<template>
  <UDashboardGroup>
    <UDashboardSidebar
      open
      :toggle="{
        color: 'primary',
        variant: 'subtle',
        class: 'rounded-full'
      }"
    >
      <template #header>
        <LogoPro class="h-5 w-auto" />
      </template>

      <UNavigationMenu
        :items="items"
        orientation="vertical"
      />
    </UDashboardSidebar>

    <UDashboardPanel>
      <template #header>
        <UDashboardNavbar title="Dashboard" />
      </template>
    </UDashboardPanel>
  </UDashboardGroup>
</template>
```

### Toggle Side

Use the `toggle-side` prop to change the side of the toggle button. Defaults to `left`.

```vue [DashboardSidebarToggleSideExample.vue]
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [{
  label: 'Home',
  icon: 'i-lucide-house',
  active: true
}, {
  label: 'Inbox',
  icon: 'i-lucide-inbox'
}, {
  label: 'Contacts',
  icon: 'i-lucide-users'
}]
</script>

<template>
  <UDashboardGroup>
    <UDashboardSidebar
      open
      toggle-side="right"
    >
      <template #header>
        <LogoPro class="h-5 w-auto" />
      </template>

      <UNavigationMenu
        :items="items"
        orientation="vertical"
      />
    </UDashboardSidebar>

    <UDashboardPanel>
      <template #header>
        <UDashboardNavbar title="Dashboard" />
      </template>
    </UDashboardPanel>
  </UDashboardGroup>
</template>
```

## Examples

### Control open state

You can control the open state by using the `open` prop or the `v-model:open` directive.

```vue [DashboardSidebarOpenExample.vue]
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [{
  label: 'Home',
  icon: 'i-lucide-house',
  active: true
}, {
  label: 'Inbox',
  icon: 'i-lucide-inbox'
}, {
  label: 'Contacts',
  icon: 'i-lucide-users'
}]

const open = ref(true)

defineShortcuts({
  o: () => open.value = !open.value
})
</script>

<template>
  <UDashboardSidebar v-model:open="open">
    <template #header>
      <LogoPro class="h-5 w-auto" />
    </template>

    <UNavigationMenu
      :items="items"
      orientation="vertical"
    />
  </UDashboardSidebar>
</template>
```

::note
In this example, leveraging [`defineShortcuts`](https://ui.nuxt.com/composables/define-shortcuts), you can toggle the open state of the DashboardSidebar by pressing ``.
::

### Control collapsed state

You can control the collapsed state by using the `collapsed` prop or the `v-model:collapsed` directive.

```vue [DashboardSidebarCollapsedExample.vue]
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [{
  label: 'Home',
  icon: 'i-lucide-house',
  active: true
}, {
  label: 'Inbox',
  icon: 'i-lucide-inbox'
}, {
  label: 'Contacts',
  icon: 'i-lucide-users'
}]

const collapsed = ref(false)

defineShortcuts({
  c: () => collapsed.value = !collapsed.value
})
</script>

<template>
  <UDashboardSidebar v-model:collapsed="collapsed" collapsible>
    <template #header>
      <LogoPro class="h-5 w-auto" :collapsed="collapsed" />
    </template>

    <UNavigationMenu
      :collapsed="collapsed"
      :items="items"
      orientation="vertical"
    />
  </UDashboardSidebar>
</template>
```

::note
In this example, leveraging [`defineShortcuts`](https://ui.nuxt.com/composables/define-shortcuts), you can toggle the collapsed state of the DashboardSidebar by pressing ``.
::

## API

### Props

```ts
/**
 * Props for the DashboardSidebar component
 */
interface DashboardSidebarProps {
  /**
   * The mode of the sidebar menu.
   * @default "\"slideover\""
   */
  mode?: DashboardSidebarMode | undefined;
  /**
   * The props for the sidebar menu component.
   */
  menu?: ModalProps | SlideoverProps | DrawerProps | undefined;
  /**
   * Customize the toggle button to open the sidebar.
   * `{ color: 'neutral', variant: 'ghost' }`{lang="ts-type"}
   * @default "true"
   */
  toggle?: boolean | Partial<ButtonProps> | undefined;
  /**
   * The side to render the toggle button on.
   * @default "\"left\""
   */
  toggleSide?: "right" | "left" | undefined;
  ui?: { root?: ClassNameValue; header?: ClassNameValue; body?: ClassNameValue; footer?: ClassNameValue; toggle?: ClassNameValue; handle?: ClassNameValue; content?: ClassNameValue; overlay?: ClassNameValue; } | undefined;
  /**
   * Whether to allow the user to collapse the panel.
   * @default "false"
   */
  collapsible?: boolean | undefined;
  /**
   * The id of the panel.
   */
  id?: string | undefined;
  /**
   * The side to render the panel on.
   * @default "\"left\""
   */
  side?: "right" | "left" | undefined;
  /**
   * The minimum size of the panel.
   * @default "10"
   */
  minSize?: number | undefined;
  /**
   * The maximum size of the panel.
   * @default "20"
   */
  maxSize?: number | undefined;
  /**
   * The default size of the panel.
   * @default "15"
   */
  defaultSize?: number | undefined;
  /**
   * Whether to allow the user to resize the panel.
   * @default "false"
   */
  resizable?: boolean | undefined;
  /**
   * The size of the panel when collapsed.
   * @default "0"
   */
  collapsedSize?: number | undefined;
  open?: boolean | undefined;
  collapsed?: boolean | undefined;
}
```

### Slots

```ts
/**
 * Slots for the DashboardSidebar component
 */
interface DashboardSidebarSlots {
  header(): any;
  default(): any;
  footer(): any;
  toggle(): any;
  content(): any;
  resize-handle(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  uiPro: {
    dashboardSidebar: {
      slots: {
        root: 'relative hidden lg:flex flex-col min-h-svh min-w-16 w-(--width) shrink-0',
        header: 'h-(--ui-header-height) shrink-0 flex items-center gap-1.5 px-4',
        body: 'flex flex-col gap-4 flex-1 overflow-y-auto px-4 py-2',
        footer: 'shrink-0 flex items-center gap-1.5 px-4 py-2',
        toggle: '',
        handle: '',
        content: 'lg:hidden',
        overlay: 'lg:hidden'
      },
      variants: {
        menu: {
          true: {
            header: 'sm:px-6',
            body: 'sm:px-6',
            footer: 'sm:px-6'
          }
        },
        side: {
          left: {
            root: 'border-r border-default'
          },
          right: {
            root: ''
          }
        },
        toggleSide: {
          left: {
            toggle: ''
          },
          right: {
            toggle: 'ms-auto'
          }
        }
      }
    }
  }
})
```

