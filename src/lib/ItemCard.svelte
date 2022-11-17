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

    let hovered = false;
    const handleHover = () => {
        hovered = true;
    };
    const handleLeave = () => {
        hovered = false;
    };
</script>

<div
    in:fly={{
        x: 40,
        duration: 500,
        delay: 200 * item.index + 1000,
        opacity: 0
    }}
    class="group relative -mx-4 mb-6 grid h-[450px] transition-all hover:scale-[1.013] sm:-mx-0 sm:h-48"
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
            class="col-span-3 h-[500px] bg-cover bg-center sm:h-auto"
            style="background-image: url('https://placeimg.com/200/200/tech')"
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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempora ad unde, odit alias dicta eius quam praesentium
                mollitia, similique corrupti maiores libero aperiam, in
                dignissimos.
            </div>
        </div>
    </div>
</div>
