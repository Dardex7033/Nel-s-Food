window.sendOrderWhatsApp = function () {

  let name = document.getElementById("custName").value;
  let phone = document.getElementById("custPhone").value;
  let address = document.getElementById("custAddress").value;

  if (!name || !phone || !address) {
    alert("Sila isi semua maklumat!");
    return;
  }

  let msg = "";

  // HEADER
  msg += "🧾 *NEL'S BOGORRR RECEIPT*%0A";
  msg += "----------------------------%0A";

  // CUSTOMER INFO
  msg += `👤 Name: ${name}%0A`;
  msg += `📱 Phone: ${phone}%0A`;
  msg += `🏠 Address: ${address}%0A`;
  msg += "----------------------------%0A";

  msg += "🍔 *ITEMS*%0A";

  let total = 0;

  // ITEMS
  cart.forEach(item => {

    let itemTotal = item.price * item.qty;
    total += itemTotal;

    msg += `- ${item.name} x${item.qty}   RM${itemTotal}%0A`;
  });

  msg += "----------------------------%0A";

  // TOTAL
  msg += `💰 *TOTAL: RM${total.toFixed(2)}*%0A`;
  msg += "----------------------------%0A";
  msg += "🙏 Thank you for ordering!%0A";

  // SEND
  window.open(
    "https://wa.me/601114290341?text=" + encodeURIComponent(msg),
    "_blank"
  );
};
