function orderNow() {

    let message =
`🍔 NEL'S BOGORRR ORDER
(Delivery Minimum Rm20)

Nama: 

No Tel:

Alamat :

🧾 Order:


💰 Total: 


Terima kasih 🙌`;

    let url = "https://wa.me/601114290341?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}
