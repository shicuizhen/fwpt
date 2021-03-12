// vue.config.js
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // 配置别名 这样可不通过写具体路径找资源
        // vue设置了 '@': 'src',
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'views': '@/views',
        'network': '@/network',
      }
    }
  },
  // 允许跨域请求
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8180/',
        changeOrigin: true
      }
    }
  }
}
