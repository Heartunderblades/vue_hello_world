module.exports = {
  chainWebpack: (config) => {
    const imgRule = config.module.rule('images');
    imgRule.use('file-loader')
      .loader('image-webpack-loader');
  },
};
