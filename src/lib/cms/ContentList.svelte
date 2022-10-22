<!-- this conponent you just give it the name of the section (events/blog so far) and it will render all available blogs/events in a cool way -->
<script>
    const repo = import.meta.env.VITE_REPO;
    const owner = import.meta.env.VITE_OWNER;
    export let route;
    let content;
    let hash;
    let i = 0;

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
    (async () => {
        console.log(await getHash());
    })();
</script>
