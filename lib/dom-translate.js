"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = exports.restoreDOM = exports.translateDOM = void 0;
/*
 * @Author       :  Ayouth
 * @Date         :  2022-06-04 GMT+0800
 * @LastEditTime :  2022-06-05 GMT+0800
 * @FilePath     :  dom-translate.ts
 * @Description  :  dom节点翻译的封装
 * Copyright (c) 2022 by Ayouth, All Rights Reserved.
 */
const translate_1 = require("./translate");
Object.defineProperty(exports, "Character", { enumerable: true, get: function () { return translate_1.Character; } });
/**
 * @description: 备份节点原始内容
 * @param {Node} node dom节点
 * @param {string} value 备份的内容
 */
function backup(node, value) {
    if ('ChineseBackup' in node) {
        return;
    }
    node.ChineseBackup = value;
}
/**
 * @description: 恢复节点原始内容
 * @param {Node} node 节点
 */
function restore(node) {
    if ('ChineseBackup' in node == false) {
        return false;
    }
    if (['input', 'textarea'].some((tagName) => { return node.nodeName && node.nodeName.toLowerCase() === tagName; })) {
        node.value = node.ChineseBackup;
    }
    else if (node.nodeType === Node.TEXT_NODE) {
        node.data = node.ChineseBackup;
    }
    else {
        return false;
    }
    return true;
}
/**
 * @description: 恢复dom
 * @param {Node} dom dom节点
 */
function restoreDOM(dom = document) {
    return new Promise(function (resolve, reject) {
        let nodeArr = [...dom.childNodes];
        nodeArr.length == 0 && nodeArr.push(dom);
        let count = 0;
        while (nodeArr.length > 0) {
            let node = nodeArr.shift();
            if (restore(node)) {
                count++;
            }
            node.childNodes.forEach(function (ele) {
                nodeArr.unshift(ele);
            });
        }
        resolve(count);
    });
}
exports.restoreDOM = restoreDOM;
/**
 * @description: 翻译DOM节点
 * @param {Node} dom 节点
 * @param {Character} target 目标字符
 */
function translateDOM(dom, target) {
    return new Promise(function (resolve, reject) {
        let nodeArr = [...dom.childNodes];
        nodeArr.length == 0 && nodeArr.push(dom);
        let nodeCount = 0;
        let charCount = 0;
        while (nodeArr.length > 0) {
            let node = nodeArr.shift();
            if (['input', 'textarea'].some((tagName) => { return node.nodeName && node.nodeName.toLowerCase() === tagName; })) {
                const result = (0, translate_1.translate)(node.value, target);
                if (result.count > 0) {
                    backup(node, node.value);
                    node.value = result.result;
                    nodeCount++;
                    charCount += result.count;
                }
            }
            else if (node.nodeType === Node.TEXT_NODE) {
                const result = (0, translate_1.translate)(node.data, target);
                if (result.count > 0) {
                    backup(node, node.data);
                    node.data = result.result;
                    nodeCount++;
                    charCount += result.count;
                }
            }
            else {
                node.childNodes.forEach(function (ele) {
                    nodeArr.unshift(ele);
                });
            }
        }
        resolve({ nodeCount, charCount });
    });
}
exports.translateDOM = translateDOM;
