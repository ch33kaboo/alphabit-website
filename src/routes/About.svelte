<script>
    import UnderMaintenance from '../lib/UnderMaintenance.svelte';
    import { onMount } from 'svelte';

    onMount(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
</script>

<UnderMaintenance />
<div
    class="my my-10 mx-3 text-center text-4xl font-medium text-gray-900 dark:text-gray-100"
>
    About Route is Under Maintenance
</div>
