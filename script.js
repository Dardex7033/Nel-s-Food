<script>
let qty = 1;
let price = 0;

// update total when menu changes
document.getElementById("menu").addEventListener("change", function() {
  price = parseInt(this.value);
  updateTotal();
});

function changeQty(amount) {
  qty += amount;
  if (qty < 1) qty = 1;
  document.getElementById("qty").innerText = qty;
  updateTotal();
}

function updateTotal() {
  let total = qty * price;
  document.getElementById("total").innerText = total;
}

function openForm() {
  document.getElementById("orderForm").style.display = "flex";
}

function closeForm() {
  document.getElementById("orderForm").style.display = "none";
}

function sendToWhatsApp() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let menu = document.getElementById("menu");
  let menuText = menu.options[menu.selectedIndex].text;
  let total = qty * price;

  let message = `🍔 *ORDER NEL'S BOGORRR*%0A%0A
👤 Nama: ${name}%0A
📞 Phone: ${phone}%0A%0A
🛒 Menu: ${menuText}%0A
🔢 Quantity: ${qty}%0A
💰 Total: RM${total}`;

  let url = "https://wa.me/601114290341?text=" + message;

  window.open(url, "_blank");
}
</script>
