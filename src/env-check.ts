/*
 * @Author       :  Ayouth
 * @Date         :  2022-06-04 GMT+0800
 * @LastEditTime :  2022-06-05 GMT+0800
 * @FilePath     :  env-check.ts
 * @Description  :  获取浏览器环境使用的繁简体状况
 * Copyright (c) 2022 by Ayouth, All Rights Reserved. 
 */

/**
 * 浏览器环境是否是繁体中文
*/
const TRADITIONAL: boolean = ['zh-TW', 'zh-HK', 'zh-Hant', 'zh-MO'].includes((globalThis || window)?.navigator?.language);

/**
 * 浏览器环境是否是简体中文
*/
const SIMPLE: boolean = ['zh-CN', 'zh-Hans', 'zh-SG', 'zh-MY'].includes((globalThis || window)?.navigator?.language);
export {
    TRADITIONAL,
    SIMPLE
}