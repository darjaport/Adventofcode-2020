(function(){

    const fs = require('fs')
    let file = fs.readFileSync("dayEight.txt").toString('utf-8').split('\n')

    let acc:number = 0
    let i:number = 0
    interface Instructions {
        [key: number]: number
    }
    let instructions:Instructions = {}
    
    while (i < file.length) {
        let num:number = parseInt(file[i].match(/-?\d+/)[0])
        let char:String = file[i].substring(0, 3)

        if(instructions[i]) break
        else instructions[i] = i
        
        switch(char) {
            case "acc":
                acc += num
                i++
                break
            case "jmp":
                i += num
                break
            case "nop":
                i++
                break
        }
    }
    console.log("First star: " + acc);
    
})()