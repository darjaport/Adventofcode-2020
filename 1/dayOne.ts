const fs = require('fs')

let file = fs.readFileSync("dayOne.txt").toString('utf-8')
let nums:string[] = file.split("\n");

let num:number = 2020;

function findNum(arr:string[]) {
    for(let i = 0; i<nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (parseInt(nums[i]) + parseInt(nums[j]) === num) {
                return (parseInt(nums[i]) * parseInt(nums[j]))
            }
        }
        parseInt(nums[i])
    }
}
console.log(findNum(nums))
// Answer: 956091