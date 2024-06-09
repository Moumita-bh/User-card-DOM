const cartContainer = document.getElementById('cart-container');

function renderCart() {
  cartContainer.innerHTML = '';
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.forEach((user, index) => {
    const cartCard = document.createElement('div');
    cartCard.className = 'cart-card';
    cartCard.innerHTML = `
      <h3>${user.name}</h3>
      <p>${user.email}</p>
      <button class="delete" onclick="removeFromCart(${index})">Delete</button>
    `;
    cartContainer.appendChild(cartCard);
  });
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

document.addEventListener('DOMContentLoaded', renderCart);
