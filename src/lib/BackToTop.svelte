<!-- this component will be a button that scrolls back to top when you click it -->
<script>
    let scrollToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    window.onscroll = () => {
        scrollFunction();
    };

    let mybutton;
    let cursor;
    const scrollFunction = () => {
        if (
            document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50
        ) {
            mybutton.style.opacity = '100%';
            cursor = 'cursor-pointer';
        } else {
            mybutton.style.opacity = '0%';
            cursor = 'cursor-default';
        }
    };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
    on:click={scrollToTop}
    bind:this={mybutton}
    class="fixed bottom-[22px] {cursor} right-3 z-20 inline-block rounded-full bg-cyan-600 p-3 text-xs font-medium leading-tight text-white opacity-0 shadow-md transition duration-300 ease-in-out hover:bg-cyan-700 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg md:bottom-7 md:right-7"
>
    <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        class="h-4 w-4"
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
