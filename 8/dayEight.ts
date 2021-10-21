(function(){

    const fs = require('fs')
    let file = fs.readFileSync("dayEight.txt").toString('utf-8').split('\n')

    let acc:number = 0
    let accNew:number = 0
    let i:number = 0
    interface Instructions {
        [key: number]: number
    }
    let instructions:Instructions = {}
    
    while (i < file.length) {
        let num:number = parseInt(file[i].match(/-?\d+/)[0])
        let char:String = file[i].substring(0, 3)
        
        switch(char) {
            case "acc":
                acc += num
                i++
                break
            case "jmp":
                if (!instructions[i]) {
                    instructions[i] = acc
                    i+=num
                } else if (instructions[i] && instructions[i] !== -1) {
                    accNew = acc = instructions[i]
                    instructions[i] = -1
                    i++
                } else if (instructions[i] && instructions[i] === -1) {
                    i += num
                    acc = accNew
                }
                else {
                    i += num
                }
                break
            case "nop":
                if (!instructions[i]) {
                    instructions[i] = acc
                    i++
                } else if (instructions[i] && instructions[i] !== -1) {
                    accNew = acc = instructions[i]
                    instructions[i] = -1
                    i+=num
                } else if (instructions[i] && instructions[i] === -1) {
                    i++
                    acc = accNew
                }
                else {
                    i++
                }
                break
        }
    }
    console.log("Second star: " + acc);
    
})()