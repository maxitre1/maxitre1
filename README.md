# Maç Yayın Merkezi

Basit ve statik bir web arayüzü ile canlı maç yayını, skor tablosu ve yaklaşan maç programı sunar. Tüm içerik önceden tanımlı olup herhangi bir ek bağımlılık gerektirmez.

## Özellikler
- **Canlı yayın bölümü:** YouTube iframe yerleşimi ve yayın üstü açıklama katmanı.
- **Skor tablosu:** Örnek maç için skor ve durum bilgisi otomatik animasyonla güncellenir.
- **Program filtresi:** Lig seçimiyle yaklaşan maçları filtreleyebilir, tarih ve stadyum bilgilerini görebilirsiniz.
- **Gerçek zamanlı saat:** Sayfanın üst kısmında canlı saat güncellenir.

## Kullanım
1. Dosyaları bir statik sunucuya veya doğrudan tarayıcıya açın:
   ```bash
   python -m http.server 8000
   ```
2. Tarayıcıda `http://localhost:8000` adresine giderek sayfayı görüntüleyin.

Tüm stil ve davranışlar `styles.css` ve `scripts.js` dosyalarında tutulur. İçeriği dilediğiniz takımlara veya maç tarihine göre güncelleyebilirsiniz.
