// instruction -> 
    // acc (increases/decreases), 
    // jmp (jumps to a new instruction), jmp +2 skip one, jmp +1 next
    // nop (No OPeration) it does nothing
// argument -> +4 / -20
// accumulator -> global value, starts at 0

(function(){
    const fs = require('fs')
    let file = fs.readFileSync("dayEight.txt").toString('utf-8').split('\n')

    let acc:number = 0
    let i:number = 0
    
    while (i < file.length) {
        let char:string = file[i].match("[+,-]")[0]
        let num:number = parseInt(file[i].match(/\d+/g)[0])
        
        switch(file[i].substring(0, 3)) {
            case "acc":
                console.log(acc)
                if (file[i].charAt(file[i].length - 1) === "*") return
                file[i] = file[i].concat("*")
                if (char === "+") acc += num
                else if (char === "-") acc -= num
                i++
                
                break
            case "jmp":
                console.log(acc)
                if (file[i].charAt(file[i].length - 1) === "*") return
                file[i] = file[i].concat("*")
                if (char === "+") i += num
                else if (char === "-") i -= num
                break
            case "nop":
                console.log(acc)
                if (file[i].charAt(file[i].length - 1) === "*") return
                file[i] = file[i].concat("*")
                i++
                break
            default:
                return
        }
    }
    console.log(acc);
})()