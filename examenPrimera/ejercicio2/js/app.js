// Importar las clases
import { GenerateElement, TextElement, ButtonElement } from './clases.js';

// Crear instancia de GenerateElement para un párrafo
const paragraph = new GenerateElement('p');
paragraph.setInnerText('Este es un párrafo generado dinámicamente.');
paragraph.setStyleProperty('color', 'blue');
paragraph.addToEndOfParent(document.body);

// Crear instancia de TextElement para un encabezado h1
const heading = new TextElement('h1');
heading.setInnerText('¡Hola, mundo!');
heading.changeTextColor('green');
heading.addToStartOfParent(document.body);

// Crear instancia de ButtonElement para un botón
const button = new ButtonElement('button');
button.setInnerText('Haz clic aquí');
button.addToEndOfParent(document.body);

// Cambiar el texto del botón después de 3 segundos
setTimeout(() => {
    button.changeButtonText('¡Haz clic aquí ahora!');
}, 3000);
