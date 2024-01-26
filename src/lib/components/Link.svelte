<script>
  import { page } from "$app/stores"
  import { Button } from "@ui/button"

  export let to
  export let plain = false

  $: active = $page.path === to
</script>

<Button
  on:click
  variant="link"
  href="{to}"
  class="hover:text-primary hover:no-underline {!plain && !active
    ? 'text-muted-foreground'
    : ''} {$$props.class}"
>
  <slot {active} />
</Button>
