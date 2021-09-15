// 0 - 127
// F - LOWER HALF
// B - UPPER HALF

// 0 - 7
// L - LOWER HALF
// R - UPPER HALF

(function(){

    const fs = require('fs')
    let file = fs.readFileSync("dayFive.txt").toString('utf-8').split("\n")

    let rows:number[] = [0, 127]
    let columns:number[] = [0, 7]

    let row:number
    let column: number
    let id:number
    let highestId:number = 0
  
    for (let j: number = 0; j< file.length; j++) {

        // Rows
        let rowString:string = file[j].slice(0,7)
        for(let i:number = 0; i < rowString.length; i++) {
            if(rowString[i] === "F") rows = [rows[0], Math.floor(((rows[0]+rows[1]) / 2))]
            else if(rowString[i] === "B") rows = [Math.floor(((rows[0] + rows[1]) / 2)+1), rows[1]]
        }
        row = rows[0]
        rows = [0, 127]

        // Columns
        let columnString:string = file[j].slice(7, file[j].length)
        for(let i:number = 0; i < columnString.length; i++) {
            if(columnString[i] === "R") columns = [Math.ceil(((columns[0] + columns[1]) / 2)), columns[1]]
            else if(columnString[i] === "L") columns = [columns[0], Math.floor(((columns[0]+columns[1]) / 2))]
        }
        column = columns[0]
        columns = [0,7]

        id = row * 8 + column

        if (highestId < id) highestId = id
    }

    console.log(highestId)
    
})()