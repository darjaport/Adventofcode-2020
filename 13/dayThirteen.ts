(function(){

    const fs = require('fs')
    let file = fs.readFileSync("dayThirteen.txt").toString('utf-8').split('\n').map((item:String) => item.split(','))
   
    let departure:number = parseInt(file[0][0])
    file = file[1].filter((item:string) => item !== "x")
    let p:number[] = []

    file.map((item:string) => {
        let num:number = parseInt(item)
        
        for (let i:number = num; i <= departure+num; i+=num) {
            if (i >= departure) p.push(i)
        }
    })

    let id:number = parseInt(file[p.indexOf(Math.min(...p))])
    let min:number = p[p.indexOf(Math.min(...p))] - departure

    console.log(id*min);
    
})()