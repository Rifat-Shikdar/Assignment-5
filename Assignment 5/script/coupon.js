// console.log("connected");

/* function firstCard(){
    const firstCardField = document.getElementById('first-card-price');
    const firstCardValueText = firstCardField.innerText;
    const firstCard = parseFloat(firstCardValueText);
    const firstCardDecimal = firstCard.toFixed(2);
    console.log(firstCardDecimal);

    const cardNameField = document.getElementById('first-card-name');
    const firstCardNameValueText = cardNameField.innerHTML;

    const cardName = document.getElementById('first-card-name-span');
    cardName.innerHTML = firstCardNameValueText;
    

    const totalPriceSpan = document.getElementById('total-price-span');
    totalPriceSpan.innerText = firstCardDecimal;
}  */

// reuse-------------------------------------------------------

// function getPrice(priceId){
//     const totalPriceSpan = document.getElementById(priceId);
//     totalPriceSpan.innerText ;
// }



function firstCard() {
    // console.log('enter');
    const firstCardPrice = getClickedPrice('first-card-price');
    // console.log(firstCardPrice);
    const totalPriceSpan = document.getElementById('total-price-span');
    totalPriceSpan.innerText = firstCardPrice;

    totalPrice = totalPrice + parseFloat(firstCardPrice);
    updateTotalPrice();


    const firstCardName = getClickedName('first-card-name');
    nameArea(firstCardName);

}

function secondCard() {
    const secondCardPrice = getClickedPrice('second-card-price');
    // console.log(secondCardPrice);
    const totalPriceSpan = document.getElementById('total-price-span');
    totalPriceSpan.innerText = secondCardPrice;

    totalPrice = totalPrice + parseFloat(secondCardPrice);
    updateTotalPrice();


    const secondCardName = getClickedName('second-card-name');
    nameArea(secondCardName);
    // const cardName = document.getElementById('card-name-span');
    // cardName.innerHTML = secondCardName;

}

function thirdCard() {

    const thirdCardPrice = getClickedPrice('third-card-price');
    // console.log(thirdCardPrice);
    const totalPriceSpan = document.getElementById('total-price-span');
    totalPriceSpan.innerText = thirdCardPrice;

    totalPrice = totalPrice + parseFloat(thirdCardPrice);
    updateTotalPrice();


    const thirdCardName = getClickedName('third-card-name');
    nameArea(thirdCardName);

}
function fourthCard() {

    const fourthCardPrice = getClickedPrice('fourth-card-price');
    // console.log(fourthCardPrice);
    const totalPriceSpan = document.getElementById('total-price-span');
    totalPriceSpan.innerText = fourthCardPrice;

    totalPrice = totalPrice + parseFloat(fourthCardPrice);
    updateTotalPrice();

    const fourthCardName = getClickedName('fourth-card-name');
    nameArea(fourthCardName);

}
function fifthCard() {

    const fifthCardPrice = getClickedPrice('fifth-card-price');
    // console.log(fifthCardPrice);
    const totalPriceSpan = document.getElementById('total-price-span');
    totalPriceSpan.innerText = fifthCardPrice;

    totalPrice = totalPrice + parseFloat(fifthCardPrice);
    updateTotalPrice();


    const fifthCardName = getClickedName('fifth-card-name');
    nameArea(fifthCardName);

}
function sixthCard() {

    const sixthCardPrice = getClickedPrice('sixth-card-price');
    // console.log(sixthCardPrice);
    const totalPriceSpan = document.getElementById('total-price-span');
    totalPriceSpan.innerText = sixthCardPrice;

    totalPrice = totalPrice + parseFloat(sixthCardPrice);
    updateTotalPrice();

    const sixthCardName = getClickedName('sixth-card-name');
    nameArea(sixthCardName);

}




// common functions ----------------------------------
let totalPrice = 0; // Initialize total price

function updateTotalPrice() {
    const totalPriceSpan = document.getElementById('total-price-span');
    totalPriceSpan.innerText = totalPrice.toFixed(2);
    // console.log(totalPrice);

    const btnApply = document.getElementById('btn-apply');
    const btnPurchase = document.getElementById('btn-purchase');
    
    if (totalPrice > 200) {
        btnApply.disabled = false;
        
    }
    else{
        btnApply.disabled = true;
        
    }

    if (totalPrice > 0) {
        
        btnPurchase.disabled = false;
    }
    else{
       
        btnPurchase.disabled = true;
    }

}

function applyCoupon(){
    const applyCoupon = document.getElementById('coupon-code');
    const getCouponCode = applyCoupon.value;
    // console.log(getCouponCode);
    const getDiscount = document.getElementById('discount-span');
    const finalTotal = document.getElementById('grand-total-span');

    if(getCouponCode === 'SELL200'){
        const discountAmount = (totalPrice * 20) / 100 ;
        getDiscount.innerText = discountAmount.toFixed(2);


         const finalPrice = totalPrice - discountAmount;
         finalTotal.innerText = finalPrice.toFixed(2);

    }
    else{
        alert('Invalid Coupon Code')
    }
}

function getClickedPrice(clickedPriceId) {
    const clickedField = document.getElementById(clickedPriceId);
    const clickedValueText = clickedField.innerText;
    const value = parseFloat(clickedValueText);
    const cardPriceDecimal = value.toFixed(2);
    // console.log(cardPriceDecimal);


    return cardPriceDecimal;

}


function getClickedName(clickedNameId) {

    const cardNameField = document.getElementById(clickedNameId);
    const cardNameValueText = cardNameField.innerHTML;

    return cardNameValueText;

}

function nameArea(name) {
    console.log(name);
    const nameEntry = document.getElementById('card-name-span');

    const count = nameEntry.childElementCount;

    const p = document.createElement('p');
    p.innerHTML = `${count + 1}. ${name}`;
    nameEntry.appendChild(p);
    p.classList.add('my-2');
}

document.getElementById('btn-home').addEventListener('click', function(){
    location.reload();
});



