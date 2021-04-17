
const decreaseNumber =(incdec, itemprice , single_product) => {
var product_total_amt = document.getElementById('product_total_amt');
var shipping_charge = document.getElementById('shipping_charge');
var total_cart_amt = document.getElementById('total_cart_amt');
var product_onepics_amt = document.getElementById(single_product);
	var itemval = document.getElementById(incdec);
	var itemprice = document.getElementById(itemprice);
	//console.log(itemprice.innerHTML);
	if(itemval.value <= 0){
		itemval.value = 0;
	}else{
		itemval.style.background = '#fff';
		itemval.style.color = '#111';
		itemval.value = parseInt(itemval.value) - 1;  
		itemprice.innerHTML = parseInt(product_onepics_amt.innerHTML) * parseInt(itemval.value);
product_total_amt.innerHTML  = parseInt(product_total_amt.innerHTML) - parseInt(product_onepics_amt.innerHTML);
total_cart_amt.innerHTML  = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
	}
}
const increaseNumber =(incdec, itemprice , single_product) => {
var product_total_amt = document.getElementById('product_total_amt');
var shipping_charge = document.getElementById('shipping_charge');
var total_cart_amt = document.getElementById('total_cart_amt');
var product_onepics_amt = document.getElementById(single_product);
	var itemval = document.getElementById(incdec);
	var itemprice = document.getElementById(itemprice);
	//console.log(itemprice.innerHTML);
	if(itemval.value >= 5){
		itemval.value = 5;
		alert('max 5 Allowed');
		itemval.style.background = 'red';
		itemval.style.color = 'white';
	}else{
		itemval.value = parseInt(itemval.value) + 1;
		itemprice.innerHTML = parseInt(product_onepics_amt.innerHTML) * parseInt(itemval.value);
product_total_amt.innerHTML  = parseInt(product_total_amt.innerHTML) + parseInt(product_onepics_amt.innerHTML);
total_cart_amt.innerHTML  = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);

	}
}

const  discount_code = () => {
	
var discountCode = document.getElementById('discount_code1');
let totalamtcurr = parseInt(total_cart_amt.innerHTML);
let error_trw = document.getElementById('error_trw');

if(discountCode.value === 'ABHI50'){
let newtotalamt = totalamtcurr - 50;
total_cart_amt.innerHTML = newtotalamt;
error_trw.innerHTML = "Hurray! code is valid";
}else{	
error_trw.style.color = 'red';
error_trw.innerHTML = "Try Again! Valid code is ABHI50";
}
}


function myWishList1() {
  var element1 = document.getElementById("a1");
  element1.classList.add("a3");
  alert("ADD TO WISHLIST")
}
function myWishList2() {
  var element2 = document.getElementById("a2");
  element2.classList.add("a3");
  alert("ADD TO WISHLIST")
}