<script>
    import {slide} from "svelte/transition";
    import {Github, Sun, Moon} from "lucide-svelte";
    import {toggleMode, mode} from "mode-watcher";
    import {Button} from "@ui/button";
    import { Badge } from "@ui/badge";
    import Link from "@/lib/components/Link.svelte";
    import Logo from "@/lib/components/Logo.svelte";
</script>

<div class="fixed w-full h-[50px] px-4 xl:px-16 border-b bg-primary-foreground bg-opacity-75 backdrop-blur-md flex z-20">
    <div class="ml-3 mr-6 my-auto">
        <Link to="/" plain><Logo /></Link>
    </div>
    <div class="flex items-center gap-1 py-1">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/store">Store</Link>
        <Link to="/new-order">New Order</Link>
        <Link to="/discount" class="space-x-2">
            <span>Discount</span>
            <Badge variant="outline" class="border-red-400 text-red-400 bg-red-400 bg-opacity-15">new</Badge>
        </Link>
    </div>
    <div class="flex items-center gap-1 py-1 ml-auto">
        <Button variant="ghost" size="icon" href="https://github.com/BoggerByte/RogalikLanding"><Github /></Button>
        <Button variant="ghost" size="icon" on:click={toggleMode} class="relative flex-none">
            {#if $mode === "light"}
                <span transition:slide={{duration: 300}} class="absolute">
                    <Sun />
                </span>
            {:else}
                <span transition:slide={{duration: 300}} class="absolute">
                    <Moon />
                </span>
            {/if}
        </Button>
    </div>
</div>