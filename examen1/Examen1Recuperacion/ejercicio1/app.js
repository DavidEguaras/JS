const examenArticle = document.getElementById("examen");
const buttonExamen = document.createElement('button');
examenArticle.appendChild(buttonExamen);

//a)
function createTable (columns, rows){
    let thisTable = document.createElement('table');

    //loop que crea filas y columnas
    //este FOR itera y crea FILAS
    for(let i=0; i < rows; i++){
        let thisRow = document.createElement('tr');
        
        //este FOR itera y crea las COLUMNAS de cada FILA
        for(let j = 0; j < columns; j++){
            let thisColumn = document.createElement('td');
            thisRow.appendChild(thisColumn);
        }
        
        thisTable.appendChild(thisRow);
    }   
    return thisTable;
   
}


//b)
let table1 = createTable(3, 2);
let table2 = createTable(8, 4);

//agregar los elementos al articulo con id examen;
examenArticle.appendChild(table1);
examenArticle.appendChild(table2);


//c)
buttonExamen.innerHTML = "Cambiar";


buttonExamen.addEventListener('click', pressed);

//No funciona, en la manera comentada que tengo mas abajo si lo hace
function pressed(){
    let tablesArray = [table1, table2];
    tablesArray.forEach(table => {
        table.className.split(" ");
        if (table.indexOf('ancha') == -1) {
            table.className =+ ' ' + 'ancha';
        }else{
            table.className = 'estrecha'
        }
    });
}


/* Esta funcion hace lo que pedias, pero no esta programada como querias
function pressed (){
    tableArray.forEach(table => {
        if (table.classList.contains('ancha')){
            table.classList.remove('ancha');
            table.classList.add('estrecha');
        }else{
            table.classList.add('ancha');
        }
    });
}
*/




