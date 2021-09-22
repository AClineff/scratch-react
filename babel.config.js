module.exports = {
  presets: [
    [
      'env',
      {
        targets: {
          browsers: ['last 2 Chrome versions'],
        },
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
};
