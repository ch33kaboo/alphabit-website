<script>
    // importing assets
    import alphabitLogo from '/src/assets/alphabit_logo_no_text.png';

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    let showModal = () => {
        dispatch('showModal');
    };
</script>

<div class="mt-8 w-full overflow-x-hidden">
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
            class="flex flex-col items-center justify-center sm:flex-row sm:justify-around lg:justify-evenly"
        >
            <!-- here footer content -->
            <div class="flex items-center justify-center">
                <img
                    src={alphabitLogo}
                    alt="alphabit logo"
                    class="my-5 h-40 select-none dark:invert sm:my-0 md:scale-110"
                />
            </div>
            <div
                class="flex w-screen items-start justify-around sm:w-96 lg:w-[600px]"
            >
                <div
                    class="flex flex-col gap-1 text-base font-medium capitalize"
                >
                    <p class="my-3 text-lg font-semibold">Quick Links</p>
                    <p>Quick Links</p>
                    <p>Quick Links</p>
                    <p>Quick Links</p>
                    <p>Quick Links</p>
                </div>
                <div
                    class="flex flex-col gap-1 text-base font-medium capitalize"
                >
                    <p class="my-3 text-lg font-semibold">Social</p>
                    <div class="flex gap-2">
                        <!-- svelte-ignore security-anchor-rel-noreferrer -->
                        <a
                            target="_blank"
                            href="https://facebook.com/AlphaBitClub/"
                            ><svg
                                class="scale-105 fill-black dark:fill-white"
                                width="35px"
                                height="35px"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                ><path
                                    d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"
                                /></svg
                            ></a
                        >
                        <!-- svelte-ignore security-anchor-rel-noreferrer -->
                        <a
                            target="_blank"
                            href="https://instagram.com/alphabitclub/"
                            ><svg
                                class="scale-90 fill-black dark:fill-white"
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                width="35px"
                                height="35px"
                                viewBox="0 0 260 260"
                                enable-background="new 0 0 260 260"
                                xml:space="preserve"
                            >
                                <path
                                    d="M164.58,64H95.42C78.1,64,64,78.1,64,95.42v69.16C64,181.9,78.1,196,95.42,196h69.16c17.32,0,31.42-14.1,31.42-31.42V95.42
                       C196,78.1,181.9,64,164.58,64z M130,171.1c-22.66,0-41.1-18.44-41.1-41.1s18.44-41.1,41.1-41.1s41.1,18.44,41.1,41.1
                       S152.66,171.1,130,171.1z M172.22,97.3c-5.3,0-9.6-4.3-9.6-9.61c0-5.3,4.3-9.6,9.6-9.6c5.31,0,9.61,4.3,9.61,9.6
                       C181.83,93,177.53,97.3,172.22,97.3z M130,102.9c-14.94,0-27.1,12.16-27.1,27.1s12.16,27.1,27.1,27.1s27.1-12.16,27.1-27.1
                       S144.94,102.9,130,102.9z M130,2C59.31,2,2,59.31,2,130s57.31,128,128,128s128-57.31,128-128S200.69,2,130,2z M210,164.58
                       c0,25.04-20.38,45.42-45.42,45.42H95.42C70.38,210,50,189.62,50,164.58V95.42C50,70.38,70.38,50,95.42,50h69.16
                       C189.62,50,210,70.38,210,95.42V164.58z"
                                />
                            </svg></a
                        >
                        <!-- svelte-ignore security-anchor-rel-noreferrer -->
                        <a
                            target="_blank"
                            href="https://twitter.com/alphabit_club"
                            ><svg
                                class="fill-black dark:fill-white"
                                width="35px"
                                height="35px"
                                viewBox="0 0 1024 1024"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z"
                                />
                            </svg>
                        </a>
                        <!-- svelte-ignore security-anchor-rel-noreferrer -->
                        <a
                            target="_blank"
                            href="https://dz.linkedin.com/company/alphabit-club"
                            ><svg
                                class="scale-90 fill-black dark:fill-white"
                                width="35px"
                                height="35px"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                ><path
                                    d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zM7.65 13.979H5.706V7.723H7.65v6.256zm-.984-7.024c-.614 0-1.011-.435-1.011-.973 0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973zm8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355-.537 0-.856.371-.997.728-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01 1.279 0 2.238.857 2.238 2.699v3.699z"
                                /></svg
                            ></a
                        >
                    </div>
                </div>
            </div>
        </div>
        <div
            class="flex cursor-pointer select-none items-center justify-around"
        >
            <!-- here credit to ch33kaboo -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div
                on:click={showModal}
                class="mt-2 rounded-full border bg-blue-300 bg-opacity-5 px-4 py-2 text-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-900 sm:text-base"
            >
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
                by ch33kaboo.
            </div>
        </div>
    </footer>
</div>
