class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false
        }
         let map1 = new Map()
         let map2 = new Map()
         for(let ss of s){
            map1.set (ss , (map1.get(ss)||0)+1)
            
         }
         for(let tt of t){
            map2.set (tt , (map2.get(tt)||0)+1)
            

         }
         for(let [char,count] of map1){
            if(map2.get(char)!== count){
                return false 
            }
         }
         return true 
    }
}
