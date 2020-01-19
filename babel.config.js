module.exports = {
  sourceMaps: true,
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
      '@babel/preset-typescript',
    ],
  ],
  env: {
    test: {
      presets: ['@babel/preset-typescript'],
      plugins: ['@babel/plugin-proposal-class-properties'],
    },
  },
};
