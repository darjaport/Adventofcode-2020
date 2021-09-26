(function(){

    const fs = require('fs')
    let file = fs.readFileSync("dayNine.txt").toString('utf-8').split('\n')

    let preamble:number = 25
    let checkNum:number
    let condition:number = 0


    for (let j:number = 0; j < preamble; j++) {
        let arr = file.slice(j, preamble)
        checkNum = parseInt(file[preamble])
        
        for (let k:number = 0; k < arr.length; k++) {
            for (let l:number = k+1; l < arr.length; l++) {
                if(checkNum === parseInt(arr[k]) + parseInt(arr[l])) {
                    condition++
                }
            }
        }

        if (condition === 0) {
            console.log(checkNum)
            return
        }
        condition = 0
        
        
        if(preamble < file.length - 1) preamble++
        else return
    }


})()