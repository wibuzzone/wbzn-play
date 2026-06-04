document.addEventListener('DOMContentLoaded', () => {
    const nominalItems = document.querySelectorAll('.nominal-item');
    const totalHargaEl = document.getElementById('total-harga');
    const btnBayar = document.getElementById('btn-bayar');
    let hargaTerpilih = 0;
    let kodeProduk = '';

    // Pilih Nominal
    nominalItems.forEach(item => {
        item.addEventListener('click', () => {
            nominalItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            
            hargaTerpilih = parseInt(item.dataset.harga);
            kodeProduk = item.dataset.kode;
            totalHargaEl.innerText = 'Rp ' + hargaTerpilih.toLocaleString('id-ID');
        });
    });

    // Proses Pembayaran & Kirim ke API
    if(btnBayar) {
        btnBayar.addEventListener('click', () => {
            const userId = document.getElementById('user_id').value;
            const zoneId = document.getElementById('zone_id').value;

            if(!userId || !zoneId || hargaTerpilih === 0) {
                alert('Lengkapi ID, Server, dan Pilih Nominal dulu!');
                return;
            }

            // PANGGIL FUNGSI DARI API.JS
            prosesTopup(userId, zoneId, kodeProduk, hargaTerpilih);
        });
    }
});
