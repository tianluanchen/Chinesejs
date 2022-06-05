"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enableLittleMenu = exports.autoTranslate = void 0;
const translate_1 = require("./translate");
const dom_translate_1 = require("./dom-translate");
const env_check_1 = require("./env-check");
/**
 * @description: 根据环境自动翻译网页
 * @param {boolean} output 是否输出执行时长
 */
function autoTranslate(output = false) {
    if (output) {
        console.time('auto-translate');
    }
    return new Promise(function (resolve, reject) {
        let current = env_check_1.SIMPLE ? "simple" : env_check_1.TRADITIONAL ? "traditional" : "";
        let target = env_check_1.SIMPLE ? translate_1.Character.Simple : env_check_1.TRADITIONAL ? translate_1.Character.Traditional : undefined;
        if (current != "" && target != undefined) {
            (0, dom_translate_1.translateDOM)(document, target).then((result) => {
                if (output) {
                    console.timeEnd('auto-translate');
                }
                resolve(Object.assign(result, { current }));
            });
        }
    });
}
exports.autoTranslate = autoTranslate;
function enableLittleMenu({ leftTime = 3000, text = "简", translate = undefined, target = document, customStyle = "", customHideStyle = "", callback = undefined }) {
    if (text == "auto") {
        text = env_check_1.SIMPLE ? "简" : env_check_1.TRADITIONAL ? "繁" : "原";
    }
    else if (text == undefined) {
        text = "简";
    }
    let targetObj = {
        "简": translate_1.Character.Simple,
        "繁": translate_1.Character.Traditional,
    };
    const textArr = ["简", "繁", "原"];
    let index;
    if (translate != undefined) {
        if (translate == 'auto') {
            translate = env_check_1.SIMPLE ? "简" : env_check_1.TRADITIONAL ? "繁" : "原";
        }
        else {
            if (translate != "原") {
                (0, dom_translate_1.translateDOM)(target, targetObj[translate]).then((result) => {
                    callback ? callback(result) : false;
                });
            }
        }
        text = translate;
    }
    index = textArr.indexOf(text);
    let style = ".clang-menu-container {z-index:2022; width: 48px; height: 48px; box-sizing: border-box; border-radius: 50%; background-image: linear-gradient(120deg, #2dc6d1 0%, #5386ce 100%); cursor: pointer; position: fixed; right: 32px; bottom: 32px; display: flex; align-items: center; justify-content: center; font-size: 17px; color: rgb(240, 240, 240); box-shadow: 0 0 4px 0 rgba(102, 146, 241, 0.3); user-select: none; transition: 0.25s ease-in-out; } .clang-menu-hide { right: -32px; }";
    let tag = document.createElement('style');
    tag.innerHTML = style;
    document.head.appendChild(tag);
    let btn = document.createElement('div');
    btn.className = "clang-menu-container";
    btn.setAttribute('style', customStyle);
    btn.textContent = text;
    let timeoutID;
    /**
     * @description: 用户点击时执行翻译
     */
    function trans() {
        if (index === 2) {
            (0, dom_translate_1.restoreDOM)(target);
        }
        else {
            (0, dom_translate_1.translateDOM)(target, targetObj[textArr[index]]).then((result) => {
                callback && callback(result);
            });
        }
        index = (++index) % textArr.length;
        btn.textContent = textArr[index];
    }
    /**
     * @description: 显示按钮
     */
    function show() {
        btn.classList.remove('clang-menu-hide');
        btn.setAttribute('style', customStyle);
        timeoutID && clearTimeout(timeoutID);
    }
    /**
     * @description: 点击事件
     */
    function click() {
        trans();
        timeoutID && clearTimeout(timeoutID);
    }
    /**
     * @description: 触摸事件
     */
    function touch() {
        if (btn.className.indexOf('clang-menu-hide') > -1) {
            show();
        }
        else {
            click();
        }
        autoHide();
    }
    /**
     * @description: 执行自动隐藏
     */
    function autoHide() {
        timeoutID = setTimeout(() => {
            btn.classList.toggle('clang-menu-hide', true);
            btn.setAttribute('style', customHideStyle);
        }, leftTime);
    }
    // 手机端
    if (/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(navigator.userAgent)) {
        btn.addEventListener('touchstart', touch);
    }
    else {
        // pc端 
        btn.addEventListener('click', click);
        btn.addEventListener('mouseenter', show);
        btn.addEventListener('mouseleave', autoHide);
    }
    document.body.appendChild(btn);
    autoHide();
}
exports.enableLittleMenu = enableLittleMenu;
