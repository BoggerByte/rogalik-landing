<script>
  import { mode, toggleMode } from "mode-watcher"
  import { Moon, Sun } from "lucide-svelte"
  import { slide } from "svelte/transition"
  import { Button } from "@ui/button/index"
</script>

<Button variant="ghost" size="icon" on:click="{toggleMode}" class="relative flex-none">
  {#if $mode === "light"}
    <span transition:slide="{{ duration: 300 }}" class="absolute">
      <Sun />
    </span>
  {:else}
    <span transition:slide="{{ duration: 300 }}" class="absolute">
      <Moon />
    </span>
  {/if}
</Button>
