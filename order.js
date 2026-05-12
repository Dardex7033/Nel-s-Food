let cart = [];

window.addToCart = function(name, price) {

  let item = cart.find(i => i.name === name);

  if (item) {
    item.qty++;
  } else {
    cart.push({ name, price, qty: 1 });
  }

  updateCart(); // 🔥 MUST CALL THIS
};


function updateCart() {

  const cartItems = document.getElementById("cartItems");
  const totalPrice = document.getElementById("totalPrice");

  if (!cartItems || !totalPrice) return;

  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {

    let itemTotal = item.price * item.qty;
    total += itemTotal;

    cartItems.innerHTML += `
      <div style="display:flex;justify-content:space-between;margin:5px 0;">
        <div>${item.name} x${item.qty}</div>
        <div>RM${itemTotal}</div>
      </div>
    `;
  });

  totalPrice.textContent = total.toFixed(2);
}
  }


  sendWhatsapp.addEventListener("click", function () {

    if (cart.length === 0) {
      alert("Cart kosong!");
      return;
    }

    let msg = "🍔 *NEL'S BOGORRR ORDER";
    let total = 0;

    cart.forEach(item => {
      let itemTotal = item.price * item.qty;
      total += itemTotal;

      msg += `• ${item.name} x${item.qty} = RM${itemTotal}`;
    });

    msg += `💰 *TOTAL: RM${total.toFixed(2)}*`;

    window.open(
      "https://wa.me/601114290341?text=" + encodeURIComponent(msg),
      "_blank"
    );
  });

});
