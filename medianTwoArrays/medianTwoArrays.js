// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {

    // junto los 2 arrays
    let array = nums1.concat(nums2);

    // Acomodo el array con la logica para organizar bien los numeros negativos 
    array.sort((a, b) => a < b ? -1 : 1)

    // Divido el array entre par o no
    if (array.length % 2 === 0) {

        // Busco a los 2 numeros del medio para divirlos 
        let length = array.length / 2
        return ((array[length] + array[length - 1]) / 2)

    } else {
        
        // Busco al numero del medio para retonarlo 
        let length = array.length / 2
        return (array[length.toFixed() - 1])

    }
};

findMedianSortedArrays([3], [-2, -1])
// [3]
// [-2,-1]
// -1.00000

// [1,3]
// [-4,-2]
// -0.50000