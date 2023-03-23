
### 技术栈
  uni-app + uniCloud + vite + vue3 + pinia + ElementUI
  
### 演示地址

[点击查看](https://static-b3a9d053-eefd-45be-8142-88ff822c08ea.bspapp.com/#/)

Tip: 因uniCloud收费，演示地址已下线，有兴趣的朋友请下载到本地测试

### 安装

0. #### 从 HBuilder X 打开项目
1. #### HBuilder X 安装必须插件
	- ##### dart-sass 编译
	- ##### uniapp (Vue 3)
2. #### 打开 manifest.json 基础配置中重新获取你的 uni-app 应用标识(AppID)，如果是插件市场新建的项目应该不需要这一步
3. #### 依然是 manifest.json 基础配置中 “Vue版本选择” 选择 3（只支持vue3）
4. #### 依然是 manifest.json h5配置中 “路由模式” 选择 hash
5. #### 安装依赖包 `npm install` or `yarn`
6. #### 鼠标右键 uniCloud 目录 -> 云服务空间初始化向导...
7. #### 为了你的博客账号，最好修改一下 uni-id 的用户密钥
	- ##### 找到这个文件：/uni_modules/uni-config-center/uniCloud/cloudfunctions/common/uni-config-center/uni-id/config.json
	- ##### 修改 passwordSecret 和 tokenSecret 的值

### 运行

0. #### HBuilder X -> 运行 -> 运行到指定浏览器
1. #### 一般会自动打开浏览器，或者自己打开 localhost:3002
2. #### 管理端登陆：localhost:3002/#/pages/admin/login
	- ##### 第一次打开会先让你注册账号

### 发布

#### 我用的是前端网页托管，自己看文档吧：[https://uniapp.dcloud.io/uniCloud/hosting.html](https://uniapp.dcloud.io/uniCloud/hosting.html)

### 项目结构和说明(务必要看，这里有一些重要的东西)

0. #### uniCloud
	- ##### cloudfunctions - 云函数都写这这里
	- ##### database - 数据库初始化的时候用到，不是很重要
1. #### components - 公共组件目录，写在这里到组件都会自动引入
	- ##### bg-attachment - 附件库组件
	- ##### bg-cover - 全屏遮盖，不是很重要
	- ##### bg-editor - markdown 编辑器组件
	- ##### bg-pagination - 分页组件
	- ##### bg-upload - 上传文件组件
2. #### node_modules - 第三方依赖包
3. #### pages - 页面目录
	- ##### admin - 后台的所有页面都要写在这里
	- ##### error - 错误页，不是很重要
	- ##### front - 前台的所有页面都要写在这里
4. #### static - 一些静态资源文件
5. #### stores - pinia（轻量级的 vuex）
	- ##### 我用 pinia 代替了 vuex，它更快更小更方便：[https://pinia.vuejs.org/](https://pinia.vuejs.org/)
6. #### uni_modules - uni-id 用户体系：[https://uniapp.dcloud.io/uniCloud/uni-id.html#start](https://uniapp.dcloud.io/uniCloud/uni-id.html#start)
7. #### utils - 公共的方法库
	- ##### authToken.js - 登陆鉴权用的，基本不会去动它了，不是很重要
	- ##### call.js - 用于请求云函数的方法，基于 vite 的 AutoImport 插件做了自动引入，你在页面中直接使用 call().then() 就行，不需要 import 它
	- ##### endeCode.js - 简单的字符串加密和解密，用于实现加密文章，不是很重要
	- ##### formatter.js - 用于格式化表格数据的公共方法，如果你有其他常用的方法，也可以加进来
	- ##### router.js - 路由跳转，同 call 一样，做了自动引入，可直接使用 router.navigateTo()
	- ##### setClipboardData.js - 设置系统剪贴板的内容
	- ##### setWindowStyle.js - 根据屏幕宽度，隐藏或显示页面窗体（leftWindow，rightWindow）
	- ##### toast.js - 封装了 element 的 ElMessage 方法，也做了自动引入，可直接使用 toast.success()
	- ##### tryGetCurrentPage.js - 用于获取当前页面路径，不是很重要
	- ##### menus.js - 后台菜单，添加菜单项要在这里写，用于鉴权用对
	- ##### site.js - 网站的一些描述，不是很重要
8. #### windows - 页面窗体目录，原理：[https://uniapp.dcloud.io/tutorial/adapt.html](https://uniapp.dcloud.io/tutorial/adapt.html)
	- ##### leftWindow.vue - 左边窗体，用于后台菜单的显示以及一些公共方法的调用
	- ##### rightWindow.vue - 右边窗体，用于前台导航的显示
	- ##### topWindow.vue - 顶部窗体，用于后台顶部导航的显示
9. #### App.vue - uni-app的主组件，onLaunch中写了一些初始化方法，style 里引入了一些公共样式
10. #### main.js - uni-app 的入口文件，主要作用是初始化vue实例、定义全局组件、使用需要的插件如 pinia
11. #### pages.json - 决定页面文件的路径、窗口样式
	- ##### pages 中定义前台页面路径
	- ##### subPackages 中定义后台台页面路径
	- ##### subPackages、topWindow、leftWindow 这三个只用于后台管理，如果你想分离前后端页面，缩小项目体积，可以把他们分出去
12. #### package.json - 这个不用说了
13. #### vite.config.js - vite 的配置文件
  - ##### 注意看 AutoImport 我把 vue 和一些常用的方法做了自动导入，你不需要在每个页面 `import { ref, watch } from 'vue'` 就可以直接使用这些方法，同理，你也可以在这里加上其他的方法

### 组件

1. #### call、vue、router、toast 用 vite 插件自动引入了，不需要再每个组件下 import
2. #### elementUI地址：[elementUI](https://element-plus.org/zh-CN/component/button.html)

### 使用 icon

#### 在 [https://www.xicons.org/#/](https://www.xicons.org/#/) 的 fa 目录中找到合适的 icon
```js 
import { Icon } from '@vicons/utils'
import { Apple } from '@vicons/fa'
```
```html
<Icon :size="16"><Apple /></Icon>
```


### 申明

首先感谢原作者开源这么好用的[博客程序](https://ext.dcloud.net.cn/plugin?id=7683)。

这款是基于他的博客程序二次开发，修复了一些BUG，修改了一些UI，并新增了一些页面和功能。

有使用问题 联系我QQ：964279742