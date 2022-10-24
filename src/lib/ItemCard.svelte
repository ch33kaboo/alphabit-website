<script>
    export let item;
</script>

<div
    class="mt-5 grid h-48 grid-cols-10 rounded-lg bg-indigo-300 text-gray-900 dark:bg-gray-700 dark:text-white"
>
    <div class="col-span-3">
        {item.path}
    </div>
    <div class="col-span-7">
        {item.time}
    </div>
</div>
