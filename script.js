// OPEN ORDER PAGE (NEW PAGE SYSTEM)
document.getElementById("openOrderPage").onclick = function () {
  window.location.href = "order.html";
};


// OPTIONAL: direct WhatsApp quick order (if you still want it)
function orderNow() {
  const message = "Hi, saya nak order makanan dari Nel's Bogorrr 🍔";

  const url = "https://wa.me/601114290341?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
}
