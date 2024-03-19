function strStr(haystack, needle){
    if(!needle){
        return 0
    }

    const needleLength = needle.length;
    const haystackLength = haystack.length;

    for ( let i = 0 ; i <= haystackLength - needleLength ; i++){
        if(haystack.substring(i, i + needleLength) === needle){
            return i;
        }
    }

    return -1;
}

const haystack = "sadbutsad";
const needle = "sad";
console.log(strStr(haystack, needle));

