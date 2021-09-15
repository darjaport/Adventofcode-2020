(function(){
    const fs = require('fs')
    let file = fs.readFileSync("dayFour.txt").toString('utf-8')
    let info:String[] = file.split('\n\n');
    let validPassports:number = 0
    let input:string[]

    for (let i:number = 0; i < info.length; i++) {

        input = info[i].replace( /\n/g, " " ).split(" ")
        
        if(input.length !== 8) {
            if (input.length === 7) {
                
                let is:boolean = false;
                for (let j:number = 0; j < input.length; j++) {
                    if (input[j].split(":")[0] === "cid") is = true
                }
                if(!is) validPassports++;
            }
        } else {
            validPassports++;
        }
    }

    console.log(validPassports)

})()