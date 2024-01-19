const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      externals: ['@rongcloud/electron', '@rongcloud/engine'],
      preload: 'src/preload.js',
      nodeIntegration: true,
      asar: true,
      // chainWebpackMainProcess: (config) => {
      //   config.output.filename('background.js');
      // },
    }
  }
})
