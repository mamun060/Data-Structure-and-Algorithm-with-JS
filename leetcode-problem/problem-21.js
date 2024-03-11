// merge two sorted list
const a = [1,2,4];
const b = [1,3,4];

function sortedArray(list1, list2){
    const list3 = [...list1, ...list2];
    // const list3 = list1.concat(list2);
    for( i = 0; i < list3.length ; i++){
        for(j=i ; j < list3.length ; j++){
            if(list3[i] > list3[j]){
                let temp = list3[i];
                list3[i] = list3[j];
                list3[j] = temp;
            }
        }
    }
    console.log(list3)
}



var mergeTwoLists = function (list1, list2) {
    if (list1 == null) {
        return list2
    };
    if (list2 == null) {
        return list1
    };
    
    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    }
    else {
        list2.next = mergeTwoLists(list1, l2.next);
        return list2;
    }
};


mergeTwoLists(a,b)