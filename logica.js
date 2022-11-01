const people = [
    {
        id: 1,
        name: 'Lucas',
        lastName: 'Dicaprio',
        age: 25,
        developer: ['react','vue'],
        city: 'London',
        work: true
    },
    {
        id: 2,
        name: 'David',
        lastName: 'Balus',
        age: 41,
        developer: ['react','net'],
        city: 'Zurich',
        work: false
    },
    {
        id: 3,
        name: 'Anne',
        lastName: 'Gomes',
        age: 17,
        developer: ['nodejs','react'],
        city: 'Paris',
        work: false
    },
    {
        id: 4,
        name: 'Mary',
        lastName: 'Zando',
        age: 28,
        developer: ['php','nodejs'],
        city: 'Madrid',
        work: false
    }
];

//includes('String',startindex)


// Find return one item
const found = people.find( person => person.name === 'Mary' || person.age <= 39); 
const found1 = people.find( person => person.work === true);     
const found2 = people.find(person => person.developer.includes('vue'));
// Combination SOME & INCLUDES (si ALGUNO de los elementos cumplen con el includes es true) 
const found3 = people.some(person => person.developer.includes('java')); 
const found4 = people.some(person => person.age === 28);
// Combination EVERY & INCLUDES (si TODOS los elementos cumplen con el includes es true) 
const found5 = people.every(person => person.developer.includes('react'));
const found6 = people.every(person => person.work === true);
// MAP new array , each iteration do a function and return result at new arrys
const found7 = people.map( person => person.name + " " + person.age);
// FILTER neu array, only items than pass the function
const found8 = people.filter(person => person.developer.includes('react',1));
const found9 = people.filter(person => person.work === undefined);
// REDUCE (en este caso crea una lista) Luego con el filter le quita los repetidos.
const found10 = people.reduce((acc, person) => {
    return [...acc, ...person.developer]
},[]).filter((person,index, arr) => index === arr.indexOf(person));
// REDUCE cuenta alguna cosa y lo pone en el acumulador que yo llamo acc
const found11 = people.reduce((acc, person) => {
    if(person.age <= 18){
       return acc = acc + 1
    }else{
        return acc
    }
},0); 
// SORT normal
const found13 = people
.sort(person => person.age);
// SORT con parametros de comparacion (a,b)
const found12 = people.sort((a,b) =>  {
    if(a.age > b.age){
        return 1
    }else if(a.age < b.age){
        return -1
    }else if(a.age = b.age ){
        return 0
    }
});

// SLICE recorta un trozo de un string o array (start to cut, [finish to cut ] ) Si ponemos negativos empezamos desde el final.
const found14 = people.slice(2);

//SPLICE Modifica origen y Añade o elimina elementos (start, deleteCount), añade1, añade2, etc...)
people.splice(0,1); // Elimina el primero
people.splice(0,0,"hola"); // inserta hola en el primer sitio y no elimina nada


//console.log(found15);
console.log(people);


//listar nombres en array nuevo con map
const namesOfTeam = people.map(person => `${person.name} ${person.lastName} `);
//console.log(namesOfTeam);

//Suma de edades con Reduce
const totalAge = people.reduce((acc,person) =>{
    return acc += person.age
},0);
//console.log(totalAge);

// Edades con forEach
let edadesTotal =  0;
[...people].forEach(person =>{
    edadesTotal += person.age 
})
//console.log(edadesTotal);

//Cuantos trabajan con forEach
let acc = 0
/* const numberWorkers = people.forEach(person => {
    person.work ? acc += 1 : console.log(`${person.name} No work`)  ;
    return acc;
}); */
//console.log(`Number of workers is: ${acc}`);

// Aguien se llama Mary? con includes
//const inMadrid = people.name.includes('Mary');
//console.log(`Alguien vive en Madrid? ${inMadrid}`);

//Eliminar el ultimo 
const deletedItem = people.pop();
//console.log(`Deleted item is: ${toString(deletedItem)}`);
//console.log(deletedItem);
//console.log(JSON.stringify(people));

