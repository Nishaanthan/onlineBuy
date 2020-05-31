//this is for display in header how many iteam carted

let cards = document.querySelectorAll(".add-to-cart");
var cartsColor = document.getElementById("cart_button");
var cardSpan = document.getElementById("number");

console.log(cards);

for (let i=0; i < cards.length; i++) {
    cards[i].addEventListener('click',()=> {
        cartsNumber(cards);
    })
}

function onLoadCartNumber() {
    cardSpan.style.color = "#fa7107";
    cartsColor.style.color = "#fa7107";
    let productNumbers = localStorage.getItem('cartsNumber');

    if (productNumbers){
        document.getElementById("number").textContent = productNumbers;
    }
}

function cartsNumber(cards) {
    cardSpan.style.color = "#fa7107";
    cartsColor.style.color = "#fa7107";
    console.log("worked",cards);

    let productNumbers = localStorage.getItem('cartsNumber');
    productNumbers = parseInt(productNumbers);

    if (productNumbers){
        localStorage.setItem('cartsNumber', productNumbers + 1);
        document.getElementById("number").textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartsNumber',1);
        document.getElementById("number").textContent = 1;
    }


}

onLoadCartNumber();





