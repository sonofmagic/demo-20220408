module.exports = {
  mode: 'jit',
  purge: {
    content: ['./src/**/*.{vue,js,ts,jsx,tsx,wxml}'],
  },
  // content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
