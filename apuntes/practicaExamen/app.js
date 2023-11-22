//array compuesta por los elementos hijos del elemento "myDiv", en este caso el array es un HTML collection
const collection = document.getElementById("myDIV").children;

//la longitud se podria sacar a traves de la variable pero en el caso de solo querer su longitud, se haria asi
let collectionLength = document.getElementById("myDIV").children.length;

//primer elemento del array, en este caso, un parrafo, al que le asiganamos fondo rojo
collection[1].style.backgroundColor = "red";

//Hacemos que la coleccion sea un array para poder tratarlo como tal
let arrayCollection = Array.from(collection);

//imprimimos en consola el array de elementos, para comprobar su contenido
console.log(collection);


//-------------------
//lo mismo pero el array en vez de ser de tipo HTMLcollection es un nodeList
const elementos = document.getElementById("myDIV").childNodes;
//la longitud se podria sacar a traves de la variable pero en el caso de solo querer su longitud, se haria asi
let elementosLength = document.getElementById("myDIV").childNodes.length;






// Diferencias entre uno y otro (w3schools)
// The Difference Between an HTMLCollection and a NodeList
// A NodeList and an HTMLcollection is very much the same thing.

// Both are array-like collections (lists) of nodes (elements) extracted from a document. The nodes can be accessed by index numbers. The index starts at 0.

// Both have a length property that returns the number of elements in the list (collection).

// An HTMLCollection is a collection of document elements.

// A NodeList is a collection of document nodes (element nodes, attribute nodes, and text nodes).

// HTMLCollection items can be accessed by their name, id, or index number.

// NodeList items can only be accessed by their index number.

// An HTMLCollection is always a live collection. Example: If you add a <li> element to a list in the DOM, the list in the HTMLCollection will also change.

// A NodeList is most often a static collection. Example: If you add a <li> element to a list in the DOM, the list in NodeList will not change.

// The getElementsByClassName() and getElementsByTagName() methods return a live HTMLCollection.

// The querySelectorAll() method returns a static NodeList.

// The childNodes property returns a live NodeList.