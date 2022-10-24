<!-- this component you just give it the name of the section (events/blog so far) and it will render all available blogs/events in a cool way -->
<script>
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
            arr = [
                ...arr,
                { path: array[i].path, time: Math.ceil(array[i].size / 1300) } // 1300 is a number I came up with, when dividing by it, you get approximately the estimated read time of that file.
            ];
            i++;
        }
        return arr;
    };
</script>

{#await getList()}
    waiting for the list...
{:then items}
    {#each items as item}
        <li>{item.path}. {item.time}</li>
    {/each}
{:catch error}
    <p class="text-red-700">{error.message}</p>
{/await}
