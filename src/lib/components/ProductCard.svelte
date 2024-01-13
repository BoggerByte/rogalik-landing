<script>
    import {fade} from "svelte/transition";
    import { toast } from "svelte-sonner";
    import {Button} from "@ui/button"
    import * as Card from "@ui/card"
    import {Plus, Minus} from "lucide-svelte"
    import {Input} from "@ui/input";

    export let name
    export let imageUrl
    export let description

    let quantity = 0

    function addOne() {
        quantity++
        toast(`"${name}" has been added to cart`, {
            description: `${quantity} in total`,
            action: {
                label: "undo",
                onClick: () => removeOne()
            }
        })
    }

    function removeOne() {
        quantity--
        toast(`"${name}" has been removed from cart`, {
            description: `${quantity} in total`,
            action: {
                label: "undo",
                onClick: () => addOne()
            }
        })
    }

    function handleChange(e) {
        const newQuantity = +e.target.value
        if (newQuantity < 0) {
            e.preventDefault()
            return
        }
        quantity = newQuantity
    }
</script>

<Card.Root class={$$props.class}>
    <Card.Header>
        <Card.Title>{name}</Card.Title>
    </Card.Header>
    <Card.Content>
        {#if imageUrl === "blank"}
            <div class="h-[300px]"></div>
        {:else}
            <img src={imageUrl} alt={name} class="block w-full rounded object-cover h-[300px]">
        {/if}
        <div class="mt-6">{description}</div>
    </Card.Content>
    <Card.Footer class="flex">
        <div class="ml-auto flex gap-2 justify-end">
            {#if quantity > 0}
                <span transition:fade>
                    <Button class="w-10" size="icon" on:click={removeOne}><Minus /></Button>
                </span>
                <span transition:fade>
                    <Input type="number" class="w-20" value={quantity} on:change={handleChange} />
                </span>
            {/if}
            <Button size="icon" class="w-10" on:click={addOne}><Plus /></Button>
        </div>
    </Card.Footer>
</Card.Root>