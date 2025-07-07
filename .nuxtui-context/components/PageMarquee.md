# PageMarquee

## Usage

The `PageMarquee` component allows you to create an infinite scrolling animation with your content. Perfect for showcasing logos, testimonials, or any repeating content in an engaging way.

```vue
<template>
  <UPageMarquee>
    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
  </UPageMarquee>
</template>
```

### Pause on Hover

Use the `pause-on-hover` prop to pause the animation when the user hovers over the content.

```vue
<template>
  <UPageMarquee pause-on-hover>
    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
  </UPageMarquee>
</template>
```

### Reverse

Use the `reverse` prop to reverse the direction of the animation.

```vue
<template>
  <UPageMarquee reverse>
    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
  </UPageMarquee>
</template>
```

### Orientation

Use the `orientation` prop to change the scrolling direction.

```vue
<template>
  <UPageMarquee orientation="vertical">
    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
  </UPageMarquee>
</template>
```

### Repeat

Use the `repeat` prop to specify how many times the content should be repeated in the animation.

```vue
<template>
  <UPageMarquee :repeat="6">
    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
  </UPageMarquee>
</template>
```

### Overlay

Use the `overlay` prop to remove the gradient overlays on the edges of the marquee.

```vue
<template>
  <UPageMarquee :overlay="false">
    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
  </UPageMarquee>
</template>
```

## Examples

### Testimonials

Use the `PageMarquee` component to create an infinite scrolling animation for your testimonials.

