import generateElement from './generateElement.js';


class textElement extends generateElement{
    constructor (tag){
        super(tag);
    }

    changeTextColor(color){
        this.setStyleProperty('color', color);
    }
}   