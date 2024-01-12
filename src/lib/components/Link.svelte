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
        class="hover:no-underline hover:opacity-100 {!plain && !active ? 'opacity-60' : ''} {$$props.class}"
>
    <slot {active} />
</Button>