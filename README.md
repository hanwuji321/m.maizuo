![m.maizuo](https://avatars3.githubusercontent.com/u/22174598?v=4&s=460)
### m.maizuo卖座电影技术站
> ES6 + React + React-Router + webpack热更新与打包编译(项目后续会改造redux+ant-design)

### 安装依赖
```javascript
npm install
```

### 启动
```javascript
node proxy.js
npm start
```
这里启动用的是webpack热更新，没有使用React脚手架的启动方式

###项目介绍
> 
```javascript
1.访问数据需要跨域 
2.采用本地+服务器的跨域方式
```


###目录结构
```javascript
├─dist # 生成静态文件的目录  
├─node_modules # 利用npm管理的所有包及其依赖  
├─ # 静态文件目录(忽略)  
├─test # babel的配置文件  
├─.gitignore # git上传配置文件  
├─src # 项目文件目录  
   ├─component # 项目中所有组件目录  
      ├─ModalBody # 详情页侧滑弹窗
      ├─NavBar # 页面顶部组件  
      ├─NetRequest # Fetch方法封装(待完善)  
      ├─PublicSearch # 高级搜索封装组件  
      ├─TableGrid # 数据看板组件  
      ├─TableList # 数据列表组件  
      ├─ViewTools # 视图切换，视图操作，高级搜索组件  
      └─index.js # 组件集合
   ├─lib # css字体文件和其他组件css文件  
   ├─mock # 模拟数据接口文件  
   ├─style # css样式文件  
   ├─mock # 数据模拟接口文件  
   └─index.js # 项目主入口
├─package.json # npm的配置文件
├─webpack-config # webpack配置文件
```

###所需要用到的技术
* **ant Design**(重要)：蚂蚁金服React前端UI框架，里面的组件非常适用于我们新平台开发  
* **Fetch**(重要)：传统 Ajax 指的是 XMLHttpRequest（XHR），未来现在已被 Fetch 替代。
* **json-server**：模拟数据接口，开发阶段存在跨域问题，不能和接口直接调试，用本地json数据进行调试
* **webpack**：对项目进行热加载热更新和代码上线前的打包编译

