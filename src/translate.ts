/*
 * @Author       :  Ayouth
 * @Date         :  2022-06-04 GMT+0800
 * @LastEditTime :  2022-06-05 GMT+0800
 * @FilePath     :  translate.ts
 * @Description  :  字符繁简体翻译的封装
 * Copyright (c) 2022 by Ayouth, All Rights Reserved. 
 */
import { simpleChinese, traditionalChinese } from "./chars";

/**
 * @description: 字符繁简体枚举
 */
enum Character {
    Simple,
    Traditional
}

/**
 * 翻译结果
*/
interface TranslateResult {
    /**
     * 最终转换结果
     */
    result: string,
    /**
     * 有效转换个数
    */
    count: number
}

/**
 * @description: 直接将字转换为简体或繁体
 * @param {string} words 准备翻译的语句
 * @param {Character} target 翻译的目标字符
 */
function translate(words: string, target: Character): TranslateResult {
    let result = '';
    let count = 0;
    let fromChars: string;
    let toChars: string;
    if (target == Character.Simple) {
        fromChars = traditionalChinese;
        toChars = simpleChinese;
    } else {
        fromChars = simpleChinese;
        toChars = traditionalChinese;
    }
    for (let word of words) {
        let index = fromChars.indexOf(word);
        if (index > -1) {
            result += toChars[index];
            count++;
        } else {
            result += word;
        }
    }
    return { result, count };
}

/**
 * @description: 字符翻译的封装，加入Promise
 * @param {String} words 将要翻译的字符
 * @param {Character} target 翻译的目标
 */
function transTo(words: string, target: Character): Promise<TranslateResult> {
    return new Promise(function (resolve, reject) {
        resolve(translate(words, target));
    });
}

export {
    Character,
    translate,
    transTo,
    TranslateResult
}