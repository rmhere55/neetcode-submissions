class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map()
        for(let i = 0 ; i < nums.length ; i++){
            let complet =  target-nums[i]
            if(map.has(complet)){
                return [map.get(complet),i]
            }
            map.set(nums[i],i)
        }
        return []
    }
}
