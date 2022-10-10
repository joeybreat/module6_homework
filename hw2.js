'use strict'

function isPrime(a){
    for(let i = 2; i < a; i++){
        if (a === 1){
            return(console.log('число не простое'));
        }
        if (a === 0){
            return(console.log('0 не является ни простым ни составным'));
        }
        if (a % i === 0){
            return(console.log('число не простое'));
        }
        else{
            return(console.log('число простое'));
        }
    }
}

let b = 1;
isPrime(b);