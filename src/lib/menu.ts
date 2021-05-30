import {inputNumber} from './input';

export type MenuHandler<ReturnValue> = () => ReturnValue;

export type Menu<ReturnValue> = Record<string, MenuHandler<ReturnValue>>;

export const menu = <ReturnValue>(handlers: Menu<ReturnValue>): ReturnValue => {
    const menuTexts = Object.keys(handlers);

    const text = 'ВЫБЕРИТЕ ДЕЙСТВИЕ НАЖАВ СООТВЕТСТВУЮЩУЮ ЦИФРУ\n' + 
        menuTexts
            .map((text, index) => `${index + 1} - ${text}`)
            .join('\n') +
        '\n';

    const actionNumber = inputNumber(
        text, 
        (value) => (
            Number.isInteger(value) && 
            value >= 1 && 
            value <= menuTexts.length
        )
    );

    return handlers[
        menuTexts[actionNumber - 1]
    ]();
}
