<script>
    import { Link } from 'svelte-navigator';
    import { createEventDispatcher } from 'svelte';
    import { useLocation } from 'svelte-navigator';
    import { mode } from '../stores/darkModeStore';
    import { fly } from 'svelte/transition';
    import { quintInOut } from 'svelte/easing';

    const dispatch = createEventDispatcher();

    // importing assets
    import alphabitLogo from '/src/assets/alphabit_logo_no_text.png';

    // importing configs
    import routesList from '../config/routesList';

    let myPage = document.getElementsByTagName('html');
    let toggleDarkMode = () => {
        myPage[0].className = $mode == 'dark' ? '' : 'dark';
        $mode = myPage[0].className;
    };

    let toggleMenu = () => {
        dispatch('toggleMenu');
    };

    const location = useLocation();
</script>

<nav
    class="sticky top-0 z-10 flex w-full select-none items-center justify-between overflow-x-hidden  bg-blue-200 bg-opacity-50 bg-[url('./src/assets/bg.svg')] bg-fixed bg-center py-5 backdrop-blur-md dark:bg-gray-800 dark:bg-opacity-50 dark:bg-[url('./src/assets/bg_dark.svg')]"
>
    <button
        in:fly={{
            x: -40,
            duration: 500,
            delay: 550,
            opacity: 0,
            easing: quintInOut
        }}
        class="rounded-r-2xl bg-indigo-300 py-1 pl-1 pr-2 dark:bg-gray-700 lg:hidden"
    >
        <label class="swap-rotate swap">
            <!-- this hidden checkbox controls the state -->
            <input type="checkbox" />

            <!-- hamburger icon -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <svg
                on:click={toggleMenu}
                class="swap-off h-7 w-7 translate-y-1 fill-gray-800 dark:fill-slate-300"
                style="--tw-translate-y: 3px;
                transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
                ><path
                    d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"
                /></svg
            >

            <!-- close icon -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <svg
                on:click={toggleMenu}
                style="--tw-translate-y: 3px;
            transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));"
                class="swap-on h-7 w-7 translate-y-1 fill-gray-800 dark:fill-slate-300"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
                ><polygon
                    points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
                /></svg
            >
        </label>
    </button>
    <div class="flex w-full items-center justify-around">
        <img
            in:fly={{
                y: -40,
                duration: 500,
                delay: 300,
                opacity: 0,
                easing: quintInOut
            }}
            src={alphabitLogo}
            alt="alphabit logo"
            class="h-20 dark:invert"
        />
        <ul
            class="hidden items-center justify-center gap-10 text-lg font-semibold capitalize text-gray-900 dark:text-white lg:flex"
        >
            <li
                in:fly={{
                    y: -40,
                    duration: 500,
                    delay: 340,
                    opacity: 0,
                    easing: quintInOut
                }}
                class="group relative cursor-pointer px-2 opacity-60 hover:opacity-100 {$location.pathname ==
                '/'
                    ? 'opacity-100'
                    : ''} transition-all"
            >
                <Link to="/">Home</Link>
                <span
                    class="absolute -bottom-1 left-0 h-1 {$location.pathname ==
                    '/'
                        ? 'w-full'
                        : 'w-0'}  bg-slate-900 bg-opacity-90 transition-all group-hover:w-full dark:bg-blue-400 dark:bg-opacity-90"
                />
            </li>
            {#each routesList as route}
                <div
                    class="{route.path == 'AlphaGeeks'
                        ? 'indicator'
                        : ''} group"
                >
                    {#if route.path == 'AlphaGeeks'}
                        <span
                            in:fly={{
                                y: 10,
                                duration: 900,
                                delay: 1600,
                                opacity: 0,
                                easing: quintInOut
                            }}
                            class="badge indicator-item badge-secondary -top-[6px] right-2 opacity-60 group-hover:opacity-100 {$location.pathname.startsWith(
                                `/${route.path}`
                            )
                                ? 'opacity-100'
                                : ''}">new</span
                        >
                    {/if}
                    <li
                        in:fly={{
                            y: -40,
                            duration: 500,
                            delay: 380 + route.index * 40,
                            opacity: 0,
                            easing: quintInOut
                        }}
                        class="relative cursor-pointer px-2 opacity-60 hover:opacity-100 {$location.pathname.startsWith(
                            `/${route.path}`
                        )
                            ? 'opacity-100'
                            : ''} transition-all"
                    >
                        <Link to="/{route.path}">{route.path}</Link>
                        <span
                            class="absolute -bottom-1 left-0 h-1 {$location.pathname.startsWith(
                                `/${route.path}`
                            )
                                ? 'w-full'
                                : 'w-0'}  bg-slate-900 bg-opacity-90 transition-all group-hover:w-full dark:bg-blue-400 dark:bg-opacity-90"
                        />
                    </li>
                </div>
            {/each}
        </ul>
    </div>

    <button
        in:fly={{
            x: 40,
            duration: 500,
            delay: 550,
            opacity: 0,
            easing: quintInOut
        }}
        class="rounded-l-2xl bg-indigo-300 py-1 pr-1 pl-2 dark:bg-gray-700 lg:ml-5"
    >
        <label class="swap-rotate swap">
            <!-- this hidden checkbox controls the state -->
            <input type="checkbox" />

            <!-- sun icon -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <svg
                on:click={toggleDarkMode}
                class="swap-on h-7 w-7 translate-y-1 fill-gray-800 dark:fill-slate-300"
                style="--tw-translate-y: 3px;
                transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                ><path
                    d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
                /></svg
            >

            <!-- moon icon -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <svg
                on:click={toggleDarkMode}
                class="swap-off h-7 w-7 translate-y-1 fill-gray-800 dark:fill-slate-300"
                style="--tw-translate-y: 3px;
                transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                ><path
                    d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
                /></svg
            >
        </label>
    </button>
</nav>
