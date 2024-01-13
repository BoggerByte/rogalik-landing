<script>
  import { location } from "svelte-spa-router"
  import { Button } from "@ui/button"

  export let to
  export let plain = false

  $: active = $location === to
</script>

<Button
  on:click
  variant="link"
  href="#{to}"
  class="hover:text-primary hover:no-underline {!plain && !active
    ? 'text-muted-foreground'
    : ''} {$$props.class}"
>
  <slot {active} />
</Button>
