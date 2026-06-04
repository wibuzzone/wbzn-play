// === PENGATURAN AKUN KAMU ===
const WBZONE_CONFIG = {
    // DATA SUPPLIER (Ambil di Digiflazz / VCGamers / Tokovoucher)
    SUPPLIER_API_KEY: "ISI_API_KEY_KAMU_DISINI",
    SUPPLIER_USERNAME: "ISI_USERNAME_KAMU_DISINI",
    SUPPLIER_URL: "https://api.digiflazz.com/v1/transaction", // Contoh pakai Digiflazz

    // DATA PEMBAYARAN (Ambil di Tripay / Xendit)
    PAYMENT_API_KEY: "ISI_API_PEMBAYARAN_DISINI",
    MERCHANT_CODE: "ISI_KODE_MERCHANT_DISINI"
};

// === FUNGSI UTAMA PROSES TOPUP ===
function prosesTopup(userId, zoneId, kodeProduk, harga) {
    alert(`Sistem WBZONE Memproses...\n\nID: ${userId}\nServer: ${zoneId}\nProduk: ${kodeProduk}\nHarga: Rp ${harga}\n\nData akan dikirim ke Supplier & Pembayaran.`);

    // Nanti di sini nambah kode nyambung ke API asli:
    // 1. Minta kode pembayaran QRIS ke Tripay
    // 2. Tampilkan QR Code ke pembeli
    // 3. Kalau sudah bayar, perintah dikirim ke Supplier buat kirim diamond
}
