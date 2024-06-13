let products = [
    {name: "Tv", precio:731, stock:10},
    {name: "Sillon", precio:761, stock:10},
    {name: "Heladera", precio:73, stock:10}
]

for (let index = 0; index < products.length; index++) {
    console.log(`${products[index]. name} - precio : $${products[index].precio} - stock : ${products[index].stock}`);
}

products.pop()
console.log("-------------------------------------------------");
for (let index = 0; index < products.length; index++) {
    console.log(`${products[index]. name} - precio : $${products[index].precio} - stock : ${products[index].stock}`);
}