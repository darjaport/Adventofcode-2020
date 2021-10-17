(function(){

    const fs = require('fs')
    let file = fs.readFileSync("dayTwelve.txt").toString('utf-8').split('\n')
    
    let instruction:String
    let number:number
    
    let direction:String = "E"
    let sides:String[] = ["E", "S", "W", "N"]

    let initialState = {
        "E": 0,
        "S": 0,
        "W": 0,
        "N": 0
    }

    const setSide = (num:number, instruction:String) => {
        let index:number = sides.indexOf(direction)

        if (num === 90) {
            if (instruction === "R") {
                if (index < sides.length - 1) index++
                else if (index >= sides.length - 1) index = 0
            }
            else if (instruction === "L") {
                if (index > 0) index--
                else if (index <= 0) index = sides.length - 1
            }
        }

        else if (num === 180) {
            if (sides[index] === "E") index = 2
            else if (sides[index] === "S") index = 3
            else if (sides[index] === "W") index = 0
            else if (sides[index] === "N") index = 1
        }

        else if (num === 270) {
            if (instruction === "L") {
                if (index < sides.length - 1) index++
                else if (index >= sides.length - 1) index = 0
            }
            else if (instruction === "R") {
                if (index > 0) index--
                else if (index <= 0) index = sides.length - 1
            }
        }

        return sides[index]
    }

    file.forEach((element:String )=> {
        instruction = element[0]
        number = parseInt(element.slice(1, element.length))

        switch(instruction) {
            case "F":
                initialState[direction] += number
                break
            case "N":
                initialState["N"] += number
                break
            case "S":
                initialState["S"] += number
                break
            case "E":
                initialState["E"] += number
                break
            case "W":
                initialState["W"] += number
                break
            case "R":
                direction = setSide(number, instruction)
                break
            case "L":
                direction = setSide(number, instruction)
                break
            default:
                return
        }
    });
    

    let x:number = Math.abs(initialState["E"] - initialState["W"])
    let y:number = Math.abs(initialState["S"] - initialState["N"])
    let sum:number = x + y
    
    console.log("(" + x + ', ' + y + ')');
    console.log('First star: ' + sum)
})()