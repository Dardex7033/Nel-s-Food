const checks = document.querySelectorAll(".menu-check");
const qtys = document.querySelectorAll(".qty");
const totalPrice = document.getElementById("totalPrice");
const sendWhatsapp = document.getElementById("sendWhatsapp");

// CALCULATE
function calculate() {
  let total = 0;

  checks.forEach((c, i) => {
    if (c.checked) {
      const price = parseFloat(c.dataset.price);
      const qty = parseInt(qtys[i].value);
      total += price * qty;
    }
  });

  totalPrice.textContent = total.toFixed(2);
}

checks.forEach(c => c.addEventListener("change", calculate));
qtys.forEach(q => q.addEventListener("input", calculate));

// WHATSAPP SEND
sendWhatsapp.onclick = () => {
  let msg = "🍔 *NEL'S ORDER*%0A%0A";
  let total = 0;

  checks.forEach((c, i) => {
    if (c.checked) {
      const name = c.dataset.name;
      const price = parseFloat(c.dataset.price);
      const qty = parseInt(qtys[i].value);

      const itemTotal = price * qty;
      total += itemTotal;

      msg += `• ${name} x${qty} = RM${itemTotal}%0A`;
    }
  });

  msg += `%0A💰 TOTAL: RM${total.toFixed(2)}`;

  window.open(
    `https://wa.me/601114290341?text=${msg}`,
    "_blank"
  );
};
