
function ejercicio_1() {

    let data: string | null = prompt('Por favor, introduce un valor:');//Recibir un dato, y almacenarlo ("Ojo: Usarlo directamente en number, genera un error.")
    let n:number = Number(data);//Transformar el valor a un numero
    let suma:number = 0;//Variable para almacenar la suma de los numeros
    let denominador:number = 1;//Variable para almacenar el denominador de la fraccion


    for(let i = 0; i < n; i++) {
        if(i%2==0){//Si el numero es par
            suma +=1/denominador;
            if(i==0){
                console.log("1"+"/"+denominador);
            }
            else{
                console.log("+"+"1"+"/"+denominador);
            }
        }else{
            suma -=1/denominador;
            console.log("-"+"1"+"/"+denominador);
        }
        denominador+=2;
    }
    console.log("El resultado de la suma es: "+suma);
    
}

function ejercicio_2() {

    let data: string | null = prompt('Por favor, introduce un valor:');//Recibir un dato, y almacenarlo ("Ojo: Usarlo directamente en number, genera un error.")
    let n:number = Number(data);//Transformar el valor a un numero
    let suma:number = 0;//Variable para almacenar la suma de los numeros
    let numerador:number = 64;//Variable para almacenar el numerador de la fraccion
    let denominador:number = 21;//Variable para almacenar el denominador de la fraccion


    for(let i = 0; i < n; i++) {
        suma +=numerador/denominador;
        if(i==0){
            console.log(numerador+"/"+denominador);
        }
        else{
            console.log("+"+numerador+"/"+denominador);
        }
        numerador-=2;
        denominador+=3;

    }


    console.log("El resultado de la suma es: "+suma);
    
}

function ejercicio_3() {
    let data: string | null = prompt('Por favor, ingrese el tamaño del arreglo:');
    let n:number = Number(data);
    const miVector: number[] = [];
    for( let i = 0; i < n; i++) {
        data = prompt('Por favor, ingrese un valor:');
        miVector.push(Number(data));
    }
    console.log(miVector);

    let encontrado:boolean = false;

    for(let j=1;j< miVector.length;j+=2){
        if(miVector[j]%2==0){
            console.log("El primer elemento par de las posiciones pares es:" + miVector[j]);
            encontrado=true;
            break;
        }
    }

    if(!encontrado){
        console.log("No se encontró ningún elemento par");
    }

}

function ejercicio_4(){
    let vectorA: number[] = [7,7,9,10,5];
    let vectorB: number[] = [5,8,6,5,10,8,11,18,18];
    console.log("Inicio:");
    console.log(vectorA);
    console.log(vectorB);
    /*Al agregar ! al final de vectorA.pop(), le estás diciendo al compilador que estás 
    seguro de que vectorA.pop() nunca será undefined en este contexto y que puedes continuar con la ejecución.
     Esto es útil cuando estás seguro de que el arreglo vectorA no está vacío y quieres trabajar con el valor devuelto por pop()
      sin verificar explícitamente si el arreglo está vacío.*/
    vectorB.push(vectorA.pop()!); 
    console.log(vectorA);
    console.log(vectorB);
}

function ejercicio_5(){
   let data: string | null = prompt('Por favor, ingrese el tamaño del arreglo:');
    let n:number = Number(data);
    const miVector: number[] = [];
    let suma:number = 0;
    for( let i = 0; i < n; i++) {
        data = prompt('Por favor, ingrese un valor:');
        miVector.push(Number(data));
        suma+=Number(data);
    }
    console.log(miVector);

    /*La línea de código const numeroMasPequeno = Math.min(...vector); encuentra el número más pequeño en el arreglo vector mediante la función Math.min(), 
    que toma todos los elementos del arreglo como argumentos usando el operador de propagación ... y devuelve el valor más pequeño, que se almacena en la
     variable numeroMasPequeno. */
    let num_menor:number = Math.min(...miVector);

    console.log("El número más pequeño es: " + num_menor);

    //Encontrar la posicion del número más pequeño en el vector
    let posicion_menor:number = miVector.indexOf(num_menor);

    miVector[posicion_menor]=suma;
    console.log("La suma es: "+suma+" y el vector queda: "+miVector);
    
}

function ejercicio_6(){
    
    let pos_par:number = 0;
    let pos_impar:number = 0;
    let vectorB: number[] = [2,7,6,5,10,8,5,13,18];


    let encontrado:boolean = false;

    console.log("El vector es: "+ vectorB);

    for(let i=1;i<10;i++){
        if(i%2!=0 && encontrado==false){
            pos_impar=i-1;
            encontrado=true;
            console.log("El primer número impar tiene la posicion: "+ pos_impar);
        }

        if(i%2==0){
            pos_par=i-1;
            console.log( i+" ->"+pos_par);
        }
    }


    console.log("Reporte:");
    console.log("El primer número impar es: "+ vectorB[pos_impar]+ " y su posición es: "+ pos_impar);
    console.log("El ultimo número par es: "+ vectorB[pos_par] + " y su posición es: "+ pos_par);
    
    vectorB[pos_impar] = vectorB[pos_par];
    console.log("El vector es: "+ vectorB);
}

