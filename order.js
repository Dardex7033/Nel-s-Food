let cart = [];

const cartItems = document.getElementById("cartItems");
const totalPrice = document.getElementById("totalPrice");
const sendWhatsapp = document.getElementById("sendWhatsapp");


// ADD TO CART
function addToCart(name, price) {

  let item = cart.find(i => i.name === name);

  if (item) {
    item.qty += 1;
  } else {
    cart.push({ name, price, qty: 1 });
  }

  renderCart();
}


// REMOVE ITEM
function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}


// UPDATE CART UI + TOTAL
function renderCart() {

  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {

    let itemTotal = item.price * item.qty;
    total += itemTotal;

    cartItems.innerHTML += `
      <div style="display:flex;justify-content:space-between;margin:10px 0;">
        <div>
          ${item.name} x${item.qty}
        </div>

        <div>
          RM${itemTotal}
          <button onclick="removeItem(${index})">❌</button>
        </div>
      </div>
    `;
  });

  totalPrice.textContent = total.toFixed(2);
}


// WHATSAPP ORDER
sendWhatsapp.onclick = () => {

  let msg = "🍔 *NEL'S BOGORRR ORDER*%0A%0A";
  let total = 0;

  cart.forEach(item => {

    let itemTotal = item.price * item.qty;
    total += itemTotal;

    msg += `• ${item.name} x${item.qty} = RM${itemTotal}%0A`;
  });

  msg += `%0A💰 *TOTAL: RM${total.toFixed(2)}*`;

  window.open(
    "https://wa.me/601114290341?text=" + msg,
    "_blank"
  );
};
