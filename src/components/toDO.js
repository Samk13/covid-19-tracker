// create a page that you can search for problem and you find solution

const HackerRank = {
    p1 : {
        Objective: "In this challenge, we use a Regular Expression to evaluate a string. Check out the attached tutorial for more details",
        Task:"Complete the function in the editor below by returning a RegExp object, , that matches any string  that begins and ends with the same vowel. Recall that the English vowels are a, e, i, o, and u.",
        solution: function regexVar() {
            /*
             * Declare a RegExp object variable named 're'
             * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
             */
            let re = /^(a|e|i|o|u).*\1$/
            /*
             * Do not remove the return statement
             */
            return re;
        }
    },
    p2 : {
        Objective: "In this challenge, we practice looping over the characters of string. Check out the attached tutorial for more details.",
        Task:`Complete the vowelsAndConsonants function in the editor below. It has one parameter, a string, , consisting of lowercase English alphabetic letters (i.e., a through z). The function must do the following:
        1-First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in .
        2- Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in .
        `,
        solution: /*
        * Complete the vowelsAndConsonants function.
        * Print your output using 'console.log()'.
        */
       function vowelsAndConsonants(s) {
           const result = []
          for (let i=0; i < s.length; i++){
           let currentChar = s[i]
           if('aeiou'.includes(currentChar)){
               result.push(currentChar)
           }    
          }
          for (let i=0; i < s.length; i++){
           let currentChar = s[i]
           if(!'aeiou'.includes(currentChar)){
               result.push(currentChar)
           }    
          }
          return result.forEach(i => console.log(i))
       }
       
    }
}