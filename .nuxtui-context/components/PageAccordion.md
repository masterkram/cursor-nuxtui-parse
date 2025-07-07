# PageAccordion

## Usage

The PageAccordion component is built on top of the [Accordion](https://ui.nuxt.com/components/accordion) component. It is styled to match other page components.

```vue
<script setup lang="ts">
const items = ref([
  {
    label: 'What are the main considerations when upgrading to Nuxt UI v3?',
    icon: 'i-lucide-circle-help',
    content: 'The transition to v3 involves significant changes, including new component structures, updated theming approaches, and revised TypeScript definitions. We recommend a careful, incremental upgrade process, starting with thorough testing in a development environment.',
  },
  {
    label: 'Is Nuxt UI v3 compatible with standalone Vue projects?',
    icon: 'i-lucide-circle-help',
    content: 'Nuxt UI is now compatible with Vue! You can follow the installation guide to get started.',
  },
  {
    label: 'What about Nuxt UI Pro?',
    icon: 'i-lucide-circle-help',
    content: 'We also rebuilt Nuxt UI Pro from scratch and released a v3.0.0-alpha.x package but it only contains the components to build this documentation yet. This will be a free update, so the license you buy now will be valid for v3. We are actively working to finish the rewrite of all Nuxt UI Pro components.',
  },
])
</script>

<template>
  <UPageAccordion :items="items" />
</template>
```

## Examples

### With markdown content

You can use the [MDC](https://github.com/nuxt-modules/mdc?tab=readme-ov-file#mdc){rel="nofollow"} component from `@nuxtjs/mdc` to render markdown in the accordion items.

```vue [PageAccordionMarkdownExample.vue]
<script setup lang="ts">
const items = [
  {
    label: 'What are the main considerations when upgrading to Nuxt UI v3?',
    icon: 'i-lucide-circle-help',
    content: 'The transition to v3 involves significant changes, including new component structures, updated theming approaches, and revised TypeScript definitions. We recommend a careful, incremental upgrade process, starting with thorough testing in a development environment.'
  },
  {
    label: 'Is Nuxt UI v3 compatible with standalone Vue projects?',
    icon: 'i-lucide-circle-help',
    content: 'Nuxt UI is now compatible with Vue! You can follow the [installation guide](/getting-started/installation/vue) to get started.'
  },
  {
    label: 'What about Nuxt UI Pro?',
    icon: 'i-lucide-circle-help',
    content: 'We\'ve also rebuilt Nuxt UI Pro from scratch and released a `v3.0.0-alpha.x` package but it only contains the components to build this documentation yet. This will be a free update, so the license you buy now will be valid for v3. We\'re actively working to finish the rewrite of all Nuxt UI Pro components..'
  },
  {
    label: 'Will Nuxt UI v3 work with other CSS frameworks like UnoCSS?',
    icon: 'i-lucide-circle-help',
    content: 'Nuxt UI v3 is currently designed to work exclusively with Tailwind CSS. While there\'s interest in UnoCSS support, implementing it would require significant changes to the theme structure due to differences in class naming conventions. As a result, we don\'t have plans to add UnoCSS support in v3.'
  },
  {
    label: 'How does Nuxt UI v3 handle accessibility?',
    icon: 'i-lucide-circle-help',
    content: 'Nuxt UI v3 enhances accessibility through Reka UI integration. This provides automatic ARIA attributes, keyboard navigation support, intelligent focus management, and screen reader announcements. While offering a strong foundation, proper implementation and testing in your specific use case remains crucial for full accessibility compliance. For more detailed information, refer to [Reka UI\'s accessibility documentation](https://reka-ui.com/docs/overview/accessibility).'
  },
  {
    label: 'What is the testing approach for Nuxt UI v3?',
    icon: 'i-lucide-circle-help',
    content: 'Nuxt UI v3 ensures reliability with 1000+ Vitest tests, covering core functionality and accessibility. This robust testing suite supports the library\'s stability and serves as a reference for developers.'
  },
  {
    label: 'Is this version stable and suitable for production use?',
    icon: 'i-lucide-circle-help',
    content: 'As Nuxt UI v3 is currently in alpha, we recommend thorough testing before using it in production environments. We\'re actively working on stabilization and welcome feedback from early adopters to improve the library. Feel free to report any issues you encounter on our [GitHub repository](https://github.com/nuxt/ui/issues).'
  }
]
</script>

<template>
  <UPageAccordion :items="items" default-value="1">
    <template #body="{ item }">
      <MDC :value="item.content" unwrap="p" />
    </template>
  </UPageAccordion>
</template>
```

## API

### Props

```ts
/**
 * Props for the PageAccordion component
 */
interface PageAccordionProps {
  /**
   * @default "\"multiple\""
   */
  type?: SingleOrMultipleType | undefined;
  ui?: ({ base?: ClassNameValue; trigger?: ClassNameValue; body?: ClassNameValue; } & { root?: ClassNameValue; item?: ClassNameValue; ... 6 more ...; label?: ClassNameValue; }) | undefined;
  /**
   * The icon displayed on the right side of the trigger.
   */
  trailingIcon?: string | undefined;
  /**
   * When `true`, prevents the user from interacting with the accordion and all its items
   */
  disabled?: boolean | undefined;
  /**
   * The element or component this component should render as.
   */
  as?: any;
  /**
   * The key used to get the label from the item.
   */
  labelKey?: string | undefined;
  items?: AccordionItem[] | undefined;
  /**
   * The controlled value of the active item(s).
   * 
   * Use this when you need to control the state of the items. Can be binded with `v-model`
   */
  modelValue?: string | string[] | undefined;
  /**
   * The default active value of the item(s).
   * 
   * Use when you do not need to control the state of the item(s).
   */
  defaultValue?: string | string[] | undefined;
  /**
   * When type is "single", allows closing content when clicking trigger for an open item.
   * When type is "multiple", this prop has no effect.
   */
  collapsible?: boolean | undefined;
  /**
   * When `true`, the element will be unmounted on closed state.
   */
  unmountOnHide?: boolean | undefined;
}
```

### Slots

```ts
/**
 * Slots for the PageAccordion component
 */
interface PageAccordionSlots {
  leading(): any;
  default(): any;
  trailing(): any;
  content(): any;
  body(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  uiPro: {
    pageAccordion: {
      slots: {
        base: '',
        trigger: 'text-base',
        body: 'text-base text-muted'
      }
    }
  }
})
```

