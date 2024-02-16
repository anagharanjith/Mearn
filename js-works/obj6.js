// Task

products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

//1. print product name only    // can use both forEach() and map() methodes
console.log(`all productsname: ${products.map(product=>product.pName)}`);

//2. print all mobile details whose display is lcd  //filter()
console.log(`all mobile details whose display is lcd: ${products.filter(product=>product.display==='lcd').map
(product=>product.pName)}`);

//3. print 5g mobile phone name     //filter()
console.log(` print 5g mobile phone name: ${products.filter(product=>product.band==='5g').map
(product=>product.pName)}`);

//4. sort mobile based on price     //sort()
console.log("sort mobile based on price");
console.log(`${products.sort((p1,p2)=>p2.price-p1.price).map(product=>product.pName)}`);

//5. print costly mobile    //reduce()
console.log(`costly mobile: ${products.reduce((p1,p2)=>p1.price>p2.price?p1:p2).pName}`);

//6. print low cost mobile    //reduce()
console.log(` cheap cost mobile: ${products.reduce((p1,p2)=>p1.price<p2.price?p1:p2).pName}`);
