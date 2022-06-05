"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enableLittleMenu = exports.autoTranslate = exports.TRADITIONAL = exports.SIMPLE = exports.Character = exports.transTo = exports.translate = exports.restoreDOM = exports.translateDOM = void 0;
/*
 * @Author       :  Ayouth
 * @Date         :  2022-03-11 GMT+0800
 * @LastEditTime :  2022-06-05 GMT+0800
 * @FilePath     :  Chinese.ts
 * @Description  :  繁简体相互转换组件库
 * Copyright (c) 2022 by Ayouth, All Rights Reserved.
 * GitHub   https://github.com/tianluanchen/Chinesejs
 */
const env_check_1 = require("./env-check");
Object.defineProperty(exports, "SIMPLE", { enumerable: true, get: function () { return env_check_1.SIMPLE; } });
Object.defineProperty(exports, "TRADITIONAL", { enumerable: true, get: function () { return env_check_1.TRADITIONAL; } });
const dom_translate_1 = require("./dom-translate");
Object.defineProperty(exports, "translateDOM", { enumerable: true, get: function () { return dom_translate_1.translateDOM; } });
Object.defineProperty(exports, "restoreDOM", { enumerable: true, get: function () { return dom_translate_1.restoreDOM; } });
const translate_1 = require("./translate");
Object.defineProperty(exports, "Character", { enumerable: true, get: function () { return translate_1.Character; } });
Object.defineProperty(exports, "transTo", { enumerable: true, get: function () { return translate_1.transTo; } });
Object.defineProperty(exports, "translate", { enumerable: true, get: function () { return translate_1.translate; } });
const widget_1 = require("./widget");
Object.defineProperty(exports, "autoTranslate", { enumerable: true, get: function () { return widget_1.autoTranslate; } });
Object.defineProperty(exports, "enableLittleMenu", { enumerable: true, get: function () { return widget_1.enableLittleMenu; } });
