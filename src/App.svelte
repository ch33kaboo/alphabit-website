<script>
    //importing Modules
    // @ts-nocheck
    import { Router, Route, Link } from 'svelte-navigator';

    //importing components
    import Navbar from './lib/Navbar.svelte';
</script>

<Router>
    <main class="flex min-h-screen flex-col items-center justify-between">
        <Navbar />

        <main>
            <!-- here goes all the routes & their components inside -->
            here the routes (main content)
        </main>

        <footer>
            <!-- here goes the footer -->
            here the footer
        </footer>
    </main>
</Router>
