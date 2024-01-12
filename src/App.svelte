<script lang="ts">
  import Router from "svelte-spa-router"
  import Home from "@/pages/Home.svelte"
  import Products from "@/pages/Products.svelte"
  import NewOrder from "@/pages/NewOrder.svelte"
  import About from "@/pages/About.svelte"
  import NavBar from "@/lib/components/NavBar.svelte"
  import Footer from "@/lib/components/Footer.svelte"

  const routes = {
      '/': Home,
      '/products': Products,
      '/new-order': NewOrder,
      '/about': About
  }
</script>

<div class="relative">
  <header class="absolute w-full">
    <NavBar />
  </header>

  <main class="min-h-screen container mx-auto pt-[60px] pb-[170px]">
    <Router {routes} />
  </main>

  <footer class="absolute w-full bottom-0">
    <Footer />
  </footer>
</div>

<style>

</style>
