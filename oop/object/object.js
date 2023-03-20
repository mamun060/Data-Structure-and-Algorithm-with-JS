// object is blue print of class. I mean object is a especial type of class 

class student{
    // we know that is javascript class work by constructor method in a class
    constructor( Sname, roll, reg, address , department) {
        this.Sname = Sname;
        this.roll = roll;
        this.reg = reg;
        this.address = address;
        this.department = department;
    }
}

// So, lets start create object

const objectOne = new student("Md AL Mamun", 21, 115602, "Dhaka" , "CSE");
const objectO2 = new student("Md AL Mamun", 22, 115602, "Dhaka" , "CSE");
const object3 = new student("Md AL Mamun", 23, 115602, "Dhaka" , "CSE");
const object6 = new student("Md AL Mamun", 24, 115602, "Dhaka" , "CSE");
const object4 = new student("Md AL Mamun", 25, 115602, "Dhaka" , "CSE");
const object5 = new student("Md AL Mamun", 26, 115602, "Dhaka" , "CSE");

console.log(objectOne , objectO2, object3, object4, object5, object6);