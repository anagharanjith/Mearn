// Task

//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,0],
    [5,'tiger',20,30],
    [6,'unibic',60,20],
    [7,'good day',70,20]
]

//1. display all product name    // for each()

console.log('----------------all product name-------------');
products.forEach(product=>console.log(product[1]))


//2. display product whose price < Rs.50    // filter()

console.log('-----------------product whose price < Rs.50-------------');
products.filter(product=>product[2]<50).forEach(product=>console.log(product[1]))

//3. print price of oreo           // find()

console.log('-----------------price of oreo--------------');
oreo=products.find(product=>product[1]=='oreo')
console.log(`price of oreo: ${oreo[2]}`);

//4. print costly product name      // reduce()

console.log('-----------------print costly product name -------------');
costly=products.reduce((p1,p2)=>p1[2]>p2[2]?p1:p2)
console.log(`costly product: ${costly[1]}`);

//5. display out of stock product     // filter()

console.log('-----------------ut of stock product  -------------');
products.filter(product=>product[3]==0).forEach(product=>console.log(product[1]))

//6. sort products based on stock in decsending order     // sort()

console.log('sort products based on stock in decsending order');
console.log('-----------------');
products.sort((p1,p2)=>p2[3]-p1[3]).forEach(product=>console.log(product[1]))

// 7. print product having maximum available stock    // reduce()

console.log('product having maximum available stock');
result=products.reduce((p1,p2)=>p1[3]>p2[3]?p1:p2)
console.log(`-------product ${result[1]} has maximum available stock with value : ${result[3]}---`);


//8. is there any product can be purchased by Rs. 10     // some()

console.log(`--------- is there any product can be purchased by Rs. 10  ${products.some(product=>product[2]<=10)?
'yes available ': 'no available at the given range' }`);

//9. Is there any product in the range of 10 to 30        // some()
console.log(`-----------------Is there any product in the range of 10 to 30: ${products.some(product=>product[2]>=10 && product[2]<=30)?'yes available'
: 'no available'} `);

//10. print all products in the range of 10 to 30       // filter()

console.log('print all products in the range of 10 to 30');
products.filter(product=>product[2]>=10&&product[2]<=30).forEach(product=>console.log(product[1]))

//11. print total stock of all products   // map()

console.log(`total stock of all products : ${products.map(product=>product[3]).reduce((s1,s2)=>s1+s2)}`);