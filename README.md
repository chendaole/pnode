# 使用vscode调试es6+node程序

### 目标

使用vscode调试es6+node程序

### 案例

当在浏览器中访问 `http://localhost:7001/` 时，输出 CNode(https://cnodejs.org/ ) 社区首页的所有帖子标题和每个帖子的第一条评论内容，以 json 的形式。

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

### es6配置

根目录下生成 `.babelrc` 文件