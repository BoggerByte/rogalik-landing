<script>
import ProductCard from "@/lib/components/ProductCard.svelte";
import breads from "@/assets/breads.json"
</script>

<div class="grid gap-10" style="grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr))">
    {#each breads as bread}
        <ProductCard {...bread} class="grid grid-rows-subgrid gap-0 row-span-3" />
    {/each}
</div>