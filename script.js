const wisataData = [
  { id: 1, name: 'Gili Areng', category: 'Pulau', desc: 'Gili Areng adalah salah satu pulau kecil (gili) tersembunyi di perairan sekitar Teluk Ekas, wilayah Desa Pemongkong, Kecamatan Jerowaru. Keindahan pantainya, air laut yang jernih, dan suasana alam yang tenang menjadikannya destinasi favorit bagi wisatawan yang menyukai petualangan dan relaksasi.', rating: 4.8, visitors: '1.240', img: 'img/gili-areng.jpeg', jam: '07.00 – 17.00', tiket: 'Rp 10.000', lat: -8.841137095143, lng: 116.46696040232918 },
  { id: 2, name: 'Makam TGH. M. Sibawaihi Mutawalli', category: 'Religi', desc: 'Makam TGH. M. Sibawaihi Mutawalli merupakan destinasi wisata religi yang sangat dikenal di Lombok Timur. Beliau dikenal sebagai ulama dan tokoh pendidikan yang berperan penting dalam dakwah serta pelestarian lingkungan di wilayah Desa Pemongkong.', rating: 4.7, visitors: '890', img: 'img/makam.jpeg', jam: '08.00 – 18.00', tiket: 'Gratis', lat: -8.851886917561972, lng: 116.46125794368024 },
  { id: 3, name: 'Bukit Bakotinggi', category: 'Religi', desc: 'Bukit Bakotinggi merupakan salah satu tempat yang memiliki nilai budaya dan keagamaan bagi masyarakat setempat. Kawasan ini biasanya digunakan sebagai tempat pelaksanaan kegiatan keagamaan dan menjadi lokasi dengan panorama alam yang indah.', rating: 4.6, visitors: '2.810', img: 'img/bukit.jpeg', jam: '06.00 – 18.00', tiket: 'Gratis', lat: -8.873051, lng: 116.474171 },
  { id: 4, name: 'Wisata Mangrove', category: 'Ekowisata', desc: 'Wisata Mangrove merupakan kawasan konservasi pesisir yang direncanakan sebagai destinasi wisata berbasis lingkungan. Lokasinya di Dusun Ujung Betok menjanjikan ekosistem mangrove yang penting untuk menjaga kelestarian pesisir dan biodiversitas.', rating: 4.5, visitors: '760', img: 'img/mangrove.jpg', jam: '07.00 – 17.00', tiket: 'Rp 5.000', lat: -8.841657, lng: 116.496544 },
  { id: 5, name: 'Sunset Point', category: 'Ekowisata', desc: 'Sunset Point merupakan hidden gem di Desa Pemongkong yang menawarkan panorama matahari terbenam dengan suasana alami dan tenang. Tempat ini menjadi pilihan yang menarik bagi wisatawan yang mencari momen sunset yang indah.', rating: 4.5, visitors: '1.650', img: 'img/sunset.jpg', jam: '07.00 – 17.00', tiket: 'Rp 8.000', lat: -8.856441, lng: 116.458011 },
{ id: 6, name: 'Gua Dalam', category: 'Ekowisata', desc: 'Gua dalam adalah wisata terbaik bagi penikmat pemandangan asli dari gua dalam yang terbentuk secara alami.', rating: 1000, visitors: '1.650', img: 'img/gua.jpg', jam: '07.00 – 17.00', tiket: 'Rp 8.000', lat: -8.856441, lng: 116.458011 }




];

