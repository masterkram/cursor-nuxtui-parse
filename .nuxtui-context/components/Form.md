# Form

## Usage

Use the Form component to validate form data using validation libraries such as [Valibot](https://github.com/fabian-hiller/valibot){rel="nofollow"}, [Zod](https://github.com/colinhacks/zod){rel="nofollow"}, [Yup](https://github.com/jquense/yup){rel="nofollow"}, [Joi](https://github.com/hapijs/joi){rel="nofollow"}, [Superstruct](https://github.com/ianstormtaylor/superstruct){rel="nofollow"} or your own validation logic.

It works with the [FormField](https://ui.nuxt.com/components/form-field) component to display error messages around form elements automatically.

### Schema Validation

It requires two props:

- `state` - a reactive object holding the form's state.
- `schema` - any [Standard Schema](https://standardschema.dev/){rel="nofollow"} or a schema from [Yup](https://github.com/jquense/yup){rel="nofollow"}, [Joi](https://github.com/hapijs/joi){rel="nofollow"} or [Superstruct](https://github.com/ianstormtaylor/superstruct){rel="nofollow"}.

::warning
**No validation library is included** by default, ensure you **install the one you need**.
::

::tabs{.gap-0}
```vue [FormExampleValibot.vue]
<script setup lang="ts">
import * as v from 'valibot'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = v.object({
  email: v.pipe(v.string(), v.email('Invalid email')),
  password: v.pipe(v.string(), v.minLength(8, 'Must be at least 8 characters'))
})

type Schema = v.InferOutput<typeof schema>

const state = reactive({
  email: '',
  password: ''
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  console.log(event.data)
}
</script>

<template>
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormField label="Email" name="email">
      <UInput v-model="state.email" />
    </UFormField>

    <UFormField label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormField>

    <UButton type="submit">
      Submit
    </UButton>
  </UForm>
</template>
```

```vue [FormExampleZod.vue]
<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Must be at least 8 characters')
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  email: undefined,
  password: undefined
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  console.log(event.data)
}
</script>

<template>
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormField label="Email" name="email">
      <UInput v-model="state.email" />
    </UFormField>

    <UFormField label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormField>

    <UButton type="submit">
      Submit
    </UButton>
  </UForm>
</template>
```

```vue [FormExampleYup.vue]
<script setup lang="ts">
import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = object({
  email: string().email('Invalid email').required('Required'),
  password: string()
    .min(8, 'Must be at least 8 characters')
    .required('Required')
})

type Schema = InferType<typeof schema>

const state = reactive({
  email: undefined,
  password: undefined
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  console.log(event.data)
}
</script>

<template>
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormField label="Email" name="email">
      <UInput v-model="state.email" />
    </UFormField>

    <UFormField label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormField>

    <UButton type="submit">
      Submit
    </UButton>
  </UForm>
</template>
```

```vue [FormExampleJoi.vue]
<script setup lang="ts">
import Joi from 'joi'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string()
    .min(8)
    .required()
})

const state = reactive({
  email: undefined,
  password: undefined
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<typeof state>) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  console.log(event.data)
}
</script>

<template>
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormField label="Email" name="email">
      <UInput v-model="state.email" />
    </UFormField>

    <UFormField label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormField>

    <UButton type="submit">
      Submit
    </UButton>
  </UForm>
</template>
```

```vue [FormExampleSuperstruct.vue]
<script setup lang="ts">
import { object, string, nonempty, refine, type Infer } from 'superstruct'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = object({
  email: nonempty(string()),
  password: refine(string(), 'Password', (value) => {
    if (value.length >= 8) return true
    return 'Must be at least 8 characters'
  })
})

const state = reactive({
  email: '',
  password: ''
})

type Schema = Infer<typeof schema>

async function onSubmit(event: FormSubmitEvent<Schema>) {
  console.log(event.data)
}
</script>

<template>
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormField label="Email" name="email">
      <UInput v-model="state.email" />
    </UFormField>

    <UFormField label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormField>

    <UButton type="submit">
      Submit
    </UButton>
  </UForm>
</template>
```
::

Errors are reported directly to the [FormField](https://ui.nuxt.com/components/form-field) component based on the `name` or `error-pattern` prop. This means the validation rules defined for the `email` attribute in your schema will be applied to `<FormField name="email">`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="vue"}.

Nested validation rules are handled using dot notation. For example, a rule like `{ user: z.object({ email: z.string() }) }`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts"} will be applied to `<FormField name="user.email">`{.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="vue"}.

### Custom Validation

Use the `validate` prop to apply your own validation logic.

The validation function must return a list of errors with the following attributes:

- `message` - the error message to display.
- `name` - the `name` of the `FormField` to send the error to.

::tip
It can be used alongside the `schema` prop to handle complex use cases.
::

```vue [FormExampleBasic.vue]
<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '@nuxt/ui'

const state = reactive({
  email: undefined,
  password: undefined
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.email) errors.push({ name: 'email', message: 'Required' })
  if (!state.password) errors.push({ name: 'password', message: 'Required' })
  return errors
}

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<typeof state>) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  console.log(event.data)
}
</script>

<template>
  <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormField label="Email" name="email">
      <UInput v-model="state.email" />
    </UFormField>

    <UFormField label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormField>

    <UButton type="submit">
      Submit
    </UButton>
  </UForm>
</template>
```

### Input Events

The Form component automatically triggers validation when an input emits an `input`, `change`, or `blur` event.

- Validation on `input` occurs **as you type**.
- Validation on `change` occurs when you **commit to a value**.
- Validation on `blur` happens when an input **loses focus**.

You can control when validation happens this using the `validate-on` prop.

```vue [FormExampleElements.vue]
<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = z.object({
  input: z.string().min(10),
  inputNumber: z.number().min(10),
  inputMenu: z.any().refine(option => option?.value === 'option-2', {
    message: 'Select Option 2'
  }),
  inputMenuMultiple: z.any().refine(values => !!values?.find((option: any) => option.value === 'option-2'), {
    message: 'Include Option 2'
  }),
  textarea: z.string().min(10),
  select: z.string().refine(value => value === 'option-2', {
    message: 'Select Option 2'
  }),
  selectMultiple: z.array(z.string()).refine(values => values.includes('option-2'), {
    message: 'Include Option 2'
  }),
  selectMenu: z.any().refine(option => option?.value === 'option-2', {
    message: 'Select Option 2'
  }),
  selectMenuMultiple: z.any().refine(values => !!values?.find((option: any) => option.value === 'option-2'), {
    message: 'Include Option 2'
  }),
  switch: z.boolean().refine(value => value === true, {
    message: 'Toggle me'
  }),
  checkbox: z.boolean().refine(value => value === true, {
    message: 'Check me'
  }),
  radioGroup: z.string().refine(value => value === 'option-2', {
    message: 'Select Option 2'
  }),
  checkboxGroup: z.any().refine(values => !!values?.find((option: any) => option === 'option-2'), {
    message: 'Include Option 2'
  }),
  slider: z.number().max(20, { message: 'Must be less than 20' }),
  pin: z.string().regex(/^\d$/).array().length(5)
})

type Schema = z.input<typeof schema>

const state = reactive<Partial<Schema>>({})

const form = useTemplateRef('form')

const items = [
  { label: 'Option 1', value: 'option-1' },
  { label: 'Option 2', value: 'option-2' },
  { label: 'Option 3', value: 'option-3' }
]

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  console.log(event.data)
}
</script>

<template>
  <UForm ref="form" :state="state" :schema="schema" class="w-full" @submit="onSubmit">
    <div class="grid grid-cols-3 gap-4">
      <UFormField label="Input" name="input">
        <UInput v-model="state.input" placeholder="john@lennon.com" class="w-full" />
      </UFormField>

      <div class="flex flex-col gap-4">
        <UFormField name="switch">
          <USwitch v-model="state.switch" label="Switch me" />
        </UFormField>

        <UFormField name="checkbox">
          <UCheckbox v-model="state.checkbox" label="Check me" />
        </UFormField>
      </div>

      <UFormField name="slider" label="Slider">
        <USlider v-model="state.slider" />
      </UFormField>

      <UFormField name="select" label="Select">
        <USelect v-model="state.select" :items="items" class="w-full" />
      </UFormField>

      <UFormField name="selectMultiple" label="Select (Multiple)">
        <USelect v-model="state.selectMultiple" multiple :items="items" class="w-full" />
      </UFormField>

      <UFormField name="selectMenu" label="Select Menu">
        <USelectMenu v-model="state.selectMenu" :items="items" class="w-full" />
      </UFormField>

      <UFormField name="selectMenuMultiple" label="Select Menu (Multiple)">
        <USelectMenu v-model="state.selectMenuMultiple" multiple :items="items" class="w-full" />
      </UFormField>

      <UFormField name="inputMenu" label="Input Menu">
        <UInputMenu v-model="state.inputMenu" :items="items" class="w-full" />
      </UFormField>

      <UFormField name="inputMenuMultiple" label="Input Menu (Multiple)">
        <UInputMenu v-model="state.inputMenuMultiple" multiple :items="items" class="w-full" />
      </UFormField>

      <UFormField name="inputNumber" label="Input Number">
        <UInputNumber v-model="state.inputNumber" class="w-full" />
      </UFormField>

      <UFormField label="Textarea" name="textarea">
        <UTextarea v-model="state.textarea" class="w-full" />
      </UFormField>
      <div class="flex gap-4">
        <UFormField name="radioGroup">
          <URadioGroup v-model="state.radioGroup" legend="Radio group" :items="items" />
        </UFormField>
        <UFormField name="checkboxGroup">
          <UCheckboxGroup v-model="state.checkboxGroup" legend="Checkbox group" :items="items" />
        </UFormField>
      </div>
      <UFormField name="pin" label="Pin Input" :error-pattern="/(pin)\..*/">
        <UPinInput v-model="state.pin" />
      </UFormField>
    </div>

    <div class="flex gap-2 mt-8">
      <UButton type="submit">
        Submit
      </UButton>

      <UButton variant="outline" @click="form?.clear()">
        Clear
      </UButton>
    </div>
  </UForm>
</template>
```

::tip
You can use the [`useFormField`](https://ui.nuxt.com/composables/use-form-field) composable to implement this inside your own components.
::

### Error Event

You can listen to the `@error` event to handle errors. This event is triggered when the form is submitted and contains an array of `FormError` objects with the following fields:

- `id` - the input's `id`.
- `name` - the `name` of the `FormField`
- `message` - the error message to display.

Here's an example that focuses the first input element with an error after the form is submitted:

```vue [FormExampleOnError.vue]
<script setup lang="ts">
import type { FormError, FormErrorEvent, FormSubmitEvent } from '@nuxt/ui'

const state = reactive({
  email: undefined,
  password: undefined
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.email) errors.push({ name: 'email', message: 'Required' })
  if (!state.password) errors.push({ name: 'password', message: 'Required' })
  return errors
}

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<typeof state>) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  console.log(event.data)
}

async function onError(event: FormErrorEvent) {
  if (event?.errors?.[0]?.id) {
    const element = document.getElementById(event.errors[0].id)
    element?.focus()
    element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}
</script>

<template>
  <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit" @error="onError">
    <UFormField label="Email" name="email">
      <UInput v-model="state.email" />
    </UFormField>

    <UFormField label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormField>

    <UButton type="submit">
      Submit
    </UButton>
  </UForm>
</template>
```

### Nesting Forms

Nesting form components allows you to manage complex data structures, such as lists or conditional fields, more efficiently.

For example, it can be used to dynamically add fields based on user's input:

```vue [FormExampleNested.vue]
<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = z.object({
  name: z.string().min(2),
  news: z.boolean().default(false)
})

type Schema = z.output<typeof schema>

const nestedSchema = z.object({
  email: z.string().email()
})

type NestedSchema = z.output<typeof nestedSchema>

const state = reactive<Partial<Schema & NestedSchema>>({ })

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  console.log(event.data)
}
</script>

<template>
  <UForm
    :state="state"
    :schema="schema"
    class="gap-4 flex flex-col w-60"
    @submit="onSubmit"
  >
    <UFormField label="Name" name="name">
      <UInput v-model="state.name" placeholder="John Lennon" />
    </UFormField>

    <div>
      <UCheckbox v-model="state.news" name="news" label="Register to our newsletter" @update:model-value="state.email = undefined" />
    </div>

    <UForm v-if="state.news" :state="state" :schema="nestedSchema" attach>
      <UFormField label="Email" name="email">
        <UInput v-model="state.email" placeholder="john@lennon.com" />
      </UFormField>
    </UForm>

    <div>
      <UButton type="submit">
        Submit
      </UButton>
    </div>
  </UForm>
</template>
```

Or to validate list inputs:

```vue [FormExampleNestedList.vue]
<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = z.object({
  customer: z.string().min(2)
})

type Schema = z.output<typeof schema>

const itemSchema = z.object({
  description: z.string().min(1),
  price: z.number().min(0)
})

type ItemSchema = z.output<typeof itemSchema>

const state = reactive<Partial<Schema & { items: Partial<ItemSchema>[] }>>({
  items: [{}]
})

function addItem() {
  if (!state.items) {
    state.items = []
  }
  state.items.push({})
}

function removeItem() {
  if (state.items) {
    state.items.pop()
  }
}

const toast = useToast()

async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  console.log(event.data)
}
</script>

<template>
  <UForm
    :state="state"
    :schema="schema"
    class="gap-4 flex flex-col w-60"
    @submit="onSubmit"
  >
    <UFormField label="Customer" name="customer">
      <UInput v-model="state.customer" placeholder="Wonka Industries" />
    </UFormField>

    <UForm
      v-for="item, count in state.items"
      :key="count"
      :state="item"
      :schema="itemSchema"
      attach
      class="flex gap-2"
    >
      <UFormField :label="!count ? 'Description' : undefined" name="description">
        <UInput v-model="item.description" />
      </UFormField>
      <UFormField :label="!count ? 'Price' : undefined" name="price" class="w-20">
        <UInput v-model="item.price" type="number" />
      </UFormField>
    </UForm>

    <div class="flex gap-2">
      <UButton color="neutral" variant="subtle" size="sm" @click="addItem()">
        Add Item
      </UButton>

      <UButton color="neutral" variant="ghost" size="sm" @click="removeItem()">
        Remove Item
      </UButton>
    </div>
    <div>
      <UButton type="submit">
        Submit
      </UButton>
    </div>
  </UForm>
</template>
```

## API

### Props

```ts
/**
 * Props for the Form component
 */
interface FormProps {
  /**
   * An object representing the current state of the form.
   */
  state: Partial<any>;
  id?: string | number | undefined;
  /**
   * Schema to validate the form state. Supports Standard Schema objects, Yup, Joi, and Superstructs.
   */
  schema?: FormSchema | undefined;
  /**
   * Custom validation function to validate the form state.
   */
  validate?: ((state: Partial<any>) => FormError<string>[] | Promise<FormError<string>[]>) | undefined;
  /**
   * The list of input events that trigger the form validation.
   */
  validateOn?: FormInputEvents[] | undefined;
  /**
   * Disable all inputs inside the form.
   */
  disabled?: boolean | undefined;
  /**
   * Delay in milliseconds before validating the form on input events.
   * @default "300"
   */
  validateOnInputDelay?: number | undefined;
  /**
   * If true, schema transformations will be applied to the state on submit.
   * @default "true as T"
   */
  transform?: boolean | undefined;
  /**
   * If true, this form will attach to its parent Form (if any) and validate at the same time.
   * @default "true"
   */
  attach?: boolean | undefined;
  /**
   * When `true`, all form elements will be disabled on `@submit` event.
   * This will cause any focused input elements to lose their focus state.
   * @default "true"
   */
  loadingAuto?: boolean | undefined;
}
```

### Slots

```ts
/**
 * Slots for the Form component
 */
interface FormSlots {
  default(): any;
}
```

### Emits

```ts
/**
 * Emitted events for the Form component
 */
interface FormEmits {
  submit: (payload: FormSubmitEvent<any>) => void;
  error: (payload: FormErrorEvent) => void;
}
```

### Expose

You can access the typed component instance using [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref){rel="nofollow"}.

```vue
<script setup lang="ts">
const form = useTemplateRef('form')
</script>

<template>
  <UForm ref="form" />
</template>
```

This will give you access to the following:

| Name                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `submit()`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}                                                                                                  | `Promise<void>`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} :br ::div{.text-toned.mt-1}
Triggers form submission.
::                                                                                         |
| `validate(opts: { name?: keyof T | (keyof T)[], silent?: boolean, nested?: boolean, transform?: boolean })`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} | `Promise<T>`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} :br ::div{.text-toned.mt-1}
Triggers form validation. Will raise any errors unless `opts.silent` is set to true.
::                                 |
| `clear(path?: keyof T)`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}                                                                                     | `void` :br ::div{.text-toned.mt-1}
Clears form errors associated with a specific path. If no path is provided, clears all form errors.
::                                                                                                                                            |
| `getErrors(path?: keyof T)`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}                                                                                 | `FormError[]`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} :br ::div{.text-toned.mt-1}
Retrieves form errors associated with a specific path. If no path is provided, returns all form errors.
::             |
| `setErrors(errors: FormError[], name?: keyof T)`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}                                                            | `void` :br ::div{.text-toned.mt-1}
Sets form errors for a given path. If no path is provided, overrides all errors.
::                                                                                                                                                               |
| `errors`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}                                                                                                    | `Ref<FormError[]>`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} :br ::div{.text-toned.mt-1}
A reference to the array containing validation errors. Use this to access or manipulate the error information.
:: |
| `disabled`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}                                                                                                  | `Ref<boolean>`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}                                                                                                                                                   |
| `dirty`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}                                                                                                     | `Ref<boolean>`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} `true` if at least one form field has been updated by the user.                                                                                   |
| `dirtyFields`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}                                                                                               | `DeepReadonly<Set<keyof T>>`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} Tracks fields that have been modified by the user.                                                                                  |
| `touchedFields`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}                                                                                             | `DeepReadonly<Set<keyof T>>`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} Tracks fields that the user interacted with.                                                                                        |
| `blurredFields`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"}                                                                                             | `DeepReadonly<Set<keyof T>>`{.language-ts-type.shiki.shiki-themes.material-theme-lighter.material-theme.material-theme-palenight lang="ts-type"} Tracks fields blurred by the user.                                                                                                  |

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    form: {
      base: ''
    }
  }
})
```

