const wisataData = [
  { id: 1, name: 'Gili Areng', category: 'Pulau', desc: 'Gili Areng adalah salah satu pulau kecil (gili) tersembunyi di perairan sekitar Teluk Ekas, wilayah Desa Pemongkong, Kecamatan Jerowaru. Keindahan pantainya, air laut yang jernih, dan suasana alam yang tenang menjadikannya destinasi favorit bagi wisatawan yang menyukai petualangan dan relaksasi.', rating: 4.8, visitors: '1.240', img: 'https://images.unsplash.com/photo-1564460549828-f0219a31bf90?w=600&h=400&fit=crop&auto=format', jam: '07.00 – 17.00', tiket: 'Rp 10.000' },
  { id: 2, name: 'Makam TGH. M. Sibawaihi Mutawalli', category: 'Religi', desc: 'Makam TGH. M. Sibawaihi Mutawalli merupakan destinasi wisata religi yang sangat dikenal di Lombok Timur. Beliau dikenal sebagai ulama dan tokoh pendidikan yang berperan penting dalam dakwah serta pelestarian lingkungan di wilayah Desa Pemongkong.', rating: 4.7, visitors: '890', img: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=600&h=400&fit=crop&auto=format', jam: '08.00 – 18.00', tiket: 'Gratis' },
  { id: 3, name: 'Bukit Bakotinggi', category: 'Alam Pertanian', desc: 'Bukit Bakotinggi merupakan salah satu tempat yang memiliki nilai budaya dan keagamaan bagi masyarakat setempat. Kawasan ini biasanya digunakan sebagai tempat pelaksanaan kegiatan keagamaan dan menjadi lokasi dengan panorama alam yang indah.', rating: 4.6, visitors: '2.810', img: 'https://images.unsplash.com/photo-1513415756790-2ac1db1297d0?w=600&h=400&fit=crop&auto=format', jam: '06.00 – 18.00', tiket: 'Gratis' },
  { id: 4, name: 'Wisata Mangrove', category: 'Ekowisata', desc: 'Wisata Mangrove merupakan kawasan konservasi pesisir yang direncanakan sebagai destinasi wisata berbasis lingkungan. Lokasinya di Dusun Ujung Betok menjanjikan ekosistem mangrove yang penting untuk menjaga kelestarian pesisir dan biodiversitas.', rating: 4.5, visitors: '760', img: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600&h=400&fit=crop&auto=format', jam: '07.00 – 17.00', tiket: 'Rp 5.000' },
  { id: 5, name: 'Sunset Point', category: 'Ekowisata', desc: 'Sunset Point merupakan hidden gem di Desa Pemongkong yang menawarkan panorama matahari terbenam dengan suasana alami dan tenang. Tempat ini menjadi pilihan yang menarik bagi wisatawan yang mencari momen sunset yang indah.', rating: 4.5, visitors: '1.650', img: 'https://images.unsplash.com/photo-1593901138884-02ee723a96f7?w=600&h=400&fit=crop&auto=format', jam: '07.00 – 17.00', tiket: 'Rp 8.000' },
  { id: 6, name: 'Bukit Panorama', category: 'Perbukitan', desc: 'Bukit Panorama menawarkan pemandangan alam yang menawan dengan area terbuka yang cocok untuk bersantai, menikmati angin sepoi-sepoi, dan melihat hamparan lanskap Desa Pemongkong dari ketinggian.', rating: 4.9, visitors: '980', img: 'https://images.unsplash.com/photo-1588084188698-e626698fd8cb?w=600&h=400&fit=crop&auto=format', jam: '05.00 – 18.00', tiket: 'Rp 5.000' }
];

const umkmData = [
  { id: 1, name: 'Batik Sari Nusantara', owner: 'Ibu Sari Wulandari', category: 'Kerajinan Tangan', desc: 'UMKM batik lokal yang memproduksi batik tulis dan batik cap dengan motif khas Lombok dan inspirasi budaya Sasak.', produk: ['Batik Tulis', 'Batik Cap', 'Sarung', 'Selendang'], img: 'https://images.unsplash.com/photo-1590251869641-dd94fb569954?w=600&h=400&fit=crop&auto=format', omzet: 'Rp 8,5 jt/bln', berdiri: '1998' },
  { id: 2, name: 'Kerupuk Ulva', owner: 'Ibu Ulva', category: 'Kerajinan Bambu', desc: 'Produk anyaman bambu dan furnitur dengan sentuhan desain modern yang tetap memperhatikan kearifan lokal masyarakat desa.', produk: ['Furniture', 'Anyaman', 'Lampu Bambu', 'Dekorasi'], img: 'https://images.unsplash.com/photo-1604973104381-870c92f10343?w=600&h=400&fit=crop&auto=format', omzet: 'Rp 12 jt/bln', berdiri: '2005' },
  { id: 3, name: 'Dapur Mak Inah', owner: 'Ibu Suminah', category: 'Kuliner', desc: 'Kuliner rumah tangga yang menyajikan hidangan khas Lombok dengan cita rasa autentik dan bahan baku lokal.', produk: ['Pecel', 'Keripik Singkong', 'Dodol', 'Jamu Tradisional'], img: 'https://images.unsplash.com/photo-1539755530862-00f623c00f52?w=600&h=400&fit=crop&auto=format', omzet: 'Rp 5,2 jt/bln', berdiri: '2012' },
  { id: 4, name: 'Gerabah Tanah Liat', owner: 'Kelompok Ibu PKK', category: 'Keramik', desc: 'Produk gerabah dan souvenir berbahan tanah liat yang dibuat secara tradisional menjadi benda fungsional dan dekoratif.', produk: ['Pot Bunga', 'Vas', 'Piring Gerabah', 'Souvenir'], img: 'https://images.unsplash.com/photo-1590605095243-072811dbe64c?w=600&h=400&fit=crop&auto=format', omzet: 'Rp 3,8 jt/bln', berdiri: '2018' }
];

const stats = [
  { label: 'Destinasi Wisata', value: '6', icon: '🏔️' },
  { label: 'UMKM Aktif', value: '4', icon: '🏪' },
  { label: 'Pengunjung/Bulan', value: '6.680', icon: '👥' },
  { label: 'Omzet UMKM/Bln', value: 'Rp 89 jt', icon: '💰' }
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
      <span class="badge badge-right">${w.visitors} pengunjung</span>
    </div>
    <div class="card-body">
      <div class="card-title-row"><h3>${escapeHtml(w.name)}</h3>${starRating(w.rating)}</div>
      <p class="desc">${escapeHtml(w.desc || 'Belum ada deskripsi singkat untuk destinasi wisata ini.')}</p>
      <div class="details"><div class="details-inner"><div class="detail-grid">
        <div><div class="detail-label">Jam Buka</div><div class="detail-value">${w.jam}</div></div>
        <div><div class="detail-label">Tiket Masuk</div><div class="detail-value ticket">${w.tiket}</div></div>
      </div></div></div>
      <div class="card-footer">
        <div class="chips"><span class="chip">🕐 ${w.jam.split('–')[0]}</span><span class="chip orange">${w.tiket}</span></div>
        <span class="chevron green-text">${selected ? '▲' : '▼'}</span>
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
        <div class="chips"><span class="chip gold">💰 ${u.omzet}</span></div>
        <span class="chevron orange-text2">${selected ? '▲' : '▼'}</span>
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
      <h1>Wisata &<br><span>UMKM Desa</span></h1>
      <p>Temukan destinasi wisata alam dan produk unggulan UMKM Desa Pemongkong, Jerowaru — Lombok Timur. Dukung ekonomi lokal, lestarikan budaya Sasak.</p>
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

  document.querySelectorAll('[data-card]').forEach(card => card.addEventListener('click', () => {
    const [type, id] = card.dataset.card.split('-');
    selectedCard = selectedCard === Number(id) ? null : Number(id);
    if (activeTab !== type) activeTab = type;
    render();
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
