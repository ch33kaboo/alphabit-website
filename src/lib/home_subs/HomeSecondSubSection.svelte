<script>
    import { Link } from 'svelte-navigator';

    import alphabitLogo from '/src/assets/alphabit_logo_no_text.png';
</script>

<div
    class="mt-10 flex w-full items-center justify-center gap-3  text-center text-lg font-semibold italic text-gray-700 dark:text-gray-300"
>
    <img
        src={alphabitLogo}
        alt="alphabit logo"
        class="hidden h-9 opacity-80 dark:invert md:block"
    />
    <div>
        If you want to know more about us, visit <Link to="/about"
            ><span
                class="underline transition-all hover:text-gray-900 hover:dark:text-gray-100"
                >About&nbsp;section</span
            ></Link
        >
    </div>
    <img
        src={alphabitLogo}
        alt="alphabit logo"
        class="hidden h-9 opacity-80 dark:invert md:block"
    />
</div>
