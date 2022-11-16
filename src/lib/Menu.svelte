<script>
    import { Link } from 'svelte-navigator';

    // importing configs
    import routesList from '../config/routesList';

    export let menu;
</script>

<div
    class="fixed top-24 z-10 flex flex-col gap-3 rounded-r-lg bg-indigo-300 py-3 pl-1 pr-3 text-xl capitalize text-gray-900 transition-all duration-1000 dark:bg-gray-700 dark:text-white lg:hidden {menu
        ? 'left-0 opacity-100'
        : '-left-32 opacity-0'}"
>
    <div class="flex justify-start gap-4 px-2">
        <svg
            class="h-4 w-4 translate-y-[6px]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
            /></svg
        >
        <Link to="/">Home</Link>
    </div>
    {#each routesList as route}
        <div class="flex justify-start gap-4 px-2">
            <svg
                class="h-4 w-4 translate-y-[6px]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                /></svg
            >
            <Link to="/{route.path}">{route.path}</Link>
        </div>
    {/each}
</div>
