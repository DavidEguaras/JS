
import { Bola } from "./bola.js";

const bola1 = new Bola(85, 100, 100, 'red', 'linear-gradient(to bottom, #2196f3, #009688)');
const bola3 = new Bola(55, 500, 300, '#f09688');
const bola4 = new Bola(60, 700, 400, 'green');


Bola.arrayBolas.forEach(bola => bola.verBola());

