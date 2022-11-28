<script>
    import { Link } from 'svelte-navigator';
</script>

<div
    class="mt-12 flex w-full flex-col items-center justify-around gap-5 md:flex-row md:gap-0"
>
    <div
        class="flex max-w-[94%] flex-col items-center justify-center gap-2 text-center text-lg font-semibold italic  text-gray-700 dark:text-gray-300 md:max-w-[40%]"
    >
        <div
            class="relative mb-2 text-3xl font-bold text-gray-800 dark:text-gray-200"
        >
            <div
                class="absolute mb-2 bg-indigo-700 bg-clip-text text-3xl font-bold text-transparent blur-sm dark:bg-blue-600"
            >
                AlphaBit Members
            </div>
            <div class="relative">AlphaBit Members</div>
        </div>
        <div>
            Alphabit Club, like any other community, is build around people.
        </div>
        <div>
            And we appreciate what our members are doing. The hard work they put
            in the club, The valuable time they dedicate, The joy they create,
            The creative things they make... from workshops to podcasts, & of
            course the greate events they organize.
        </div>
        <div>
            Speaking about events, you can take a look at AlphaBit yearly events
            via <Link to="/events"
                ><span class="underline">this&nbsp;link</span></Link
            >.
        </div>
        <div>
            Or listen to our brand new program "AlphaGeeks" via <Link
                to="/AlphaGeeks"
                ><span class="underline">this&nbsp;link</span></Link
            >.
        </div>
    </div>

    <div class="w-[95%] p-1 md:w-5/12">
        <div
            class="group relative block overflow-hidden rounded-lg border border-gray-800 transition-all duration-500"
        >
            <div
                class="absolute inset-0 z-[8] h-full w-full overflow-hidden bg-indigo-700 bg-fixed opacity-0 transition duration-300 ease-in-out group-hover:opacity-40"
            />

            <div
                class="transition-all duration-500 group-hover:scale-105"
                title=""
            >
                <!-- svelte-ignore a11y-missing-attribute -->
                <img src="https://i.postimg.cc/7Y70QD9h/alpha-group.jpg" />
            </div>
            <div
                class="absolute -bottom-52 right-2 left-2 z-[9] rounded bg-slate-900 p-4 transition-all duration-500 group-hover:bottom-2"
            >
                <div
                    class="hover:text-primary-600 text-lg font-medium transition duration-500"
                >
                    AlphaBit members &hearts;
                </div>
                <p class="text-slate-400">
                    A picture taken on november 5th 2022, on the occasion of
                    AlphaBit first general meeting.
                </p>
            </div>
        </div>
    </div>
</div>
