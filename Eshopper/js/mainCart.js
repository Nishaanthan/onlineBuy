//thi is for addToChart in table
if (document.readyState ==='loading') {
    document.addEventListener('DOMContentLoaded',ready)
} else {
    ready();
}
function ready() {
    let removeCart = document.querySelectorAll(".cart_delete");
    for (let i = 0; i < removeCart.length; i++) {
        removeCart[i].addEventListener('click', removeCartItem)
    }
    var addToCartButtons = document.getElementsByClassName('add-to-cart')
    for (var i = 0; i < addToCartButtons.length; i++) {
        addToCartButtons[i].addEventListener('click', addToCartClicked)
    }
    var quantityInputs = document.getElementsByClassName('cart_quantity_input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

}
function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addItemToCart(title, price, imageUrl) {
    var cartRow = document.createElement('tbody')
    cartRow.classList.add('cart-inclued')
    var cartItems = document.getElementsByClassName('cart-item')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText === title) {
            alert('This item is already added to the cart')
            return
        }
    }
    cartRow.innerHTML = `<tr>
        <td class="cart_product">
            <a href=""><img width="100px" height="100px" border="5px" src="${imageUrl}" alt=""></a>
        </td>
        <td class="cart_d       escription">
            <h4><a href="">${title}</a></h4>       
        </td>
        <td class="cart_price">
            <p>${price}</p>
        </td>
        <td class="cart_quantity">
            <div class="cart_quantity_button">
                <a class="cart_quantity_up" href=""> + </a>
                <input class="cart_quantity_input" type="text" name="quantity" value="1" autocomplete="off" size="2">
                <a class="cart_quantity_down" href=""> - </a>
            </div>
        </td>
        <td class="cart_total">
            <p class="cart_total_price">Rs 590</p>
        </td>
        <td class="cart_delete">
            <a class="cart_quantity_delete"><i class="fa fa-times"></i></a>
        </td>
    </tr>`
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('cart_delete')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('cart-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('price')[0].innerText
    var imageUrl = shopItem.getElementsByClassName('cart-item-image')[0].src
    console.log(title,price,imageUrl);
    addItemToCart(title, price, imageUrl)
    updateCartTotal()

}

function removeCartItem(event) {
    var button = event.target
    button.parentElement.parentElement.remove()
}

function updateCartTotal() {
    var cardItemConteiner = document.getElementById('cart-items')[0]
    var cartRow = cardItemConteiner.getElementById('total_area')

    for (let i =0; i < cartRow.length; i++) {
        var cartRow = cartRow[i]
        var priceElement = cartRow.getElementById('cart-total-price')[0]
        var qualityElement = cartRow.getElementById('cart_quantity_input')[0]
        var price = parseFloat(priceElement.innerText.replace('Rs','' ))
        var quantity = qualityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = 'Rs' + total
}

