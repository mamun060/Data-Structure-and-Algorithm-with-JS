// some important array methods
// js concat() method combine one or more array and return new array

const arr1 = ["raju"]

const arr2 = [21];

const arr3 =[115602];

const arr4 = ['CSE']

var student = arr1.concat(arr2,arr3, arr4)
console.table(student);


// array copyWithing method copyWithin(target-element, start-element index, end element index) - mane aktah array tekhe arekta array ar maje kicu element copy kora
// mane start and end holo old array ar start element to end element porjonto copy korbe sei element index number
// target holo jeh new array ta copyWithin() return korbe seitar starting point like ai new array ar koi tekhe start hobe seita ar ki
var arr = ["Raju","Aysha","Popi","Munni"];
const finalSibling = arr.copyWithin(0, 1,3); // tar mane new array [0] te hobe Aysha and [1] hobe Popi
console.log(finalSibling);


// array entries() - holding the key value pairs for every value in the array. A key represents the index number carrying an item as its value
// Mane ai entries method ar kaj holo value key pairs wise array element gulare show korano
const newArr = ["Java", "Python" , "JS", "PHP", "C#" , "Golang" , "RUST", "C" , "C++", "Rody-Rails","Swift" ,"Dart"];
const finalEntries = newArr.entries();

// show object iterator value
for( item of finalEntries){
    console.log(item);
}
