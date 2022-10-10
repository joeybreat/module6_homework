'use strict'

let func = function(a,b){
    for(let i = a; i <= b; i++){
    setInterval(console.log(i), 1000);
    }
}

func(1,10);