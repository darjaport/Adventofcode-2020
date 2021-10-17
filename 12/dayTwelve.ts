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

    let waypoint = {
        "E": 10,
        "S": 0,
        "W": 0,
        "N": 1
    }

    const setWaypoint = (num:number, instruction:String) => {

        if (num === 90) {
            if (instruction === "R") {
                waypoint = {
                    "E": waypoint["N"],
                    "S": waypoint["E"],
                    "W": waypoint["S"],
                    "N": waypoint["W"],
                }
            }
            else if (instruction === "L") {
                waypoint = {
                    "E": waypoint["S"],
                    "S": waypoint["W"],
                    "W": waypoint["N"],
                    "N": waypoint["E"],
                }
            }
        }

        else if (num === 180) {
            waypoint = {
                    "E": waypoint["W"],
                    "S": waypoint["N"],
                    "W": waypoint["E"],
                    "N": waypoint["S"],
            }
        }

        else if (num === 270) {
            if (instruction === "L") {
                waypoint = {
                    "E": waypoint["N"],
                    "S": waypoint["E"],
                    "W": waypoint["S"],
                    "N": waypoint["W"],
                }
            }
            else if (instruction === "R") {
                waypoint = {
                    "E": waypoint["S"],
                    "S": waypoint["W"],
                    "W": waypoint["N"],
                    "N": waypoint["E"],
                }
            }
        }
    }

    file.forEach((element:String )=> {
        instruction = element[0]
        number = parseInt(element.slice(1, element.length))

        switch(instruction) {
            case "F":
                initialState["E"] = initialState["E"] + waypoint["E"] * number
                initialState["N"] = initialState["N"] + waypoint["N"] *  number
                initialState["S"] = initialState["S"] + waypoint["S"] * number
                initialState["W"] = initialState["W"] + waypoint["W"] *  number
                break
            case "N":
                waypoint["N"] += number
                break
            case "S":
                waypoint["S"] += number
                break
            case "E":
                waypoint["E"] += number
                break
            case "W":
                waypoint["W"] += number
                break
            case "R":
                setWaypoint(number, instruction)
                break
            case "L":
                setWaypoint(number, instruction)
                break
            default:
                return
        }
    });
    

    let x:number = Math.abs(initialState["E"] - initialState["W"])
    let y:number = Math.abs(initialState["S"] - initialState["N"])
    let sum:number = x + y
    
    console.log("(" + x + ', ' + y + ')');
    console.log('Second star: ' + sum)
})()