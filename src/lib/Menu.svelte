<script>
    import { Link } from 'svelte-navigator';

    // importing configs
    import routesList from '../config/routesList';

    export let menu;
</script>

<div
    class="fixed top-24 z-10 flex flex-col gap-3 rounded-r-lg bg-indigo-300 py-3 pl-1 pr-3 text-xl capitalize transition-all duration-1000 dark:bg-gray-700 lg:hidden {menu
        ? 'left-0 opacity-100'
        : '-left-32 opacity-0'}"
>
    <li class="px-2">
        <Link to="/">Home</Link>
    </li>
    {#each routesList as route}
        <li class="px-2">
            <Link to="/{route.path}">{route.path}</Link>
        </li>
    {/each}
</div>
