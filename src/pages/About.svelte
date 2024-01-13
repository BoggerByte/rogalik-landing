<script>
    import {Button} from "@ui/button"
    import {Separator} from "@ui/separator"
    import * as Card from "@ui/card"
    import {ArrowRight, Plus} from "lucide-svelte"
    import * as Carousel from "@ui/carousel"

    const locations = [
        {
            name: "bakery1",
            imageUrl: "https://img.buzzfeed.com/buzzfeed-static/static/2014-06/30/19/enhanced/webdr09/original-28255-1404172712-10.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto",
            location: "New York",
        },
        {
            name: "bakery2",
            imageUrl: "https://img.buzzfeed.com/buzzfeed-static/static/2014-06/30/0/enhanced/webdr05/original-25738-1404101525-25.jpg?downsize=600:*&output-format=auto&output-quality=auto",
            location: "Tokyo",
        },
        {
            name: "bakery3",
            imageUrl: "https://img.buzzfeed.com/buzzfeed-static/static/2014-06/30/19/enhanced/webdr02/original-316-1404169774-25.jpg?downsize=600:*&output-format=auto&output-quality=auto",
            location: "Copenhagen",
        },
        {
            name: "bakery4",
            imageUrl: "https://img.buzzfeed.com/buzzfeed-static/static/2014-06/30/19/enhanced/webdr02/original-20968-1404172591-3.png?downsize=600:*&output-format=auto&output-quality=auto",
            location: "Paris",
        },
        {
            name: "bakery5",
            imageUrl: "https://img.buzzfeed.com/buzzfeed-static/static/2014-06/30/0/enhanced/webdr07/original-15362-1404101629-14.jpg?downsize=600:*&output-format=auto&output-quality=auto",
            location: "Milan",
        },
        {
            name: "bakery6",
            imageUrl: "https://img.buzzfeed.com/buzzfeed-static/static/2014-06/27/16/enhanced/webdr11/original-20160-1403900594-31.jpg?downsize=600:*&output-format=auto&output-quality=auto",
            location: "Sydney",
        },
        {
            name: "bakery7",
            imageUrl: "https://img.buzzfeed.com/buzzfeed-static/static/2014-06/30/0/enhanced/webdr07/original-17268-1404102391-10.jpg?downsize=600:*&output-format=auto&output-quality=auto",
            location: "Zurich",
        },
        {
            name: "bakery8",
            imageUrl: "https://img.buzzfeed.com/buzzfeed-static/static/2014-06/30/0/enhanced/webdr06/original-28999-1404104204-16.jpg?downsize=600:*&output-format=auto&output-quality=auto",
            location: "Berlin",
        },
        {
            name: "bakery9",
            imageUrl: "https://img.buzzfeed.com/buzzfeed-static/static/2014-06/30/18/enhanced/webdr08/original-18867-1404166118-21.jpg?downsize=600:*&output-format=auto&output-quality=auto",
            location: "Hong kong",
        },
        {
            name: "bakery10",
            imageUrl: "https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_1024/https://www.lovehappensmag.com/blog/wp-content/uploads/2021/09/Laudree-1024x673.jpg",
            location: "Nice",
        },
    ]

</script>

<div class="flex gap-16">
    <img src="https://www.magnoliabakery.com/cdn/shop/files/custom_resized_5ca7d053-1f66-455b-a77d-4115d570cf4f_1280x.jpg?v=1632848075" alt="our_bakery">
    <div>
        <h2 class="text-3xl font-fatface mb-4">
            Where it all started
        </h2>
        <p>
            In the heart of a charming town nestled between rolling hills and meandering rivers, Rogalik Bakery stands as a testament to the timeless artistry of baking.
            Established in 1952 by our most passionate bakers, Rogalik Bakery has become a beloved institution, weaving a rich tapestry of flavors that have delighted generations.
        </p>
    </div>
</div>
<Separator class="my-10" />
<div class="flex gap-16">
    <div>
        <h2 class="text-3xl font-fatface mb-4">
            Our team
        </h2>
        <p>
            A team of skilled pastry chefs, led by the Head Baker, works diligently to bring a variety of sweet and savory treats to life.
            Each chef brings their unique flair to the kitchen, combining traditional techniques with modern creativity.
            Their dedication to quality and innovation is evident in every bite of the delightful pastries offered at Rogalik Bakery.
        </p>
        <h3 class="text-3xl font-fatface text-center mb-4">
            Intrested in working with us? You can apply down below:
        </h3>
        <Button class ="flex mx-auto"size="lg">
            <span class="font-bold mr-2">Join our workforce</span>
            <ArrowRight />
        </Button>
    </div>
    <img src="http://klublady.ru/uploads/posts/2022-02/1644689492_14-klublady-ru-p-konditerskii-shokolad-foto-16.jpg" alt="baker">
</div>

<Separator class="my-10" />

<div>
    <h2 class="font-fatface text-5xl text-center mb-8">Our locations around the world</h2>
    <p>
        Rogalik Bakery's delectable creations have transcended borders, captivating taste buds across the globe.
        What began as a quaint establishment in a charming town has now evolved into a worldwide phenomenon with Rogalik Bakery branches gracing cities on every continent.
        Each bakery, whether nestled in the bustling streets of New York, the historic avenues of Paris, or the vibrant markets of Tokyo, carries the same commitment to quality and passion for baking that defined the original establishment. 
    </p>
</div>

<div class="flex justify-center">
    <Carousel.Root class="w-full max-w-xs">
        <Carousel.Content>
            {#each locations as bakery}
            <Carousel.Item>
                <div>
                    <Card.Root>
                        <Card.Content class="flex aspect-square items-center justify-center p-6">
                            <img src={bakery.imageUrl} alt={bakery.name} class="block w-full rounded">
                            <span class="text-4xl font-semibold">{bakery.location}</span>
                        </Card.Content>
                    </Card.Root>
                </div>
            </Carousel.Item>
            {/each}
        </Carousel.Content>
        <Carousel.Previous />
        <Carousel.Next />
    </Carousel.Root>
</div>
