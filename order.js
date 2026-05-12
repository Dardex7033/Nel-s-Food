
// OPEN CHECKOUT
window.openCheckout = function () {

  document.getElementById("checkoutModal").style.display = "block";

  const checkoutItems = document.getElementById("checkoutItems");
  const checkoutTotal = document.getElementById("checkoutTotal");

  checkoutItems.innerHTML = "";

  let total = 0;

  cart.forEach(item => {

    let itemTotal = item.price * item.qty;
    total += itemTotal;

    checkoutItems.innerHTML += `
      <div>${item.name} x${item.qty} = RM${itemTotal}</div>
    `;
  });

  checkoutTotal.textContent = total.toFixed(2);
};


// CLOSE CHECKOUT
window.closeCheckout = function () {
  document.getElementById("checkoutModal").style.display = "none";
};


// SEND WHATSAPP
window.sendOrderWhatsApp = function () {

  let name = document.getElementById("custName").value;
  let phone = document.getElementById("custPhone").value;
  let address = document.getElementById("custAddress").value;

  if (!name || !phone || !address) {
    alert("Sila isi semua maklumat!");
    return;
  }

  let msg = `🍔 *NEL'S ORDER*%0A`;
  msg += `Nama: ${name}%0A`;
  msg += `Phone: ${phone}%0A`;
  msg += `Alamat: ${address}%0A%0A`;

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
};
});
