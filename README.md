# Chinesejs

![https://github.com/tianluanchen/Chinesejs/blob/main/LICENSE](https://img.shields.io/github/license/tianluanchen/Chinesejs?style=flat-square)

简单的网页繁简体转换工具，通过TypeScript编写，具有详细的声明文档。

## 介绍

简单的网页繁简体转换工具，提供TypeScript和JavaScript的包，也可以直接引用到浏览器中，支持es模块使用。

[在线演示](https://tianluanchen.github.io/Chinesejs/)

## 使用

```javascript
// commonjs 使用
const { translate, Character } = require('./lib/Chinese');
const { result, count } = translate('一些要转换的文本', Character.Traditional);
console.log(
    `转换结果：${result};转换字符数：${count}`
);

```
```html
<!-- 浏览器中使用 -->
<!-- es6模块使用 -->
<script type="module">
    import { autoTranslate } from './dist/Chinesejs.esm.js';
    autoTranslate().then((result)=>{
        console.log("自动翻译为：",result.current)
    })
</script>
<!-- 引入使用 -->
<script src="./dist/Chinesejs.min.js"></script>
<script>
    // 翻译document节点 为繁体
    Clang.translateDOM(document,Clanng.Character.Traditional).then((result)=>{
        console.log('受影响的节点',result.nodeCount,'更改的字符数',result.charCount)
    })
</script>
```
```typescript
// 核心API
// 繁简体的枚举，用作其它函数的翻译字符参数
declare enum Character {
    Simple = 0,
    Traditional = 1
}
// 直接翻译文本至指定字符返回obj
declare function translate(words: string, target: Character): TranslateResult;

// 翻译文本至指定字符返回promise
declare function transTo(words: string, target: Character): Promise<TranslateResult>;

// 翻译dom返回promise
declare function translateDOM(dom: Node, target: Character): Promise<TranslateDOMRecord>;

// 还原dom返回promise
declare function restoreDOM(dom?: Node): Promise<number>;

// 自动翻译指定DOM，默认整个网页，至浏览器环境，output代表是否输出耗时统计
export declare function autoTranslate(dom?: Node, output?: boolean): Promise<AutoTransRecord>;
// 启用右下方的小按钮控制
declare function enableLittleMenu({ leftTime, text, translate, target, customStyle, customHideStyle, callback }: {
    leftTime: number; // 停留时间
    text: string; // 按钮初始显示的内容 "auto" "繁","简","原"
    translate: string;// 按钮出现前进行翻译 "auto" "繁","简","原"
    target: Node; // 目标
    customStyle: string; // 自定义div按钮的样式
    customHideStyle: string; // 自定义按钮隐藏的样式
    callback: Function; // 按钮被点击后执行翻译的回调 回调参数为 Object { current,nodeCount,charCount }
}): void;

// 所有API
export { translateDOM, restoreDOM, translate, transTo, Character, SIMPLE, TRADITIONAL, autoTranslate, enableLittleMenu };
```

## License

The GPL-3.0 License.
