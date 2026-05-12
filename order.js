let cart = [];

// MAKE FUNCTIONS GLOBAL (IMPORTANT FOR onclick)
window.addToCart = function(name, price) {

  let item = cart.find(i => i.name === name);

  if (item) {
    item.qty += 1;
  } else {
    cart.push({ name, price, qty: 1 });
  }

  renderCart();
};

window.removeItem = function(index) {
  cart.splice(index, 1);
  renderCart();
};

// WAIT UNTIL PAGE FULLY LOADS
document.addEventListener("DOMContentLoaded", function () {

  const cartItems = document.getElementById("cartItems");
  const totalPrice = document.getElementById("totalPrice");
  const sendWhatsapp = document.getElementById("sendWhatsapp");


  function renderCart() {

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

      let itemTotal = item.price * item.qty;
      total += itemTotal;

      cartItems.innerHTML += `
        <div style="display:flex;justify-content:space-between;margin:8px 0;">
          <div>${item.name} x${item.qty}</div>
          <div>
            RM${itemTotal}
            <button onclick="removeItem(${index})">❌</button>
          </div>
        </div>
      `;
    });

    totalPrice.textContent = total.toFixed(2);
  }


  // WHATSAPP FIX
  sendWhatsapp.addEventListener("click", function () {

    if (cart.length === 0) {
      alert("Cart kosong!");
      return;
    }

    let msg = "🍔 *NEL'S BOGORRR ORDER*%0A%0A";
    let total = 0;

    cart.forEach(item => {

      let itemTotal = item.price * item.qty;
      total += itemTotal;

      msg += `• ${item.name} x${item.qty} = RM${itemTotal}%0A`;
    });

    msg += `%0A💰 *TOTAL: RM${total.toFixed(2)}*`;

    window.open(
      "https://wa.me/601114290341?text=" + encodeURIComponent(msg),
      "_blank"
    );
  });

});
