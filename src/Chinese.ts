/*
 * @Author       :  Ayouth
 * @Date         :  2022-03-11 GMT+0800
 * @LastEditTime :  2022-06-05 GMT+0800
 * @FilePath     :  Chinese.ts
 * @Description  :  繁简体相互转换组件库
 * Copyright (c) 2022 by Ayouth, All Rights Reserved. 
 * GitHub   https://github.com/tianluanchen/Chinesejs
 */
import { SIMPLE, TRADITIONAL } from "./env-check";
import { translateDOM, restoreDOM } from "./dom-translate";
import { Character, transTo, translate } from './translate';
import { autoTranslate, enableLittleMenu } from "./widget";
export {
    translateDOM,
    restoreDOM,
    translate,
    transTo,
    Character,
    SIMPLE,
    TRADITIONAL,
    autoTranslate,
    enableLittleMenu
}