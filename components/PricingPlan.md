# PricingPlan

## Usage

The PricingPlan component provides a flexible way to display a pricing plan with customizable content including title, description, price, features, etc.

::code-preview
  :::u-pricing-plan
  ---
  button:
    label: Buy now
  features:
    - One developer
    - Unlimited projects
    - Access to GitHub repository
    - Unlimited patch & minor updates
    - Lifetime access
  badge: Most popular
  billing-cycle: /month
  class: w-96
  description: For bootstrappers and indie hackers.
  discount: $199
  price: $249
  title: Solo
  ---
  :::
::

::tip{to="https://ui.nuxt.com/components/pricing-plans"}
Use the [`PricingPlans`](https://ui.nuxt.com/components/pricing-plans) component to display multiple pricing plans in a responsive grid layout.
::

### Title

Use the `title` prop to set the title of the PricingPlan.

```vue
<template>
  <UPricingPlan title="Solo" class="w-96" />
</template>
```

### Description

Use the `description` prop to set the description of the PricingPlan.

```vue
<template>
  <UPricingPlan title="Solo" description="For bootstrappers and indie hackers." />
</template>
```

### Badge

Use the `badge` prop to display a [Badge](https://ui.nuxt.com/components/badge) next to the title of the PricingPlan.

```vue
<template>
  <UPricingPlan title="Solo" description="For bootstrappers and indie hackers." badge="Most popular" />
</template>
```

You can pass any property from the [Badge](https://ui.nuxt.com/components/badge#props) component to customize it.

```vue
<template>
  <UPricingPlan title="Solo" description="For bootstrappers and indie hackers." />
</template>
```

### Price

Use the `price` prop to set the price of the PricingPlan.

```vue
<template>
  <UPricingPlan title="Solo" description="For bootstrappers and indie hackers." price="$249" />
</template>
```

### Discount

Use the `discount` prop to set a discounted price that will be displayed alongside the original price (which will be shown with a strikethrough).

```vue
<template>
  <UPricingPlan title="Solo" description="For bootstrappers and indie hackers." price="$249" discount="$199" />
</template>
```

### Billing

Use the `billing-cycle` and/or `billing-period` props to display the billing information of the PricingPlan.

```vue
<template>
  <UPricingPlan title="Solo" description="For bootstrappers and indie hackers." price="$9" billing-cycle="/month" billing-period="billed annually" />
</template>
```

### Features

Use the `features` prop as an array of string to display a list of features on the PricingPlan:

```vue
<template>
  <UPricingPlan title="Solo" description="For bootstrappers and indie hackers." price="$249" />
</template>
```

::framework-only
#nuxt
  :::tip{to="https://ui.nuxt.com/getting-started/icons/nuxt#theme"}
  You can customize this icon globally in your `app.config.ts` under `ui.icons.success` key.
  :::

#vue
  :::tip{to="https://ui.nuxt.com/getting-started/icons/vue#theme"}
  You can customize this icon globally in your `vite.config.ts` under `ui.icons.success` key.
  :::
::

You can also pass an array of objects with the following properties:

- `title: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}
- `icon?: string`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}

```vue
<template>
  <UPricingPlan title="Solo" description="For bootstrappers and indie hackers." price="$249" />
</template>
```

### Button

Use the `button` prop with any property from the [Button](https://ui.nuxt.com/components/button) component to display a button at the bottom of the PricingPlan.

```vue
<template>
  <UPricingPlan title="Solo" description="For bootstrappers and indie hackers." price="$249" />
</template>
```

::tip
Use the `onClick` field to add a click handler to trigger the plan purchase.
::

### Variant

Use the `variant` prop to change the variant of the PricingPlan.

```vue
<template>
  <UPricingPlan title="Solo" description="For bootstrappers and indie hackers." price="$249" variant="subtle" />
</template>
```

### Orientation

Use the `orientation` prop to change the orientation of the PricingPlan. Defaults to `vertical`.

```vue
<template>
  <UPricingPlan title="Solo" description="For bootstrappers and indie hackers." price="$249" orientation="horizontal" variant="outline" />
</template>
```

### Tagline

Use the `tagline` prop to display a tagline text above the price.

```vue
<template>
  <UPricingPlan title="Solo" description="For bootstrappers and indie hackers." price="$249" orientation="horizontal" tagline="Pay once, own it forever" />
</template>
```

### Terms

Use the `terms` prop to display terms below the price.

```vue
<template>
  <UPricingPlan title="Solo" description="For bootstrappers and indie hackers." price="$249" orientation="horizontal" tagline="Pay once, own it forever" terms="Invoices and receipts available." />
</template>
```

### Highlight

Use the `highlight` prop to display a highlighted border around the PricingPlan.

```vue
<template>
  <UPricingPlan title="Solo" description="For bootstrappers and indie hackers." price="$249" highlight />
</template>
```

### Scale

Use the `scale` prop to make a PricingPlan bigger than the others.

::note{to="https://ui.nuxt.com/components/pricing-plans#scale"}
Check out the PricingPlans's `scale` example to see how it works as it's hard to demonstrate by itself.
::

## API

### Props

```ts
/**
 * Props for the PricingPlan component
 */
interface PricingPlanProps {
  /**
   * The element or component this component should render as.
   */
  as?: any;
  title?: string | undefined;
  description?: string | undefined;
  /**
   * Display a badge next to the title.
   * Can be a string or an object.
   * `{ color: 'primary', variant: 'subtle' }`{lang="ts-type"}
   */
  badge?: string | BadgeProps | undefined;
  /**
   * The unit price period that appears next to the price.
   * Typically used to show the recurring interval.
   */
  billingCycle?: string | undefined;
  /**
   * Additional billing context that appears above the billing cycle.
   * Typically used to show the actual billing frequency.
   */
  billingPeriod?: string | undefined;
  /**
   * The current price of the plan.
   * When used with `discount`, this becomes the original price.
   */
  price?: string | undefined;
  /**
   * The discounted price of the plan.
   * When provided, the `price` prop will be displayed as strikethrough.
   */
  discount?: string | undefined;
  /**
   * Display a list of features under the price.
   * Can be an array of strings or an array of objects.
   */
  features?: string[] | PricingPlanFeature[] | undefined;
  /**
   * Display a buy button at the bottom.
   * `{ size: 'lg', block: true }`{lang="ts-type"}
   * Use the `onClick` field to add a click handler.
   */
  button?: ButtonProps | undefined;
  /**
   * Display a tagline highlighting the pricing value proposition.
   */
  tagline?: string | undefined;
  /**
   * Display terms at the bottom.
   */
  terms?: string | undefined;
  /**
   * The orientation of the pricing plan.
   * @default "\"vertical\""
   */
  orientation?: "horizontal" | "vertical" | undefined;
  variant?: "solid" | "outline" | "soft" | "subtle" | undefined;
  /**
   * Display a ring around the pricing plan to highlight it.
   */
  highlight?: boolean | undefined;
  /**
   * Enlarge the plan to make it more prominent.
   */
  scale?: boolean | undefined;
  ui?: { root?: ClassNameValue; header?: ClassNameValue; body?: ClassNameValue; footer?: ClassNameValue; titleWrapper?: ClassNameValue; ... 15 more ...; terms?: ClassNameValue; } | undefined;
}
```

### Slots

```ts
/**
 * Slots for the PricingPlan component
 */
interface PricingPlanSlots {
  badge(): any;
  title(): any;
  description(): any;
  price(): any;
  discount(): any;
  billing(): any;
  features(): any;
  button(): any;
  header(): any;
  body(): any;
  footer(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  uiPro: {
    pricingPlan: {
      slots: {
        root: 'relative grid rounded-lg p-6 lg:p-8 xl:p-10 gap-6',
        header: '',
        body: 'flex flex-col min-w-0',
        footer: 'flex flex-col gap-6 items-center',
        titleWrapper: 'flex items-center gap-3',
        title: 'text-highlighted text-2xl sm:text-3xl text-pretty font-semibold',
        description: 'text-muted text-base text-pretty mt-2',
        priceWrapper: 'flex items-center gap-1',
        price: 'text-highlighted text-3xl sm:text-4xl font-semibold',
        discount: 'text-muted line-through text-xl sm:text-2xl',
        billing: 'flex flex-col justify-between min-w-0',
        billingPeriod: 'text-toned truncate text-xs font-medium',
        billingCycle: 'text-muted truncate text-xs font-medium',
        features: 'flex flex-col gap-3 flex-1 mt-6 grow-0',
        feature: 'flex items-center gap-2 min-w-0',
        featureIcon: 'size-5 shrink-0 text-primary',
        featureTitle: 'text-muted text-sm truncate',
        badge: '',
        button: '',
        tagline: 'text-base font-semibold text-default',
        terms: 'text-xs/5 text-muted text-center text-balance'
      },
      variants: {
        orientation: {
          horizontal: {
            root: 'grid-cols-1 lg:grid-cols-3 justify-between divide-y lg:divide-y-0 lg:divide-x divide-default',
            body: 'lg:col-span-2 pb-6 lg:pb-0 lg:pr-6 justify-center',
            footer: 'lg:justify-center lg:items-center lg:p-6 lg:max-w-xs lg:w-full lg:mx-auto',
            features: 'lg:grid lg:grid-cols-2 lg:mt-12'
          },
          vertical: {
            footer: 'justify-end',
            priceWrapper: 'mt-6'
          }
        },
        variant: {
          solid: {
            root: 'bg-inverted',
            title: 'text-inverted',
            description: 'text-dimmed',
            price: 'text-inverted',
            discount: 'text-dimmed',
            billingCycle: 'text-dimmed',
            billingPeriod: 'text-dimmed',
            featureTitle: 'text-dimmed'
          },
          outline: {
            root: 'bg-default ring ring-default'
          },
          soft: {
            root: 'bg-elevated/50'
          },
          subtle: {
            root: 'bg-elevated/50 ring ring-default'
          }
        },
        highlight: {
          true: {
            root: 'ring-2 ring-inset ring-primary'
          }
        },
        scale: {
          true: {
            root: 'lg:scale-[1.1] lg:z-[1]'
          }
        }
      },
      compoundVariants: [
        {
          orientation: 'horizontal',
          variant: 'soft',
          class: {
            root: 'divide-accented'
          }
        },
        {
          orientation: 'horizontal',
          variant: 'subtle',
          class: {
            root: 'divide-accented'
          }
        }
      ],
      defaultVariants: {
        variant: 'outline'
      }
    }
  }
})
```

