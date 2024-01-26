<script>
  import { ArrowRight } from "lucide-svelte"
  import Autoplay from "embla-carousel-autoplay"
  import { Button } from "@ui/button"
  import { Separator } from "@ui/separator"
  import * as Carousel from "@ui/carousel"
  import ProductCard from "@/lib/components/ProductCard.svelte"
  import GmapsLocation from "$lib/components/GmapsLocation.svelte"
  import carouselImageUrls from "@/content/carouselImageUrls"
  import products from "@/content/products"

  const viewableBreads = products.slice(0, 6)
</script>

<section class="hero">
  <div class="shrink-0 flex-grow basis-1/2">
    <h1 class="header">
      Delectable snacks <br />
      by Proficient Workers
    </h1>
    <p class="subheader">Don't believe us? Close this website!</p>
    <Button size="lg" href="/store">
      <span class="mr-2 font-semibold">View Our Range</span>
      <ArrowRight />
    </Button>
  </div>
  <div class="shrink-0 flex-grow basis-1/2">
    <Carousel.Root opts="{{ loop: true }}" plugins="{[Autoplay({ delay: 3000 })]}">
      <Carousel.Content class="items-center">
        {#each carouselImageUrls as url, i}
          <Carousel.Item>
            <img src="{url}" class="image" alt="bread image {i + 1}" />
            <div class="text-muted-foreground">inst: @rogalik.bakery</div>
          </Carousel.Item>
        {/each}
      </Carousel.Content>
      <Carousel.Previous />
      <Carousel.Next />
    </Carousel.Root>
  </div>
</section>

<Separator class="relative -z-20" />

<section class="features">
  <div class="feature">
    <div class="feature-icon">🤌</div>
    <h3 class="header">Convenience at Your Fingertips</h3>
    <p class="paragraph">
      Indulge in the joy of freshly baked treats without leaving your home! Our bakery
      delivery website brings the goodness of our artisanal delights to your doorstep.
      With just a few clicks, you can satisfy your cravings effortlessly.
    </p>
  </div>
  <div class="feature">
    <div class="feature-icon">🍪</div>
    <h3 class="header">Delicious Variety, Your Way</h3>
    <p class="paragraph">
      Explore a delectable array of bread, pastries, and cakes on our website. What sets
      us apart? The power is in your hands! Customize your orders to suit your taste,
      whether it's choosing flavors, toppings, or crafting a personalized cake for that
      special occasion.
    </p>
  </div>
  <div class="feature">
    <div class="feature-icon">🌱</div>
    <h3 class="header">Guaranteed Freshness, Every Time</h3>
    <p class="paragraph">
      We take pride in delivering not just baked goods, but an experience of unrivaled
      freshness. Our commitment to quality ensures that each item is prepared just before
      delivery, so you can savor the exceptional taste that sets us apart.
    </p>
  </div>
</section>

<section class="mt-10">
  <h3 class="header text-center">
    Also we're cooking our stuff in the middle of the nowhere
  </h3>
  <p class="subheader text-center">And we're kinda dead serious about that 💀💀💀</p>
  <GmapsLocation class="mt-5 h-[400px] w-full rounded-md" />
</section>

<Separator />

<section>
  <h2 class="header text-center">Let's see what we have...</h2>
  <div class="fade-container">
    <div class="products">
      {#each viewableBreads as bread}
        <ProductCard {...bread} class="product" />
      {/each}
    </div>
    <div class="fade">
      <Button size="lg" href="/store" class="mx-auto flex max-w-md">
        <span class="mr-2 font-semibold">View full Range at the Store</span>
        <ArrowRight />
      </Button>
      <p class="paragraph text-center">We have a lot of interesting products there</p>
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
  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 55vh;
    text-align: center;
    gap: 1rem;

    @apply lg:flex-row lg:justify-start lg:text-left;
  }

  .features {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(21rem, 1fr));
    gap: 4em 2.5rem;

    .feature {
      position: relative;
      display: grid;
      grid-template-rows: subgrid;
      @apply row-span-2 mt-2 gap-2;

      &-icon {
        position: absolute;
        width: 100%;
        top: -1em;
        text-align: center;
        @apply -z-10 text-6xl;
      }
    }
  }

  .products {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
    gap: 2.5rem;

    /* passing deep to component */
    :global(.product) {
      @apply row-span-3 grid grid-rows-subgrid gap-0;
    }
  }

  .fade-container {
    position: relative;

    .fade {
      position: absolute;
      width: 105%;
      left: 50%;
      bottom: -10px;
      translate: -50%;
      padding-top: 500px;
      padding-bottom: 100px;
      background: linear-gradient(
        to top,
        theme("colors.background") 30%,
        transparent 100%
      );
    }
  }
</style>
