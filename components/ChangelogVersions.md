# ChangelogVersions

## Usage

The ChangelogVersions component provides a flexible layout to display a list of [ChangelogVersion](https://ui.nuxt.com/components/changelog-version) components using either the default slot or the `versions` prop.

```vue {2,8}
<template>
  <UChangelogVersions>
    <UChangelogVersion
      v-for="(version, index) in versions"
      :key="index"
      v-bind="post"
    />
  </UChangelogVersions>
</template>
```

### Versions

Use the `versions` prop as an array of objects with the properties of the [ChangelogVersion](https://ui.nuxt.com/components/changelog-version#props) component.

```vue
<template>
  <UChangelogVersions />
</template>
```

### Indicator

Use the `indicator` prop to hide the indicator bar on the left. Defaults to `true`.

```vue
<template>
  <UChangelogVersions :indicator="false" />
</template>
```

### Indicator Motion

Use the `indicator-motion` prop to customize or hide the motion effect on the indicator bar. Defaults to `true` with `{ damping: 30, restDelta: 0.001 }` [spring transition options](https://motion.dev/docs/vue-transitions#spring){rel="nofollow"}.

```vue
<template>
  <UChangelogVersions indicator-motion />
</template>
```

## Examples

::note
While these examples use [Nuxt Content](https://content.nuxt.com){rel="nofollow"}, the components can be integrated with any content management system.
::

### Within a page

Use the ChangelogVersions component in a page to create a changelog page:

```vue [pages/changelog.vue] {10-17}
<script setup lang="ts">
const { data: versions } = await useAsyncData('versions', () => queryCollection('versions').all())
</script>

<template>
  <UPage>
    <UPageHero title="Changelog" />

    <UPageBody>
      <UChangelogVersions>
        <UChangelogVersion
          v-for="(version, index) in versions"
          :key="index"
          v-bind="version"
          :to="version.path"
        />
      </UChangelogVersions>
    </UPageBody>
  </UPage>
</template>
```

::note
In this example, the `versions` are fetched using `queryCollection` from the `@nuxt/content` module.
::

::tip
The `to` prop is overridden here since `@nuxt/content` uses the `path` property.
::

### With sticky indicator

You can use the `ui` prop and the different slots to make the indicators sticky:

```vue [ChangelogVersionsStickyExample.vue]
<script setup lang="ts">
const versions = [{
  title: 'Nuxt 3.17',
  description: 'Nuxt 3.17 is out - bringing a major reworking of the async data layer, a new built-in component, better warnings, and performance improvements!',
  date: '2025-04-27T00:00:00.000Z',
  image: 'https://nuxt.com/assets/blog/v3.17.png',
  badge: 'v3.17.0',
  to: 'https://nuxt.com/blog/nuxt-3-17',
  target: '_blank',
  authors: [{
    name: 'Daniel Roe',
    avatar: {
      src: 'https://github.com/danielroe.png',
      alt: 'Daniel Roe'
    },
    to: 'https://github.com/danielroe',
    target: '_blank'
  }]
}, {
  title: 'Nuxt 3.16',
  description: 'Nuxt 3.16 is out - packed with features and performance improvements!',
  date: '2024-03-07T00:00:00.000Z',
  image: 'https://nuxt.com/assets/blog/v3.16.png',
  badge: 'v3.16.0',
  to: 'https://nuxt.com/blog/v3-16',
  target: '_blank',
  authors: [{
    name: 'Daniel Roe',
    avatar: {
      src: 'https://github.com/danielroe.png',
      alt: 'Daniel Roe'
    },
    to: 'https://github.com/danielroe',
    target: '_blank'
  }]
}, {
  title: 'Nuxt 3.15',
  description: 'Nuxt 3.15 is out - with Vite 6, better HMR and faster performance!',
  date: '2024-12-24T00:00:00.000Z',
  image: 'https://nuxt.com/assets/blog/v3.15.png',
  badge: 'v3.15.0',
  to: 'https://nuxt.com/blog/v3-15',
  target: '_blank',
  authors: [{
    name: 'Daniel Roe',
    avatar: {
      src: 'https://github.com/danielroe.png',
      alt: 'Daniel Roe'
    },
    to: 'https://github.com/danielroe',
    target: '_blank'
  }]
}]
</script>

<template>
  <UChangelogVersions :indicator="false">
    <UChangelogVersion
      v-for="version in versions"
      :key="version.title"
      v-bind="version"
      :badge="undefined"
      class="flex items-start"
      :ui="{
        container: 'max-w-lg mr-0',
        indicator: 'sticky top-(--ui-header-height) pt-4 -mt-4 flex flex-col items-end'
      }"
    >
      <template #indicator>
        <UBadge :label="version.badge" variant="soft" />

        <span class="text-sm text-muted">{{ new Date(version.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) }}</span>
      </template>
    </UChangelogVersion>
  </UChangelogVersions>
</template>
```

## API

### Props

```ts
/**
 * Props for the ChangelogVersions component
 */
interface ChangelogVersionsProps {
  /**
   * The element or component this component should render as.
   */
  as?: any;
  versions?: ChangelogVersionProps[] | undefined;
  /**
   * Display an indicator bar on the left.
   * @default "true"
   */
  indicator?: boolean | undefined;
  /**
   * Enable scrolling motion effect on the indicator bar.
   * `{ damping: 30, restDelta: 0.001 }`{lang="ts-type"}
   * @default "true"
   */
  indicatorMotion?: boolean | SpringOptions | undefined;
  ui?: { root?: ClassNameValue; container?: ClassNameValue; indicator?: ClassNameValue; beam?: ClassNameValue; } | undefined;
}
```

### Slots

```ts
/**
 * Slots for the ChangelogVersions component
 */
interface ChangelogVersionsSlots {
  default(): any;
  indicator(): any;
  header(): any;
  badge(): any;
  date(): any;
  title(): any;
  description(): any;
  image(): any;
  body(): any;
  footer(): any;
  authors(): any;
  actions(): any;
}
```

::tip
You can use all the slots of the [`ChangelogVersion`](https://ui.nuxt.com/components/changelog-version#slots) component inside ChangelogVersions, they are automatically forwarded allowing you to customize individual versions when using the `versions` prop.

```vue {3-5}
<template>
  <UChangelogVersions :versions="versions">
    <template #body="{ version }">
      <MDC v-if="version.content" :value="version.content" />
    </template>
  </UChangelogVersions>
</template>
```
::

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  uiPro: {
    changelogVersions: {
      slots: {
        root: 'relative',
        container: 'flex flex-col gap-y-8 sm:gap-y-12 lg:gap-y-16',
        indicator: 'absolute hidden lg:block overflow-hidden inset-y-3 left-32 h-full w-px bg-border -ml-[8.5px]',
        beam: 'absolute left-0 top-0 w-full bg-primary will-change-[height]'
      }
    }
  }
})
```

