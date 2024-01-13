<script>
    import {location} from "svelte-spa-router"
    import {Button} from "@ui/button";

    export let to
    export let plain = false

    $: active = $location === to
</script>

<Button
        variant="link"
        href="#{to}"
        class="hover:no-underline hover:text-primary {!plain && !active ? 'text-muted-foreground' : ''} {$$props.class}"
>
    <slot {active} />
</Button>