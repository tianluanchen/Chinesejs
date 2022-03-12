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
Chinesejs.toTraditional('谁谁谁').then(function(r){
    console.log(r); //誰誰誰
});
//转简体
Chinesejs.toSimple('誰誰誰').then(function(r){
    console.log(r); //谁谁谁
});
/*
    网页转换
    参数可以为空，则翻译整个网页
    参数类型可选为 [Node.DOCUMENT_NODE, Node.DOCUMENT_FRAGMENT_NODE, Node.TEXT_NODE,Node.ELEMENT_NODE]
*/
//转简体 返回修改的字符数和获取的TextNode数
Chinesejs.transDomToSimple().then(function(r){
    console.log(r) 
    // Object { nodesCount: ... , charsCount: ... }
})
//转繁体 返回修改的字符数和获取的TextNode数
Chinesejs.transDomToTraditional().then(function(r){
    console.log(r) 
    // Object { nodesCount: ... , charsCount: ... }
})
//自动转换至浏览器所属的语言 自动打印出执行时间
Chinesejs.autoTranslate().then(function(r){
    console.log(r) 
    // Object { nodesCount: ... , charsCount: ... }
})
```
