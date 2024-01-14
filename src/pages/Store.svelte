<script>
  import { X } from "lucide-svelte"
  import { toast } from "svelte-sonner"
  import { Button } from "@ui/button"
  import { Input } from "@ui/input"
  import * as AlertDialog from "@ui/alert-dialog"
  import ProductCard from "@/lib/components/ProductCard.svelte"
  import products from "@/content/products"

  let email = ""
  let search = ""

  $: filteredProducts = products.filter(
    (p) => p.name.includes(search) || p.description.includes(search)
  )
</script>

<section class="mb-6">
  <h2 class="header text-center">Our selection of only the finest baked goods.</h2>
  <form class="input-row justify-center">
    <Input
      class="max-w-xl"
      placeholder="Just type something here... (Cookies, Cakes, etc.)"
      bind:value="{search}"
    />
    <Button
      variant="ghost"
      size="icon"
      disabled="{search.length === 0}"
      on:click="{() => (search = '')}"><X /></Button
    >
  </form>
</section>

<section class="products">
  {#each filteredProducts as product}
    <ProductCard {...product} class="product" />
  {:else}
    <p class="subheader text-center col-span-full">Nothing was found</p>
  {/each}
</section>

<section class="mt-10">
  <h3 class="header text-center">Unfortunately, this is all we have for now</h3>
  <p class="subheader text-center">
    You can subscribe to our newsletter below and you will be get notified about new
    products
  </p>
  <div class="input-row mx-auto mt-4 max-w-sm">
    <Input bind:value="{email}" type="email" placeholder="example@mail.com" />
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button type="submit">Subscribe</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Header>
          <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
          <AlertDialog.Description>
            Are you sure you want to be sent updates about our range to <b>{email}</b>?
          </AlertDialog.Description>
        </AlertDialog.Header>
        <AlertDialog.Footer>
          <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
          <AlertDialog.Action
            on:click="{() => toast.success('You have subscribed to our newsletter')}"
            >Yes</AlertDialog.Action
          >
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog.Root>
  </div>
</section>

<style lang="postcss">
  .products {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
    gap: 2.5rem;

    /* passing deep to component */
    :global(.product) {
      @apply row-span-3 grid grid-rows-subgrid gap-0;
    }
  }
</style>
