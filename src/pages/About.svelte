<script>
  import { ArrowRight } from "lucide-svelte"
  import { Button } from "@ui/button"
  import { Separator } from "@ui/separator"
  import * as Carousel from "@ui/carousel"
  import bakeryLocations from "@/content/bakeryLocations"

  const whereItStarted =
    "https://www.magnoliabakery.com/cdn/shop/files/custom_resized_5ca7d053-1f66-455b-a77d-4115d570cf4f_1280x.jpg?v=1632848075"
  const skilledChef =
    "http://klublady.ru/uploads/posts/2022-02/1644689492_14-klublady-ru-p-konditerskii-shokolad-foto-16.jpg"
</script>

<section class="flex flex-col-reverse gap-x-10 gap-y-5 lg:flex-row">
  <div class="flex-grow">
    <img class="image" src="{whereItStarted}" alt="our bakery" />
  </div>
  <div class="shrink-0 flex-grow basis-2/5">
    <h3 class="header">Where it all started</h3>
    <p class="paragraph">
      In the heart of a charming town nestled between rolling hills and meandering rivers,
      Rogalik Bakery stands as a testament to the timeless artistry of baking. Established
      in 1952 by our most passionate bakers, Rogalik Bakery has become a beloved
      institution, weaving a rich tapestry of flavors that have delighted generations.
    </p>
  </div>
</section>

<Separator />

<section class="flex flex-col gap-x-10 gap-y-5 lg:flex-row">
  <div class="flex shrink-0 flex-grow basis-2/5 flex-col">
    <h3 class="header">Our team</h3>
    <p class="paragraph">
      A team of skilled pastry chefs, led by the Head Baker, works diligently to bring a
      variety of sweet and savory treats to life. Each chef brings their unique flair to
      the kitchen, combining traditional techniques with modern creativity. Their
      dedication to quality and innovation is evident in every bite of the delightful
      pastries offered at Rogalik Bakery.
    </p>
    <div class="mb-3.5 mt-auto pt-5">
      <Button size="lg" class="w-full">
        <span class="mr-2 font-bold">Join our workforce</span>
        <ArrowRight />
      </Button>
    </div>
  </div>
  <div class="flex-grow">
    <img class="image flip-x" src="{skilledChef}" alt="baker" />
  </div>
</section>

<Separator />

<section>
  <h3 class="header">Our locations around the world</h3>
  <p class="paragraph">
    Rogalik Bakery's delectable creations have transcended borders, captivating taste buds
    across the globe. What began as a quaint establishment in a charming town has now
    evolved into a worldwide phenomenon with Rogalik Bakery branches gracing cities on
    every continent. Each bakery, whether nestled in the bustling streets of New York, the
    historic avenues of Paris, or the vibrant markets of Tokyo, carries the same
    commitment to quality and passion for baking that defined the original establishment.
  </p>

  <div class="mx-auto w-full max-w-5xl">
    <Carousel.Root>
      <Carousel.Content class="items-center">
        {#each bakeryLocations as location}
          <Carousel.Item class="items-center">
            <h6 class="header text-center">{location.location}</h6>
            <img class="image w-full" src="{location.imageUrl}" alt="{location.name}" />
          </Carousel.Item>
        {/each}
      </Carousel.Content>
      <Carousel.Previous />
      <Carousel.Next />
    </Carousel.Root>
  </div>
</section>
