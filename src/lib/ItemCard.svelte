<script>
    export let item;
    export let route = 'article';
    import { fly } from 'svelte/transition';
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    let handleClick = () => {
        dispatch('changeRoute', {
            item: item,
            path: item.path.replace('.md', '')
        });
    };
</script>

<div
    in:fly={{
        x: 40,
        duration: 500,
        delay: 200 * item.index + 1000,
        opacity: 0
    }}
    class="group relative mt-5 grid h-48"
>
    <div
        class="absolute inset-y-3 -inset-x-1 bg-gradient-to-tr from-indigo-800 to-blue-700 opacity-0 blur-xl transition-all group-hover:opacity-100 dark:from-cyan-500 dark:to-green-400"
    />

    <div
        class="absolute inset-0 grid grid-cols-10 overflow-hidden rounded-lg bg-indigo-300 text-gray-900 dark:bg-gray-700 dark:text-white"
    >
        <div
            class="col-span-3 bg-cover"
            style="background-image: url('https://placeimg.com/200/200/tech')"
        />
        <div class="col-span-7 px-7 py-5">
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
                <div on:click={handleClick} class="btn btn-accent">
                    {route == 'blog' ? 'read this blog' : 'read event details'}
                </div>
            </div>
            <div class="mt-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempora ad unde, odit alias dicta eius quam praesentium
                mollitia, similique corrupti maiores libero aperiam, in
                dignissimos.
            </div>
        </div>
    </div>
</div>
