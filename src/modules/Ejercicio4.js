//let cursosEnComun = student1Courses.filter(curso => student2Courses.includes(curso));

function encuentraCursosEnComun(arr1,arr2){
    const cursosEnComun=
        arr1.filter(curso=>arr2.includes(curso));
    return cursosEnComun;
}

export{encuentraCursosEnComun}