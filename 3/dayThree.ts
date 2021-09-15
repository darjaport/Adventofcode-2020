(function(){
    const fs = require('fs')
    let file = fs.readFileSync("dayThree.txt").toString('utf-8')

    let grid:String[] = (file.split("\n"));

    function sumTrees(rightNew:number, downNew:number):number {
        let right: number = 0;
        let trees:number = 0;
        
        for(let i:number = downNew; i < grid.length; i += downNew) {
            right += rightNew
            right = right % grid[i].length
            
            if (grid[i].charAt(right) === "#") trees++
        }

        return trees
    }

    console.log(sumTrees(1,1)*sumTrees(3,1)*sumTrees(5,1)*sumTrees(7,1)*sumTrees(1,2))

})()