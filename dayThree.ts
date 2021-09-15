(function(){
    const fs = require('fs')
    let file = fs.readFileSync("dayThree.txt").toString('utf-8')

    let grid:String[] = (file.split("\n"));
    
    let right: number = 0;
    let down: number = 0;
    let trees:number = 0;

    for (let i:number = 1; i < grid.length; i++) {
        right += 3
        right = right % grid[i].length
        if (grid[i].charAt(right) === "#") trees++
        
    }

    console.log(trees);

})()