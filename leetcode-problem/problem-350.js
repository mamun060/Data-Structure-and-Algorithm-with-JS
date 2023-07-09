//Given two integer arrays nums1 and nums2, return an array of their intersection. 
// Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// The intersection is performed between two arrays using filter method

const a = [4,9,5], b = [9,4,9,8,4];

function intersectionCheck(nums1, nums2){
    let intersectionArray  = [];
    
    for (let i = 0; i < nums1.length; i++) {
        if(nums2.includes(nums1[i])){
            intersectionArray.push(nums1[i])
            nums2.splice(nums2.indexOf(nums1[i]), 1)
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