const umkmData = [
  { id: 1, name: 'Terasi', owner: 'Masyarakat Desa Pemongkong', category: 'Olahan Pangan', desc: 'Terasi Tradisional Khas Inak Ita merupakan salah satu produk olahan pangan tradisional yang menjadi bagian dari potensi UMKM masyarakat setempat. Terasi ini dibuat menggunakan bahan utama udang rebon asli tanpa campuran bahan lain, sehingga memiliki cita rasa dan karakteristik yang khas.', produk: ['Terasi', 'Olahan Udang Rebon', 'Produk Lokal'], img: 'img/terasi.jpg', omzet: 'Rp 7 jt/bln', berdiri: '2010', lat: -8.8420, lng: 116.4950 },
  { id: 2, name: 'Kerupuk Ulva', owner: 'Masyarakat Desa Pemongkong', category: 'Olahan Laut', desc: 'Kerupuk Ulva merupakan salah satu produk olahan yang memanfaatkan hasil budidaya Ulva atau yang dikenal oleh masyarakat sebagai selada laut. Produk ini menjadi salah satu bentuk kreativitas masyarakat dalam mengolah hasil budidaya laut menjadi produk pangan yang memiliki nilai tambah.', produk: ['Kerupuk Ulva', 'Olahan Rumput Laut', 'Camilan Lokal'], img: 'img/kerupuk-ulva.jpg', omzet: 'Rp 9 jt/bln', berdiri: '2015', lat: -8.823820, lng: 116.487777 },
  { id: 3, name: 'Garam Halus', owner: 'Masyarakat Desa Pemongkong', category: 'Produksi Garam', desc: 'Garam halus merupakan salah satu bentuk kreativitas masyarakat dalam memanfaatkan sisa hasil produksi garam. Sisa tersebut kemudian diolah kembali sehingga menghasilkan garam halus yang dapat dimanfaatkan dan memiliki nilai ekonomi.', produk: ['Garam Halus', 'Bahan Pangan', 'Produk Tambak'], img: 'img/garam-halus.jpg', omzet: 'Rp 6 jt/bln', berdiri: '2012', lat: -8.826022, lng: 116.479403 },
  { id: 4, name: 'Tambak Garam', owner: 'Masyarakat Desa Pemongkong', category: 'Produksi Garam', desc: 'Tambak garam merupakan salah satu potensi usaha masyarakat yang terdapat di Desa Pemongkong. Kegiatan ini memanfaatkan kondisi geografis dan lingkungan pesisir yang mendukung proses produksi garam melalui pemanfaatan air laut dan energi matahari.', produk: ['Garam Tambak', 'Produksi Garam', 'Usaha Pesisir'], img: 'img/tambak-garam.jpeg', omzet: 'Rp 11 jt/bln', berdiri: '2008', lat: -8.836028, lng: 116.480734 },
  { id: 5, name: 'Anyaman Bambu', owner: 'Masyarakat Desa Pemongkong', category: 'Kerajinan', desc: 'Anyaman bambu merupakan salah satu bentuk kerajinan masyarakat yang memanfaatkan bambu sebagai bahan utama untuk membuat pagar. Kerajinan ini memiliki nilai fungsional sekaligus estetika karena dapat digunakan sebagai pembatas maupun pelengkap lingkungan rumah.', produk: ['Pagar Anyaman', 'Dekorasi', 'Kerajinan Bambu'], img: 'img/bambu.jpeg', omzet: 'Rp 4,5 jt/bln', berdiri: '2014', lat: -8.839325, lng: 116.480577 }
];

const stats = [
  { label: 'Destinasi Wisata', value: '5', icon: '🏔️' },
  { label: 'UMKM Aktif', value: '5', icon: '🏪' },
{ label: 'Potensi Desa', value: '10', icon: '🌿' }
];

