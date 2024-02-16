const Boleno = {
     price:"15 Lakhs",
     varient:["automatic","manual"]
}
const Glanza ={
    price:"17 Lakhs"
}
Glanza.__proto__=Boleno
console.log(Glanza.varient);