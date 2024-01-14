<script>
  import { fade } from "svelte/transition"
  import { toast } from "svelte-sonner"
  import { Plus, Minus } from "lucide-svelte"
  import { Button } from "@ui/button"
  import * as Card from "@ui/card"
  import { Input } from "@ui/input"

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

<Card.Root class="{$$props.class}">
  <Card.Header>
    <Card.Title class="font-normal">{name}</Card.Title>
  </Card.Header>
  <Card.Content>
    <img src="{imageUrl}" alt="{name}" class="image" />
    <div class="mt-6">{description}</div>
  </Card.Content>
  <Card.Footer class="ml-auto flex">
    <div class="flex space-x-2">
      {#if quantity > 0}
        <div transition:fade>
          <Button class="w-10" size="icon" on:click="{removeOne}"><Minus /></Button>
        </div>
        <div transition:fade>
          <Input
            type="number"
            class="w-20"
            value="{quantity}"
            on:change="{handleChange}"
          />
        </div>
      {/if}
      <Button size="icon" class="w-10" on:click="{addOne}"><Plus /></Button>
    </div>
  </Card.Footer>
</Card.Root>
