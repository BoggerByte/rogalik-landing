<script>
    import { fade } from "svelte/transition";
    import {Button} from "@ui/button";
    import {Badge} from "@ui/badge";
    import {ChevronLeft, ChevronRight} from "lucide-svelte";

    export let images = [];
    export let current = 0;

    const nextImage = () => {
        current = (current + 1) % images.length;
    };

    const prevImage = () => {
        if (current !== 0) {
            current = (current - 1) % images.length;
        } else {
            current = images.length - 1;
        }
    };
</script>

<div class="relative {$$props.class}">
    <div class="absolute w-full h-full px-2 flex items-center justify-between">
        <Button variant="outline" size="icon" on:click={prevImage}><ChevronLeft /></Button>
        <Button variant="outline" size="icon" on:click={nextImage}><ChevronRight /></Button>
    </div>
    <div class="images min-h-0 max-h-full rounded-md bg-secondary">
        {#each images as image, idx}
            {#if current === idx}
                <img
                    class="image"
                    transition:fade
                    src={image}
                    alt="carousel"
                />
            {/if}
        {/each}
    </div>
    <div class="absolute bottom-1 w-full flex justify-center">
        <Badge>{current + 1} / {images.length}</Badge>
    </div>
</div>

<style lang="postcss">
    .images {
        display: grid;
        grid-template-areas: "pile";
        justify-content: center;
        align-items: stretch;
        overflow: clip;
    }

    .images > .image {
        object-fit: cover;
        display: block;
        grid-area: pile;
    }
</style>