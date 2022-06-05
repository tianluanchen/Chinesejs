import { TranslateDOMRecord } from "./dom-translate";
/**
 * @description: 自动翻译resolve的格式
 */
interface AutoTransRecord extends TranslateDOMRecord {
    /**
     * @description: 当前繁简体
     */
    current: string;
}
/**
 * @description: 根据环境自动翻译网页
 * @param {boolean} output 是否输出执行时长
 */
export declare function autoTranslate(output?: boolean): Promise<AutoTransRecord>;
export declare function enableLittleMenu({ leftTime, text, translate, target, customStyle, customHideStyle, callback }: {
    leftTime: number;
    text: string;
    translate: string;
    target: Node;
    customStyle: string;
    customHideStyle: string;
    callback: Function;
}): void;
export {};
