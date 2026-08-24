const products = [
 { name: "Pen", price: 1.256, qty: 3 },
 { name: "Book", price: 12.5, qty: 2 },
 { name: "Cup", price: 4.999, qty: 5 },
];
const result = products.map((item)=>{
    // let a = Math.round(item.price*item.qty)
    let a = item.price*item.qty
    let b= a.toFixed(2)
    return `${item.name}: ${b}`
})
console.log(result);
