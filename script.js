<script>
document.addEventListener("DOMContentLoaded", function () {

  let qty = 1;
  let price = 0;

  const menu = document.getElementById("menu");

  if (menu) {
    menu.addEventListener("change", function () {
      price = parseInt(this.value) || 0;
      updateTotal();
    });
  }

  function updateTotal() {
    let total = qty * price;
    document.getElementById("total").innerText = total;
  }

  window.changeQty = function (amount) {
    qty += amount;
    if (qty < 1) qty = 1;
    document.getElementById("qty").innerText = qty;
    updateTotal();
  };

  window.openForm = function () {
    document.getElementById("orderForm").style.display = "flex";
  };

  window.closeForm = function () {
    document.getElementById("orderForm").style.display = "none";
  };

  window.sendToWhatsApp = function () {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let menuSelect = document.getElementById("menu");

    let menuText = menuSelect.options[menuSelect.selectedIndex]?.text || "";
    let total = qty * price;

    let message = `🍔 *ORDER NEL'S BOGORRR*%0A%0A
👤 Nama: ${name}%0A
📞 Phone: ${phone}%0A%0A
🛒 Menu: ${menuText}%0A
🔢 Quantity: ${qty}%0A
💰 Total: RM${total}`;

    let url = "https://wa.me/601114290341?text=" + message;

    window.open(url, "_blank");
  };

});
</script>
