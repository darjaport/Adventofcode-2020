(function(){
    const fs = require('fs')
    let file = fs.readFileSync("dayTwo.txt").toString('utf-8')
    let line:string[] = file.split("\n")

    let total:number = 0
    let totalChar:number = 0
    let minMaxNum:any
    let password:string
    let letter:string

    function passwordValidation() {
        for (let i = 0; i < line.length; i++) {
            minMaxNum = line[i].match(/\d+/g)
            password = line[i].split(" ")[2]
            letter = line[i].split(" ")[1][0]

            for (let j = 0; j < password.length; j++) {
                if (password[j] === letter) totalChar++
            }
        
            if (totalChar >= parseInt(minMaxNum[0]) && totalChar <= parseInt(minMaxNum[1])) total++

            totalChar = 0
        }
        return total
    }

    console.log(passwordValidation())

})();