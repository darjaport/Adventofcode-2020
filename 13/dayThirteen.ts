(function(){

    const fs = require('fs')
    let file = fs.readFileSync("dayThirteen.txt").toString('utf-8').split('\n').map((item:String) => item.split(','))

    interface Values {
        [key: number | string]: number
    }
    
    let p:Values = {}
   
    let departure:number = parseInt(file[0][0])
    let newArray = file[1].filter((item:string) => item !== "x")
    
    newArray.map((item:string) => {
        let num:number = parseInt(item)
        
        for (let i:number = num; i <= departure+num; i+=num) {
            if (i >= departure) p[num] = i
        }
    })

    let minsToWait = Math.min(...Object.values(p))
    let id:any = Object.keys(p).find((key:any) => p[key] === minsToWait)
    // console.log("First star: " + ((minsToWait - departure) * id));

    // Part 2
    let pNew:Values = {}
    file = file[1]
    
    let t:number = 1
    let i:number = 0
    let j:number

    while (i < file.length - 1) {
        while (file[i] === "x") i++
        j = i+1
        while (file[j] === "x" && j < file.length) j++
        t = j-i

        pNew[file[0]] = 0
        pNew[file[j]] = t
        i++
        j++
    }
            
    let length:number = Object.keys(p).length
    let checkNum:number = parseInt(newArray[0])

    while (true) {
        let count:number = 0
        t = 0

        newArray.map((item:string) => {
            t += pNew[item]
            if ((checkNum + t) % parseInt(item) === 0) count++
            else return
        })

        if (count === length) {
            break
        } else {
            checkNum += parseInt(newArray[0])
        }
        
    }
    console.log(checkNum)
})()