<script lang="ts" context="module">
    import {Button} from "@ui/button"
    import {Separator} from "@ui/separator"
    import {ArrowRight, Plus} from "lucide-svelte"
    import * as Select from "@ui/select";
    import { Input } from "@ui/input";
    import { Label } from "@ui/label";
    import { Checkbox } from "@ui/checkbox";
    import { Textarea } from "@ui/textarea";
    import { RangeCalendar } from "@ui/range-calendar";
    import { today, getLocalTimeZone } from "@internationalized/date";

    const start = today(getLocalTimeZone());
    const end = start.add({ days: 7 });

    let value = {
        start,
        end
    };

    const toppings = [
    { value: "chocolate", label: "Additional chocolate" },
    { value: "banana", label: "Banana" },
    { value: "blueberry", label: "Blueberry" },
    { value: "grapes", label: "Grapes" },
    { value: "pineapple", label: "Pineapple" },
    { value: "strawberry", label: "Strawberries"},
    { value: "plazma", label: "Plazma"}
  ];
</script>

<div class="flex justify-center">
    <div>
        <h3 class="text-3xl font-fatface mb-4">
            Order a custom cake
        </h3>
        <p>
            Want to order a custom cake? Fill the form down below with your desired details:
        </p>
    </div>
</div>

<Separator class="my-10" />

<div class="flex justify-center gap-16">
    <form>
        <div>
            <Label for="name">
                Name
            </Label>
            <Input required id="name" type="text" placeholder="Name"/>
        </div>
        
        <div>
            <Label for="last_name">
                Last name
            </Label>
            <Input required id="last_name" type="text" placeholder="Last Name"/>
        </div>
        
        <div>
            <Label for="email">
                E-mail
            </Label>
            <Input required id="email" type="email" placeholder="user@mail.com"/>
        </div>
        
        <div>
            <Label for="base_topping">
                Choose a base for your cake
            </Label>
            <Input type="radio" id="cream" name="base" value="cream"/>
            <Label for="cream">Cream</Label>
            <Input type="radio" id="chocolate" name="base" value="chocolate"/>
            <Label for="chocolate">Chocolate</Label>
            <Input type="radio" id="pancake" name="base" value="pancake"/>
            <Label for="pancake">Pancake</Label>
            <Input type="radio" id="coffee" name="base" value="coffee"/>
            <Label for="coffee">Coffee</Label>
        </div>
        
        <div>
            <Label>
                Choose the toppings for your cake
            </Label>
            <Select.Root portal={null}>
                <Select.Trigger class="w-[180px]">
                <Select.Value placeholder="Select a topping" />
                </Select.Trigger>
                <Select.Content>
                <Select.Group>
                    {#each toppings as topping}
                    <Select.Item value={topping.value} label={topping.label}>
                        {topping.label}
                    </Select.Item>
                    {/each}
                </Select.Group>
                </Select.Content>
                <Select.Input name="favoriteFruit" />
            </Select.Root>
        </div>
        
        <div>
            <Label>
                Choose a date of delivery
            </Label>
            <RangeCalendar bind:value class="border rounded-md" />
        </div>
        
        <div>
            <Checkbox id="box"/>
            <Label for="box">
                Deliver the cake in a wrapped box
            </Label>
        </div>
        
        <div>
            <Label for="picture">Leave a reference photo</Label>
            <Input id="picture" type="file" />
        </div>
        
        <div>
            <Label for="text">
                Leave your additional info for us here!
            </Label>
            <Textarea id="text" placeholder="Comments"/>
        </div>
        

        <Button class="flex mx-auto" size="lg" type="submit">
            <span class="font-bold mr-2">Submit</span>
            <ArrowRight />
        </Button>
    </form>
</div>
