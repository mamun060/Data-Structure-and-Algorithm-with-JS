//Given two integer arrays nums1 and nums2, return an array of their intersection. 
// Each element in the result must be unique and you may return the result in any order.

// The intersection is performed between two arrays using filter method

const a = [1,2,2,1,3,4]
const b = [2,2,1,3,4]

function intersectionCheck(nums1, nums2){
    const setA = new Set(nums1);
    const setB = new Set(nums2);

    let intersectionArray  = [];
    for( let i of setB ){
        if(setA.has(i)) {
            intersectionArray.push(i)
        }
    }

    for( let j = 0 ;  j < intersectionArray.length ; j++){
        for(let k = 0; k < intersectionArray.length ; k++){
            if(intersectionArray[j] < intersectionArray[k]){
                let temp = intersectionArray[j];
                intersectionArray[j] = intersectionArray[k];
                intersectionArray[k] = temp
            }
        }
    }

    return intersectionArray;
}

const result = intersectionCheck(a, b);
console.log(result);