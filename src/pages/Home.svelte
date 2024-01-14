<script>
  import { ArrowRight } from "lucide-svelte"
  import { push } from "svelte-spa-router"
  import { Button } from "@ui/button"
  import { Separator } from "@ui/separator"
  import * as Carousel from "@ui/carousel"
  import ProductCard from "@/lib/components/ProductCard.svelte"
  import Location from "@/lib/components/Location.svelte"
  import products from "@/content/products"
  import carouselImageUrls from "@/content/carouselImageUrls.js"
  import Autoplay from "embla-carousel-autoplay"

  const viewableBreads = products.slice(0, 6)
</script>

<section
  class="flex min-h-[55vh] max-w-7xl flex-col items-center justify-center text-center lg:flex-row lg:justify-start lg:text-left"
>
  <div class="flex-grow basis-1/2 p-4">
    <h1 class="font-fatface text-5xl leading-tight">
      Delectable snacks <br /> by Proficient Workers
    </h1>
    <p class="text-2xl text-muted-foreground">Don't believe us? Close the website</p>
    <ul
      class="flex flex-wrap justify-center gap-x-4 text-muted-foreground md:justify-start"
    >
      <li>Bread</li>
      <li>Pastries</li>
      <li>Cakes</li>
      <li>Cookies</li>
      <li>Pies</li>
    </ul>
    <div class="my-3">
      <Button size="lg" on:click="{() => push('/store')}">
        <span class="mr-2 font-bold">View Our Range</span>
        <ArrowRight />
      </Button>
    </div>
  </div>
  <div class="flex-grow basis-1/2">
    <Carousel.Root
      opts="{{ loop: true }}"
      plugins="{[Autoplay({ delay: 3000 })]}"
      class="mx-10"
    >
      <Carousel.Content class="items-center">
        {#each carouselImageUrls as url, i}
          <Carousel.Item>
            <img
              src="{url}"
              class="block rounded-md object-cover"
              alt="bread image {i + 1}"
            />
            <div class="text-muted-foreground">inst: @rogalik.bakery</div>
          </Carousel.Item>
        {/each}
      </Carousel.Content>
      <Carousel.Previous />
      <Carousel.Next />
    </Carousel.Root>
  </div>
</section>

<Separator class="relative -z-20 my-10" />

<section
  class="grid gap-x-10 gap-y-[4em]"
  style="grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr))"
>
  <div class="relative row-span-2 mt-2 grid grid-rows-subgrid gap-2">
    <div class="absolute -top-[1em] -z-10 w-full text-center text-6xl">🤌</div>
    <h3 class="font-fatface text-3xl">Convenience at Your Fingertips</h3>
    <p>
      Indulge in the joy of freshly baked treats without leaving your home! Our bakery
      delivery website brings the goodness of our artisanal delights to your doorstep.
      With just a few clicks, you can satisfy your cravings effortlessly.
    </p>
  </div>
  <div class="relative row-span-2 mt-2 grid grid-rows-subgrid gap-2">
    <div class="absolute -top-[1em] -z-10 w-full text-center text-6xl">🍪</div>
    <h3 class="font-fatface text-3xl">Delicious Variety, Your Way</h3>
    <p>
      Explore a delectable array of bread, pastries, and cakes on our website. What sets
      us apart? The power is in your hands! Customize your orders to suit your taste,
      whether it's choosing flavors, toppings, or crafting a personalized cake for that
      special occasion.
    </p>
  </div>
  <div class="relative row-span-2 mt-2 grid grid-rows-subgrid gap-2">
    <div class="absolute -top-[1em] -z-10 w-full text-center text-6xl">🌱</div>
    <h3 class="font-fatface text-3xl">Guaranteed Freshness, Every Time</h3>
    <p>
      We take pride in delivering not just baked goods, but an experience of unrivaled
      freshness. Our commitment to quality ensures that each item is prepared just before
      delivery, so you can savor the exceptional taste that sets us apart.
    </p>
  </div>
</section>

<section class="mt-10">
  <h2 class="mb-2 text-center font-fatface text-3xl">
    Also we're cooking our stuff in the middle of the nowhere
  </h2>
  <p class="text-center">And we're kinda dead serious about that 💀💀💀</p>
  <Location class="mt-5 h-[400px] w-full rounded-md" />
</section>

<Separator class="my-10" />

<section>
  <!--    <Carousel images={breadsImages} class="max-h-[400px] w-full" />-->
</section>

<Separator class="my-10" />

<section>
  <h2 class="mb-8 text-center font-fatface text-5xl">Let's see what we have...</h2>
  <div class="relative">
    <div
      class="grid gap-10"
      style="grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr))"
    >
      {#each viewableBreads as bread}
        <ProductCard {...bread} class="row-span-3 grid grid-rows-subgrid gap-0" />
      {/each}
    </div>
    <div class="overlay">
      <Button size="lg" class="mx-auto flex" on:click="{() => push('/store')}">
        <span class="mr-2 font-bold">View full Range at the Store</span>
        <ArrowRight />
      </Button>
      <p class="text-center text-xl">We have a lot of interesting products there</p>
      <ul class="flex flex-wrap justify-center gap-x-10">
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
    background: linear-gradient(to top, theme("colors.background") 30%, transparent 100%);
  }
</style>
