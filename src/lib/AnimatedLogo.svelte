<script>
    import { onMount } from 'svelte';
    import { mode } from '../stores/darkModeStore';

    let canvas;

    onMount(() => {
        const ctx = canvas.getContext('2d');
        let frame = requestAnimationFrame(loop);

        function loop(t) {
            frame = requestAnimationFrame(loop);

            const imageData = ctx.getImageData(
                0,
                0,
                canvas.width,
                canvas.height
            );

            for (let p = 0; p < imageData.data.length; p += 4) {
                const i = p / 4;
                const x = i % canvas.width;
                const y = (i / canvas.width) >>> 0;

                const r =
                    ($mode == 'dark' ? 64 : 90) +
                    (128 * x) / canvas.width +
                    64 *
                        Math.sin(
                            ($mode == 'dark' ? -1100 : -3700) /
                                ($mode == 'dark' ? 1000 : 2000)
                        );
                const g =
                    ($mode == 'dark' ? 64 : -50) +
                    (128 * x) / canvas.height +
                    64 *
                        Math.cos(
                            ($mode == 'dark' ? -1100 : -3700) /
                                ($mode == 'dark' ? 1000 : 2000)
                        );
                const b = 128;

                imageData.data[p + 0] = r;
                imageData.data[p + 1] = g;
                imageData.data[p + 2] = b;
                imageData.data[p + 3] = 255;
            }

            ctx.putImageData(imageData, 0, 0);
        }

        return () => {
            cancelAnimationFrame(frame);
        };
    });
</script>

<div class="scale-75 overflow-visible drop-shadow-lg md:scale-100">
    <canvas bind:this={canvas} width={330} height={430} />
</div>

<style>
    canvas {
        background-color: #666;
        -webkit-mask: url(../assets/alphabit_logo.png) no-repeat;
        mask: url(../assets/alphabit_logo.png) no-repeat;
    }
</style>
