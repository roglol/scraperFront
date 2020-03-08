// const withImages = require('next-images')
// module.exports = withImages()

module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Note: we provide webpack above so you should not `require` it
      // Perform customizations to webpack config
      // Important: return the modified config
      config.plugins.push(    new webpack.DefinePlugin({
        'process.env.FLUENTFFMPEG_COV': false
    }))
      return config
    }
  }