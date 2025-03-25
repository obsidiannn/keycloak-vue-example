module.exports = {
  devServer: {
    // ...  
    allowedHosts: 'all',
    client: {
      webSocketURL: 'auto://0.0.0.0:0/ws'
    },

    // 跨域配置
    proxy: {
      // 接口是以 /api 开头的需要代理
      '/api': {
        target: `https://api.mz-moe.cn`, // 代理接口地址。实际请求接口地址会是：https://api.mz-moe.cn/api/xxx/xxx
        changeOrigin: true, // 默认false，是否需要改变原始主机头为目标URL
        ws: false, // 是否代理websockets
        pathRewrite: {
          '^/api': '', // 重写请求。实际接口中并没有 /api，所以需要替换为空 ''
        },
      },
    },
  }
}
