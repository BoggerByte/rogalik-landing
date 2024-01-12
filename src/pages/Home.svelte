<script>
import {Button} from "@ui/button"
import {Separator} from "@ui/separator"
import * as Card from "@ui/card"
import {ArrowRight, Plus} from "lucide-svelte"
import {push} from "svelte-spa-router"

const breads = [
    {
        name: "Village Bread",
        imageUrl: "https://www.chambelland.com/wp-content/webp-express/webp-images/uploads/2019/11/le-village.jpg.webp",
        description: "The bread of the village chambelland is the natural recipe of our range. \n" +
            "It is made of wholemeal rice and sorghum flours, filtered water, natural rice leaven, olive oil and salt.\n" +
            "It is the perfect balance between a strong crust and a soft crumb with delicate aromas. \n" +
            "To be mixed or spread as you",
    },
    {
        name: "5-grain bread",
        imageUrl: "https://www.chambelland.com/wp-content/webp-express/webp-images/uploads/2019/11/cinq-grains.jpg.webp",
        description: "Chambelland's best-selling 5-grain bread combines our signature recipe and a crust topped with sesame, sunflower, poppy and brown and toasted flax seeds.\n" +
            "On top of its excellent nutritional qualities, this bread brings a little touch of fantasy to the table."
    }
]
</script>

<section class="min-h-[55vh] flex items-center content-center">
    <div class="max-w-7xl p-4">
        <h1 class="text-5xl font-fatface leading-tight">Delectable snacks <br> by Proficient Workers</h1>
        <p class="text-2xl text-muted-foreground mb-3">Don't believe us? Go try it for yourself</p>
        <Button size="lg" on:click={() => push('/products')}>
            <span class="font-bold mr-2">View Range</span>
            <ArrowRight />
        </Button>
    </div>
</section>

<Separator class="my-10" />

<section class="flex gap-16">
    <div>
        <h3 class="text-3xl font-fatface mb-4">
            Convenience at Your Fingertips
        </h3>
        <p>
            Indulge in the joy of freshly baked treats without leaving your home!
            Our bakery delivery website brings the goodness of our artisanal delights to your doorstep.
            With just a few clicks, you can satisfy your cravings effortlessly.
        </p>
    </div>
    <div>
        <h3 class="text-3xl font-fatface mb-4">
            Delicious Variety, Your Way
        </h3>
        <p>
            Explore a delectable array of bread, pastries, and cakes on our website. What sets us apart?
            The power is in your hands! Customize your orders to suit your taste,
            whether it's choosing flavors, toppings, or crafting a personalized cake for that special occasion.
        </p>
    </div>
    <div>
        <h3 class="text-3xl font-fatface mb-4">
            Guaranteed Freshness, Every Time
        </h3>
        <p>
            We take pride in delivering not just baked goods, but an experience of unrivaled freshness.
            Our commitment to quality ensures that each item is prepared just before delivery,
            so you can savor the exceptional taste that sets us apart.
        </p>
    </div>
</section>

<Separator class="my-10" />

<section>
    <h2 class="font-fatface text-5xl text-center mb-8">Let's see what we have...</h2>
    <div class="grid grid-cols-4 gap-8">
        {#each breads as bread}
            <Card.Root>
                <Card.Header>
                    <Card.Title>{bread.name}</Card.Title>
                </Card.Header>
                <Card.Content>
                    <img src={bread.imageUrl} alt={bread.name} class="block w-full rounded">
                    <div class="mt-6">{bread.description}</div>
                </Card.Content>
                <Card.Footer class="flex">
                    <Button class="ml-auto" size="icon"><Plus /></Button>
                </Card.Footer>
            </Card.Root>
        {/each}
    </div>
</section>