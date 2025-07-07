# AuthForm

## Usage

Built on top of the [Form](https://ui.nuxt.com/components/form) component, the `AuthForm` component can be used in your pages or wrapped in a [PageCard](https://ui.nuxt.com/components/page-card).

The form will construct itself based on the `fields` prop and the state will be handled internally. You can pass all the props you would pass to a [FormField](https://ui.nuxt.com/components/form-field#props) or an [Input](https://ui.nuxt.com/components/input#props) to each field.

```vue [AuthFormExample.vue]
<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const toast = useToast()

const fields = [{
  name: 'email',
  type: 'text' as const,
  label: 'Email',
  placeholder: 'Enter your email',
  required: true
}, {
  name: 'password',
  label: 'Password',
  type: 'password' as const,
  placeholder: 'Enter your password'
}, {
  name: 'remember',
  label: 'Remember me',
  type: 'checkbox' as const
}]

const providers = [{
  label: 'Google',
  icon: 'i-simple-icons-google',
  onClick: () => {
    toast.add({ title: 'Google', description: 'Login with Google' })
  }
}, {
  label: 'GitHub',
  icon: 'i-simple-icons-github',
  onClick: () => {
    toast.add({ title: 'GitHub', description: 'Login with GitHub' })
  }
}]

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Must be at least 8 characters')
})

type Schema = z.output<typeof schema>

function onSubmit(payload: FormSubmitEvent<Schema>) {
  console.log('Submitted', payload)
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4">
    <UPageCard class="w-full max-w-md">
      <UAuthForm
        :schema="schema"
        title="Login"
        description="Enter your credentials to access your account."
        icon="i-lucide-user"
        :fields="fields"
        :providers="providers"
        @submit="onSubmit"
      />
    </UPageCard>
  </div>
</template>
```

### Title

Use the `title` prop to set the title of the form.

```vue
<template>
  <UAuthForm class="max-w-md" title="Login" />
</template>
```

### Description

Use the `description` prop to set the description of the form.

```vue
<template>
  <UAuthForm class="max-w-md" title="Login" description="Enter your credentials to access your account." />
</template>
```

### Icon

Use the `icon` prop to set the icon of the form.

```vue
<template>
  <UAuthForm class="max-w-md" title="Login" description="Enter your credentials to access your account." icon="i-lucide-user" />
</template>
```

### Providers

Use the `providers` prop to add providers to the form.

You can pass any property from the [Button](https://ui.nuxt.com/components/button) component such as `variant`, `color`, `to`, etc.

```vue
<template>
  <UAuthForm class="max-w-md" title="Login" description="Enter your credentials to access your account." icon="i-lucide-user" />
</template>
```

### Separator

Use the `separator` prop to customize the [Separator](https://ui.nuxt.com/components/separator) between the providers and the fields. Defaults to `or`.

```vue
<template>
  <UAuthForm class="max-w-md" title="Login" description="Enter your credentials to access your account." icon="i-lucide-user" separator="Providers" />
</template>
```

You can pass any property from the [Separator](https://ui.nuxt.com/components/separator#props) component to customize it.

```vue
<template>
  <UAuthForm class="max-w-md" title="Login" description="Enter your credentials to access your account." icon="i-lucide-user" />
</template>
```

### Submit

Use the `submit` prop to change the submit button of the form.

You can pass any property from the [Button](https://ui.nuxt.com/components/button) component such as `variant`, `color`, `to`, etc.

```vue
<template>
  <UAuthForm class="max-w-md" title="Login" description="Enter your credentials to access your account." icon="i-lucide-user" />
</template>
```

## Examples

### Within a page

You can wrap the `AuthForm` component with the [PageCard](https://ui.nuxt.com/components/page-card) component to display it within a `login.vue` page for example.

```vue [AuthFormPageExample.vue]
<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const toast = useToast()

const fields = [{
  name: 'email',
  type: 'text' as const,
  label: 'Email',
  placeholder: 'Enter your email',
  required: true
}, {
  name: 'password',
  label: 'Password',
  type: 'password' as const,
  placeholder: 'Enter your password'
}, {
  name: 'remember',
  label: 'Remember me',
  type: 'checkbox' as const
}]

const providers = [{
  label: 'Google',
  icon: 'i-simple-icons-google',
  onClick: () => {
    toast.add({ title: 'Google', description: 'Login with Google' })
  }
}, {
  label: 'GitHub',
  icon: 'i-simple-icons-github',
  onClick: () => {
    toast.add({ title: 'GitHub', description: 'Login with GitHub' })
  }
}]

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Must be at least 8 characters')
})

type Schema = z.output<typeof schema>

function onSubmit(payload: FormSubmitEvent<Schema>) {
  console.log('Submitted', payload)
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4">
    <UPageCard class="w-full max-w-md">
      <UAuthForm
        :schema="schema"
        :fields="fields"
        :providers="providers"
        title="Welcome back!"
        icon="i-lucide-lock"
        @submit="onSubmit"
      >
        <template #description>
          Don't have an account? <ULink to="#" class="text-primary font-medium">Sign up</ULink>.
        </template>
        <template #password-hint>
          <ULink to="#" class="text-primary font-medium" tabindex="-1">Forgot password?</ULink>
        </template>
        <template #validation>
          <UAlert color="error" icon="i-lucide-info" title="Error signing in" />
        </template>
        <template #footer>
          By signing in, you agree to our <ULink to="#" class="text-primary font-medium">Terms of Service</ULink>.
        </template>
      </UAuthForm>
    </UPageCard>
  </div>
</template>
```

### OTP / 2FA Example

You can add a One-Time Password (OTP) field for two-factor authentication by using the `otp` type in your fields array. The `otp` property allows you to pass any prop supported by the [PinInput](https://ui.nuxt.com/components/pin-input#api) component.

```vue
<template>
  <UAuthForm class="max-w-md" title="Login with 2FA" />
</template>
```

## API

### Props

```ts
/**
 * Props for the AuthForm component
 */
interface AuthFormProps {
  /**
   * The element or component this component should render as.
   */
  as?: any;
  /**
   * The icon displayed above the title.
   */
  icon?: string | undefined;
  title?: string | undefined;
  description?: string | undefined;
  fields?: AuthFormField[] | undefined;
  /**
   * Display a list of Button under the description.
   * `{ color: 'neutral', variant: 'subtle', block: true }`{lang="ts-type"}
   */
  providers?: ButtonProps[] | undefined;
  /**
   * The text displayed in the separator.
   * @default "\"or\""
   */
  separator?: string | SeparatorProps | undefined;
  /**
   * Display a submit button at the bottom of the form.
   * `{ label: 'Continue', block: true }`{lang="ts-type"}
   */
  submit?: ButtonProps | undefined;
  schema?: FormSchema | undefined;
  validate?: ((state: Partial<any>) => FormError<string>[] | Promise<FormError<string>[]>) | undefined;
  validateOn?: FormInputEvents[] | undefined;
  validateOnInputDelay?: number | undefined;
  disabled?: boolean | undefined;
  loading?: boolean | undefined;
  ui?: { root?: ClassNameValue; header?: ClassNameValue; leading?: ClassNameValue; leadingIcon?: ClassNameValue; title?: ClassNameValue; ... 10 more ...; footer?: ClassNameValue; } | undefined;
}
```

### Slots

```ts
/**
 * Slots for the AuthForm component
 */
interface AuthFormSlots {
  header(): any;
  leading(): any;
  title(): any;
  description(): any;
  providers(): any;
  validation(): any;
  submit(): any;
  footer(): any;
}
```

### Emits

```ts
/**
 * Emitted events for the AuthForm component
 */
interface AuthFormEmits {
  submit: (payload: FormSubmitEvent<any>) => void;
}
```

### Expose

You can access the typed component instance (exposing formRef and state) using [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref){rel="nofollow"}. For example, in a separate form (e.g. a "reset" form) you can do:

```vue
<script setup lang="ts">
const authForm = useTemplateRef('authForm')
</script>

<template>
  <UAuthForm ref="authForm" />
</template>
```

This gives you access to the following (exposed) properties:

| Name                                                                                                                          | Type                                                                                                                                              |
| ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `formRef`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} | `Ref<HTMLFormElement | null>`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} |
| `state`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}   | `Reactive<FormStateType>`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}     |

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  uiPro: {
    authForm: {
      slots: {
        root: 'w-full space-y-6',
        header: 'flex flex-col text-center',
        leading: 'mb-2',
        leadingIcon: 'size-8 shrink-0 inline-block',
        title: 'text-xl text-pretty font-semibold text-highlighted',
        description: 'mt-1 text-base text-pretty text-muted',
        body: 'gap-y-6 flex flex-col',
        providers: 'space-y-3',
        checkbox: '',
        select: '',
        password: 'w-full',
        otp: 'w-full justify-center',
        input: 'w-full',
        separator: '',
        form: 'space-y-5',
        footer: 'text-sm text-center text-muted mt-2'
      }
    }
  }
})
```

