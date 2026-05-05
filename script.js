<script>
function openForm() {
  document.getElementById("orderForm").style.display = "flex";
}

function closeForm() {
  document.getElementById("orderForm").style.display = "none";
}
</script>

function sendToWhatsApp() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let order = document.getElementById("order").value;

  let message = `ORDER NEL'S BOGORRR 🍔%0A
Nama: ${name}%0A
Phone: ${phone}%0A
Order: ${order}`;

  let url = "https://wa.me/601114290341?text=" + message;

  window.open(url, "_blank");
}
</script>
