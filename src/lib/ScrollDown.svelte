<!-- this component will be a button that scrolls back to top when you click it -->
<script>
    import { quintInOut } from 'svelte/easing';
    import { fly } from 'svelte/transition';

    let scrolldown = () => {
        document.body.scrollTop += 120;
        document.documentElement.scrollTop += 120;
    };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
    in:fly={{
        y: 0,
        duration: 1000,
        delay: 1500,
        opacity: 0,
        easing: quintInOut
    }}
    on:click={scrolldown}
    class="-mt-16 animate-bounce cursor-pointer rounded-full bg-gradient-to-r from-indigo-800 to-blue-700 p-3 text-xs font-medium text-blue-200 opacity-90 transition duration-300 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg dark:from-cyan-500 dark:to-green-400 dark:text-gray-800 sm:-mt-10"
>
    <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        class="h-4 w-4 rotate-180"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
    >
        <path
            fill="currentColor"
            d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
        />
    </svg>
</div>
