//Metodos obligatorios para: 
// -Agregar el elemento HTML como primer elemento hijo de otro elemento
// -Agregar el elemento HTML como último elemento hijo de otro elemento
// -Agregar como último elemento del body
// -Establecer nueva propiedad del atributo style para un elemento existente en el DOM

export class GenerateElement{
    constructor(tag){
        this.tag = tag;
        this.id = this.generateId();
        this.element = this.createElement();
        this.HTML_content = '';
        this.innerText = '';
        this.styles = {};
    }

    createElement(){
        const element = document.createElement(this.tag);
        element.id = this.id;
        return element;
    }

    generateId(){
        const elementList = document.querySelectorAll(this.tag);
        const formattedTag = this.tag.toUpperCase();
        const tagCount = elementList.length;
        const formattedCount = tagCount.toLocaleString(undefined, { minimumIntegerDigits: 3, useGrouping: false });
       
        return `${formattedTag}_${formattedCount}`;
    }
    
    setInnerHTML(html) {
        this.htmlContent = html;
        this.element.innerHTML = html;
    }

    setInnerText(text) {
        this.innerText = text;
        this.element.innerText = text;
    }

    setStyleProperty(property, value) {
        this.styles[property] = value;
        this.element.style[property] = value;
    }

    getHTMLContent() {
        return this.htmlContent;
    }

    getInnerText() {
        return this.innerText;
    }

    getStyles() {
        return this.styles;
    }
}