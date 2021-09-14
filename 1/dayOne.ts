(function(){
    const fs = require('fs')
    let file = fs.readFileSync("dayOne.txt").toString('utf-8')
    let nums:string[] = file.split("\n");

    let num:number = 2020;
    
    function findNum(arr:string[]) {
        for(let i = 0; i<nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                for (let k = j+1; k < nums.length; k++) {
                    if (parseInt(nums[i]) + parseInt(nums[j]) + parseInt(nums[k]) === num) {
                        return (parseInt(nums[i]) * parseInt(nums[j]) * parseInt(nums[k]))
                    }
                }
            }
        }
    }
    console.log(findNum(nums))
    // Answer: 956091
    // Answer: 79734368
}());