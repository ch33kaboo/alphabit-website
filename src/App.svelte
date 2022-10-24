<script>
    // importing Modules
    // @ts-nocheck
    import { Router, Route, Link } from 'svelte-navigator';

    // importing components
    import Navbar from './lib/Navbar.svelte';

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

<Router>
    <main class="flex min-h-screen flex-col items-center justify-between">
        <Navbar on:toggleMenu={toggleMenu} />
        <!-- menu part -->
        <div
            class="absolute top-24 bg-black transition-all duration-1000 {menu
                ? 'left-0'
                : '-left-16'}"
        >
            hahaha
        </div>

        <Route path="/">
            <Home />
        </Route>
        <Route path="/events">
            <Events />
        </Route>
        <Route path="/partners">
            <Partners />
        </Route>
        <Route path="/blog">
            <Blog />
        </Route>
        <Route path="/about">
            <About />
        </Route>

        <footer>
            <!-- here goes the footer -->
            here the footer
        </footer>
    </main>
</Router>
