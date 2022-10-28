<script>
    // importing envars
    const repo = import.meta.env.VITE_REPO;
    const owner = import.meta.env.VITE_OWNER;

    export let item;
    export let route;

    const fetchDocument = async () => {
        let res = await fetch(
            `https://raw.githubusercontent.com/${owner}/${repo}/main/${route}/${item.path}`
        );
        let content = await res.text();
        return content;
    };
</script>

{#await fetchDocument()}
    <button class="btn loading">loading... please wait</button>
{:then doc}
    {doc}
{:catch error}
    <p class="text-red-700">{error.message}</p>
{/await}
