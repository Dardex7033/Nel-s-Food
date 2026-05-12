function orderNow() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let location = document.getElementById("location").value;

    let orderMessage =
`🍔 NEW ORDER - NEL'S BOGORRR

Nama: ${name}
No Telefon: ${phone}

🧾 Order Details:
- Burger Ayam x1 - RM8
- Fries x1 - RM5

💰 Total: RM13

📍 Penghantaran / Pickup: ${location}

Terima kasih! 🙌`;

    let whatsappURL = "https://wa.me/601114290341?text=" + encodeURIComponent(orderMessage);

    window.open(whatsappURL, "_blank");
}
