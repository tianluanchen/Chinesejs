import { Character } from "./translate";
/**
 * @description: 恢复dom
 * @param {Node} dom dom节点
 */
declare function restoreDOM(dom?: Node): Promise<number>;
/**
 * 翻译节点后的记录
*/
interface TranslateDOMRecord {
    /**
     * 翻译的字符数目
     */
    charCount: number;
    /**
     * 翻译的节点数量
    */
    nodeCount: number;
}
/**
 * @description: 翻译DOM节点
 * @param {Node} dom 节点
 * @param {Character} target 目标字符
 */
declare function translateDOM(dom: Node, target: Character): Promise<TranslateDOMRecord>;
export { translateDOM, restoreDOM, Character, TranslateDOMRecord };
