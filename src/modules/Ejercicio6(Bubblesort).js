

function algoritmoBurbuja(inputArr) {
    // 
    let arr = [...inputArr];
    let longitud = arr.length;

    // Bucle externo: Repite el proceso tantas veces como elementos haya
    for (let i = 0; i < longitud; i++) {
        
        // Bucle interno: Recorre el arreglo comparando pares
        // Restamos 'i' porque los últimos elementos ya quedan ordenados en cada revisada
        for (let j = 0; j < longitud - 1 - i; j++) {
            
            if (arr[j] > arr[j + 1]) {
                
                let temporal = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temporal;
            }
        }
    }

    return arr;
}

export {algoritmoBurbuja}