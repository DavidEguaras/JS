import GenerateElement from './generateElement.js';


export class TextElement extends GenerateElement{
    constructor (tag){
        super(tag);
    }

    changeTextColor(color){
        this.setStyleProperty('color', color);
    }
}   