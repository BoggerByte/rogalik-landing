<script>
import {Search, X} from "lucide-svelte";
import ProductCard from "@/lib/components/ProductCard.svelte";
import breads from "@/assets/breads.json"
import {Input} from "@ui/input";
import {Button} from "@ui/button";
import * as AlertDialog from "@ui/alert-dialog";
import {toast} from "svelte-sonner";

let email = ""
let search = ""

$: filteredBreads = breads.filter(b => b.name.includes(search) || b.description.includes(search))
</script>

<h2 class="font-fatface text-4xl text-center mb-6">Our selection of only the finest baked goods.</h2>

<form class="mx-auto flex max-w-xl gap-1.5 mb-6">
    <Input class="max-w-xl" placeholder="Just type something here... (Cookies, Cakes, etc.)" bind:value={search} />
    <Button variant="ghost" size="icon" disabled={search.length === 0} on:click={() => search = ""}><X /></Button>
</form>

<section class="grid gap-10" style="grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr))">
    {#each filteredBreads as bread}
        <ProductCard {...bread} class="grid grid-rows-subgrid gap-0 row-span-3" />
    {:else}
        <div class="text-center text-xl col-span-full text-muted-foreground">Nothing was found</div>
    {/each}
</section>

<section class="mt-10">
    <h3 class="font-fatface text-4xl text-center">
        Unfortunately, this is all we have for now
    </h3>
    <p class="text-xl text-center mb-4">
        You can subscribe to our newsletter below and you will be get notified about new products
    </p>
    <div class="mx-auto flex w-full max-w-sm items-center space-x-2">
        <Input bind:value={email} type="email" placeholder="example@mail.com" />
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
                            on:click={() => toast.success('You have subscribed to our newsletter')}
                    >Yes</AlertDialog.Action>
                </AlertDialog.Footer>
            </AlertDialog.Content>
        </AlertDialog.Root>
    </div>
</section>