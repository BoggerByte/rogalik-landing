<script>
    import {Github, Sun} from "lucide-svelte";
    import {Button} from "@ui/button";
    import { Badge } from "@ui/badge";
    import Link from "$lib/components/Link.svelte";
    import Logo from "@/lib/components/Logo.svelte";
</script>

<div class="fixed w-full h-[50px] px-4 xl:px-16 border-b-[1px] border-b-slate-200 flex backdrop-blur-md">
    <div class="ml-3 mr-6 my-auto">
        <Link to="/" plain><Logo /></Link>
    </div>
    <div class="flex items-center gap-1 py-1">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/new-order">New Order</Link>
        <Link to="/discount" class="space-x-2">
            <span>Discount</span>
            <Badge variant="outline" class="border-red-500 text-red-700">new</Badge>
        </Link>
    </div>
    <div class="flex items-center gap-1 py-1 ml-auto">
        <Button variant="ghost" size="icon" href="https://github.com"><Github /></Button>
        <Button variant="ghost" size="icon"><Sun /></Button>
    </div>
</div>