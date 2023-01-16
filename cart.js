const cartItemsWrap = document.querySelector('.cart-cards');
const cartItemsSection = document.querySelector('.cart-items');
console.log(cartItemsSection);


window.addEventListener('click', function (event) {
    if (event.target.hasAttribute('data-cart')) {

        const card = event.target.closest('.products-item');
        cartItemsSection.style.display = 'block';

        const productInfo = {
            id: card.dataset.id,
            imgSource: card.querySelector('.products-item-photo').getAttribute('src'),
            title: card.querySelector('.products-item-title').innerText,
            price: card.querySelector('.products-item-price span').innerText,
            color: card.querySelector('.product-item-color').innerText,
            size: card.querySelector('.product-item-size').innerText,
            quantity: card.querySelector('.product-item-quantity').innerText
        }

        const itemInCart = cartItemsWrap.querySelector(`[data-id="${productInfo.id}"]`);

        if (itemInCart) {
            const counterElement = itemInCart.querySelector('.cart-item-quantity span');
            counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.quantity);

            const sumElement = itemInCart.querySelector('.item-price');
            sumElement.innerText = parseInt(sumElement.innerText) + parseInt(productInfo.price);


        } else {

            const cartTitle = `<h2 class="cart-items-title">Cart Items</h2>`

            const cartItem = `
<div class="cart-item" data-id="${productInfo.id}">
<div class="cart-item-image">
    <img src="${productInfo.imgSource}" alt="">
</div>
<div class="cart-item-txt">
    <h1 class="cart-item-title">${productInfo.title}</h1>
    <p class="cart-item-price">Price: <span>$</span> <span class="item-price">${productInfo.price}</span></p>
    <p class="cart-item-color">Color: ${productInfo.color}</p>
    <p class="cart-item-size">Size: ${productInfo.size}</p>
    <p class="cart-item-quantity">Quantity: <span>${productInfo.quantity}</span></p>
</div>
<img data-close src="img/close-icon.svg" alt="" class="cart-item-close">
</div>`

            cartItemsWrap.insertAdjacentHTML('beforeend', cartItem);

        }

    }

});


window.addEventListener('click', function (event) {
    if (event.target.hasAttribute('data-close')) {
        const currentCard = event.target.closest('.cart-item');
        currentCard.remove();
    }

});
