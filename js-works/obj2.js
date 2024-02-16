var car ={
    name:"boleno",
    model:"hatch-back",
    manufacturer:"Maruti Suzuki",
    price:"13 lakh"
}

//display car name and its manufacturer
console.log(`car name: ${car.name}, manufacturer: ${car.manufacturer}`);

//check 'model' key is present then display its value

"model"in car && console.log(`car model : ${car.model}`);

//add 'varient' as automatic, manual
car.varient=["automatic","manual"]

//add color as red,white,blue,ash,black
car.color=["red","white","blue","ash","black"]
console.log(car);

// insert hybrid varient to the given car
car.varient.push("hybrid")
console.log(car);

// destructure object
const { name,model, price}= car
console.log(`car price : ${price}`);
// use "hasOwnProperty"
console.log(car.hasOwnProperty("name"));

console.log(Object.keys(car));
console.log(Object.values(car));
