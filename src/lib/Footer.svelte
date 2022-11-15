<script>
    // importing assets
    import alphabitLogo from '/src/assets/alphabit_logo_no_text.png';

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    let showModal = () => {
        dispatch('showModal');
    };
</script>

<div class="mt-8 w-full">
    <svg
        preserveAspectRatio="none"
        class="translate-y-0 bg-fixed bg-center fill-slate-900 opacity-10 backdrop-blur-md dark:fill-gray-700 dark:opacity-50"
        viewBox="0 0 1440 74"
        ><path
            d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"
        /></svg
    >

    <footer
        class="flex w-full flex-col items-stretch justify-start gap-7 bg-slate-900 bg-opacity-10 bg-[url('./src/assets/bg.svg')] bg-fixed bg-center pb-5 text-gray-900 backdrop-blur-md dark:bg-gray-700 dark:bg-opacity-50 dark:bg-[url('./src/assets/bg_dark.svg')] dark:text-white"
    >
        <div
            class="flex grid-cols-3 flex-col items-center justify-center sm:grid"
        >
            <!-- here footer content -->
            <div class="flex items-center justify-center">
                <img
                    src={alphabitLogo}
                    alt="alphabit logo"
                    class="mt-4 h-40 select-none dark:invert sm:mt-0 md:scale-110"
                />
            </div>
            <div class="flex flex-col gap-1 text-base font-medium capitalize">
                <p class="my-3 text-lg font-semibold">Quick Links</p>
                <p>Quick Links</p>
                <p>Quick Links</p>
                <p>Quick Links</p>
                <p>Quick Links</p>
            </div>
            <div class="flex flex-col gap-1 text-base font-medium capitalize">
                <p class="my-3 text-lg font-semibold">Social</p>
                <p>Quick Links</p>
                <p>Quick Links</p>
                <p>Quick Links</p>
                <p>Quick Links</p>
            </div>
        </div>
        <div class="flex select-none items-center justify-around">
            <!-- here credit to ch33kaboo and link to the code repo -->
            <div>
                Designed & Built with
                <span
                    ><svg
                        class="inline hover:fill-black dark:hover:fill-white"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                            d="M19.5 12.572l-7.5 7.428-7.5-7.428m0 0a5 5 0 1 1 7.5-6.566 5 5 0 1 1 7.5 6.572"
                        /></svg
                    ></span
                >
                by
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <span class="cursor-pointer underline" on:click={showModal}
                    >ch33kaboo.</span
                >
            </div>
            <div>hh</div>
        </div>
    </footer>
</div>
