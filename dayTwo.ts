(function(){
    const fs = require('fs')
    let file = fs.readFileSync("dayTwo.txt").toString('utf-8')
    let line:string[] = file.split("\n")

    let arr:string[]
    let total:number = 0
    let totalChar:number = 0
    let minMaxNum:string[]
    let password:string
    let letter:string

    function passwordValidation() {
        for (let i = 0; i < line.length; i++) {

            arr = line[i].split(" ")
            minMaxNum = line[i].match(/\d+/g)
            password = arr[2]
            letter = arr[1][0]
    
            if (letter === password[parseInt(minMaxNum[0])-1] && letter !== password[parseInt(minMaxNum[1])-1]) total++
            if (letter !== password[parseInt(minMaxNum[0])-1] && letter === password[parseInt(minMaxNum[1])-1]) total++

        }
        return total
    }

    console.log(passwordValidation())
    // Answer: 500

})();