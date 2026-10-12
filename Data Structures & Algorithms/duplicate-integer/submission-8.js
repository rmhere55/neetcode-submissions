class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let set = new Set(nums).size
        if(nums.length !== set){
            return true
        }
        return false 
    }
}
