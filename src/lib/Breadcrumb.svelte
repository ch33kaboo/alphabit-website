<script>
    import { useNavigate, useLocation } from 'svelte-navigator';
    import { fly } from 'svelte/transition';
    import { quintInOut } from 'svelte/easing';

    const navigate = useNavigate();
    const location = useLocation();
    console.log($location.pathname.split('/').filter((n) => n !== ''));
    let handleClick = (route) => {
        let from =
            ($location.state && $location.state.from) ||
            `../../../../../../blog/${route}`;
        navigate(`../../../../../../${route}`);
    };
</script>

<div
    in:fly={{
        y: 30,
        duration: 500,
        delay: 600,
        opacity: 0,
        easing: quintInOut
    }}
    class="mt-1 mb-3 flex items-center justify-start text-gray-800 dark:text-blue-200"
>
    <div
        class="breadcrumbs rounded-full border border-gray-800 bg-blue-200 px-4 text-sm dark:border-blue-200 dark:bg-gray-800"
    >
        <ul>
            <li>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-missing-attribute -->
                <a on:click={() => handleClick('')}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        class="mr-2 h-4 w-4 stroke-current"
                        ><path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                        /></svg
                    >
                    Alphabit
                </a>
            </li>

            {#each $location.pathname
                .split('/')
                .filter((n) => n !== '') as item}
                <li>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <a on:click={() => handleClick(item)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            class="mr-2 h-4 w-4 stroke-current"
                            ><path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                            /></svg
                        >
                        {item}
                    </a>
                </li>
            {/each}
        </ul>
    </div>
</div>
