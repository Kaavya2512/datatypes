interface Person{
    name:string;
    age:number
    
}
interface Employee{
    empcode:number;
    designation:string;
    isFTE:boolean
}
type EmployeePerson = Person & Employee

let emppersonobj:EmployeePerson = {name:"sudha",age:30,empcode:1001,designation:"Manager",isFTE:true}
console.log(emppersonobj)