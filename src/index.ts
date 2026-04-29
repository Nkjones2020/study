//printing
console.log('Hello World');

// variables
let saless= 12345678;
let course ='Typescript'
let is_publish = true;

// Array
let numbers: number[] =[1,2,3];

// tuples
let user: [number,string] = [1,'Jones']

//Enum- to set constants
enum Size{small=1,medium=2,large=3}
let mySize: Size = Size.medium
console.log(mySize)

//functions
function calculateTax(income:number, taxYear:number){
     if(income<100000 && taxYear<2020)
         return income * 1.2;
     else
         return income * 1.3;
}

// calling the function
calculateTax(1000,2021)
console.log(calculateTax(1000,2022))


// objects
 let employee:{
    name:string,
    id:number,
 }

  let employee1 = {id:1,name:'Jones'}
 employee1.id = 9;
console.log(employee1);


// type aliases - similar to a parent class
type Employee = {
    name:string,
    id:number
}

let employee2: Employee = {name:'Chris', id: 29};

// union types- assigning types with more than one type
function kgTOLbs(weight:number| string){
   // narrowing - setting union types to a more specif type
    if (typeof weight == 'number')
        return weight * 2.2;
    else
        return parseInt(weight);
}
// calling function
 kgTOLbs(10);
console.log(kgTOLbs(10));


// literal(Exact/ Speciic ) types
type Quantity= 50 |100;
let Quanttity1:Quantity = 50;

type Metricc = 'cm'|'inch';
let measure:Metricc = 'cm';
