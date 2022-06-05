/**
 * @description: 字符繁简体枚举
 */
declare enum Character {
    Simple = 0,
    Traditional = 1
}
/**
 * 翻译结果
*/
interface TranslateResult {
    /**
     * 最终转换结果
     */
    result: string;
    /**
     * 有效转换个数
    */
    count: number;
}
/**
 * @description: 直接将字转换为简体或繁体
 * @param {string} words 准备翻译的语句
 * @param {Character} target 翻译的目标字符
 */
declare function translate(words: string, target: Character): TranslateResult;
/**
 * @description: 字符翻译的封装，加入Promise
 * @param {String} words 将要翻译的字符
 * @param {Character} target 翻译的目标
 */
declare function transTo(words: string, target: Character): Promise<TranslateResult>;
export { Character, translate, transTo, TranslateResult };
