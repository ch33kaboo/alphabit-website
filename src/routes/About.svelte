<script>
    import { onMount } from 'svelte';
    import SvelteMarkdown from 'svelte-markdown'; // to convert markdown to HTML
    import { textEmoji } from 'markdown-to-text-emoji'; // to convert the emoji codes
    import { fly } from 'svelte/transition';
    import { quintInOut } from 'svelte/easing';

    // importing envars
    const repo = import.meta.env.VITE_REPO;
    const owner = import.meta.env.VITE_OWNER;

    const fetchDocument = async () => {
        let res = await fetch(
            `https://raw.githubusercontent.com/${owner}/${repo}/main/about.md`
        );
        let content = await res.text();
        return content;
    };

    onMount(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
</script>

{#await fetchDocument()}
    <div class="flex-grow flex items-center min-h-[500px]">
        <button class="btn loading">loading... please wait</button>
    </div>
{:then doc}
    <article
        in:fly={{
            y: 0,
            duration: 500,
            delay: 0,
            opacity: 0,
            easing: quintInOut
        }}
        class="prose bg-blue-200 dark:bg-gray-800 bg-opacity-20 dark:bg-opacity-20 lg:prose-xl prose-p:px-5 prose-img:px-5 prose-video:px-5 prose-headings:px-5 prose-table:scale-90 md:prose-table:scale-100 my-8 
        text-slate-800 dark:text-gray-200 
        prose-headings:text-slate-800 dark:prose-headings:text-gray-200 
        prose-strong:text-slate-800 dark:prose-strong:text-gray-200 
        prose-a:text-slate-800 dark:prose-a:text-gray-200 
        prose-code:px-2 prose-code:py-1 prose-code:rounded-lg 
        prose-code:text-slate-800 prose-code:bg-indigo-300 
        dark:prose-code:text-gray-200 dark:prose-code:bg-gray-900"
    >
        <SvelteMarkdown source={textEmoji(doc)} />
    </article>
{:catch error}
    <p class="text-red-700">{error.message}</p>
{/await}
