<script>
  import "@/app.css"

  import { ModeWatcher } from "mode-watcher"
  import NavBar from "@/lib/components/NavBar.svelte"
  import Footer from "@/lib/components/Footer.svelte"
  import { Toaster } from "@ui/sonner"
</script>

<div class="relative">
  <header class="absolute w-full">
    <NavBar />
  </header>

  <main class="container mx-auto min-h-screen pb-[200px] pt-[80px]">
    <slot />
  </main>

  <footer class="absolute bottom-0 w-full">
    <Footer />
  </footer>
</div>

<ModeWatcher />
<Toaster richColors />
