var orderCount = 0;

function takeOrder(topping, crustType) {
  console.log('Order: ' + crustType + ' crust topped with ' + topping);
  orderCount = orderCount + 1;
}

function getSubTotal(itemCount) {
  return itemCount * 7.5;
}

function getTax() {
  return getSubTotal(orderCount) * 0.06;
}

function getTotal() {
  return getSubTotal(orderCount) + getTax();
}


takeOrder('bacon', 'thin');
takeOrder('pepperoni', 'regular');
takeOrder('pesto', 'thin');

console.log(getTotal());

var orderCount = 0;

function Pepperoni(){
  orderCount += 1;
  orderCoun = orderCount * 7.5;
  console.log( orderCount + ' Pizza de Queso y Pepperoni =' +  orderCoun + '€');
}

var orderCot = 0;

function palmitosja(){
  orderCot += 1;
  orderCou = orderCount * 8;
  console.log( orderCount + ' Pizza de Jamón y Palmitos =' +  orderCou + '€');
}
var ordercounte = orderCou + orderCoun;

function getSubTotal(itemCount){
  return itemCount *= ordercounte
}
function getTax() {
  return getSubTotal(ordercounte)* 0.06;
}
function getTotal() {
  return getSubTotal(ordercounte) + getTax();
}
 function gett {

 if (true) {
  console.log(getTotal());

} else {

}
}
