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

//转简体 参数2为true 返回Object含有转换的字符数
console.log(Clang.toSimple('Ayouth的繁簡體轉換JS小組件',true));
//Object { result: "Ayouth的繁简体转换JS小组件", count: 5 }

//Promise 参数3为true
Clang.toTraditional('Ayouth的繁简体转换JS小组件',false,true).then(function(r){
    console.log(r); 
    //Ayouth的繁簡體轉換JS小組件
});

/*
    网页转换
    参数可以为空，则翻译整个网页
    参数类型要求为 [Node.DOCUMENT_NODE, Node.DOCUMENT_FRAGMENT_NODE, Node.TEXT_NODE,Node.ELEMENT_NODE]
*/

//DOM转简体  返回修改的字符数和获取的TextNode数
Clang.transDOMToSimple().then(function(r){
    console.log(r) 
    // Object { nodeCount: ... , charCount: ... }
})

//DOM转繁体 有参数 返回修改的字符数和获取的TextNode数
Clang.transDOMToTraditional(document.querySelector('body')).then(function(r){
    console.log(r) 
    // Object { nodeCount: ... , charCount: ... }
})

//DOM转简体  返回修改的字符数和获取的TextNode数
Clang.transDOMToSimple().then(function(r){
    console.log(r) 
    // Object { nodeCount: ... , charCount: ... }
})

//恢复所有被翻译的DOM  返回成功恢复的节点数量
Clang.restore().then(function(r){
    console.log(r) 
    // Object { nodeCount: ...} 
});

//自动转换至浏览器所属的语言 自动打印出执行时间 返回的current属性值为simple或traditional表示转换后的格式
Clang.autoTranslate().then(function(r){
    console.log(r) 
    // Object { nodeCount: ... , charCount: ... , current: ...}
})

//自带的widget 
Clang.showWidget({
    leftTime: 3200,//无操作自动hide的时间
    text: "简",//"简" "繁" "原" "auto" 初始按钮选项 auto代表自动根据浏览器语言选择
    translate: null,//"简" "繁" "auto" 按钮出现前翻译 未设置不翻译 auto代表自动根据浏览器语言翻译 
    target: document.documentElement,// 目标节点 默认为整个网页
    customStyle: "",//自定义仿按钮的DIV css样式
    customHideStyle: "",//自定义隐藏的样式
});
```

## License

The GPL-3.0 License.
