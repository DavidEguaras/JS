// 1), 2) y 3)
// Diferentes elementos que usaremos
const body = document.body;
let bodyElements = Array.from(body.childNodes);

const divSuperior = document.createElement("div");
divSuperior.id = "divSuperior";
const divInferior = document.createElement("div");
divInferior.id = "divInferior";

const firstChild = document.body.firstChild;
const lastChild = document.body.lastChild;

// Metemos los divs en el body
// El superior antes del primer elemento y el inferior antes del ultimo (evitamos el enlace al script)
document.body.insertBefore(divSuperior, firstChild);
document.body.insertBefore(divInferior, lastChild);

// Iteramos a través de los elementos del body y los metemos en el div superior
bodyElements.forEach(element => {
    // Verificamos si el elemento no es un script
    if (element.nodeName.toLowerCase() !== 'script') {
        const clonedNode = element.cloneNode(true); // Clonamos el nodo para evitar moverlo
        divInferior.appendChild(clonedNode);
    }
});

// Ahora que hemos clonado todos los nodos que queremos agregar al divInferior, eliminamos los nodos originales del cuerpo
bodyElements.forEach(element => {
    // Verificamos si el elemento no es un script
    if (element.nodeName.toLowerCase() !== 'script') {
        body.removeChild(element);
    }
});

// 4) y 5)
const elementosDivInferior = Array.from(divInferior.childNodes);
const indexContainer = document.createElement('ul');
divSuperior.appendChild(indexContainer);

let currentSection = null;
elementosDivInferior.forEach(element => {
    if (element.nodeName.toLowerCase() === 'h1') {
        // Asignar un ID si el elemento no tiene uno
        if (!element.id) {
            element.id = 'h1_' + element.textContent.replace(/\s+/g, '-').toLowerCase();
        }
        currentSection = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.textContent = element.textContent;
        anchor.href = `#${element.id}`;
        currentSection.appendChild(anchor);
        indexContainer.appendChild(currentSection);
    } else if (element.nodeName.toLowerCase() === 'h2') {
        // Asignar un ID si el elemento no tiene uno
        if (!element.id) {
            element.id = 'h2_' + element.textContent.replace(/\s+/g, '-').toLowerCase();
        }
        const subSection = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.textContent = element.textContent;
        anchor.href = `#${element.id}`;
        subSection.appendChild(anchor);
        currentSection.appendChild(subSection);
    }
});
