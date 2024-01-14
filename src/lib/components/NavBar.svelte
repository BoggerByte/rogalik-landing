<script>
  import { Github, Menu } from "lucide-svelte"
  import { slide } from "svelte/transition"
  import { Button } from "@ui/button"
  import { Badge } from "@ui/badge"
  import { useMediaQuery } from "@/lib/utils"
  import Logo from "@/lib/components/Logo.svelte"
  import Link from "@/lib/components/Link.svelte"
  import ThemeToggler from "@/lib/components/ThemeToggler.svelte"

  $: mobileMode = useMediaQuery("(max-width: 1023px)")

  let menuOpen = false
</script>

<div class="navbar">
  <div class="flex">
    {#if $mobileMode}
      <Button
        variant="ghost"
        size="icon"
        class="my-auto"
        on:click="{() => (menuOpen = !menuOpen)}"
      >
        <Menu />
      </Button>
    {/if}
    <div class="my-auto mr-6 lg:ml-3">
      <Link to="/" plain>
        <Logo />
      </Link>
    </div>
    {#if !$mobileMode}
      <div class="flex items-center gap-1 py-1">
        <Link to="/">Home</Link>
        <Link to="/new-order">New Order</Link>
        <Link to="/store">Store</Link>
        <Link to="/discount" class="space-x-2">
          <span>Discount</span>
          <Badge variant="outline-destructive">new</Badge>
        </Link>
        <Link to="/about">About</Link>
      </div>
    {/if}
    <div class="ml-auto flex items-center gap-1 py-1">
      <Button
        variant="ghost"
        size="icon"
        href="https://github.com/BoggerByte/RogalikLanding"
        target="_blank"
      >
        <Github />
      </Button>
      <ThemeToggler />
    </div>
  </div>

  {#if $mobileMode && menuOpen}
    <div class="flex flex-col gap-1 py-1" transition:slide>
      <Link to="/" on:click="{() => (menuOpen = false)}">Home</Link>
      <Link to="/about" on:click="{() => (menuOpen = false)}">About</Link>
      <Link to="/store" on:click="{() => (menuOpen = false)}">Store</Link>
      <Link to="/new-order" on:click="{() => (menuOpen = false)}">New Order</Link>
      <Link to="/discount" on:click="{() => (menuOpen = false)}" class="space-x-2">
        <span>Discount</span>
        <Badge variant="outline-destructive">new</Badge>
      </Link>
    </div>
  {/if}
</div>

<style lang="postcss">
  .navbar {
    position: fixed;
    min-height: 50px;
    width: 100%;

    @apply z-20 border-b bg-primary-foreground
            bg-opacity-75 px-4 backdrop-blur-md
            xl:px-8;
  }
</style>
