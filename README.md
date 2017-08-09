# 使用vscode调试es6+node程序

### 目标

使用vscode调试es6+node程序

### 案例

使用 `express` 、`superagent` 和 `cheerio` 写一个爬虫的小案例：当在浏览器中访问 `http://localhost:7001/` 时，输出 CNode(https://cnodejs.org/ ) 社区首页的所有帖子标题和每个帖子的第一条评论内容，以 json 的形式。

输出示例：

```js
[
  {
    "title": "置顶饿了么大前端Node.js进阶教程",
	"comment1": "赞"
  },
  {
    "title": "置顶北京7月29日NodeParty活动总结",
	"comment1": "狼叔辛苦"
  }
]

```

### 源码
 源码地址：[点我查看](https://github.com/su-rm-rf/pnode/tree/cnode)
 下载源码：
```js
	git clone https://github.com/su-rm-rf/pnode
	cd pnode
	git checkout cnode
	npm i	
	
```

## 项目结构

```js
├─	.vscode
│		launch.json
├─	src
│		server.js
│	.babelrc
│	Makefile
│	package.json

```

### es6配置

1.安装 `babel` 依赖：
```js
	npm i -g babel-core
	npm i --save babel-preset-env
	
```

2.根目录下新增 `.babelrc` 文件，内容如下：
```js
{
  "presets": ["env"]
}

```

### debug配置

1.安装 `nodemon`：
```js
	npm i -g nodemon
	
```

2.编辑 `.vscode/launch.json`如下：
```js
"configurations": [
  {
  "type": "node",
  "request": "attach",
  "name": "Attach",
  "port": 9229
  }
]

3.编辑 `.babelrc` 如下：
```js
{
  "presets": ["env"],
  "retainLines": true
}

```
### 安装其他依赖
```js
	npm i --save express superagent cheerio

```

### Makefile配置
```js
nm:
	nodemon --inspect --watch src --exec babel-node --presets env src/server.js
	
```

如果不使用 `Makefile` 也可以直接配置 `npm script`
```js
	"nm": "nodemon --inspect --watch src --exec babel-node --presets env src/server.js"
	
```


### debug截图

1.执行 `make nm` 或 `npm run nm`
2.启动 `vscode` 调试

![image.png](//dn-cnode.qbox.me/FpSIYTqspVmudUfFor9xVxKBH-Bh)