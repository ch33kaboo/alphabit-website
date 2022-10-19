const config = {
    content: ['./src/**/*.{html,js,svelte,ts}', './index.html'],

    darkMode: 'class',
    theme: {
        extend: {}
    },

    plugins: [require('daisyui')]
};

module.exports = config;
