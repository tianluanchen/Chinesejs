"use strict";
/*
 * @Author       :  Ayouth
 * @Date         :  2022-06-04 GMT+0800
 * @LastEditTime :  2022-06-05 GMT+0800
 * @FilePath     :  env-check.ts
 * @Description  :  获取浏览器环境使用的繁简体状况
 * Copyright (c) 2022 by Ayouth, All Rights Reserved.
 */
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SIMPLE = exports.TRADITIONAL = void 0;
/**
 * 浏览器环境是否是繁体中文
*/
const TRADITIONAL = ['zh-TW', 'zh-HK', 'zh-Hant', 'zh-MO'].includes((_b = (_a = (globalThis || window)) === null || _a === void 0 ? void 0 : _a.navigator) === null || _b === void 0 ? void 0 : _b.language);
exports.TRADITIONAL = TRADITIONAL;
/**
 * 浏览器环境是否是简体中文
*/
const SIMPLE = ['zh-CN', 'zh-Hans', 'zh-SG', 'zh-MY'].includes((_d = (_c = (globalThis || window)) === null || _c === void 0 ? void 0 : _c.navigator) === null || _d === void 0 ? void 0 : _d.language);
exports.SIMPLE = SIMPLE;