let activeTab = 'wisata';
let selectedCard = null;

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }[char]));
}

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function openMaps(lat, lng, name) {
  const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving&destination_place_name=${encodeURIComponent(name)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

function starRating(rating) {
  let stars = '';
  for (let s = 1; s <= 5; s++) {
    const fill = s <= Math.round(rating) ? '#c98a0f' : '#d4c9a8';
    stars += `<svg viewBox="0 0 12 12" fill="${fill}" aria-hidden="true"><path d="M6 1l1.3 2.7 3 .4-2.2 2.1.5 3L6 7.8 3.4 9.2l.5-3L1.7 4.1l3-.4z"/></svg>`;
  }
  return `<span class="rating">${stars}<span class="rating-value">${rating}</span></span>`;
}

function wisataCard(w) {
  const selected = selectedCard === w.id;
  return `<article class="card wisata-card ${selected ? 'selected' : ''}" data-card="wisata-${w.id}">
    <div class="card-image"><img src="${w.img}" alt="${escapeHtml(w.name)}" loading="lazy">
      <span class="badge badge-green">${escapeHtml(w.category)}</span>
    </div>
    <div class="card-body">
      <div class="card-title-row"><h3>${escapeHtml(w.name)}</h3>${starRating(w.rating)}</div>
      <p class="desc">${escapeHtml(w.desc || 'Belum ada deskripsi singkat untuk destinasi wisata ini.')}</p>
      <div class="details"><div class="details-inner"><div class="product-title">Lokasi</div><div class="products"><span class="product">Desa Pemongkong</span></div></div></div>
      <div class="card-footer">
        <div class="chips"></div>
        <div style="display:flex;align-items:center;gap:8px">
          <button class="visit green" data-maps="${w.lat},${w.lng},${escapeHtml(w.name)}">⌖ Kunjungi</button>
          <span class="chevron green-text">${selected ? '▲' : '▼'}</span>
        </div>
      </div>
    </div>
  </article>`;
}

function umkmCard(u) {
  const selected = selectedCard === u.id;
  return `<article class="card umkm-card ${selected ? 'selected' : ''}" data-card="umkm-${u.id}">
    <div class="card-image" style="background:#e8d8c0"><img src="${u.img}" alt="${escapeHtml(u.name)}" loading="lazy">
      <span class="badge badge-orange">${escapeHtml(u.category)}</span>
      <span class="badge badge-right orange-text">Sejak ${u.berdiri}</span>
    </div>
    <div class="card-body">
      <div class="mb-1"><h3>${escapeHtml(u.name)}</h3><div class="owner">👤 ${escapeHtml(u.owner)}</div></div>
      <p class="desc" style="margin-top:12px">${escapeHtml(u.desc || 'Belum ada deskripsi untuk produk UMKM ini.')}</p>
      <div class="details"><div class="details-inner"><div class="product-title">Produk Unggulan</div><div class="products">${u.produk.map(p => `<span class="product">${escapeHtml(p)}</span>`).join('')}</div></div></div>
      <div class="card-footer">
        <div class="chips"></div>
        <div style="display:flex;align-items:center;gap:8px">
          <button class="visit orange" data-maps="${u.lat},${u.lng},${escapeHtml(u.name)}">⌖ Kunjungi</button>
          <span class="chevron orange-text2">${selected ? '▲' : '▼'}</span>
        </div>
      </div>
    </div>
  </article>`;
}

function contentSection() {
  const tabs = `<div class="tabs">
    <button class="tab ${activeTab === 'wisata' ? 'active' : ''}" data-tab="wisata">🏔️ Destinasi Wisata <span class="count">${wisataData.length}</span></button>
    <button class="tab ${activeTab === 'umkm' ? 'active' : ''}" data-tab="umkm">🏪 UMKM Lokal <span class="count">${umkmData.length}</span></button>
  </div>`;
  const cards = activeTab === 'wisata' ? wisataData.map(wisataCard).join('') : umkmData.map(umkmCard).join('');
  return `<section id="konten" class="container content-section">${tabs}<div class="card-grid">${cards}</div></section>`;
}

function header() {
  return `<header class="header">
    <div class="brand"><div class="brand-icon">🌴</div><div><div class="brand-title">Desa Pemongkong</div><div class="brand-sub">Kec. Jerowaru · Kab. Lombok Timur</div></div></div>
    <nav class="nav"><a href="#konten" data-scroll-content="wisata">Wisata</a><a href="#konten" data-scroll-content="umkm">UMKM</a><button class="btn-add" type="button" data-action="add">+ Tambah Data</button></nav>
  </header>`;
}

function hero() {
  return `<section class="hero"><div class="hero-grid"></div><div class="container hero-inner">
    <div class="hero-copy"><div class="eyebrow">Sistem Informasi Desa</div>
      <h1>Potensi Wisata &<br><span>UMKM Desa</span></h1>
      <p>Temukan potensi wisata alam dan produk unggulan UMKM Desa Pemongkong, Jerowaru — Lombok Timur. Dukung ekonomi lokal, lestarikan budaya Sasak.</p>
      <div class="hero-actions"><button class="btn-primary" data-action="explore">Jelajahi Desa</button><button class="btn-outline" data-action="wisata">Lihat Wisata</button></div>
    </div>
    <div class="stats">${stats.map(s => `<div class="stat"><div class="stat-icon">${s.icon}</div><div class="stat-value">${s.value}</div><div class="stat-label">${s.label}</div></div>`).join('')}</div>
  </div></section>`;
}

function footer() {
  return `<footer class="footer"><div class="footer-inner">
    <div class="footer-brand"><div class="footer-icon">🌿</div><div><div class="footer-title">Desa Pemongkong</div><div class="footer-sub">SISTEM INFORMASI DESA</div></div></div>
    <div class="footer-info">Data diperbarui: <span class="footer-date">Agustus 2026</span> · <span>Pemerintah Desa Pemongkong, Jerowaru, Lombok Timur</span></div>
    <div class="footer-nav"><a href="#konten" data-scroll-content="wisata">Wisata</a><a href="#konten" data-scroll-content="umkm">UMKM</a></div>
  </div></footer>`;
}

function render() {
  document.getElementById('app').innerHTML = header() + hero() + contentSection() + footer();
  bindEvents();
}

function bindEvents() {
  document.querySelectorAll('[data-tab]').forEach(btn => btn.addEventListener('click', () => {
    activeTab = btn.dataset.tab;
    selectedCard = null;
    render();
    document.getElementById('konten')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }));

  document.querySelectorAll('[data-card]').forEach(card => card.addEventListener('click', e => {
    if (e.target.closest('[data-maps]')) return;
    const [type, id] = card.dataset.card.split('-');
    selectedCard = selectedCard === Number(id) ? null : Number(id);
    if (activeTab !== type) activeTab = type;
    render();
  }));

  document.querySelectorAll('[data-maps]').forEach(btn => btn.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    const [lat, lng, ...nameParts] = btn.dataset.maps.split(',');
    openMaps(Number(lat), Number(lng), nameParts.join(',').trim());
  }));

  document.querySelector('[data-action="explore"]')?.addEventListener('click', () => scrollToId('konten'));

  document.querySelector('[data-action="wisata"]')?.addEventListener('click', () => {
    activeTab = 'wisata';
    selectedCard = null;
    render();
    document.getElementById('konten')?.scrollIntoView({ behavior: 'smooth' });
  });

  document.querySelectorAll('[data-scroll-content]').forEach(link => link.addEventListener('click', e => {
    e.preventDefault();
    const target = e.currentTarget.dataset.scrollContent;
    if (target === 'umkm' && activeTab !== 'umkm') {
      activeTab = 'umkm';
      selectedCard = null;
      render();
    } else if (target === 'wisata' && activeTab !== 'wisata') {
      activeTab = 'wisata';
      selectedCard = null;
      render();
    }
    document.getElementById('konten')?.scrollIntoView({ behavior: 'smooth' });
  }));

  document.querySelector('[data-action="add"]')?.addEventListener('click', () => alert('Fitur tambah data belum diaktifkan. Hubungkan tombol ini ke form/database desa.'));
}

render();
