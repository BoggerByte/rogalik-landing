<script>
    import useMediaQuery from "@/lib/components/useMediaQuery";
    import {mode, toggleMode} from "mode-watcher";
    import {Github, Menu, Moon, Sun, ShoppingCart} from "lucide-svelte";
    import Logo from "$lib/components/Logo.svelte";
    import {Button} from "@ui/button";
    import Link from "$lib/components/Link.svelte";
    import {Badge} from "@ui/badge";
    import {slide} from "svelte/transition";

    $: mobileMode = useMediaQuery('(max-width: 820px)')

    let menuOpen = false
</script>

<div class="fixed w-full min-h-[50px] px-4 xl:px-8 border-b bg-primary-foreground bg-opacity-75 backdrop-blur-md z-20">
    <div class="flex">
        <div class="ml-3 mr-6 my-auto">
            <Link to="/" plain><Logo /></Link>
        </div>
        {#if !$mobileMode}
            <div class="flex items-center gap-1 py-1">
                <Link to="/">Home</Link>
                <Link to="/new-order">New Order</Link>
                <Link to="/store">Store</Link>
                <Link to="/discount" class="space-x-2">
                    <span>Discount</span>
                    <Badge variant="outline" class="border-red-400 text-red-400 bg-red-400 bg-opacity-15">new</Badge>
                </Link>
                <Link to="/about">About</Link>
            </div>
        {/if}
        <div class="flex items-center gap-1 py-1 ml-auto">
            <Button variant="ghost" size="icon" disabled><ShoppingCart /></Button>
            <Button variant="ghost" size="icon" href="https://github.com/BoggerByte/RogalikLanding" target="_blank"><Github /></Button>
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
            {#if $mobileMode}
                <Button size="icon" class="mx-2" on:click={() => menuOpen = !menuOpen}><Menu /></Button>
            {/if}
        </div>
    </div>

    {#if $mobileMode && menuOpen}
        <div class="flex flex-col gap-1 py-1" transition:slide>
            <Link to="/" on:click={() => menuOpen = false}>Home</Link>
            <Link to="/about" on:click={() => menuOpen = false}>About</Link>
            <Link to="/store" on:click={() => menuOpen = false}>Store</Link>
            <Link to="/new-order" on:click={() => menuOpen = false}>New Order</Link>
            <Link to="/discount" on:click={() => menuOpen = false} class="space-x-2">
                <span>Discount</span>
                <Badge variant="outline" class="border-red-400 text-red-400 bg-red-400 bg-opacity-15">new</Badge>
            </Link>
        </div>
    {/if}
</div>