```vue [PageMarqueeTestimonials.vue]
<script setup lang="ts">
const testimonials = [{
  user: {
    name: 'Anthony Bettini',
    description: 'CEO and founder of VulnCheck',
    avatar: {
      src: 'https://media.licdn.com/dms/image/v2/C4E03AQEY3pmXsH8hDg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1519741249442?e=1746057600&v=beta&t=dvQfBT9ah03MPNy9cnly30ugreeCdxG4nrxV3lwKAC8',
      loading: 'lazy'
    }
  },
  quote: 'We were using a SaaS service for the docs site, but were left unfulfilled. We put in the effort to do it in house, with UI Pro and not only did we get complimented by a prospect on our site, but they wanted to know our platform.'
}, {
  user: {
    name: 'Yaz Jallad',
    description: 'Founder Ninjaparade Digital',
    avatar: {
      src: 'https://pbs.twimg.com/profile_images/1824690890222485504/lQ7v1AGt_400x400.jpg',
      loading: 'lazy'
    }
  },
  quote: 'Wow, Nuxt UI Pro is a total game-changer! I\'m seriously impressed with the quality, attention to detail, and the insane variety of components you get. It\'s like hitting the jackpot for any developer. I\'ve saved countless hours that I would\'ve spent stressing over making my apps look good, with amazing accessible UX,  and instead, I\'ve been able to focus on the real deal – building the app itself. It\'s an instant buy for me, every single time. No second thoughts!'
}, {
  user: {
    name: 'Kevin Olson',
    description: 'Founder of Fume.app',
    avatar: {
      src: 'https://ipx.nuxt.com/f_auto,s_40x40/gh_avatar/acidjazz',
      srcset: 'https://ipx.nuxt.com/f_auto,s_80x80/gh_avatar/acidjazz 2x',
      loading: 'lazy'
    }
  },
  quote: 'Nuxt UI Pro saves 100s of hours of dev and design time while delivering a clean professional look on any device.'
}, {
  user: {
    name: 'Michael Hoffmann',
    description: 'Senior Frontend Developer',
    avatar: {
      src: 'https://ipx.nuxt.com/f_auto,s_40x40/gh_avatar/mokkapps',
      srcset: 'https://ipx.nuxt.com/f_auto,s_80x80/gh_avatar/mokkapps 2x',
      loading: 'lazy'
    }
  },
  quote: 'I decided to replace my custom-built components with a component library and chose Nuxt UI Pro. It only took me a few hours, and the new UI looks more professional. Integrating the library is easy; the components are well-documented and highly customizable. I can only recommend it; this library is my new choice for new SaaS products.'
}, {
  user: {
    name: 'Harlan Wilton',
    description: 'Nuxt core team member',
    avatar: {
      src: 'https://ipx.nuxt.com/f_auto,s_40x40/gh_avatar/harlan-zw',
      srcset: 'https://ipx.nuxt.com/f_auto,s_80x80/gh_avatar/harlan-zw 2x',
      loading: 'lazy'
    }
  },
  quote: 'Nuxt UI Pro is my go to component library. Out-of-the-box it handles all of the UI demands I throw at it while looking great. The customisation is really worth thought out, allowing you to override components in a breeze. Always amazed at the improvements dropped in each update as well, the team is doing an amazing job.'
}, {
  user: {
    name: 'Thomas Sanlis',
    description: 'Freelance developer and designer',
    avatar: {
      src: 'https://pbs.twimg.com/profile_images/1374040164180299791/ACw4G3nZ_400x400.jpg',
      loading: 'lazy'
    }
  },
  quote: 'I jumped at the chance to buy the Nuxt team\'s new UI kit as soon as I saw it. While I\'m already a fan of Nuxt UI, the pro version takes it to a whole new level and lets me paste entire blocks into all my projects, saving me a ton of time.'
}, {
  user: {
    name: 'Benjamin Code',
    description: 'YouTuber and SaaS builder',
    avatar: {
      src: 'https://pbs.twimg.com/profile_images/1607353032420769793/I8qQSUfQ_400x400.jpg',
      loading: 'lazy'
    }
  },
  quote: 'Nuxt UI has allowed me to develop my SaaS without any prior mockups. The design quality of their components and the intelligence of the DX meant that I was able to try many different layouts for my application until I found the perfect UX for my users. Nuxt UI is the ui-kit I would have dreamed of building myself, and Nuxt UI Pro makes things even easier when you want to go further with your SaaS. Kudos to the team.'
}, {
  user: {
    name: 'Estéban Soubiran',
    description: 'Web developer and UnJS member',
    avatar: {
      src: 'https://pbs.twimg.com/profile_images/1801649350319218689/aS_X_iTm_400x400.jpg',
      loading: 'lazy'
    }
  },
  quote: 'Nuxt UI Pro is my preferred choice for everything, from a POC to a web platform. It\'s ready to use out-of-the-box and assists me in crafting pixel-perfect UIs. It saves me a significant amount of time while remaining highly customizable. Give it a try, and you won\'t be let down.'
}]
</script>

<template>
  <div class="flex flex-col gap-4 w-full">
    <UPageMarquee pause-on-hover :overlay="false" :ui="{ root: '[--gap:--spacing(4)]', content: 'w-auto py-1' }">
      <UPageCard
        v-for="(testimonial, index) in testimonials"
        :key="index"
        variant="subtle"
        :description="testimonial.quote"
        :ui="{
          description: 'before:content-[open-quote] after:content-[close-quote] line-clamp-3'
        }"
        class="w-64 shrink-0"
      >
        <template #footer>
          <UUser v-bind="testimonial.user" size="xl" :ui="{ description: 'line-clamp-1' }" />
        </template>
      </UPageCard>
    </UPageMarquee>
    <UPageMarquee pause-on-hover reverse :overlay="false" :ui="{ root: '[--gap:--spacing(4)]', content: 'w-auto py-1' }">
      <UPageCard
        v-for="(testimonial, index) in testimonials"
        :key="index"
        variant="subtle"
        :description="testimonial.quote"
        :ui="{
          description: 'before:content-[open-quote] after:content-[close-quote] line-clamp-3'
        }"
        class="w-64 shrink-0"
      >
        <template #footer>
          <UUser v-bind="testimonial.user" size="xl" :ui="{ description: 'line-clamp-1' }" />
        </template>
      </UPageCard>
    </UPageMarquee>
  </div>
</template>
```

### Screenshots

Use the `PageMarquee` component to create an infinite scrolling animation for your screenshots.

