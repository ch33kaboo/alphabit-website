<script>
    // @ts-nocheck
    import Typewriter from 'svelte-typewriter';

    export let identity = [' club', ' family', ' community'];
</script>

<div class="flex items-center justify-start">
    a&nbsp;
    <Typewriter loop={1000} interval={50} cursor={false}>
        {#each identity as id}
            <span
                class="text-5xl text-gray-900 dark:text-gray-100 sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl"
                >{id}.</span
            >
        {/each}
    </Typewriter>
</div>
