let car="fiat"
console.log(car);
//creating object and assing value
const cars={type:"flat", model:"500", color:"red"};
console.log(cars.type);
console.log(cars.color);
//creating object
const person={
  Name:"jack",
  Age:"23",
  Gender:"male"
};
console.log(person.Name);
console.log(person.Age);
//creating an object
const Details={};
//add properties
Details.Fname="will";
Details.Lnanme="jack";
Details.Age=12;
console.log(Details);

//using new keyword

//creating object
const person1=new Object();
//add propertise
person1.Fname="john";
person1.Lnanme="Deo";
console.log(person1.Lnanme);//calling object
console.log(person1["Fname"]);//calling object

//creating object
const man={
  fName:"snow",
  lName:"jennny"
};
let x=man;
x.fName="bra";
console.log(man.fName);