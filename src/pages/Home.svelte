<script>
    import {ArrowRight} from "lucide-svelte"
    import {push} from "svelte-spa-router"
    import {Button} from "@ui/button"
    import {Separator} from "@ui/separator"
    import {Carousel} from "@ui/carousel";
    import ProductCard from "@/lib/components/ProductCard.svelte"
    import Location from "@/lib/components/Location.svelte";
    import breads from "@/assets/breads.json"
    import breadsImages from "@/assets/breads-images.json"

    const viewableBreads = breads.slice(0, 6)
</script>

<section class="min-h-[55vh] max-w-7xl flex items-center justify-center text-center md:justify-start md:text-left">
    <div class="p-4">
        <h1 class="text-5xl font-fatface leading-tight">Delectable snacks <br> by Proficient Workers</h1>
        <p class="text-2xl text-muted-foreground mb-3">Don't believe us? Close the website</p>
        <Button size="lg" on:click={() => push('/store')}>
            <span class="font-bold mr-2">View Our Range</span>
            <ArrowRight/>
        </Button>
    </div>
</section>

<Separator class="relative -z-20 my-10"/>

<section class="grid gap-x-10 gap-y-[4em]" style="grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr))">
    <div class="grid grid-rows-subgrid gap-2 row-span-2 mt-2 relative">
        <div class="absolute w-full -top-[1em] text-6xl text-center -z-10">🤌</div>
        <h3 class="text-3xl font-fatface">
            Convenience at Your Fingertips
        </h3>
        <p>
            Indulge in the joy of freshly baked treats without leaving your home!
            Our bakery delivery website brings the goodness of our artisanal delights to your doorstep.
            With just a few clicks, you can satisfy your cravings effortlessly.
        </p>
    </div>
    <div class="grid grid-rows-subgrid gap-2 row-span-2 mt-2 relative">
        <div class="absolute w-full -top-[1em] text-6xl text-center -z-10">🍪</div>
        <h3 class="text-3xl font-fatface">
            Delicious Variety, Your Way
        </h3>
        <p>
            Explore a delectable array of bread, pastries, and cakes on our website. What sets us apart?
            The power is in your hands! Customize your orders to suit your taste,
            whether it's choosing flavors, toppings, or crafting a personalized cake for that special occasion.
        </p>
    </div>
    <div class="grid grid-rows-subgrid gap-2 row-span-2 mt-2 relative">
        <div class="absolute w-full -top-[1em] text-6xl text-center -z-10">🌱</div>
        <h3 class="text-3xl font-fatface">
            Guaranteed Freshness, Every Time
        </h3>
        <p>
            We take pride in delivering not just baked goods, but an experience of unrivaled freshness.
            Our commitment to quality ensures that each item is prepared just before delivery,
            so you can savor the exceptional taste that sets us apart.
        </p>
    </div>
</section>

<section class="mt-10">
    <h2 class="font-fatface text-3xl text-center mb-2">Also we're cooking out stuff in the middle of the nowhere</h2>
    <p class="text-center">And we're kinda dead serious about that 💀💀💀</p>
    <Location class="mt-5 w-full h-[400px] rounded-md"/>
</section>

<Separator class="my-10"/>

<section>

    <!--    <Carousel images={breadsImages} class="max-h-[400px] w-full" />-->
</section>

<Separator class="my-10"/>

<section>
    <h2 class="font-fatface text-5xl text-center mb-8">Let's see what we have...</h2>
    <div class="relative">
        <div class="grid gap-10" style="grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr))">
            {#each viewableBreads as bread}
                <ProductCard {...bread} class="grid grid-rows-subgrid gap-0 row-span-3"/>
            {/each}
        </div>
        <div class="overlay">
            <Button size="lg" class="flex mx-auto" on:click={() => push('/store')}>
                <span class="font-bold mr-2">View full Range at the Store</span>
                <ArrowRight/>
            </Button>
            <p class="text-xl text-center">We have a lot of interesting products there</p>
            <ul class="flex flex-row justify-center gap-10">
                <li>Bread</li>
                <li>Pastries</li>
                <li>Cakes</li>
                <li>Cookies</li>
                <li>Pies</li>
            </ul>
        </div>
    </div>
</section>

<style lang="postcss">
    .overlay {
        position: absolute;
        width: 105%;
        left: 50%;
        bottom: -10px;
        translate: -50%;
        padding-top: 500px;
        padding-bottom: 100px;
        background: linear-gradient(to top, theme('colors.background') 30%, transparent 100%);
    }
</style>