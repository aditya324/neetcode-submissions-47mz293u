class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if (s.length !==t.length){
            return false;

        }



        let sSOrt=s.split("").sort().join()
        let tSOrt=t.split("").sort().join()

        return sSOrt==tSOrt
    }
}
