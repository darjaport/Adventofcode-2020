(function(){

    const fs = require('fs')
    let file = fs.readFileSync("dayTen.txt").toString('utf-8').split('\n')

    let dOne:number = 0
    let dThree:number = 0
    
    file = [0, ...file.map((x:string) => parseInt(x, 10)).sort(function(a:number, b:number){return a-b})]
    file = [...file, file[file.length - 1]+3]

    for(let i:number = 0; i < file.length; i++) {
        if (file[i+1] - file[i] === 1) dOne++
        if (file[i+1] - file[i] === 3) dThree++
    }
    

    console.log(dOne, dThree, dOne * dThree);
    
})()