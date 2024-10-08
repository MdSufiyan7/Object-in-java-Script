//At restaurant you ate:1 dal rs 100, 2 roti rs10 each, 1 icecream rs30, calculate and display the final bill
let dal=100;
let roti=10;
let icecream=30;
let finalBill=(dal+(2*roti)+icecream);
console.log(`rs`+finalBill);

//calculate 18% gst, on iphone15 Rs79,990 and 2 airPord pro Rs24990 each
let iphone15=79990
let airPord=24990
let totalBill=(iphone15)+(2*airPord);
console.log(`Rs${totalBill}`);
let gst=(totalBill)+((18/100)*totalBill);
console.log(`The total bill after 18% gst is Rs${gst}`);
console.log(Math.round(5.7890));
