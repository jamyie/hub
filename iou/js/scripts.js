// js/scripts.js
document.addEventListener('DOMContentLoaded', () => {
  let total = 0;
  const totalEl = document.getElementById('cart-total');
  document.querySelectorAll('.add-cart').forEach(button => {
    button.addEventListener('click', () => {
      const price = parseFloat(button.getAttribute('data-price'));
      total += price;
      totalEl.textContent = total.toFixed(2);
    });
  });
});
