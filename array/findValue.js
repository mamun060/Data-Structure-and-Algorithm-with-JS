const arr = [
    {
        id: 1,
        roll: 21,
        name: "Raju"
    },
    {
        id: 2,
        roll: 22,
        name: "Aysha"
    },
    {
        id: 3,
        roll: 23,
        name: "Popi"
    },
    {
        id: 4,
        roll: 24,
        name: "Munni"
    }
]


// function print2(value){
    //     value.forEach(element => {
        //         console.log(element.roll, element.name);
        //     });
// }


const arr2 =  ["Raju","Aysha","Popi","Munni"]

function findperson(h, w){
    let husband;
    let wife;
    for(let i = 0; i < arr2.length ; i++){
        if(arr2[i] === h){
            husband = arr2[i];
        } else if (arr2[i] === w){
            wife = arr2[i]
        }
    }
    console.log(`${husband} + ${wife} are good couple`)
}

findperson("Raju" , "Aysha")

// print2(arr)

// function print(e){
//     e.map((item)=>{
//         console.log(item.id)
//     })
// }

// print(arr)


