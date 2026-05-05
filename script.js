
function scrollToMenu() {
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
}

function openOrderNow() {
  const modal = document.getElementById("orderModal");
  if (modal) {
    modal.style.display = "flex";
  }
}
let selectedItem = "";
let selectedPrice = 0;

function selectItem(name, price) {
  selectedItem = name;
  selectedPrice = price;

  document.getElementById("orderModal").style.display = "block";
  document.getElementById("selectedItem").innerText =
    `${name} - RM${price}`;
}

function sendWhatsApp() {
  let qty = document.getElementById("qty").value;
  let total = selectedPrice * qty;

  let message = `Order:
- ${selectedItem}
- Qty: ${qty}
- Total: RM${total}`;

  window.open(
    `https://wa.me/601114290341?text=${encodeURIComponent(message)}`
  );
}
