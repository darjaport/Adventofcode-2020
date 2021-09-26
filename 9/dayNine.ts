(function(){

    const fs = require('fs')
    let file = fs.readFileSync("dayNine.txt").toString('utf-8').split('\n')

    let preamble:number = 25
    let checkNum:number
    let condition:number = 0
    let invalidNum:number = 0


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
            invalidNum = checkNum
            break
        }
        condition = 0
        
        
        if(preamble < file.length - 1) preamble++
        else return
    }
    
    let numArr:number[] = []
    let sum:number = 0
    let iteration:number = 0

    for(let i:number = iteration; i < file.length; i++) {
        sum += parseInt(file[i])
        
        numArr.push(parseInt(file[i]))
        if (sum > invalidNum) {
            sum = 0
            i = iteration++
            numArr = []
        } else if (sum === invalidNum) {
            console.log(numArr);
            break
        }
    }

    sum = Math.min( ...numArr ) + Math.max( ...numArr )
    console.log(sum);
    

})()