<script>
    import { Link } from 'svelte-navigator';
    import { mode } from '../stores/darkModeStore';

    let toggleDarkMode = () => {
        console.log('toggling dark mode');
    };
</script>

<nav class="flex w-full items-center justify-between overflow-x-hidden pt-5">
    <img
        src="./src/assets/alphabit_logo_no_text.png"
        alt="alphabit logo"
        class="h-16 px-52 dark:invert"
    />
    <ul
        class="flex w-full items-center justify-around text-lg font-semibold text-gray-900 dark:text-white"
    >
        <li><Link to="/">Home</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/partners">partners</Link></li>
        <li><Link to="/blog">our blog</Link></li>
        <li><Link to="/about">about</Link></li>
    </ul>

    <button class="ml-5 rounded-l-2xl bg-blue-300 px-2 py-1 dark:bg-gray-700">
        <label class="swap-rotate swap">
            <!-- this hidden checkbox controls the state -->
            <input type="checkbox" />

            <!-- sun icon -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <svg
                on:click={toggleDarkMode}
                class="swap-on h-7 w-7 translate-y-1 fill-current"
                style="--tw-translate-y: 2px;
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
                class="swap-off h-7 w-7 translate-y-1 fill-current"
                style="--tw-translate-y: 2px;
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
