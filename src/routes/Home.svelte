<script>
    import AnimatedLogo from '../lib/AnimatedLogo.svelte';
    import Identity from '../lib/Identity.svelte';
</script>

<main class="my-10 w-full gap-5 font-semibold lg:grid lg:grid-cols-5">
    <div
        class="col-span-3 flex w-full items-center text-5xl text-gray-900 dark:text-gray-100 sm:text-7xl md:text-8xl lg:justify-start lg:pl-16 lg:text-7xl xl:pl-24 xl:text-8xl"
    >
        <div class="flex w-full flex-col gap-4 lg:w-auto">
            <div class="flex items-center justify-center lg:block">
                Alphabit is
            </div>
            <div class="flex items-center justify-center pl-9 lg:block lg:pl-0">
                <Identity />
            </div>
        </div>
    </div>
    <div
        class="flex items-center justify-center md:mt-10 lg:mt-0 lg:ml-14 xl:ml-32"
    >
        <AnimatedLogo />
    </div>
</main>
