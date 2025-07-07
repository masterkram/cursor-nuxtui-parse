# PricingPlans

## Usage

The PricingPlans component provides a flexible layout to display a list of [PricingPlan](https://ui.nuxt.com/components/pricing-plan) components using either the default slot or the `plans` prop.

```vue {2,8}
<template>
  <UPricingPlans>
    <UPricingPlan
      v-for="(plan, index) in plans"
      :key="index"
      v-bind="plan"
    />
  </UPricingPlans>
</template>
```

::tip
The grid columns will be automatically calculated based on the number of plans, this works with the `plans` prop but also with the default slot.
::

### Plans

Use the `plans` prop as an array of objects with the properties of the [PricingPlan](https://ui.nuxt.com/components/pricing-plan#props) component.

```vue
<template>
  <UPricingPlans />
</template>
```

### Orientation

Use the `orientation` prop to change the orientation of the PricingPlans. Defaults to `horizontal`.

```vue
<template>
  <UPricingPlans orientation="vertical" />
</template>
```

::tip
When using the `plans` prop instead of the default slot, the `orientation` of the plans is automatically reversed, `horizontal` to `vertical` and vice versa.
::

### Compact

Use the `compact` prop to reduce the padding between the plans when one of the plans is scaled for a better visual balance.

```vue
<template>
  <UPricingPlans compact />
</template>
```

### Scale

Use the `scale` prop to adjust the spacing between the plans when one of the plans is scaled for a better visual balance.

```vue
<template>
  <UPricingPlans scale />
</template>
```

## Examples

::note
While these examples use [Nuxt Content](https://content.nuxt.com){rel="nofollow"}, the components can be integrated with any content management system.
::

### Within a page

Use the PricingPlans component in a page to create a pricing page:

```vue [pages/pricing/index.vue] {11}
<script setup lang="ts">
const { data: plans } = await useAsyncData('plans', () => queryCollection('plans').all())
</script>

<template>
  <UPage>
    <UPageHero title="Pricing" />

    <UPageBody>
      <UContainer>
        <UPricingPlans :plans="plans" />
      </UContainer>
    </UPageBody>
  </UPage>
</template>
```

::note
In this example, the `plans` are fetched using `queryCollection` from the `@nuxt/content` module.
::

## API

### Props

```ts
/**
 * Props for the PricingPlans component
 */
interface PricingPlansProps {
  /**
   * The element or component this component should render as.
   */
  as?: any;
  plans?: PricingPlanProps[] | undefined;
  /**
   * The orientation of the pricing plans.
   * @default "\"horizontal\""
   */
  orientation?: "horizontal" | "vertical" | undefined;
  /**
   * When `true`, the plans will be displayed without gap.
   * @default "false"
   */
  compact?: boolean | undefined;
  /**
   * When `true`, the plans will be displayed with a larger gap.
   * Useful when one plan is scaled. Doesn't work with `compact`.
   * @default "false"
   */
  scale?: boolean | undefined;
}
```

### Slots

```ts
/**
 * Slots for the PricingPlans component
 */
interface PricingPlansSlots {
  default(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  uiPro: {
    pricingPlans: {
      base: 'flex flex-col gap-y-8',
      variants: {
        orientation: {
          horizontal: 'lg:grid lg:grid-cols-[repeat(var(--count),minmax(0,1fr))]',
          vertical: ''
        },
        compact: {
          false: 'gap-x-8'
        },
        scale: {
          true: ''
        }
      },
      compoundVariants: [
        {
          compact: false,
          scale: true,
          class: 'lg:gap-x-13'
        }
      ]
    }
  }
})
```

