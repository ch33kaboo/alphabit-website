<script>
    import { fly } from 'svelte/transition';
    import { quintInOut } from 'svelte/easing';
    import { onMount } from 'svelte';

    import AnimatedLogo from '../lib/AnimatedLogo.svelte';
    import Identity from '../lib/Identity.svelte';
    import ScrollDown from '../lib/ScrollDown.svelte';

    onMount(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
</script>

<main class="my-10 w-full gap-5 font-semibold lg:grid lg:grid-cols-5">
    <div
        class="col-span-3 flex w-full items-center text-5xl text-gray-900 dark:text-gray-100 sm:text-7xl md:text-8xl lg:justify-start lg:pl-16 lg:text-7xl xl:pl-24 xl:text-8xl"
    >
        <div class="flex w-full flex-col gap-3 lg:w-auto">
            <div class="flex items-center justify-center gap-4 lg:block">
                <div
                    in:fly={{
                        y: 0,
                        duration: 500,
                        delay: 600,
                        opacity: 0,
                        easing: quintInOut
                    }}
                    class="inline bg-gradient-to-r from-indigo-800 to-blue-700 bg-clip-text py-2 text-transparent dark:from-cyan-500 dark:to-green-400"
                >
                    Alphabit
                </div>
                <div
                    class="inline"
                    in:fly={{
                        y: 0,
                        duration: 500,
                        delay: 750,
                        opacity: 0,
                        easing: quintInOut
                    }}
                >
                    is
                </div>
            </div>
            <div
                class="flex items-center justify-center lg:block"
                in:fly={{
                    y: 0,
                    duration: 500,
                    delay: 900,
                    opacity: 0,
                    easing: quintInOut
                }}
            >
                <Identity />
            </div>
        </div>
    </div>
    <div
        class="flex items-center justify-center md:mt-10 lg:mt-0 lg:ml-14 xl:ml-32"
        in:fly={{
            y: 0,
            duration: 1000,
            delay: 1050,
            opacity: 0,
            easing: quintInOut
        }}
    >
        <AnimatedLogo />
    </div>
</main>
<ScrollDown />
