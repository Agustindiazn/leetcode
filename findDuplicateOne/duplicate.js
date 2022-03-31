
const duplicate = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if(nums[i] === nums[j] && i !== j){
                return nums[i]
                break;
            }
            
        } 
    }
}
const nums = [1,3,4,2,2]
duplicate(nums)
