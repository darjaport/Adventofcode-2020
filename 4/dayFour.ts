// (function(){
//     const fs = require('fs')
//     let file = fs.readFileSync("dayFour.txt").toString('utf-8')
//     let info:String[] = file.split('\n\n');
//     let validPassports:number = 0
//     let input:string[]

//     for (let i:number = 0; i < info.length; i++) {

//         input = info[i].replace( /\n/g, " " ).split(" ")
        
//         if(input.length !== 8) {
//             if (input.length === 7) {
                
//                 let valid:boolean = true
//                 let secondValid:boolean = true
//                 let arr:boolean[] = []
    
//                 for (let j:number = 0; j < input.length; j++) {

//                     if (input[j].split(":")[0] === "cid") {
//                         valid = false
//                     } else {
//                         arr.push(validation(input[j].split(":")[0], input[j].split(":")[1]))
//                     }
//                 }
                
//                 secondValid = arr.every(element => element === true)

//                 if(valid && secondValid) validPassports++
//             }
//         } else {
//             for (let j:number = 0; j < input.length; j++) {
//                 if (validation(input[j].split(":")[0], input[j].split(":")[1])) validPassports++
//             }
//         }
//     }

//     console.log(validPassports)

//     function validation(input:string, value:string) {
//         switch(input) {
//             case "byr":
//                 return parseInt(value) >= 1920 && parseInt(value) <= 2002
//                 break
//             case "iyr":
//                     return parseInt(value) >= 2010 && parseInt(value) <= 2020
//                 break
//             case "eyr":
//                 return parseInt(value) >= 2020 && parseInt(value) <= 2030
//                 break
//             case "hgt":
//                 let newValue:number = parseInt(value.replace(/[A-Z]/g, ''))
//                 if(value.replace(/[0-9]/g, '') === "cm") {
//                     return (newValue >= 150 && newValue <= 193)
//                 } else if(value.replace(/[0-9]/g, '') === "in") {
//                     return (newValue >= 59 && newValue <= 76)
//                 } else {
//                     return false
//                 }
//                 break
//             case "hcl":
//                 if (value.charAt(0) === "#" && value.length === 7) return true 
//                 else return false
//                 break
//             case "pid":
//                 if(value.charAt(0) === "0" && value.length === 9) return true
//                 else return false
//                 break
//             default:
//                 return true
//                 break

//         }
//     }

// })()
(function(){
    const fs = require('fs')
    let file = fs.readFileSync("dayFour.txt").toString('utf-8')
    let info:String[] = file.split('\n\n');
    let validPassports:number = 0
    let input:string[]

    for (let i:number = 0; i < info.length; i++) {

        input = info[i].replace( /\n/g, " " ).split(" ")
        let arr:boolean[] = []
        let validations: boolean
        
        if(input.length !== 8) {
            if (input.length === 7) {
                
                let isValid:boolean = false;
                let validations:boolean = false;
                
                for (let j:number = 0; j < input.length; j++) {
                    if (input[j].split(":")[0] === "cid") isValid = true
                    else arr.push(validation(input[j].split(":")[0], input[j].split(":")[1]))
                }

                validations = arr.every(element => element === true)
                arr = []
                
                if(validations && !isValid) validPassports++;
            }
        } else {
            for (let j:number = 0; j < input.length; j++) {
                arr.push(validation(input[j].split(":")[0], input[j].split(":")[1]))
            }
            validations = arr.every(element => element === true)
            if(validations) validPassports++;
            arr = []
        }
    }
    console.log(validPassports)

    function validation(input:string, value:string):boolean {
        switch(input) {
            case "byr":
                return parseInt(value) >= 1920 && parseInt(value) <= 2002
                break
            case "iyr":
                    return parseInt(value) >= 2010 && parseInt(value) <= 2020
                break
            case "eyr":
                return parseInt(value) >= 2020 && parseInt(value) <= 2030
                break
            case "hgt":
                let newValue:number = parseInt(value.replace(/[A-Z]/g, ''))
                if(value.replace(/[0-9]/g, '') === "cm") {
                    return (newValue >= 150 && newValue <= 193)
                } else if(value.replace(/[0-9]/g, '') === "in") {
                    return (newValue >= 59 && newValue <= 76)
                } else {
                    return false
                }
                break
            case "ecl":
                if (value === "amb" || value === "blu" || value === "brn" || value === "gry" || value === "grn" || value === "hzl" || value === "oth") return true
                else return false
                break
            case "hcl":
                if (value.charAt(0) === "#" && value.length === 7 && !(/[g-zG-Z]/g.test(value))) return true 
                else return false
                break
            case "pid":
                if(value.length === 9) return true
                else return false
                break
            default:
                return true
                break
        }

    }

})()