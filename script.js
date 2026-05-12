// OPEN ORDER PAGE (NEW PAGE SYSTEM)
document.addEventListener("DOMContentLoaded", function () {

  const btn = document.getElementById("orderBtn");

  if (btn) {
    btn.addEventListener("click", function () {
      window.location.href = "order.html";
    });
  }
window.open("order.html", "_blank");
});
