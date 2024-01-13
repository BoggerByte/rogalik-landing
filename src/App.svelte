<script lang="ts">
  import Router from "svelte-spa-router"
  import {ModeWatcher} from "mode-watcher";
  import Home from "@/pages/Home.svelte"
  import Store from "@/pages/Store.svelte"
  import NewOrder from "@/pages/NewOrder.svelte"
  import About from "@/pages/About.svelte"
  import Discount from "@/pages/Discount.svelte";
  import NavBar from "@/lib/components/NavBar.svelte"
  import Footer from "@/lib/components/Footer.svelte"
  import {Toaster} from "@ui/sonner"

  const routes = {
      '/': Home,
      '/store': Store,
      '/new-order': NewOrder,
      '/about': About,
      '/discount': Discount
  }
</script>

<div class="relative overflow-hidden">
  <header class="absolute w-full">
    <NavBar />
  </header>

  <main class="min-h-screen container mx-auto pt-[80px] pb-[200px]">
    <Router {routes} />
  </main>

  <footer class="absolute w-full bottom-0">
    <Footer />
  </footer>
</div>

<ModeWatcher />
<Toaster richColors />
