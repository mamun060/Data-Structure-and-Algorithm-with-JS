// function lengthOfLastWord(s){
//     if ( s.length < 0 ){
//         return 0;
//     }

//     const parts = s.split(" ");
//     const singlePartIndex = parts.length - 1;
//     const singlePartValue = parts[singlePartIndex];
    
//     return singlePartValue.length
// }


function lengthOfLastWord(s){
     const words = s.trim().split(" ");
     return words[words.length - 1].length
}

const s = "   fly me   to   the moon  "

console.log(lengthOfLastWord(s))