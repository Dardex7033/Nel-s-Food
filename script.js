function orderNow() {

    let message =
`🍔 NEL'S BOGORRR ORDER

Nama: -
No Tel: -

🧾 Order:
- Burger Ayam RM8
- Fries RM5

💰 Total: RM13

📍 Alamat: -

Terima kasih 🙌`;

    let url = "https://wa.me/601114290341?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}
