<script>
    export let item;
    import { fade } from 'svelte/transition';
</script>

<div
    in:fade={{ delay: 700 * item.index + 1300 }}
    class="group relative mt-5 grid h-48"
>
    <div
        class="absolute inset-y-3 -inset-x-2 bg-gradient-to-tr from-indigo-800 to-blue-700 opacity-0 blur-xl transition-all group-hover:opacity-100 dark:from-cyan-500 dark:to-green-400"
    />

    <div
        class="absolute inset-0 grid grid-cols-10 overflow-hidden rounded-lg bg-indigo-300 text-gray-900 dark:bg-gray-700 dark:text-white"
    >
        <div
            class="col-span-3 bg-cover"
            style="background-image: url('https://placeimg.com/200/200/tech')"
        />
        <div class="col-span-7">
            {item.path}
            {item.time}
        </div>
    </div>
</div>
