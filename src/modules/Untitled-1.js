/*
//#Ejercicio 1
let arr = ["This","is","a","sentence"];

function printOutString(arreglo) {
    console.log(arreglo.join(" "));
  }
printOutString(arr);

//#Ejercicio 2
let arr2=[1,2,3,4];

function duplicaElementoArray(num){
    return num*2;
}
arr2=arr2.map(duplicaElementoArray);
printOutString(arr2);


//#Ejercicio 3
//Write a program to compute the sum and product (multiplication) of 
//an array of numbers. Print out the sum and the product.

const valorInicialSuma = 0;
const valorInicialProducto=1;

const sumaArray = arr2.reduce(//callback
  (accumulator, currentValue) => accumulator + currentValue,//función flechita
  valorInicialSuma,
);

const multiplicaArray=arr2.reduce(
    (accumulator, currentValue)=>accumulator*currentValue,
    valorInicialProducto
);

console.log(`La suma de los elementos del arreglo: ${arr2} es: ${sumaArray}`);
console.log(`El producto de los elementos del arreglo: ${arr2} es: ${multiplicaArray}`);

//#Ejercicio 4
//Imprimir elementos en común de 2 arreglos
let student1Courses = ["Math","English", "Programming"];
let student2Courses = ["Geography","Spanish", "Programming"];

let cursosEnComun = student1Courses.filter(curso => student2Courses.includes(curso));

console.log(`Los cursos en comun son: ${cursosEnComun}`);

*/



function printOutString(arreglo) {
  console.log(arreglo.join(" "));
  return arreglo.join(" ");
}

export{printOutString};