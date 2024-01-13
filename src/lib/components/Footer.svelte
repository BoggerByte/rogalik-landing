<script>
    import {Facebook, Instagram, Twitter} from "lucide-svelte";
    import {Button} from "@ui/button";
    import {Label} from "@ui/label";
    import {Input} from "@ui/input";
    import Logo from "$lib/components/Logo.svelte";
</script>

<div class="h-[160px] py-6 border-t">
    <div class="container mx-auto flex gap-8 text-sm ">
        <aside>
            <Logo class="text-[1.6em]" />
            <p>
                Providing reliable bread<br>
                © 2012 Rogalik Bakery<br>
                +7 (777) 777-77-77
            </p>
        </aside>
        <nav>
            <header class="footer-header">Company</header>
            <ul>
                <li><a href={"#"}>Franchise</a></li>
                <li><a href={"#"}>Our stores</a></li>
                <li><a href={"#"}>Contacts</a></li>
                <li><a href={"#"}>Employment</a></li>
            </ul>
        </nav>
        <nav>
            <header class="footer-header">Social</header>
            <ul class="flex gap-4">
                <li><a href="https://facebook.com" target="_blank"><Facebook size="1.5em" /></a></li>
                <li><a href="https://instagram.com" target="_blank"><Instagram size="1.5em" /></a></li>
                <li><a href="https://x.com" target="_blank"><Twitter size="1.5em" /></a></li>
            </ul>
        </nav>
        <nav class="ml-auto">
            <header class="footer-header">Newsletter</header>
            <form>
                <Label for="email">Enter your email address</Label>
                <div class="flex w-full max-w-sm items-center space-x-2">
                    <Input id="email" type="email" placeholder="example@mail.com" />
                    <Button type="submit">Subscribe</Button>
                </div>
            </form>
        </nav>
    </div>
</div>

<style lang="postcss">
    .footer-header {
        margin-bottom: 0.5rem;
        color: theme('textColor.secondary.foreground');

        font-weight: bold;
        text-transform: uppercase;
    }
</style>