```vue [PageMarqueeScreenshots.vue]
<template>
  <div class="relative w-full h-[400px] bg-muted overflow-hidden">
    <UPageMarquee reverse orientation="vertical" :overlay="false" :ui="{ root: '[--duration:40s] absolute w-[460px] -left-[100px] -top-[300px] h-[940px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30' }">
      <img
        v-for="i in 4"
        :key="i"
        :src="`/pro/blocks/image${i}.png`"
        width="460"
        height="258"
        :alt="`Nuxt UI Pro Screenshot ${i}`"
        class="aspect-video border border-default rounded-lg bg-white"
      >
    </UPageMarquee>
    <UPageMarquee orientation="vertical" :overlay="false" :ui="{ root: '[--duration:40s] absolute w-[460px] -top-[400px] left-[480px] h-[1160px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30' }">
      <img
        v-for="i in [5, 6, 7, 8]"
        :key="i"
        :src="`/pro/blocks/image${i}.png`"
        width="460"
        height="258"
        :alt="`Nuxt UI Pro Screenshot ${i}`"
        class="aspect-video border border-default rounded-lg bg-white"
      >
    </UPageMarquee>
    <UPageMarquee reverse orientation="vertical" :overlay="false" :ui="{ root: 'hidden md:flex [--duration:40s] absolute w-[460px] -top-[300px] left-[1020px] h-[1060px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30' }">
      <img
        v-for="i in [9, 10, 11, 12]"
        :key="i"
        :src="`/pro/blocks/image${i}.png`"
        width="460"
        height="258"
        :alt="`Nuxt UI Pro Screenshot ${i}`"
        class="aspect-video border border-default rounded-lg bg-white"
      >
    </UPageMarquee>
  </div>
</template>
```

## API

### Props

```ts
/**
 * Props for the PageMarquee component
 */
interface PageMarqueeProps {
  /**
   * The element or component this component should render as.
   */
  as?: any;
  pauseOnHover?: boolean | undefined;
  reverse?: boolean | undefined;
  /**
   * @default "\"horizontal\""
   */
  orientation?: "horizontal" | "vertical" | undefined;
  /**
   * @default "4"
   */
  repeat?: number | undefined;
  /**
   * @default "true"
   */
  overlay?: boolean | undefined;
  ui?: { root?: ClassNameValue; content?: ClassNameValue; } | undefined;
}
```

### Slots

```ts
/**
 * Slots for the PageMarquee component
 */
interface PageMarqueeSlots {
  default(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  uiPro: {
    pageMarquee: {
      slots: {
        root: 'group relative flex items-center overflow-hidden gap-(--gap) [--gap:--spacing(16)] [--duration:20s]',
        content: 'flex items-center shrink-0 justify-around gap-(--gap) min-w-max'
      },
      variants: {
        orientation: {
          horizontal: {
            content: 'w-full'
          },
          vertical: {
            content: 'h-full'
          }
        },
        pauseOnHover: {
          true: {
            content: 'group-hover:[animation-play-state:paused]'
          }
        },
        reverse: {
          true: {
            content: '[animation-direction:reverse]'
          }
        },
        overlay: {
          true: {
            root: 'before:absolute before:pointer-events-none before:content-[""] before:z-2 before:from-default before:to-transparent after:absolute after:pointer-events-none after:content-[""] after:z-2 after:from-default after:to-transparent'
          }
        }
      },
      compoundVariants: [
        {
          orientation: 'horizontal',
          class: {
            root: 'flex-row',
            content: 'flex-row animate-[marquee_var(--duration)_linear_infinite] rtl:animate-[marquee-rtl_var(--duration)_linear_infinite] backface-hidden'
          }
        },
        {
          orientation: 'horizontal',
          overlay: true,
          class: {
            root: 'before:inset-y-0 before:left-0 before:h-full before:w-1/3 before:bg-gradient-to-r after:inset-y-0 after:right-0 after:h-full after:w-1/3 after:bg-gradient-to-l backface-hidden'
          }
        },
        {
          orientation: 'vertical',
          class: {
            root: 'flex-col',
            content: 'flex-col animate-[marquee-vertical_var(--duration)_linear_infinite] rtl:animate-[marquee-vertical-rtl_var(--duration)_linear_infinite] h-[fit-content] backface-hidden'
          }
        },
        {
          orientation: 'vertical',
          overlay: true,
          class: {
            root: 'before:inset-x-0 before:top-0 before:w-full before:h-1/3 before:bg-gradient-to-b after:inset-x-0 after:bottom-0 after:w-full after:h-1/3 after:bg-gradient-to-t backface-hidden'
          }
        }
      ]
    }
  }
})
```

