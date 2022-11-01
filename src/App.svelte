<script>
    // importing Modules
    // @ts-nocheck
    import { Router, Route } from 'svelte-navigator';
    import { onMount } from 'svelte';

    let ready = false;
    onMount(() => (ready = true));

    // importing components
    import Navbar from './lib/Navbar.svelte';
    import Menu from './lib/Menu.svelte';
    import Footer from './lib/Footer.svelte';

    // importing routes
    import About from './routes/About.svelte';
    import Blog from './routes/Blog.svelte';
    import Events from './routes/Events.svelte';
    import Home from './routes/Home.svelte';
    import Partners from './routes/Partners.svelte';

    let menu = false;
    const toggleMenu = () => {
        menu = !menu;
    };
</script>

{#if ready}
    <Router>
        <main class="flex min-h-screen flex-col items-center justify-between">
            <Navbar on:toggleMenu={toggleMenu} />
            <Menu {menu} />

            <Route path="/">
                <Home />
            </Route>
            <Route path="/events/*">
                <Events />
            </Route>
            <Route path="/partners">
                <Partners />
            </Route>
            <Route path="/blog/*">
                <Blog />
            </Route>
            <Route path="/about">
                <About />
            </Route>

            <Footer />
        </main>
    </Router>
{/if}
