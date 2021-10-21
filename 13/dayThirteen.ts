(function(){

    const fs = require('fs')
    let file = fs.readFileSync("dayThirteen.txt").toString('utf-8').split('\n').map((item:String) => item.split(','))
   
    let departure:number = parseInt(file[0][0])
    file = file[1].filter((item:string) => item !== "x")
    
    interface Values {
        [key: number]: number
    }
    
    let p:Values = {}

    file.map((item:string) => {
        let num:number = parseInt(item)
        
        for (let i:number = num; i <= departure+num; i+=num) {
            if (i >= departure) p[num] = i
        }
    })

    let minsToWait = Math.min(...Object.values(p))
    let id:any = Object.keys(p).find((key:any) => p[key] === minsToWait)
    
    console.log("First star: " + ((minsToWait - departure) * id));
    
})()