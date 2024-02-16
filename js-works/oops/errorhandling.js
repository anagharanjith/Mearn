// error handling

console.log("error handling");
try{
    expr="10-10*2+30"
    const result = eval (expr)
    console.log(`Result=${result}`);
}
catch{
    console.log("invalid expression");
}
finally{
    console.log("final block");
}