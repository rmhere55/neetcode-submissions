class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map()
        for(let i = 0 ; i < nums.length ;i++){
            let compelet = target - nums[i]
            if(map.has(compelet)){
               return [ map.get(compelet),i]
            }
            map.set(nums[i],i)
        }
        return []
    }
}
