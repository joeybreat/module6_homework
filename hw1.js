"use strict"

let arr = [1,2,3,4,5,6,7,8,"a","b",0];

function isEven(array){
    let odd = 0;
    let even = 0;
    let zero = 0;

    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] !== "number"){

        }
        else if(arr[i] === 0){
            zero++
        }
        else if(arr[i]%2===0){
            even++
        }
        else if(!arr[i]%2===0){
            odd++
        }
        
    }

    console.log("Чётных элементов - ", even);
    console.log("Нечётных элементов - ", odd);

    if(zero !== 0){
        console.log("Нулей - ", zero);
    }
}

isEven(arr);