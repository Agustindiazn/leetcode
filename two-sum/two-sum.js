

const twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (target == nums[j] + nums[i] && i != j) {
                const res = [i, j]
                return res
            }

        }
    }
};

console.log(twoSum([3, 2, 4], 6))

