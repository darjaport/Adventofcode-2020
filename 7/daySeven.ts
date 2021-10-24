(function(){

    const fs = require('fs')
    let file = fs.readFileSync("daySeven.txt").toString('utf-8').split('\n')
    const bags = new Set()

    let bagColor:string = "shiny gold"

    bags.add(bagColor)
    
    let count:number = 0
    let changes:boolean = true
    
    while (changes) {
        changes = false

        bags.forEach((element:any) => {
            file.map((line:string, index:number) => {
                let currBag:string = line.split(' ').slice(0,2).join(' ')
            
                if(line.includes(element) && currBag !== bagColor) {
                    count++
                    changes = true
                    bags.add(currBag)
                    file.splice(index, 1)
                }
            })
        })
    }
    console.log("First star: " + count);
})()