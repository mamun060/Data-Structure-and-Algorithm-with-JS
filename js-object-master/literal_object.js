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

// By using an Object constructor
function student(id, name, reg, city, subject){
    this.id = id;
    this.name = name;
    this.reg = reg;
    this.city = city;
    this.subject = subject;
}

let obj2 = new student(1001, "Raju" , 115602, "Dhaka", "CSE");

console.table(obj2)