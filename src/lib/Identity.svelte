<script>
    // @ts-nocheck
    import Typewriter from 'svelte-typewriter';

    export let identity = [' club', ' family', ' community'];
</script>

<div class="flex items-center justify-start">
    a&nbsp;
    <Typewriter loop={1000} interval={50} cursor={false}>
        {#each identity as id}
            <span class="text-8xl text-gray-900 dark:text-gray-100">{id}.</span>
        {/each}
        {' '}
    </Typewriter>
</div>
