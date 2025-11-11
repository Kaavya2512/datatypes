//type Optional<T> = {
//   [K in keyof T]?: T[K];
// };
type ReadOnlyType<T> ={
   readonly [P in keyof T]:T[P]
}

interface User{
    id:number,
    name:string,
    age:number
}
interface employee{
    id:number
}
/*interface USer{
    readonly id:number,
    readonly name:string
}*/
type ReadOnlyUser = ReadOnlyType<User>
type ReadOnlyEmp = ReadOnlyType<employee>
const userVal: ReadOnlyUser ={
    id:100,
    name:"Saravanan",
    age:18
}

//userVal.age =19  //cannot change value of read-only ppty
