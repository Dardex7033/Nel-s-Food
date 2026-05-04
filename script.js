function openOrderForm() {
    let items = document.querySelectorAll('.menu-item');
    let summaryText = "";
    let total = 0;
    let hasOrder = false;

    items.forEach(item => {
        let name = item.getAttribute('data-name');
        let price = parseFloat(item.getAttribute('data-price'));
        let qty = parseInt(item.querySelector('.qty').value);

        if (qty > 0) {
            let subtotal = price * qty;
            summaryText += <p>${name} x ${qty} = RM${subtotal}</p>;
            total += subtotal;
            hasOrder = true;
        }
    });

    if (!hasOrder) {
        alert("Sila pilih sekurang-kurangnya satu menu.");
        return;
    }

    summaryText += <h4>TOTAL: RM${total}</h4>;
    document.getElementById('summary').innerHTML = summaryText;
    document.getElementById('orderModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('orderModal').style.display = 'none';
}

function sendWhatsApp() {
    let name = document.getElementById('custName').value;
    if (name === "") {
        alert("Sila masukkan nama anda.");
        return;
    }

    let items = document.querySelectorAll('.menu-item');
    let orderDetails = *PESANAN BARU (NEL'S BOGORRR)*\n\n;
    orderDetails += Nama Pelanggan: ${name}\n;
    orderDetails += --------------------------\n;

    let total = 0;
    items.forEach(item => {
        let itemName = item.getAttribute('data-name');
        let price = parseFloat(item.getAttribute('data-price'));
        let qty = parseInt(item.querySelector('.qty').value);

        if (qty > 0) {
            let subtotal = price * qty;
            orderDetails += - ${itemName} (x${qty}): RM${subtotal}\n;
            total += subtotal;
        }
    });

    orderDetails += --------------------------\n;
    orderDetails += *TOTAL KESELURUHAN: RM${total}*;

    let phone = "601114290341";
    let url = https://wa.me/${phone}?text=${encodeURIComponent(orderDetails)};
    
    window.open(url, '_blank');
}