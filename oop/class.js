// Object oriented Programming core concept is , object , class, abustruction, polymorphism, inheritance, encapsulation

// now class

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

    print(){
        return `${this.Sname} -- ${this.roll} -- ${this.reg} -- ${this.address} -- ${this.department} `;
    }
}

// So, lets start create object

const objectOne = new student("Md AL Mamun", 21, 115602, "Dhaka" , "CSE");
objectOne.print();

console.log(objectOne, objectOne.print("Sonya Akter"));

// console.log(objectOne);