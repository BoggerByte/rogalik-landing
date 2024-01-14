<script lang="ts" context="module">
  import { Button } from "@ui/button"
  import { Check } from "lucide-svelte"
  import * as RadioGroup from "@ui/radio-group"
  import * as Select from "@ui/select"
  import * as Card from "@ui/card"
  import * as AlertDialog from "@ui/alert-dialog"
  import { Input } from "@ui/input"
  import { Label } from "@ui/label"
  import { Checkbox } from "@ui/checkbox"
  import { Textarea } from "@ui/textarea"
  import { DatePicker } from "@ui/date-picker"
  import { today, getLocalTimeZone } from "@internationalized/date"
  import { toast } from "svelte-sonner"

  let value = today(getLocalTimeZone())

  const toppings = [
    { value: "chocolate", label: "Additional chocolate" },
    { value: "banana", label: "Banana" },
    { value: "blueberry", label: "Blueberry" },
    { value: "grapes", label: "Grapes" },
    { value: "pineapple", label: "Pineapple" },
    { value: "strawberry", label: "Strawberries" },
    { value: "plazma", label: "Plazma" }
  ]

  const cakeBases = [
    { value: "cream", label: "Cream" },
    { value: "chocolate", label: "Chocolate" },
    { value: "pancake", label: "Pancake" },
    { value: "coffee", label: "Coffee" }
  ]
</script>

<section class="mb-5">
  <h2 class="header text-center">Order a custom cake</h2>
  <p class="subheader text-center">
    Want to order a custom cake? <br />
    Fill the form down below with your desired details
  </p>
</section>

<section>
  <Card.Root class="mx-auto max-w-lg">
    <Card.Header>
      <Card.Title>Fill the form</Card.Title>
    </Card.Header>
    <Card.Content>
      <form>
        <div class="input">
          <Label for="fullname">Full Name</Label>
          <Input id="fullname" type="text" placeholder="John Doe" required />
        </div>

        <div class="input mt-4">
          <Label for="email">Email</Label>
          <Input id="email" type="email" placeholder="example@mail.com" required />
        </div>

        <div class="input mt-4">
          <Label for="base">Choose a base for your cake</Label>
          <RadioGroup.Root>
            {#each cakeBases as base}
              <div class="input-row">
                <RadioGroup.Item id="{base.value}" name="base" value="{base.value}" />
                <Label for="{base.value}">{base.label}</Label>
              </div>
            {/each}
          </RadioGroup.Root>
        </div>

        <div class="input mt-4">
          <Label>Choose the toppings for your cake</Label>
          <Select.Root portal="{null}">
            <Select.Trigger>
              <Select.Value placeholder="Select a topping" />
            </Select.Trigger>
            <Select.Content>
              <Select.Group>
                {#each toppings as topping}
                  <Select.Item value="{topping.value}">
                    {topping.label}
                  </Select.Item>
                {/each}
              </Select.Group>
            </Select.Content>
            <Select.Input name="favoriteFruit" />
          </Select.Root>
        </div>

        <div class="input mt-4">
          <Label>Choose a date of delivery</Label>
          <DatePicker bind:value />
        </div>

        <div class="input-row mt-4">
          <Checkbox id="box" />
          <Label for="box">Deliver the cake in a wrapped box</Label>
        </div>

        <div class="input mt-4">
          <Label for="picture">Leave a reference photo (optional)</Label>
          <Input id="picture" type="file" />
        </div>

        <div class="input mt-4">
          <Label for="comment">Leave your additional info for us here! (optional)</Label>
          <Textarea id="comment" placeholder="Leave your comments here" />
        </div>
      </form>
    </Card.Content>
    <Card.Footer>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button size="lg" type="submit">
            <span class="mr-2 font-semibold">Order</span>
            <Check size="22" />
          </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Header>
            <AlertDialog.Title>Confirm the order</AlertDialog.Title>
            <AlertDialog.Description>
              Are you sure about that? Double check provided information if necessary.
            </AlertDialog.Description>
          </AlertDialog.Header>
          <AlertDialog.Footer>
            <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
            <AlertDialog.Action
              on:click="{() => toast.success('A new order has been created')}"
            >
              Confirm
            </AlertDialog.Action>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </Card.Footer>
  </Card.Root>
</section>
