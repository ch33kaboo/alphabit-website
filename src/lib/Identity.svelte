<script>
    // @ts-nocheck
    import Typewriter from 'svelte-typewriter';

    export let identity = ['a club', 'a family', 'a community'];
</script>

<Typewriter loop={1000} interval={50} cursor={false}>
    {#each identity as id}
        <span class="text-8xl">{id}.</span>
    {/each}
    {' '}
</Typewriter>
