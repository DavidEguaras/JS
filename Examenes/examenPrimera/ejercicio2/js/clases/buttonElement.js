import { GenerateElement } from "./generateElement.js";

export class ButtonElement extends GenerateElement {
    constructor(tag) {
        super(tag);
    }

    // Método para cambiar el texto del botón
    changeButtonText(newText) {
        this.element.innerText = newText;
    }
}
