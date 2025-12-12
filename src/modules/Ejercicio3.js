
const valorInicialSuma = 0;
const valorInicialProducto=1;
/*
const sumaArray = arr.reduce(//callback
    (accumulator, currentValue) => accumulator + currentValue,//función flechita
    valorInicialSuma,
  );
  
  const multiplicaArray=arr.reduce(
      (accumulator, currentValue)=>accumulator*currentValue,
      valorInicialProducto
  );
*/

function sumaArray(arr) {
    let valorInicialSuma = 0; // Para sumar, empezamos en 0
    
    // Ejecutamos reduce
    return arr.reduce(
        (accumulator, currentValue) => accumulator + currentValue, 
        valorInicialSuma
    );
}

function multiplicaArray(arr){
    let valorInicialProducto=1;//Iniciamos en 1 porque si fuera cero ps sería puro 0*0*0*0....
    //Ejecuta reduce
    return arr.reduce(
        (accumulator,currentValue)=>accumulator*currentValue,
    valorInicialProducto
    );
}

export {sumaArray};
export{multiplicaArray};