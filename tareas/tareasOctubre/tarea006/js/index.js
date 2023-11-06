function calcularRombo() {
    const altura = parseInt(document.getElementById('altura').value);
    const rombo = document.getElementById('rombo');
    rombo.innerHTML = ''; // Limpiar el contenido existente del div
    let espacios = altura - 1;
    let espaciosHueco = 1;

    // Mitad superior del rombo
    for (let filas = 1; filas <= altura; filas++) {

        //Espacios en blanco antes de los asteriscos
        for (let i = 1; i <= espacios; i++) {
            rombo.innerHTML += '&nbsp;&nbsp;';
        }

        // Colocar asteriscos y espacios dentro del rombo
        for (let j = 1; j <= espaciosHueco; j++) {
            //Si j es = 1, significa que hay que colocar un asterisco o Si j es = espaciosHueco, significa que hay que colocar un asterisco
            if (j === 1 || j === espaciosHueco) {
                //delimitamos el rombo con astericos
                rombo.innerHTML += '*';
            } else {
                //rellenamos el rombo de espacios en blanco
                rombo.innerHTML += '&nbsp;&nbsp;';
            }
        }

        //Salto de linea
        rombo.innerHTML += '<br>';
        //Vamos disminuyendo los espacios antes del rombo para dar forma diagonal
        espacios--;
        //Aumentamos los espacios de dentro para dar forma piramidal
        espaciosHueco += 2;
    }

    // Mitad inferior del rombo
    espaciosHueco -= 2;
    espacios++;
    for (let filas = altura - 1; filas != -1; filas--) {
        //Espacios en blanco antes de los asteriscos
        for (let i = 1; i <= espacios; i++) {
            rombo.innerHTML += '&nbsp;&nbsp;';
        }

        // Colocar asteriscos y espacios dentro del rombo
        for (let j = 1; j <= espaciosHueco; j++) {
            //Si j es = 1, significa que hay que colocar un asterisco o Si j es = espaciosHueco, significa que hay que colocar un asterisco
            if (j === 1 || j === espaciosHueco) {
                //delimitamos el rombo con astericos
                rombo.innerHTML += '*';
            } else {
                //rellenamos el rombo de espacios en blanco
                rombo.innerHTML += '&nbsp;&nbsp;';
            }
        }

        //Salto de linea
        rombo.innerHTML += '<br>';
        //Vamos aumentando los espacios antes del rombo para dar forma diagonal
        espacios++;
        //Disminuimos los espacios de dentro para dar forma de piramide inversa
        espaciosHueco -= 2;
    }
}
