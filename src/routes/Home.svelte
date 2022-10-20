<script>
    import AnimatedLogo from '../lib/AnimatedLogo.svelte';
    import Identity from '../lib/Identity.svelte';
</script>

<main class="my-10 grid w-full grid-cols-5 gap-5 font-semibold">
    <div
        class="col-span-3 flex items-center justify-start pl-24 text-8xl text-gray-900 dark:text-gray-100"
    >
        <div class="flex flex-col gap-4">
            <div>Alphabit is</div>
            <Identity />
        </div>
    </div>
    <div class="ml-32 flex items-center justify-center">
        <AnimatedLogo />
    </div>
</main>
