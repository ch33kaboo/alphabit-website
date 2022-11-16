<script>
    import ContentList from '../lib/cms/ContentList.svelte';
    import { onMount } from 'svelte';

    onMount(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    let route = 'events';
</script>

<ContentList {route} />
