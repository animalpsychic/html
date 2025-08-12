(function(){
  // ======= PENGATURAN =======
  var showAd = true; // true = tampilkan iklan, false = sembunyikan
  var menuItems = [
    { text: "Home", link: "#" },
    { text: "Produk", link: "#" },
    { text: "Kontak", link: "#" }
  ];
  var faviconPath = 'https://raw.githubusercontent.com/animalpsychic/chatai/refs/heads/main/public/favicon.png'; // Ganti dengan URL favicon PNG/JPG
  var faviconType = 'image/png'; // Ubah ke 'image/jpeg' kalau pakai JPG/JPEG
  // ==========================

  // Pasang favicon
  var link = document.createElement('link');
  link.rel = 'icon';
  link.type = faviconType;
  link.href = faviconPath;
  document.head.appendChild(link);

  // CSS
  var css = `
    /* Header Menu */
    .top-menu {
      background: #222;
      color: #fff;
      display: flex;
      gap: 20px;
      padding: 10px 20px;
    }
    .top-menu a {
      color: #fff;
      text-decoration: none;
      font-weight: bold;
    }
    .top-menu a:hover {
      text-decoration: underline;
    }

    /* Floating Ad */
    .floating-ad {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      background: #ffcc00;
      color: #000;
      text-align: center;
      font-weight: bold;
      padding: 10px 40px 10px 10px;
      box-shadow: 0 -2px 8px rgba(0,0,0,0.15);
      z-index: 9999;
    }
    .floating-ad a {
      color: inherit;
      text-decoration: none;
    }
    .close-btn {
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
      background: #000;
      color: #fff;
      border: none;
      border-radius: 50%;
      width: 22px;
      height: 22px;
      font-size: 16px;
      line-height: 20px;
      text-align: center;
      cursor: pointer;
      z-index: 10001;
    }
  `;

  var style = document.createElement('style');
  style.innerHTML = css;
  document.head.appendChild(style);

  // Menu Header
  var menu = document.createElement('div');
  menu.className = 'top-menu';
  menu.innerHTML = menuItems.map(item => `<a href="${item.link}">${item.text}</a>`).join('');
  document.body.insertBefore(menu, document.body.firstChild);

  // Floating Ad
  if(showAd){
    var ad = document.createElement('div');
    ad.className = 'floating-ad';
    ad.innerHTML = `
      <button class="close-btn" onclick="this.parentElement.remove()">&times;</button>
      <a href="#" target="_blank">🔥 Promo Spesial! Diskon 50% hari ini!</a>
    `;
    document.body.appendChild(ad);
  }
})();