function ejercicio_7(){
    let data: string | null = prompt('Por favor, ingrese el tamaño del arreglo de los 3 arreglos:');
    let tam:number = Number(data);
    //Vectores
    let nombreProducto: string[] = [];
    let cantidadProducto: number[] = [];
    let precioProducto: number[] = [];
    let totalProducto: number[] = [];

    for(let i=0;i<tam;i++){
        data = prompt('Ingrese el nombre del producto '+ (i+1));
        nombreProducto.push(String(data));
        data = prompt('Ingrese la cantidad del producto '+ (i+1));
        cantidadProducto.push(Number(data));
        data = prompt('Ingrese el precio del producto '+ (i+1));
        precioProducto.push(Number(data));

        totalProducto.push(cantidadProducto[i]*precioProducto[i]);
    }

    console.log("Reporte de ventas:");
    console.log("Producto\tCantidad\tPrecio\tTotal");
    let pos_menor:number = 0;
    for(let i=0;i<tam;i++){
        console.log(nombreProducto[i]+"\t"+cantidadProducto[i]+"\t"+precioProducto[i]+"\t"+totalProducto[i]);
        if(totalProducto[i]<totalProducto[pos_menor]){
            pos_menor=i;
        }
    }

    console.log("El producto con menor venta es: "+ nombreProducto[pos_menor] + " con un total de: "+ totalProducto[pos_menor]);
}

function ejercicio_8(){
    let data: string | null = prompt('Por favor, ingrese el tamaño del arreglo:');
    let n:number = Number(data);
    const miVector: number[] = [];
    for( let i = 0; i < n; i++) {
        data = prompt('Por favor, ingrese un valor:');
        miVector.push(Number(data));
    }

    console.log(miVector);

    data = prompt('Ingrese el numero que se usara de filtro:');
    let filtro:number = Number(data);
    let existe:boolean = false;

    const vectorAux: number[] = [];

    for(let i=0;i<n;i++){
        if(miVector[i]<=filtro){
            vectorAux.push(miVector[i]);
            existe=true;
        }
    }

    if(!existe){
        console.log("No hay números menores o iguales a " + filtro);
    }
    else{
        console.log("Los numeros que menos o iguales a "+filtro+" son: "+ vectorAux);
    }

}

function ejercicio_9(){
    let data: string | null = prompt('Por favor, ingrese el tamaño del arreglo:');
    let n:number = Number(data);
    const miVector: number[] = [];
    for( let i = 0; i < n; i++) {
        data = prompt('Ingrese la nota del estudiante '+ (i+1));
        miVector.push(Number(data));
    }

    console.log(miVector);

    /*
    samos vector.reduce((a, b) => a + b) para sumar todos los números en el arreglo vector.
    Esto se hace utilizando el método reduce, que acumula los valores del arreglo sumando cada elemento al valor acumulado a. */
    let promedio:number = Math.round(miVector.reduce((a, b) => a + b) / miVector.length);
    const vectorMayor: number[] = [];
    const vectorMenor: number[] = [];


    for(let i=0;i<n;i++){
        if(miVector[i]<promedio){
            vectorMenor.push(miVector[i]);
        }
        else{
            vectorMayor.push(miVector[i]);
        }
    }

    console.log("El promedio es: "+ promedio);
    console.log("Los estudiantes con notas mayores al promedio son: "+ vectorMayor);
    console.log("Los estudiantes con notas menores al promedio son: "+ vectorMenor);
}

function ejercicio_10(){
    let data: string | null = prompt('Por favor, ingrese el tamaño del arreglo:');
    let n:number = Number(data);
    const vectorPais: string[] = [];
    const vectorPuntaje: number[] = [];
    for( let i = 0; i < n; i++) {
        data = prompt('Ingrese el nombre Pais numero '+ (i+1));
        vectorPais.push(String(data));
        data = prompt('Ingrese el puntaje del pais numero '+ (i+1));
        vectorPuntaje.push(Number(data));
    }

    console.log(vectorPais);
    console.log(vectorPuntaje);

    let pos_mayor:number = 0;
    let pos_menor:number = 0;

    for(let j=0;j<n;j++){
        if(vectorPuntaje[j]>vectorPuntaje[pos_mayor]){
            pos_mayor=j;
        }
        if(vectorPuntaje[j]<vectorPuntaje[pos_menor]){
            pos_menor=j;
        }
    }

    console.log("El pais con mayor puntaje es: "+ vectorPais[pos_mayor] + " con un puntaje de: "+ vectorPuntaje[pos_mayor]);
    console.log("El pais con menor puntaje es: "+ vectorPais[pos_menor] + " con un puntaje de: "+ vectorPuntaje[pos_menor]);
}

function ejercicio_11(){
    let data: string | null = prompt('Por favor, ingrese el tamaño del arreglo:');
    let n:number = Number(data);
    const vector: number[] = [];
    for( let i = 0; i < n; i++) {
        data = prompt('Ingrese el numero '+ (i+1));
        vector.push(Number(data));
    }

}

ejercicio_10();

let opcion: number = 0;