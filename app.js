"use strict";
const vectorPreguntas = [
    "1. Diseñar un programa TS que permita calcular la suma de los primeros N términos de la siguiente serie: 1 - 1/3 + 1/5 - 1/7 + 1/9 - …",
    "2. Diseñar un programa TS que permita calcular la suma de los primeros N términos de la siguiente serie: 64/21 + 62/24 + 60/27 + 58/30 + …",
    "3. Construir un programa TS que permita ingresar N números enteros a un vector, luego determine el primer número par de las posiciones pares.",
    "4. Guardar 5 números en un vector tal como A y 9 números en otro vector tal como B, luego trasladar el último número de A al final de B.",
    "5. Guardar en un vector N números enteros, luego cambiar el contenido del número menor por el acumulado de la suma de todos los números que se ubican delante de él.",
    "6. Ingresar en un vector N números, luego intercambie el contenido del último número par por el primer número impar.",
    "7. Construir un programa TS que permita almacenar en 3 vectores diferentes los nombres de N productos, sus cantidades y precios respectivamente, almacenar en un nuevo vector el total (en dinero) de todos los productos, y mostrar el nombre del producto que tiene el menor total.",
    "8. Ingresar n números enteros a un vector luego ingresar un número cualquiera, se pide pasar a un nuevo vector todos los números menores e iguales al número ingreso, en caso no exista ningún numero mostrar un mensaje correspondiente.",
    "9. Construir un programa TS que permita ingresar a un vector N notas de alumnos, calcule el promedio y muestre en dos vectores distintos las notas mayores y menores al promedio.",
    "10. En un campeonato de voley se almacena en un vector los nombres de los 5 países participantes y en otro vector los puntajes obtenidos, (ambos datos ingresados como argumentos), se pide mostrar el nombre del país que obtuvo el mayor y menor puntaje.",
    "11. Ingresar N números a un vector luego reemplazar el mayor número por la suma del primer número par y el último número impar del mismo arreglo.",
    "12. Se da una prueba con 10 preguntas con respuestas de verdadero y falso. Los resultados se guarda en un vector, el cero representa falso y el uno verdadero. En otro vector se inicializan las claves de las respuestas, calcular su calificación sabiendo que por cada respuesta correcta obtiene 2 puntos y por cada incorrecta -0.3.",
    "13. Guardar en un vector los nombres de estudiantes, y en otro vector sus promedios finales (0-20), calcular el mayor y menor promedio y mostrar los nombres de los estudiantes que obtuvieron dichos promedios.",
    "14. Construir un programa TS que permita almacenar en un vector N números enteros, luego calcular el promedio y mostrar en un nuevo vector todos los números pares mayores al promedio.",
    "15. Ingresar a un vector de tamaño N números enteros, e intercambiar el primer número múltiplo de 3 por el último número par. En caso no exista ningún número múltiplo de 3 mostrar un mensaje respectivo.",
    "16. Guardar en un vector N números enteros, luego lea un número y reemplazarlo por el número más cercano del arreglo, en caso exista más de uno hacer solo un reemplazo.",
    "17. Construir un programa TS donde se pueda ingresar 10 sueldos en un arreglo unidimensional, luego seleccione los sueldos mayores a 475 y muéstrelo en otro arreglo."
];
function ejercicio_1() {
    /*
    1.	Diseñar un programa TS que permita calcular la suma de los primeros N términos de la siguiente serie:
        1	-	1/3	+	1/5	-	1/7	+	1/9	-	…
        */
    let data = prompt('Por favor, introduce un valor:'); //Recibir un dato, y almacenarlo ("Ojo: Usarlo directamente en number, genera un error.")
    let n = Number(data); //Transformar el valor a un numero
    let suma = 0; //Variable para almacenar la suma de los numeros
    let denominador = 1; //Variable para almacenar el denominador de la fraccion
    for (let i = 0; i < n; i++) {
        if (i % 2 == 0) { //Si el numero es par
            suma += 1 / denominador;
            if (i == 0) {
                console.log("1" + "/" + denominador);
            }
            else {
                console.log("+" + "1" + "/" + denominador);
            }
        }
        else {
            suma -= 1 / denominador;
            console.log("-" + "1" + "/" + denominador);
        }
        denominador += 2;
    }
    console.log("El resultado de la suma es: " + suma);
}
function ejercicio_2() {
    /*
    2.	Diseñar un programa TS que permita calcular la suma de los primeros N términos de la siguiente serie:
    64/21		+	62/24		+	60/27		+	58/30		+	…
    */
    let data = prompt('Por favor, introduce un valor:'); //Recibir un dato, y almacenarlo ("Ojo: Usarlo directamente en number, genera un error.")
    let n = Number(data); //Transformar el valor a un numero
    let suma = 0; //Variable para almacenar la suma de los numeros
    let numerador = 64; //Variable para almacenar el numerador de la fraccion
    let denominador = 21; //Variable para almacenar el denominador de la fraccion
    for (let i = 0; i < n; i++) {
        suma += numerador / denominador;
        if (i == 0) {
            console.log(numerador + "/" + denominador);
        }
        else {
            console.log("+" + numerador + "/" + denominador);
        }
        numerador -= 2;
        denominador += 3;
    }
    console.log("El resultado de la suma es: " + suma);
}
function ejercicio_3() {
    /*
    3.	Construir un programa TS que permita ingresar N números enteros a un vector, luego determine el primer número par de las posiciones pares.
    */
    let data = prompt('Por favor, ingrese el tamaño del arreglo:');
    let n = Number(data);
    const miVector = [];
    for (let i = 0; i < n; i++) {
        data = prompt('Por favor, ingrese un valor:');
        miVector.push(Number(data));
    }
    console.log(miVector);
    let encontrado = false;
    for (let j = 1; j < miVector.length; j += 2) {
        if (miVector[j] % 2 == 0) {
            console.log("El primer elemento par de las posiciones pares es:" + miVector[j]);
            encontrado = true;
            break;
        }
    }
    if (!encontrado) {
        console.log("No se encontró ningún elemento par");
    }
}
function ejercicio_4() {
    /*
    4.	Guardar 5 números en un vector tal como A y 9 números en otro vector tal como B, luego trasladar el último número de A al final de B.
    */
    let vectorA = [7, 7, 9, 10, 5];
    let vectorB = [5, 8, 6, 5, 10, 8, 11, 18, 18];
    console.log("Inicio:");
    console.log(vectorA);
    console.log(vectorB);
    /*Al agregar ! al final de vectorA.pop(), le estás diciendo al compilador que estás
    seguro de que vectorA.pop() nunca será undefined en este contexto y que puedes continuar con la ejecución.
     Esto es útil cuando estás seguro de que el arreglo vectorA no está vacío y quieres trabajar con el valor devuelto por pop()
      sin verificar explícitamente si el arreglo está vacío.*/
    vectorB.push(vectorA.pop());
    console.log(vectorA);
    console.log(vectorB);
}
function ejercicio_5() {
    /*
    5.	Guardar en un vector N números enteros, luego cambiar el contenido del número menor por el acumulado de la suma de todos los números que se ubican delante de él.
    */
    let data = prompt('Por favor, ingrese el tamaño del arreglo:');
    let n = Number(data);
    const miVector = [];
    let suma = 0;
    for (let i = 0; i < n; i++) {
        data = prompt('Por favor, ingrese un valor:');
        miVector.push(Number(data));
        suma += Number(data);
    }
    console.log(miVector);
    /*La línea de código const numeroMasPequeno = Math.min(...vector); encuentra el número más pequeño en el arreglo vector mediante la función Math.min(),
    que toma todos los elementos del arreglo como argumentos usando el operador de propagación ... y devuelve el valor más pequeño, que se almacena en la
     variable numeroMasPequeno. */
    let num_menor = Math.min(...miVector);
    console.log("El número más pequeño es: " + num_menor);
    //Encontrar la posicion del número más pequeño en el vector
    let posicion_menor = miVector.indexOf(num_menor);
    miVector[posicion_menor] = suma;
    console.log("La suma es: " + suma + " y el vector queda: " + miVector);
}
function ejercicio_6() {
    /*
    6.	Ingresar en un vector N números, luego intercambie el contenido del último número par por el primer número impar.
    */
    let pos_par = 0;
    let pos_impar = 0;
    let vector = [2, 7, 6, 5, 10, 8, 5, 13, 18];
    let encontrado = false;
    console.log("El vector es: " + vector);
    for (let i = 1; i < 10; i++) {
        if (vector[i - 1] % 2 != 0 && encontrado == false) {
            pos_impar = i - 1;
            encontrado = true;
            console.log("El primer número impar tiene la posicion: " + pos_impar);
        }
        if (vector[i - 1] % 2 == 0) {
            pos_par = i - 1;
            console.log(i + " ->" + pos_par);
        }
    }
    console.log("Reporte:");
    console.log("El primer número impar es: " + vector[pos_impar] + " y su posición es: " + pos_impar);
    console.log("El ultimo número par es: " + vector[pos_par] + " y su posición es: " + pos_par);
    //Intercambiar los valores de pos_impar con pos_par
    //Primera for con destructuring assignment (https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
    [vector[pos_impar], vector[pos_par]] = [vector[pos_par], vector[pos_impar]];
    //Segunda for con una variable auxiliar
    /*let aux:number = vector[pos_impar];
    vector[pos_impar]=vector[pos_par];
    vector[pos_par]=aux;*/
    console.log("El vector es: " + vector);
}
function ejercicio_7() {
    /*
    7.Construir un programa TS que permita almacenar en 3 vectores diferentes los nombres de N productos, sus cantidades y precios respectivamente,
    almacenar en un nuevo vector el total (en dinero) de todos los productos, y mostrar el nombre del producto que tiene el menor total.
    */
    let data = prompt('Por favor, ingrese el tamaño del arreglo de los 3 arreglos:');
    let tam = Number(data);
    //Vectores
    let nombreProducto = [];
    let cantidadProducto = [];
    let precioProducto = [];
    let totalProducto = [];
    for (let i = 0; i < tam; i++) {
        data = prompt('Ingrese el nombre del producto ' + (i + 1));
        nombreProducto.push(String(data));
        data = prompt('Ingrese la cantidad del producto ' + (i + 1));
        cantidadProducto.push(Number(data));
        data = prompt('Ingrese el precio del producto ' + (i + 1));
        precioProducto.push(Number(data));
        totalProducto.push(cantidadProducto[i] * precioProducto[i]);
    }
    console.log("Reporte de ventas:");
    console.log("Producto\tCantidad\tPrecio\tTotal");
    let pos_menor = 0;
    for (let i = 0; i < tam; i++) {
        console.log(nombreProducto[i] + "\t" + cantidadProducto[i] + "\t" + precioProducto[i] + "\t" + totalProducto[i]);
        if (totalProducto[i] < totalProducto[pos_menor]) {
            pos_menor = i;
        }
    }
    console.log("El producto con menor venta es: " + nombreProducto[pos_menor] + " con un total de: " + totalProducto[pos_menor]);
}
function ejercicio_8() {
    /*
    8.	Ingresar n números enteros a un vector luego ingresar un número cualquiera, se pide pasar a un nuevo vector todos los
     números menores e guales al número ingreso, en caso no exista ningún numero mostrar un mensaje correspondiente.
    */
    let data = prompt('Por favor, ingrese el tamaño del arreglo:');
    let n = Number(data);
    const miVector = [];
    for (let i = 0; i < n; i++) {
        data = prompt('Por favor, ingrese un valor:');
        miVector.push(Number(data));
    }
    console.log(miVector);
    data = prompt('Ingrese el numero que se usara de filtro:');
    let filtro = Number(data);
    let existe = false;
    const vectorAux = [];
    for (let i = 0; i < n; i++) {
        if (miVector[i] <= filtro) {
            vectorAux.push(miVector[i]);
            existe = true;
        }
    }
    if (!existe) {
        console.log("No hay números menores o iguales a " + filtro);
    }
    else {
        console.log("Los numeros que menos o iguales a " + filtro + " son: " + vectorAux);
    }
}
function ejercicio_9() {
    /*
    9.	Construir un programa TS que permita ingresar a un vector N notas de alumnos, calcule el promedio y muestre en dos vectores distintos las notas
    mayores y menores al promedio.
    */
    let data = prompt('Por favor, ingrese el tamaño del arreglo:');
    let n = Number(data);
    const miVector = [];
    for (let i = 0; i < n; i++) {
        data = prompt('Ingrese la nota del estudiante ' + (i + 1));
        miVector.push(Number(data));
    }
    console.log(miVector);
    /*
    samos vector.reduce((a, b) => a + b) para sumar todos los números en el arreglo vector.
    Esto se hace utilizando el método reduce, que acumula los valores del arreglo sumando cada elemento al valor acumulado a. */
    let promedio = Math.round(miVector.reduce((a, b) => a + b) / miVector.length);
    const vectorMayor = [];
    const vectorMenor = [];
    for (let i = 0; i < n; i++) {
        if (miVector[i] < promedio) {
            vectorMenor.push(miVector[i]);
        }
        else {
            vectorMayor.push(miVector[i]);
        }
    }
    console.log("El promedio es: " + promedio);
    console.log("Los estudiantes con notas mayores al promedio son: " + vectorMayor);
    console.log("Los estudiantes con notas menores al promedio son: " + vectorMenor);
}
function ejercicio_10() {
    /*
    10.	En un campeonato de voley se almacena en un vector los nombre de los 5 países participantes y en otro
    vector los puntajes obtenidos, (ambos datos ingresados como argumentos), se pide mostrar el nombre del país que obtuvo el mayor y menor puntaje.
    */
    let data = prompt('Por favor, ingrese el tamaño del arreglo:');
    let n = Number(data);
    const vectorPais = [];
    const vectorPuntaje = [];
    for (let i = 0; i < n; i++) {
        data = prompt('Ingrese el nombre Pais numero ' + (i + 1));
        vectorPais.push(String(data));
        data = prompt('Ingrese el puntaje del pais numero ' + (i + 1));
        vectorPuntaje.push(Number(data));
    }
    console.log(vectorPais);
    console.log(vectorPuntaje);
    let pos_mayor = 0;
    let pos_menor = 0;
    for (let j = 0; j < n; j++) {
        if (vectorPuntaje[j] > vectorPuntaje[pos_mayor]) {
            pos_mayor = j;
        }
        if (vectorPuntaje[j] < vectorPuntaje[pos_menor]) {
            pos_menor = j;
        }
    }
    console.log("El pais con mayor puntaje es: " + vectorPais[pos_mayor] + " con un puntaje de: " + vectorPuntaje[pos_mayor]);
    console.log("El pais con menor puntaje es: " + vectorPais[pos_menor] + " con un puntaje de: " + vectorPuntaje[pos_menor]);
}
function ejercicio_11() {
    /*
        11.	Ingresar N números a un vector luego reemplazar el mayor número por la suma del primer número par y el último número impar del mismo arreglo.
    */
    let data = prompt('Por favor, ingrese el tamaño del arreglo:');
    let n = Number(data);
    const vector = [];
    let pos_par = 0;
    let pos_impar = 0;
    for (let i = 0; i < n; i++) {
        data = prompt('Ingrese el numero ' + (i + 1));
        vector.push(Number(data));
    }
    console.log(vector);
    let encontrado = false;
    console.log("El vector es: " + vector);
    for (let i = 1; i <= n; i++) {
        if (vector[i - 1] % 2 == 0 && encontrado == false) {
            pos_par = i - 1;
            encontrado = true;
            console.log("El primer número par tiene la posicion: " + pos_par + " y su valor es: " + vector[pos_par]);
        }
        if (vector[i - 1] % 2 != 0) {
            pos_impar = i - 1;
            console.log(i + " ->" + pos_impar);
        }
    }
    console.log("El ultimo número impar tiene la posicion: " + pos_impar + " y su valor es: " + vector[pos_impar]);
    let suma = vector[pos_par] + vector[pos_impar];
    console.log("La suma es: " + suma);
    let pos_mayor = 0;
    pos_mayor = vector.indexOf(Math.max(...vector)); //Encontrar la posicion del número más grande en el vector
    /* El "..." que hace?:
    El operador de propagación (…) se utiliza para expandir una expresión en los lugares donde se esperan
    múltiples argumentos (llamadas a funciones) o múltiples elementos (arrays literales).

    Y por que si no lo pongo no funciona?:
    - El método Math.max() devuelve el mayor de cero o más números. Si se pasa algún parámetro, este es convertido a número;
        de lo contrario se devuelve -Infinity.

    - Además, el método Math.max() no acepta un array como parámetro, pero el operador de propagación (...) nos permite pasar un array como parámetro.
    https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    */
    console.log("El mayor es: " + vector[pos_mayor] + " y su posicion es: " + pos_mayor);
    vector[pos_mayor] = suma;
    console.log("El vector final es: " + vector);
}
function ejercicio_12() {
    /*
    12.	Se da una prueba con 10 preguntas con respuestas de verdadero y falso. Los resultados se guarda en un vector, el cero representa falso y
    el uno verdadero. En otro vector se inicializan las claves de las respuestas, calcular su calificación sabiendo que por cada respuesta correcta obtiene
     2 puntos y por cada incorrecta -0.3.
    */
    let vectorRespuestas = [1, 0, 1, 1, 0, 1, 0, 1, 1, 0];
    let data;
    alert("Vas a responder 10 preguntas, por favor, trata de adivinar, solo ingresa 1 o 0. Y comparte tu score al finalizar el examen:");
    let vectorClaves = [];
    for (let i = 0; i < 10; i++) {
        data = prompt('Ingrese la clave de la pregunta ' + (i + 1));
        vectorClaves.push(Number(data));
    }
    let calificacion = 0;
    for (let i = 0; i < 10; i++) {
        if (vectorRespuestas[i] == vectorClaves[i]) {
            calificacion += 2;
        }
        else {
            calificacion -= 0.3;
        }
    }
    if (calificacion == 20) {
        alert("Felicidades, eres todo un adivino");
    }
    else if (calificacion < 0) {
        calificacion = 0;
    }
    console.log("La calificacion es: " + calificacion);
}
function ejercicio_13() {
    /*
    13.	Guardar en un vector los nombres de estudiantes, y en otro vector sus promedios finales (0-20), calcular el mayor y menor
    promedio y mostrar los nombres de los estudiantes que obtuvieron dichos promedios.
    */
    let vectorEstudiantes = ["Juan", "Pedro", "Maria", "Jose", "Luis", "Ana", "Carlos", "Jorge", "Luisa", "Miguel"];
    let vectorPromedios = [15, 12, 18, 20, 10, 13, 14, 16, 17, 19];
    console.log(vectorEstudiantes);
    console.log(vectorPromedios);
    let pos_mayor = vectorPromedios.indexOf(Math.max(...vectorPromedios)); //Encontrar la posicion del número más grande en el vector
    let pos_menor = vectorPromedios.indexOf(Math.min(...vectorPromedios)); //Encontrar la posicion del número más pequeño en el vector
    console.log("El estudiante con mayor promedio es: " + vectorEstudiantes[pos_mayor] + " con un promedio de: " + vectorPromedios[pos_mayor]);
    console.log("El estudiante con menor promedio es: " + vectorEstudiantes[pos_menor] + " con un promedio de: " + vectorPromedios[pos_menor]);
}
function ejercicio_14() {
    /*
    14.	Construir un programa TS que permita almacenar en un vector N números enteros, luego calcular el promedio y mostrar en un nuevo vector
    todos los números pares mayores al promedio.
    */
    let data = prompt('Por favor, ingrese el tamaño del arreglo:');
    let n = Number(data);
    const vector = [];
    for (let i = 0; i < n; i++) {
        data = prompt('Ingrese el numero ' + (i + 1));
        vector.push(Number(data));
    }
    console.log(vector);
    let promedio = Math.round(vector.reduce((a, b) => a + b) / vector.length);
    const vectorPares = [];
    for (let i = 0; i < n; i++) {
        if (vector[i] > promedio && vector[i] % 2 == 0) {
            vectorPares.push(vector[i]);
        }
    }
    console.log("El promedio es: " + promedio);
    console.log("Los números pares mayores al promedio son: " + vectorPares);
}
function ejercicio_15() {
    /*15.	Ingresar a un vector de tamaño N números enteros, e intercambiar
     el primer número múltiplo de 3 por el último número par. En caso no exista ningún número múltiplo de 3 mostrar un mensaje respectivo
    */
    let data = prompt('Por favor, ingrese el tamaño del arreglo:');
    let n = Number(data);
    const vector = [];
    for (let i = 0; i < n; i++) {
        data = prompt('Ingrese el numero ' + (i + 1));
        vector.push(Number(data));
    }
    console.log(vector);
    let pos_par = 0;
    let pos_multiploThree = 0;
    let find_mulThree = false;
    let find_Par = false;
    for (let i = 1; i <= n; i++) {
        //e intercambiar el primer número múltiplo de 3 por el último número par
        if (vector[i - 1] % 3 == 0 && find_mulThree == false) {
            pos_multiploThree = i - 1;
            find_mulThree = true;
            console.log("El primer número multiplo de 3 tiene la posicion: " + pos_multiploThree + " y su valor es: " + vector[pos_multiploThree]);
        }
        if (vector[i - 1] % 2 == 0) {
            pos_par = i - 1;
            find_Par = true;
            console.log(i + " ->" + pos_par);
        }
    }
    if (find_mulThree && find_Par) {
        console.log("El primer número multiplo de 3 es: " + vector[pos_multiploThree] + " y su posicion es: " + pos_multiploThree);
        console.log("El último número par es: " + vector[pos_par] + " y su posicion es: " + pos_par);
        [vector[pos_par], vector[pos_multiploThree]] = [vector[pos_multiploThree], vector[pos_par]];
        console.log("El vector final es: " + vector);
    }
    else {
        if (!find_Par) {
            console.log("No hay números pares");
        }
        else {
            console.log("El último número par es: " + vector[pos_par] + " y su posicion es: " + pos_par);
        }
        if (!find_mulThree) {
            console.log("No hay números multiplos de 3");
        }
        else {
            console.log("El primer número multiplo de 3 es: " + vector[pos_multiploThree] + " y su posicion es: " + pos_multiploThree);
        }
    }
}
function ejercicio_16() {
    /*
    16.	Guardar en un vector N números enteros, luego lea un número y reemplazarlo por el número más cercano del arreglo, en caso exista más de uno hacer solo un reemplazo.
    */
    let data = prompt('Por favor, ingrese el tamaño del arreglo:');
    let n = Number(data);
    const vector = [];
    for (let i = 0; i < n; i++) {
        data = prompt('Ingrese el numero ' + (i + 1));
        vector.push(Number(data));
    }
    console.log(vector);
    data = prompt('Ingrese el numero que se usara de filtro:');
    let filtro = Number(data);
    console.log("El filtro es: " + filtro);
    let mas_cercano = 0;
    let menor_cercano = -Infinity;
    let mayor_cercano = Infinity;
    //Que significa eso de Infinity y -Infinity?:
    //Infinity es un valor numérico que representa infinito. Es mayor que cualquier otro número y 
    //-Infinity es un valor numérico que representa infinito negativo. Es menor que cualquier otro número.
    //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Infinity
    for (let i = 0; i < n; i++) {
        if (vector[i] == filtro) {
            mas_cercano = vector[i];
            break;
        }
        else if (vector[i] < filtro && vector[i] > menor_cercano) {
            menor_cercano = vector[i];
        }
        else if (vector[i] > filtro && vector[i] < mayor_cercano) {
            mayor_cercano = vector[i];
        }
    }
    if (mas_cercano == filtro) {
    }
    else {
        if (menor_cercano == -Infinity) {
            mas_cercano = mayor_cercano;
        }
        else if (mayor_cercano == Infinity) {
            mas_cercano = menor_cercano;
        }
        else {
            let diferencia_menor = filtro - menor_cercano;
            let diferencia_mayor = mayor_cercano - filtro;
            console.log("La diferencia menor es: " + diferencia_menor);
            console.log("La diferencia mayor es: " + diferencia_mayor); //Verificar
            if (diferencia_menor < diferencia_mayor) {
                mas_cercano = menor_cercano;
            }
            else {
                mas_cercano = mayor_cercano;
            }
        }
    }
    console.log("El número más cercano es: " + mas_cercano);
    let cambio = vector.indexOf(mas_cercano); //Encontrar la posicion del número más cercano en el vector
    vector[cambio] = filtro;
    console.log("El vector final es: " + vector);
}
function ejercicio_17() {
    /*
    17.	Construir un programa TS donde se pueda ingresar 10 sueldos en un arreglo unidimensional, luego seleccione los sueldos mayores a 475 y muéstrelo en otro arreglo.
    */
    let data = prompt('Por favor, ingrese el tamaño del arreglo:');
    let n = Number(data);
    const vectorSueldo = [];
    for (let i = 0; i < n; i++) {
        data = prompt('Ingrese el sueldo #' + (i + 1));
        vectorSueldo.push(Number(data));
    }
    console.log(vectorSueldo);
    const vectorMayores = vectorSueldo.filter((sueldo) => sueldo > 475);
    //Que hace el filter?:
    //El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
    //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    console.log("Los sueldos mayores a 475 son: " + vectorMayores);
}
let opcion = prompt('Por favor, ingrese el número del ejercicio que desea ejecutar:');
let opcion_elegida = Number(opcion);
if (opcion_elegida < 1 || opcion_elegida > 17) {
    alert("El número ingresado no es válido");
}
else {
    console.log("Ejecutando el ejercicio: " + opcion_elegida);
    console.log(vectorPreguntas[opcion_elegida - 1]);
    switch (opcion_elegida) {
        case 1:
            ejercicio_1();
            break;
        case 2:
            ejercicio_2();
            break;
        case 3:
            ejercicio_3();
            break;
        case 4:
            ejercicio_4();
            break;
        case 5:
            ejercicio_5();
            break;
        case 6:
            ejercicio_6();
            break;
        case 7:
            ejercicio_7();
            break;
        case 8:
            ejercicio_8();
            break;
        case 9:
            ejercicio_9();
            break;
        case 10:
            ejercicio_10();
            break;
        case 11:
            ejercicio_11();
            break;
        case 12:
            ejercicio_12();
            break;
        case 13:
            ejercicio_13();
            break;
        case 14:
            ejercicio_14();
            break;
        case 15:
            ejercicio_15();
            break;
        case 16:
            ejercicio_16();
            break;
        case 17:
            ejercicio_17();
            break;
    }
}
