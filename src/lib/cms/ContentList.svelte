<!-- this component you just give it the name of the section (events/blog so far) and it will render all available blogs/events in a cool way -->
<script>
    import { onMount } from 'svelte';

    const repo = import.meta.env.VITE_REPO;
    const owner = import.meta.env.VITE_OWNER;
    export let route;
    let content;
    let i = 0;

    // now we'll get the hash of the tree (the directory)
    let getHash = async () => {
        let res = await fetch(
            `https://api.github.com/repos/${owner}/${repo}/git/trees/main`
        );
        content = await res.text();
        let array = JSON.parse(content).tree;
        while (i < array.length) {
            if (array[i].path == route) {
                return array[i].sha;
            }
            i++;
        }
    };

    // now use the hash to see the files of the tree (the directory)
    let getList = async () => {
        let res = await fetch(
            `https://api.github.com/repos/${owner}/${repo}/git/trees/${await getHash()}`
        );
        content = await res.text();
        let arr = [];
        let array = JSON.parse(content).tree;
        i = 0;
        while (i < array.length) {
            arr = [...arr, array[i].path];
            i++;
        }
        return arr;
    };

    let list;
    onMount(() => {
        list = getList();
    });
</script>

{#await list}
    waiting for the list...
{:then list}
    {list}
{:catch error}
    <p class="text-red-700">{error.message}</p>
{/await}
