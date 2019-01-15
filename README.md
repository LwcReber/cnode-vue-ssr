# 使用方法
进入项目目录，运行
```
npm install
```
然后执行
```
npm run dev
```
开始开发项目

## 遇到的问题

  1. vue-server-renderer 使用2.5.13版本不能使用最新版本 使用cnpm 手动安装对应的版本号
  2. 使用nodemon自动重启服务 主要为了自动重启
  3. concurrently可同时启动多个服务
  4. 使用vue-meta 解决title问题


  5. 使用no-bundle的方式注意事项

    1. 如果使用的mfs的方式读取文件，则需要把client的路由写成同步加载的方式，因为mfs无法直接读取内存的文件
       webpack不需要vue-server-renderer
    2. 如果不使用mfs的方式则可以直接读取server-entry 文件，这样的话路由就可以使用异步加载的方式
      开发环境可以使用vue-server-renderer


  6. server-entry文件
    ```
    mathedComponents = router.getMatchedComponents()
    ```
    获取mathedComponents值为空数组问题，是由于请求的路由不对，导致找不到有相关的组件。
    解决办法，客户端请求跨域处理，同时在koa的路由添加全局路由前缀，这样对客户端也好。客户端写的接口名直接对应koa的请求路径。同时要注意koa的get请求获取参数的方法。路由都对应上后，客户端请求数据就正常了


## 服务器部署上线
  ```
  pm2 start pm2.yml
  ```
  停止服务
  ```
  pm2 stop +任务名
  ```

  ##小tips
   使用ngrok能生成外网能访问的网址，只是有点卡。。。
