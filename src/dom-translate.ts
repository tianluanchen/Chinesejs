/*
 * @Author       :  Ayouth
 * @Date         :  2022-06-04 GMT+0800
 * @LastEditTime :  2022-06-05 GMT+0800
 * @FilePath     :  dom-translate.ts
 * @Description  :  dom节点翻译的封装
 * Copyright (c) 2022 by Ayouth, All Rights Reserved. 
 */
import { translate, Character } from "./translate";

/**
 * @description: 备份节点原始内容
 * @param {Node} node dom节点
 * @param {string} value 备份的内容
 */
function backup(node: Node, value: string) {
    if ('ChineseBackup' in node) {
        return;
    }
    (node as any).ChineseBackup = value;
}

/**
 * @description: 恢复节点原始内容
 * @param {Node} node 节点
 */
function restore(node: Node): boolean {
    if ('ChineseBackup' in node == false) {
        return false;
    }
    if (['input', 'textarea'].some((tagName) => { return node.nodeName && node.nodeName.toLowerCase() === tagName })) {
        (node as any).value = (node as any).ChineseBackup;
    } else if (node.nodeType === Node.TEXT_NODE) {
        (node as Text).data = (node as any).ChineseBackup;
    } else {
        return false;
    }
    return true;
}
/**
 * @description: 恢复dom
 * @param {Node} dom dom节点
 */
function restoreDOM(dom: Node = document): Promise<number> {
    return new Promise(function (resolve, reject) {
        let nodeArr: Node[] = [...dom.childNodes];
        nodeArr.length == 0 && nodeArr.push(dom);
        let count = 0;
        while (nodeArr.length > 0) {
            let node = nodeArr.shift()!;
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

/**
 * 翻译节点后的记录
*/
interface TranslateDOMRecord {
    /**
     * 翻译的字符数目
     */
    charCount: number,
    /**
     * 翻译的节点数量
    */
    nodeCount: number
}

/**
 * @description: 翻译DOM节点
 * @param {Node} dom 节点
 * @param {Character} target 目标字符
 */
function translateDOM(dom: Node, target: Character): Promise<TranslateDOMRecord> {
    return new Promise(function (resolve, reject) {
        let nodeArr: Node[] = [...dom.childNodes];
        nodeArr.length == 0 && nodeArr.push(dom);
        let nodeCount = 0;
        let charCount = 0;
        while (nodeArr.length > 0) {
            let node = nodeArr.shift()!;
            if (['input', 'textarea'].some((tagName) => { return node.nodeName && node.nodeName.toLowerCase() === tagName })) {
                const result = translate((node as HTMLInputElement).value, target);
                if (result.count > 0) {
                    backup(node, (node as HTMLInputElement).value);
                    (node as HTMLInputElement).value = result.result;
                    nodeCount++;
                    charCount += result.count;
                }
            }
            else if (node.nodeType === Node.TEXT_NODE) {
                const result = translate((node as Text).data, target);
                if (result.count > 0) {
                    backup(node, (node as Text).data);
                    (node as Text).data = result.result;
                    nodeCount++;
                    charCount += result.count;
                }
            } else {
                node.childNodes.forEach(function (ele) {
                    nodeArr.unshift(ele);
                })
            }
        }
        resolve({ nodeCount, charCount });
    });
}

export {
    translateDOM,
    restoreDOM,
    Character,
    TranslateDOMRecord
}