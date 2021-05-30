import {question} from 'readline-sync';

export type Validator = (value: any) => boolean;

export const inputNumber = (text?: string, isValid?: Validator) => {

    while(true) {
        const number = Number(question(text));
        if(!isNaN(number) && (isValid ? isValid(number) : true)) {
            return number;
        }

        console.log('Ошибка, попробуйте снова');
    }
}


export const inputString = (text?: string, isValid?: Validator) => {

    while(true) {
        const inputString = question(text);

        if(isValid ? isValid(inputString) : true ) {
            return inputString;
        }
        console.log('Ошибка, попробуйте снова');
    }

}
