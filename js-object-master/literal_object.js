// there are three type of object here
// By object literal
// By creating instance of Object directly (using new keyword)
// By using an object constructor (using new keyword)


/// create literal object
const emp = {
    name: 'Md Al Mamun',
    roll: 21,
    reg: 115602
}

console.log(emp.name+" "+emp.reg+" "+emp.reg);


// also we can create instance of object
var obj = new Object();

obj.name = "Aysha Akter";
obj.city = "Comilla";
obj.upzilla = "Sadar";
obj.status = "Married";

console.table(obj)