/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const intersectionArr = []; 

    for (let i = 0; i < nums1.length; i++) {
        if (nums2.includes(nums1[i]) && !intersectionArr.includes(nums1[i])) {
            intersectionArr.push(nums1[i])
        }
    }
    return intersectionArr; 
};