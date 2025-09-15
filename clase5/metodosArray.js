const students = [
    {
        id: 1,
        name:"Carlos",
        age: 18
    },
    {
        id: 2,
        name:"Ivan",
        age: 17
    },
    {
        id:3,
        name:"Nacho",
        age: 19
    },
    {
        id: 4,
        name:"Alonso",
        age: 19
    },
    {
        id: 5,
        name:"coco",
        age: 21
    },
]

//find()--> encontrar un elemnto del array
const find19 =  students.find((element)=> element.age === 19 )
console.log(find19)

// push() --> añade un elemento al final de la lista
const newStudent = {id: 6,name:"saray", age: 19}
students.push(newStudent)
console.log(students)

// filter() --> busca todos los elementos que cumplen una condicion, retorna un array
const lista19 = students.filter((item)=> item.age === 19)
console.log(lista19)

//map() -->  retorna un nuevo array, con los cambios indicados
const newStudents = students.map((item)=>{
    const nuevo = item;
    nuevo.status =  true;
    return nuevo;
} )
console.log(newStudents)

//pop()--> elimina el ultimo elemento del array
newStudents.pop()
console.log(newStudents)

//elimina elementos del array (posicion donde quiero empezar a eliminar, cantidad de elementos a eliminar)
newStudents.splice(0,1)
console.log(newStudents)

//findIndex--> retorna la posicion de un elemento en el array
const posicionIvan =  newStudents.findIndex((element)=>element.name.toLowerCase() ==="ivan" )
//-1 significa  no está dentro del array
console.log(posicionIvan)