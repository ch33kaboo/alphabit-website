<!-- this component you just give it the name of the section (events/blog so far) and it will render all available blogs/events in a cool way -->
<script>
    import ItemCard from '../ItemCard.svelte';
    import { Route, useNavigate } from 'svelte-navigator';
    const navigate = useNavigate();

    import Document from './Document.svelte';
    let item;
    let path;
    const handleChangeRoute = (e) => {
        item = e.detail.item;
        path = e.detail.path;
        navigate(path);
    };

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
                {
                    index: arr.length + 1,
                    path: array[i].path,
                    time: `${Math.ceil(array[i].size / 1300)} min read`
                } // 1300 is a number I came up with, when dividing by it, you get approximately the estimated read time of that file.
            ];
            i++;
        }
        return arr;
    };
</script>

<Route path="/">
    {#await getList()}
        <button class="btn loading">loading... please wait</button>
    {:then items}
        <div class="flex flex-col items-stretch justify-center w-5/6 lg:w-2/3">
            {#each items as item}
                <ItemCard {item} {route} on:changeRoute={handleChangeRoute} />
            {/each}
        </div>
    {:catch error}
        <p class="text-red-700">{error.message}</p>
    {/await}
</Route>

<Route {path}>
    <Document {item} />
</Route>
