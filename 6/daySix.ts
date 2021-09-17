(function(){

    const fs = require('fs')
    let file = fs.readFileSync("daySix.txt").toString('utf-8').split("\n\n")

    let groups:string[] = []
    let sum:number = 0

    file.forEach((element) => groups.push(element.split("\n").map((group) => group.split('')).flat()))
    groups.forEach(group => sum += [...new Set(group)].length)
    
    console.log(sum)
})()