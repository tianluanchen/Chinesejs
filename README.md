# Chinesejs

![https://github.com/tianluanchen/Chinesejs/blob/main/LICENSE](https://img.shields.io/github/license/tianluanchen/Chinesejs?style=flat-square)

网页繁简体转换JavaScript小组件

## 介绍

一个网页繁简体转换JavaScript小组件
[在线演示](https://tianluanchen.github.io/Chinesejs/)

## 使用

```javascript
//导入Chinese.js后

//直接转换
//转繁体
console.log(Chinesejs.toTraditional('Ayouth的繁简体转换JS小组件'));
//Ayouth的繁簡體轉換JS小組件

//可用别名 Clang
console.log(Clang.toTraditional('Ayouth的繁简体转换JS小组件'));
//Ayouth的繁簡體轉換JS小組件

//转简体 返回Object含有转换的字符数
console.log(Chinesejs.toSimple('Ayouth的繁簡體轉換JS小組件',true));
//Object { result: "Ayouth的繁简体转换JS小组件", count: 5 }

//Promise
Chinesejs.toTraditional('Ayouth的繁简体转换JS小组件',false,true).then(function(r){
    console.log(r); 
    //Ayouth的繁簡體轉換JS小組件
});

/*
    网页转换
    参数可以为空，则翻译整个网页
    参数类型要求为 [Node.DOCUMENT_NODE, Node.DOCUMENT_FRAGMENT_NODE, Node.TEXT_NODE,Node.ELEMENT_NODE]
*/

//DOM转简体  返回修改的字符数和获取的TextNode数
Chinesejs.transDOMToSimple().then(function(r){
    console.log(r) 
    // Object { nodeCount: ... , charCount: ... }
})

//DOM转繁体 有参数 返回修改的字符数和获取的TextNode数
Chinesejs.transDOMToTraditional(document.querySelector('body')).then(function(r){
    console.log(r) 
    // Object { nodeCount: ... , charCount: ... }
})

//DOM转简体  返回修改的字符数和获取的TextNode数
Chinesejs.transDOMToSimple().then(function(r){
    console.log(r) 
    // Object { nodeCount: ... , charCount: ... }
})

//恢复所有被翻译的DOM  返回成功恢复的节点数量
Chinesejs.restore().then(function(r){
    console.log(r) 
    // Object { nodeCount: ...} 
});

//自动转换至浏览器所属的语言 自动打印出执行时间 返回的current属性值为simple或traditional表示转换后的格式
Chinesejs.autoTranslate().then(function(r){
    console.log(r) 
    // Object { nodeCount: ... , charCount: ... , current: ...}
})
```

## License

The GPL-3.0 License.
