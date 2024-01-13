<script lang="ts" context="module">
    import {Button} from "@ui/button"
    import {Separator} from "@ui/separator"
    import {Check, Plus} from "lucide-svelte"
    import * as RadioGroup from "@ui/radio-group"
    import * as Select from "@ui/select";
    import * as Card from "@ui/card"
    import * as AlertDialog from "@ui/alert-dialog"
    import { Input } from "@ui/input";
    import { Label } from "@ui/label";
    import { Checkbox } from "@ui/checkbox";
    import { Textarea } from "@ui/textarea";
    import { DatePicker } from "@ui/date-picker";
    import { today, getLocalTimeZone } from "@internationalized/date";
    import {toast} from "svelte-sonner";

    let value = today(getLocalTimeZone());

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

<section class="mb-5">
    <h3 class="text-3xl font-fatface text-center">Order a custom cake</h3>
    <p class="text-center">Want to order a custom cake? Fill the form down below with your desired details</p>
</section>

<Card.Root class="max-w-lg mx-auto">
    <Card.Header>
        <Card.Title>Fill the form</Card.Title>
    </Card.Header>
    <Card.Content>
        <form>
            <div class="grid w-full max-w-sm items-center gap-1.5">
                <Label for="fullname">Full Name</Label>
                <Input id="fullname" type="text" placeholder="John Doe" required  />
            </div>

            <div class="grid w-full max-w-sm items-center gap-1.5 mt-4">
                <Label for="email">Email</Label>
                <Input id="email" type="email" placeholder="user@mail.com" required />
            </div>

            <div class="grid w-full max-w-sm items-center gap-1.5 mt-4">
                <Label for="base_topping">Choose a base for your cake</Label>
                <RadioGroup.Root>
                    <div class="flex items-center space-x-2">
                        <RadioGroup.Item id="cream" name="base" value="cream" />
                        <Label for="cream">Cream</Label>
                    </div>
                    <div class="flex items-center space-x-2">
                        <RadioGroup.Item id="chocolate" name="base" value="chocolate" />
                        <Label for="chocolate">Chocolate</Label>
                    </div>
                    <div class="flex items-center space-x-2">
                        <RadioGroup.Item id="pancake" name="base" value="pancake" />
                        <Label for="pancake">Pancake</Label>
                    </div>
                    <div class="flex items-center space-x-2">
                        <RadioGroup.Item id="coffee" name="base" value="coffee" />
                        <Label for="coffee">Coffee</Label>
                    </div>
                </RadioGroup.Root>
            </div>

            <div class="grid w-full max-w-sm items-center gap-1.5 mt-4">
                <Label>Choose the toppings for your cake</Label>
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

            <div class="grid w-full max-w-sm items-center gap-1.5 mt-4">
                <Label>Choose a date of delivery</Label>
                <DatePicker bind:value />
            </div>

            <div class="flex items-center space-x-2 mt-4">
                <Checkbox id="box"/>
                <Label for="box">Deliver the cake in a wrapped box</Label>
            </div>

            <div class="grid w-full max-w-sm items-center gap-1.5 mt-4">
                <Label for="picture">Leave a reference photo (optional)</Label>
                <Input id="picture" type="file" />
            </div>

            <div class="grid w-full max-w-sm items-center gap-1.5 mt-4">
                <Label for="text">Leave your additional info for us here! (optional)</Label>
                <Textarea id="text" placeholder="Comments"/>
            </div>
        </form>
    </Card.Content>
    <Card.Footer>
        <AlertDialog.Root>
            <AlertDialog.Trigger>
                <Button size="lg" type="submit">
                    <span class="font-bold mr-2">Order</span>
                    <Check />
                </Button>
            </AlertDialog.Trigger>
            <AlertDialog.Content>
                <AlertDialog.Header>
                    <AlertDialog.Title>Confirm the order</AlertDialog.Title>
                    <AlertDialog.Description>Are you sure about that? Double check provided information if necessary.</AlertDialog.Description>
                </AlertDialog.Header>
                <AlertDialog.Footer>
                    <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
                    <AlertDialog.Action
                            on:click={() => toast.success('A new order has been created')}
                    >Confirm</AlertDialog.Action>
                </AlertDialog.Footer>
            </AlertDialog.Content>
        </AlertDialog.Root>
    </Card.Footer>
</Card.Root>
