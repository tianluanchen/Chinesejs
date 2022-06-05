"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transTo = exports.translate = exports.Character = void 0;
/*
 * @Author       :  Ayouth
 * @Date         :  2022-06-04 GMT+0800
 * @LastEditTime :  2022-06-05 GMT+0800
 * @FilePath     :  translate.ts
 * @Description  :  字符繁简体翻译的封装
 * Copyright (c) 2022 by Ayouth, All Rights Reserved.
 */
const chars_1 = require("./chars");
/**
 * @description: 字符繁简体枚举
 */
var Character;
(function (Character) {
    Character[Character["Simple"] = 0] = "Simple";
    Character[Character["Traditional"] = 1] = "Traditional";
})(Character || (Character = {}));
exports.Character = Character;
/**
 * @description: 直接将字转换为简体或繁体
 * @param {string} words 准备翻译的语句
 * @param {Character} target 翻译的目标字符
 */
function translate(words, target) {
    let result = '';
    let count = 0;
    let fromChars;
    let toChars;
    if (target == Character.Simple) {
        fromChars = chars_1.traditionalChinese;
        toChars = chars_1.simpleChinese;
    }
    else {
        fromChars = chars_1.simpleChinese;
        toChars = chars_1.traditionalChinese;
    }
    for (let word of words) {
        let index = fromChars.indexOf(word);
        if (index > -1) {
            result += toChars[index];
            count++;
        }
        else {
            result += word;
        }
    }
    return { result, count };
}
exports.translate = translate;
/**
 * @description: 字符翻译的封装，加入Promise
 * @param {String} words 将要翻译的字符
 * @param {Character} target 翻译的目标
 */
function transTo(words, target) {
    return new Promise(function (resolve, reject) {
        resolve(translate(words, target));
    });
}
exports.transTo = transTo;
