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
    import Modal from './lib/Modal.svelte';
    import BackToTop from './lib/BackToTop.svelte';

    // importing routes
    import About from './routes/About.svelte';
    import Blog from './routes/Blog.svelte';
    import Events from './routes/Events.svelte';
    import Home from './routes/Home.svelte';
    import Partners from './routes/Partners.svelte';
    import AlphaGeeks from './routes/AlphaGeeks.svelte';

    let menu = false;
    const toggleMenu = () => {
        menu = !menu;
    };

    let showModal = () => {
        const modal = document.getElementById('my-modal');
        modal.checked = true;
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
            <Route path="/AlphaGeeks">
                <AlphaGeeks />
            </Route>

            <Footer on:showModal={showModal} />
            <Modal />
        </main>
    </Router>

    <BackToTop />
{/if}
