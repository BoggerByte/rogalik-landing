<script lang="ts">
  import Router from "svelte-spa-router"
  import { ModeWatcher } from "mode-watcher"
  import Home from "@/pages/Home.svelte"
  import Store from "@/pages/Store.svelte"
  import NewOrder from "@/pages/NewOrder.svelte"
  import About from "@/pages/About.svelte"
  import Discount from "@/pages/Discount.svelte"
  import NavBar from "@/lib/components/NavBar.svelte"
  import Footer from "@/lib/components/Footer.svelte"
  import { Toaster } from "@ui/sonner"

  const routes = {
    "/": Home,
    "/store": Store,
    "/new-order": NewOrder,
    "/about": About,
    "/discount": Discount
  }
</script>

<div class="relative">
  <header class="absolute w-full">
    <NavBar />
  </header>

  <main class="container mx-auto min-h-screen pb-[200px] pt-[80px]">
    <Router {routes} restoreScrollState="{true}" />
  </main>

  <footer class="absolute bottom-0 w-full">
    <Footer />
  </footer>
</div>

<ModeWatcher />
<Toaster richColors />

<style lang="postcss">
</style>
