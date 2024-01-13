<script lang="ts">
  import { CalendarDays } from "lucide-svelte"
  import {
    type DateValue,
    DateFormatter,
    getLocalTimeZone
  } from "@internationalized/date"
  import { cn } from "@/lib/utils"
  import { Button } from "@ui/button"
  import { Calendar } from "@ui/calendar"
  import * as Popover from "@ui/popover"

  const df = new DateFormatter("en-US", {
    dateStyle: "long"
  })

  export let value: DateValue | undefined = undefined
  export let placeholder = ""
</script>

<Popover.Root {...$$restProps}>
  <Popover.Trigger asChild let:builder>
    <Button
      variant="outline"
      class="{cn(
        'w-[240px] justify-start text-left font-normal',
        !value && 'text-muted-foreground'
      )}"
      builders="{[builder]}"
    >
      <CalendarDays class="mr-2 h-4 w-4" />
      {value ? df.format(value.toDate(getLocalTimeZone())) : placeholder}
    </Button>
  </Popover.Trigger>
  <Popover.Content class="w-auto p-0" align="start">
    <Calendar bind:value />
  </Popover.Content>
</Popover.Root>
