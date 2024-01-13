<script>
  import { Facebook, Github, Instagram, Twitter } from "lucide-svelte"
  import Logo from "@/lib/components/Logo.svelte"
</script>

<div class="h-[160px] border-t py-6">
  <div class="container mx-auto flex flex-wrap gap-8 text-sm">
    <aside class="shrink-0">
      <Logo class="text-[1.6em]" />
      <p>
        Providing reliable bread<br />
        © 2012 Rogalik Bakery<br />
        +7 (777) 777-77-77
      </p>
    </aside>
    <nav class="shrink-0">
      <header class="footer-header">Company</header>
      <ul>
        <li><a href="{'#'}">Franchise</a></li>
        <li><a href="{'#'}">Our stores</a></li>
        <li><a href="{'#'}">Contacts</a></li>
        <li><a href="{'#'}">Employment</a></li>
      </ul>
    </nav>
    <nav class="shrink-0">
      <header class="footer-header">Social</header>
      <ul class="flex flex-wrap gap-4">
        <li>
          <a href="https://facebook.com" target="_blank"><Facebook size="1.5em" /></a>
        </li>
        <li>
          <a href="https://instagram.com" target="_blank"><Instagram size="1.5em" /></a>
        </li>
        <li>
          <a href="https://x.com" target="_blank"><Twitter size="1.5em" /></a>
        </li>
      </ul>
    </nav>
    <nav class="shrink-0 lg:ml-auto">
      <header class="footer-header">Credits</header>
      <ul>
        <li>
          Nikita Troshnev
          <a
            href="https://github.com/BoggerByte"
            class="font-semibold hover:underline"
            target="_blank">@BoggerByte</a
          >
        </li>
        <li>
          Egor Shimanyuk
          <a
            href="https://github.com/TheZebra99"
            class="font-semibold hover:underline"
            target="_blank">@TheZebra99</a
          >
        </li>
      </ul>
    </nav>
    <nav class="shrink-0">
      <header class="footer-header">Source Code</header>
      <a
        href="https://github.com/BoggerByte/RogalikLanding"
        target="_blank"
        class="hover:underline"
      >
        <Github size="1.2em" class="inline" />
        github.com/BoggerByte/RogalikLanding
      </a>
    </nav>
  </div>
</div>

<style lang="postcss">
  .footer-header {
    margin-bottom: 0.5rem;
    color: theme("textColor.secondary.foreground");

    font-weight: bold;
    text-transform: uppercase;
  }
</style>
