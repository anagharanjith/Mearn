function add(...num){
    console.log(num);
    console.log(num.reduce((n1,n2)=>n1+n2));
}
add (10,20)
add(10,20,30)