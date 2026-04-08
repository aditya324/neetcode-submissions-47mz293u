class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {


      let  res={}


        for (let s of strs){
            const sortedStr= s.split('').sort().join('')

            if(!res[sortedStr]){
                res[sortedStr]=[]
            }


            res[sortedStr].push(s)
        }

        return Object.values(res)
    }

    
}
