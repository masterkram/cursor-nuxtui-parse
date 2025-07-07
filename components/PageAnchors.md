# PageAnchors

## Usage

### Links

Use the `links` prop as an array of objects with the following properties:

- `label: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `icon?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `class?: any`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkLeading?: ClassNameValue, linkLeadingIcon?: ClassNameValue }`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

You can pass any property from the [Link](https://ui.nuxt.com/components/link#props) component such as `to`, `target`, etc.

```vue
<template>
  <UPageAnchors />
</template>
```

## Examples

::note
While these examples use [Nuxt Content](https://content.nuxt.com){rel="nofollow"}, the components can be integrated with any content management system.
::

### Within a layout

Use the PageAnchors component inside the [PageAside](https://ui.nuxt.com/components/page-aside) component to display a list of links above the navigation.

```vue [layouts/docs.vue] {35}
<script setup lang="ts">
import type { PageAnchor } from '@nuxt/ui-pro'
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<ContentNavigationItem[]>('navigation')

const links: PageAnchor[] = [{
  label: 'Documentation',
  icon: 'i-lucide-book-open',
  to: '/getting-started'
}, {
  label: 'Components',
  icon: 'i-lucide-box',
  to: '/components/app'
}, {
  label: 'Roadmap',
  icon: 'i-lucide-map',
  to: '/roadmap'
}, {
  label: 'Figma Kit',
  icon: 'i-simple-icons-figma',
  to: 'https://www.figma.com/community/file/1288455405058138934',
  target: '_blank'
}, {
  label: 'Releases',
  icon: 'i-lucide-rocket',
  to: 'https://github.com/nuxt/ui/releases',
  target: '_blank'
}]
</script>

<template>
  <UPage>
    <template #left>
      <UPageAside>
        <UPageAnchors :links="links" />

        <USeparator type="dashed" />

        <UContentNavigation :navigation="navigation" />
      </UPageAside>
    </template>

    <slot />
  </UPage>
</template>
```

## API

### Props

```ts
/**
 * Props for the PageAnchors component
 */
interface PageAnchorsProps {
  /**
   * The element or component this component should render as.
   * @default "\"nav\""
   */
  as?: any;
  links?: PageAnchor[] | undefined;
  ui?: { root?: ClassNameValue; list?: ClassNameValue; item?: ClassNameValue; link?: ClassNameValue; linkLeading?: ClassNameValue; linkLeadingIcon?: ClassNameValue; linkLabel?: ClassNameValue; linkLabelExternalIcon?: ClassNameValue; } | undefined;
}
```

### Slots

```ts
/**
 * Slots for the PageAnchors component
 */
interface PageAnchorsSlots {
  link(): any;
  link-leading(): any;
  link-label(): any;
  link-trailing(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  uiPro: {
    pageAnchors: {
      slots: {
        root: '',
        list: '',
        item: 'relative',
        link: 'group text-sm flex items-center gap-1.5 py-1 focus-visible:outline-primary',
        linkLeading: 'rounded-md p-1 inline-flex ring-inset ring',
        linkLeadingIcon: 'size-4 shrink-0',
        linkLabel: 'truncate',
        linkLabelExternalIcon: 'size-3 absolute top-0 text-dimmed'
      },
      variants: {
        active: {
          true: {
            link: 'text-primary font-semibold',
            linkLeading: 'bg-primary ring-primary text-inverted'
          },
          false: {
            link: [
              'text-muted hover:text-default font-medium',
              'transition-colors'
            ],
            linkLeading: [
              'bg-elevated/50 ring-accented text-dimmed group-hover:bg-primary group-hover:ring-primary group-hover:text-inverted',
              'transition'
            ]
          }
        }
      }
    }
  }
})
```

