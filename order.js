function sendWhatsApp() {

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;

    let message =
`🍔 *NEL'S BOGORRR ORDER*

Nama: ${name}
No Tel: ${phone}

📍 Alamat: ${address}

🧾 Order:
- Burger Ayam x1 - RM8
- Fries x1 - RM5

💰 Total: RM13

Terima kasih 🙌`;

    let url = "https://wa.me/601114290341?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}
