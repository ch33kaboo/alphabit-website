<script>
    export let item;
    export let route = 'article';

    // importing envars
    const repo = import.meta.env.VITE_REPO;
    const owner = import.meta.env.VITE_OWNER;

    import { fly } from 'svelte/transition';
    import { createEventDispatcher, onMount } from 'svelte';
    import SvelteMarkdown from 'svelte-markdown'; // to convert markdown to HTML
    import { textEmoji } from 'markdown-to-text-emoji'; // to convert the emoji codes
    import { quintInOut } from 'svelte/easing';
    const dispatch = createEventDispatcher();

    let handleClick = () => {
        dispatch('changeRoute', {
            item: item,
            path: item.path.replace('.md', '')
        });
    };

    const fetchDocument = async () => {
        let res = await fetch(
            `https://raw.githubusercontent.com/${owner}/${repo}/main/${route}/${item.path}`
        );
        let content = await res.text();
        return content;
    };

    let hovered = false;
    const handleHover = () => {
        hovered = true;
    };
    const handleLeave = () => {
        hovered = false;
    };

    let imgUrl;
    onMount(async () => {
        imgUrl = (await fetchDocument())
            .split('$$img-end$$')[0]
            .replace(/\s+/g, ' ');
    });
</script>

<div
    in:fly={{
        x: 40,
        duration: 500,
        delay: 200 * item.index + 1000,
        opacity: 0
    }}
    class="group relative -mx-4 mb-6 grid h-[450px] transition-all sm:-mx-0 sm:h-[212px] md:hover:scale-[1.013]"
>
    <div
        class="absolute inset-y-2 -inset-x-1 bg-gradient-to-tr from-slate-700 to-slate-700 opacity-0 blur-xl transition-all {hovered
            ? 'opacity-70'
            : ''} dark:from-cyan-500 dark:to-green-400"
    />

    <div
        class="absolute inset-0 flex grid-cols-10 flex-col overflow-hidden rounded-lg border border-gray-800 bg-indigo-300 text-gray-900 dark:border-0 dark:bg-gray-700 dark:text-white sm:grid"
    >
        <div
            class="col-span-3 h-[500px] bg-center sm:h-auto {item.path ==
            'Important,_please_read!'
                ? 'bg-contain bg-no-repeat'
                : 'bg-cover'}"
            style="background-image: url('{imgUrl}')"
        />
        <div
            class="col-span-7 overflow-x-hidden overflow-y-scroll px-4 py-4 sm:px-7 sm:py-5"
        >
            <div class="flex items-center justify-between gap-7">
                <div>
                    <div class="text-3xl capitalize">
                        {item.path.replace(/_/g, ' ').replace('.md', '')}
                    </div>
                    <div class="text-sm opacity-60">
                        {item.time}
                    </div>
                </div>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                <div
                    on:click={handleClick}
                    on:mouseover={handleHover}
                    on:mouseleave={handleLeave}
                    class="btn btn-accent w-32 leading-5 sm:w-auto sm:leading-normal"
                >
                    {route == 'blog' ? 'read this blog' : 'read event details'}
                </div>
            </div>
            <div class="mt-4">
                {#await fetchDocument()}
                    <div class="flex-grow flex justify-center items-center">
                        <button class="btn loading"
                            >loading... please wait</button
                        >
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
                        class="mt-2 prose-code:bg-black prose-code:bg-opacity-20 dark:prose-code:bg-opacity-30 prose-code:rounded-md prose-code:py-1 prose-code:px-2 text-slate-800 dark:text-gray-200"
                    >
                        <SvelteMarkdown
                            source={textEmoji(
                                doc
                                    .split('$$img-end$$')[1]
                                    .split(' ')
                                    .slice(0, 17)
                                    .join(' ') +
                                    `<span class="text-red-300">.... **click ${
                                        route == 'blog'
                                            ? '`read this blog`'
                                            : '`read event details`'
                                    } button to read more.**</span>`
                            )}
                        />
                    </article>
                {:catch error}
                    <p
                        class="text-red-700 text-lg font-semibold dark:text-red-300"
                    >
                        {error.message}
                    </p>
                {/await}
            </div>
        </div>
    </div>
</div>
