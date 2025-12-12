import { printOutString } from "./modules/Untitled-1.js";
import { duplicaElementoArray } from "./modules/Ejercicio2(Duplica).js";
import { sumaArray } from "./modules/Ejercicio3.js";
import { multiplicaArray } from "./modules/Ejercicio3.js";
import { encuentraCursosEnComun } from "./modules/Ejercicio4.js";
import { algoritmoBurbuja } from "./modules/Ejercicio6(Bubblesort).js";

document.getElementById("btnEjercicio1").addEventListener(`click`,() =>{
    const inputUsuario=document.getElementById('inputE1').value;//Acuerdate que todo lo que entra va a ser de tipo string
    const arreglo = inputUsuario.split(',');
    const resultado=printOutString(arreglo);
    document.getElementById('result1').innerText = resultado;
});

document.getElementById(`btnEjercicio2`).addEventListener(`click`, ()=>{
    const inputUsuario=document.getElementById(`inputE2`).value;
    let arreglo=inputUsuario.split(`,`);
    arreglo=arreglo.map(duplicaElementoArray);
    document.getElementById(`result2`).innerText=arreglo;
});

document.getElementById(`btnEjercicio3`).addEventListener(`click`, ()=>{
    const inputUsuario=document.getElementById(`inputE3`).value;
    const arreglo = inputUsuario.split(',').map(elemento => Number(elemento));
    let resultadoSuma=sumaArray(arreglo);
    let resultadoProducto=multiplicaArray(arreglo);
    document.getElementById('result3').innerText = 
        `Suma: ${resultadoSuma}\nProducto: ${resultadoProducto}`;
});

document.getElementById(`btnEjercicio4`).addEventListener(`click`, ()=>{
    const inputUsuario1=document.getElementById(`inputE4.1`).value;
    const arreglo1 = inputUsuario1.split(',').map(e => e.trim());
    const inputUsuario2=document.getElementById(`inputE4.2`).value;
    const arreglo2 = inputUsuario2.split(',').map(e => e.trim());  
    const resultado=encuentraCursosEnComun(arreglo1,arreglo2);
    document.getElementById(`result4`).innerText=resultado;    
});

document.getElementById(`btnEjercicio5`).addEventListener(`click`, ()=>{
    const inputUsuario=document.getElementById(`input5`).value;
});

document.getElementById(`btnEjercicio6`).addEventListener(`click`, ()=>{
    const inputUsuario=document.getElementById(`input6`).value;
    const arreglo=inputUsuario.split(',').map(elemento => Number(elemento));
    const resultado=algoritmoBurbuja(arreglo);
    document.getElementById(`result6`).innerText=resultado;
});
