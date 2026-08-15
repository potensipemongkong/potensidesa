const markers = [
  {id:1,x:28,y:35,type:'wisata',name:'Curug Seribu'},
  {id:2,x:55,y:22,type:'wisata',name:'Sawah Bertingkat'},
  {id:3,x:72,y:48,type:'wisata',name:'Bukit Panorama'},
  {id:4,x:42,y:58,type:'umkm',name:'Batik Bu Sari'},
  {id:5,x:62,y:70,type:'umkm',name:'Kerajinan Pak Hadi'},
  {id:6,x:20,y:62,type:'umkm',name:'Kuliner Mak Inah'},
  {id:7,x:48,y:42,type:'fasilitas',name:'Balai Desa'},
  {id:8,x:35,y:75,type:'fasilitas',name:'Mushola Al-Falah'},
  {id:9,x:80,y:30,type:'wisata',name:'Hutan Pinus'}
];

const wisataData = [
  {id:1,name:'Curug Seribu',category:'Air Terjun',desc:'Air terjun bertingkat yang dikelilingi hutan lebat dengan pemandangan alam yang memukau. Cocok untuk wisata alam dan fotografi.',rating:4.8,visitors:'1.240',img:'https://images.unsplash.com/photo-1564460549828-f0219a31bf90?w=600&h=400&fit=crop&auto=format',jam:'07.00 – 17.00',tiket:'Rp 10.000',lat:-8.8412,lng:116.4978},
  {id:2,name:'Sawah Bertingkat',category:'Alam Pertanian',desc:'Hamparan sawah terasering indah yang membentang di lereng bukit. Pemandangan terbaik saat musim tanam dan panen.',rating:4.6,visitors:'2.810',img:'https://images.unsplash.com/photo-1513415756790-2ac1db1297d0?w=600&h=400&fit=crop&auto=format',jam:'06.00 – 18.00',tiket:'Gratis',lat:-8.8385,lng:116.5021},
  {id:3,name:'Bukit Panorama',category:'Perbukitan',desc:'Puncak bukit dengan pemandangan 360° seluruh wilayah desa dan lembah sekitarnya. Spot terbaik untuk sunrise.',rating:4.9,visitors:'980',img:'https://images.unsplash.com/photo-1588084188698-e626698fd8cb?w=600&h=400&fit=crop&auto=format',jam:'05.00 – 18.00',tiket:'Rp 5.000',lat:-8.8361,lng:116.5063},
  {id:4,name:'Hutan Pinus',category:'Ekowisata',desc:'Hutan pinus seluas 12 hektar dengan jalur trekking, area kemah, dan spot foto yang instagramable di antara pepohonan tinggi.',rating:4.5,visitors:'1.650',img:'https://images.unsplash.com/photo-1593901138884-02ee723a96f7?w=600&h=400&fit=crop&auto=format',jam:'07.00 – 17.00',tiket:'Rp 8.000',lat:-8.8338,lng:116.5110}
];

const umkmData = [
  {id:1,name:'Batik Sari Nusantara',owner:'Ibu Sari Wulandari',category:'Kerajinan Tangan',desc:'Usaha batik tulis dan cap tradisional yang sudah berdiri sejak 1998. Menggunakan pewarna alami dari tanaman sekitar desa.',produk:['Batik Tulis','Batik Cap','Sarung','Selendang'],img:'https://images.unsplash.com/photo-1590251869641-dd94fb569954?w=600&h=400&fit=crop&auto=format',omzet:'Rp 8,5 jt/bln',berdiri:'1998',lat:-8.8401,lng:116.5005},
  {id:2,name:'Kerajinan Bambu Pak Hadi',owner:'Bapak Hadi Santoso',category:'Kerajinan Bambu',desc:'Pengrajin bambu yang memproduksi berbagai perabot dan kerajinan dari bambu lokal. Produk telah dipasarkan hingga ke kota besar.',produk:['Furniture','Anyaman','Lampu Bambu','Dekorasi'],img:'https://images.unsplash.com/photo-1604973104381-870c92f10343?w=600&h=400&fit=crop&auto=format',omzet:'Rp 12 jt/bln',berdiri:'2005',lat:-8.8425,lng:116.5038},
  {id:3,name:'Dapur Mak Inah',owner:'Ibu Suminah',category:'Kuliner',desc:'Usaha kuliner makanan khas desa dengan resep turun-temurun. Menyajikan masakan tradisional dan oleh-oleh khas daerah.',produk:['Pecel','Keripik Singkong','Dodol','Jamu Tradisional'],img:'https://images.unsplash.com/photo-1539755530862-00f623c00f52?w=600&h=400&fit=crop&auto=format',omzet:'Rp 5,2 jt/bln',berdiri:'2012',lat:-8.8448,lng:116.4992},
  {id:4,name:'Gerabah Tanah Liat',owner:'Kelompok Ibu PKK',category:'Keramik',desc:'Kelompok usaha ibu-ibu PKK yang memproduksi gerabah dan keramik dari tanah liat lokal dengan motif khas desa.',produk:['Pot Bunga','Vas','Piring Gerabah','Souvenir'],img:'https://images.unsplash.com/photo-1590605095243-072811dbe64c?w=600&h=400&fit=crop&auto=format',omzet:'Rp 3,8 jt/bln',berdiri:'2018',lat:-8.8437,lng:116.5055}
];

const stats = [
  {label:'Destinasi Wisata',value:'4',icon:'🏔️'},
  {label:'UMKM Aktif',value:'12',icon:'🏪'},
  {label:'Pengunjung/Bulan',value:'6.680',icon:'👥'},
  {label:'Omzet UMKM/Bln',value:'Rp 89 jt',icon:'💰'}
];

const colors = {wisata:'#2d7a52',umkm:'#c4531f',fasilitas:'#c98a0f'};

let activeTab = 'wisata';
let selectedMarker = null;
let selectedCard = null;

function escapeHtml(value){
  return String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch]));
}

function scrollToId(id){
  document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
}

function openMaps(lat,lng,name){
  const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving&destination_place_name=${encodeURIComponent(name)}`;
  window.open(url,'_blank','noopener,noreferrer');
}

function starRating(rating){
  let stars = '';
  for(let s=1;s<=5;s++){
    const fill = s <= Math.round(rating) ? '#c98a0f' : '#d4c9a8';
    stars += `<svg viewBox="0 0 12 12" fill="${fill}" aria-hidden="true"><path d="M6 1l1.3 2.7 3 .4-2.2 2.1.5 3L6 7.8 3.4 9.2l.5-3L1.7 4.1l3-.4z"/></svg>`;
  }
  return `<span class="rating">${stars}<span class="rating-value">${rating}</span></span>`;
}

function mapSvg(){
  const rice = [0,1,2,3,4].map(i => `<rect x="48" y="${18+i*4}" width="18" height="3.5" rx=".5" fill="${i%2===0?'#70b868':'#88c880'}" opacity=".7"/>`).join('');
  const forest = [[78,28],[82,26],[80,32],[84,30],[86,28],[76,34],[82,22]].map(([cx,cy]) => `<circle cx="${cx}" cy="${cy}" r="3" fill="#2d7a52" opacity=".6"/>`).join('');
  const markerSvg = markers.map(m => {
    const selected = selectedMarker?.id === m.id;
    const c = colors[m.type];
    return `<g class="marker" data-marker="${m.id}">
      ${selected?`<circle cx="${m.x}" cy="${m.y}" r="7" fill="${c}" opacity=".2"/>`:''}
      <circle class="marker-core" cx="${m.x}" cy="${m.y}" r="${selected?4.5:3.2}" fill="${c}" stroke="white" stroke-width=".8"/>
      ${m.type==='wisata'?`<path d="M${m.x},${m.y-6} L${m.x-2.5},${m.y-2} L${m.x+2.5},${m.y-2} Z" fill="${c}" opacity=".4"/>`:''}
    </g>`;
  }).join('');
  return `<svg viewBox="0 0 100 90" class="map-svg" role="img" aria-label="Peta ilustrasi Desa Pemongkong">
    <defs>
      <linearGradient id="terrainGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#b8ddb0"/><stop offset="60%" stop-color="#c8e8c0"/><stop offset="100%" stop-color="#a8d0a0"/></linearGradient>
      <linearGradient id="riverGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#7bbfd8"/><stop offset="100%" stop-color="#5aabcc"/></linearGradient>
    </defs>
    <rect width="100" height="90" fill="url(#terrainGrad)"/>
    <ellipse cx="75" cy="25" rx="22" ry="18" fill="#98c890" opacity=".6"/>
    <ellipse cx="20" cy="30" rx="16" ry="14" fill="#90c088" opacity=".5"/>
    <ellipse cx="50" cy="15" rx="20" ry="12" fill="#a0cc98" opacity=".6"/>
    ${rice}${forest}
    <path d="M5,45 Q20,38 35,48 Q50,58 65,52 Q80,46 95,55" stroke="url(#riverGrad)" stroke-width="1.8" fill="none" opacity=".8"/>
    <path d="M5,46.5 Q20,39.5 35,49.5 Q50,59.5 65,53.5 Q80,47.5 95,56.5" stroke="#7bbfd8" stroke-width=".6" fill="none" opacity=".4"/>
    <path d="M48,42 L28,35 M48,42 L55,22 M48,42 L72,48 M48,42 L42,58 M48,42 L62,70 M48,42 L20,62" stroke="#d4c070" stroke-width=".8" stroke-dasharray="2,1" opacity=".8"/>
    <path d="M48,42 L80,30 M48,42 L35,75" stroke="#d4c070" stroke-width=".6" stroke-dasharray="1.5,1" opacity=".6"/>
    <rect x="44" y="38" width="8" height="8" rx="1" fill="#e8d8b0" opacity=".6"/>
    ${markerSvg}
  </svg>`;
}

function mapSection(){
  const legend = [['wisata','Wisata Alam'],['umkm','UMKM Lokal'],['fasilitas','Fasilitas Desa']].map(([key,label]) =>
    `<div class="legend-item"><span class="dot" style="background:${colors[key]}"></span>${label}</div>`).join('');
  const mobileLegend = [['wisata','Wisata'],['umkm','UMKM'],['fasilitas','Fasilitas']].map(([key,label]) =>
    `<div class="mobile-legend-item"><span class="dot" style="width:8px;height:8px;background:${colors[key]}"></span>${label}</div>`).join('');
  const tooltip = selectedMarker ? `<div class="map-tooltip">
    <div class="tooltip-type" style="color:${colors[selectedMarker.type]}">${selectedMarker.type==='wisata'?'Wisata Alam':selectedMarker.type==='umkm'?'UMKM Lokal':'Fasilitas'}</div>
    <div class="tooltip-name">${escapeHtml(selectedMarker.name)}</div>
    <button class="tooltip-close" data-action="close-marker">Tutup ×</button>
  </div>` : '';
  return `<section id="peta" class="container map-section">
    <div class="section-heading">
      <div><div class="map-eyebrow">Pemetaan Wilayah</div><h2>Peta Desa Interaktif</h2></div>
      <div class="legend">${legend}</div>
    </div>
    <div class="map-wrap">${mapSvg()}${tooltip}<div class="mobile-legend">${mobileLegend}</div></div>
  </section>`;
}

function wisataCard(w){
  const selected = selectedCard === w.id;
  return `<article class="card wisata-card ${selected?'selected':''}" data-card="wisata-${w.id}">
    <div class="card-image"><img src="${w.img}" alt="${escapeHtml(w.name)}" loading="lazy">
      <span class="badge badge-green">${escapeHtml(w.category)}</span>
      <span class="badge badge-right">${w.visitors} pengunjung</span>
    </div>
    <div class="card-body">
      <div class="card-title-row"><h3>${escapeHtml(w.name)}</h3>${starRating(w.rating)}</div>
      <p class="desc">${escapeHtml(w.desc)}</p>
      <div class="details"><div class="details-inner"><div class="detail-grid">
        <div><div class="detail-label">Jam Buka</div><div class="detail-value">${w.jam}</div></div>
        <div><div class="detail-label">Tiket Masuk</div><div class="detail-value ticket">${w.tiket}</div></div>
      </div></div></div>
      <div class="card-footer">
        <div class="chips"><span class="chip">🕐 ${w.jam.split('–')[0]}</span><span class="chip orange">${w.tiket}</span></div>
        <div style="display:flex;align-items:center;gap:8px"><button class="visit green" data-maps="${w.lat},${w.lng},${escapeHtml(w.name)}">⌖ Kunjungi</button><span class="chevron green-text">${selected?'▲':'▼'}</span></div>
      </div>
    </div>
  </article>`;
}

function umkmCard(u){
  const selected = selectedCard === u.id;
  return `<article class="card umkm-card ${selected?'selected':''}" data-card="umkm-${u.id}">
    <div class="card-image" style="background:#e8d8c0"><img src="${u.img}" alt="${escapeHtml(u.name)}" loading="lazy">
      <span class="badge badge-orange">${escapeHtml(u.category)}</span>
      <span class="badge badge-right orange-text">Sejak ${u.berdiri}</span>
    </div>
    <div class="card-body">
      <div class="mb-1"><h3>${escapeHtml(u.name)}</h3><div class="owner">👤 ${escapeHtml(u.owner)}</div></div>
      <p class="desc" style="margin-top:12px">${escapeHtml(u.desc)}</p>
      <div class="details"><div class="details-inner"><div class="product-title">Produk Unggulan</div><div class="products">${u.produk.map(p=>`<span class="product">${escapeHtml(p)}</span>`).join('')}</div></div></div>
      <div class="card-footer">
        <div class="chips"><span class="chip gold">💰 ${u.omzet}</span></div>
        <div style="display:flex;align-items:center;gap:8px"><button class="visit orange" data-maps="${u.lat},${u.lng},${escapeHtml(u.name)}">⌖ Kunjungi</button><span class="chevron orange-text2">${selected?'▲':'▼'}</span></div>
      </div>
    </div>
  </article>`;
}

function contentSection(){
  const tabs = `<div class="tabs">
    <button class="tab ${activeTab==='wisata'?'active':''}" data-tab="wisata">🏔️ Destinasi Wisata <span class="count">${wisataData.length}</span></button>
    <button class="tab ${activeTab==='umkm'?'active':''}" data-tab="umkm">🏪 UMKM Lokal <span class="count">${umkmData.length}</span></button>
  </div>`;
  const cards = activeTab==='wisata' ? wisataData.map(wisataCard).join('') : umkmData.map(umkmCard).join('');
  return `<section id="konten" class="container content-section">${tabs}<div class="card-grid">${cards}</div></section>`;
}

function header(){
  return `<header class="header">
    <div class="brand"><div class="brand-icon">🌴</div><div><div class="brand-title">Desa Pemongkong</div><div class="brand-sub">Kec. Jerowaru · Kab. Lombok Timur</div></div></div>
    <nav class="nav"><a href="#peta">Peta</a><a href="#wisata" data-scroll-content="wisata">Wisata</a><a href="#umkm" data-scroll-content="umkm">UMKM</a><button class="btn-add" type="button" data-action="add">+ Tambah Data</button></nav>
  </header>`;
}

function hero(){
  return `<section class="hero"><div class="hero-grid"></div><div class="container hero-inner">
    <div class="hero-copy"><div class="eyebrow">Sistem Informasi Geografis Desa</div>
      <h1>Peta Wisata &<br><span>UMKM Desa</span></h1>
      <p>Temukan destinasi wisata alam dan produk unggulan UMKM Desa Pemongkong, Jerowaru — Lombok Timur. Dukung ekonomi lokal, lestarikan budaya Sasak.</p>
      <div class="hero-actions"><button class="btn-primary" data-action="map">Lihat Peta</button><button class="btn-outline" data-action="explore">Jelajahi Desa</button></div>
    </div>
    <div class="stats">${stats.map(s=>`<div class="stat"><div class="stat-icon">${s.icon}</div><div class="stat-value">${s.value}</div><div class="stat-label">${s.label}</div></div>`).join('')}</div>
  </div></section>`;
}

function footer(){
  return `<footer class="footer"><div class="footer-inner">
    <div class="footer-brand"><div class="footer-icon">🌿</div><div><div class="footer-title">Desa Pemongkong</div><div class="footer-sub">SISTEM INFORMASI DESA</div></div></div>
    <div class="footer-info">Data diperbarui: <span class="footer-date">Agustus 2026</span> · <span>Pemerintah Desa Pemongkong, Jerowaru, Lombok Timur</span></div>
    <div class="footer-nav"><a href="#peta">Peta</a><a href="#konten" data-scroll-content="wisata">Wisata</a><a href="#konten" data-scroll-content="umkm">UMKM</a></div>
  </div></footer>`;
}

function render(){
  document.getElementById('app').innerHTML = header()+hero()+mapSection()+contentSection()+footer();
  bindEvents();
}

function bindEvents(){
  document.querySelectorAll('[data-tab]').forEach(btn => btn.addEventListener('click',()=>{
    activeTab=btn.dataset.tab; selectedCard=null; render();
    document.getElementById('konten')?.scrollIntoView({behavior:'smooth',block:'start'});
  }));
  document.querySelectorAll('[data-card]').forEach(card=>card.addEventListener('click',e=>{
    if(e.target.closest('[data-maps]')) return;
    const [type,id] = card.dataset.card.split('-');
    selectedCard = selectedCard === Number(id) ? null : Number(id);
    if(activeTab !== type) activeTab=type;
    render();
  }));
  document.querySelectorAll('[data-maps]').forEach(btn=>btn.addEventListener('click',e=>{
    e.stopPropagation();
    const [lat,lng,...nameParts]=btn.dataset.maps.split(',');
    openMaps(lat,lng,nameParts.join(','));
  }));
  document.querySelectorAll('[data-marker]').forEach(marker=>marker.addEventListener('click',e=>{
    e.stopPropagation();
    const id=Number(marker.dataset.marker);
    selectedMarker=selectedMarker?.id===id?null:markers.find(m=>m.id===id);
    render();
  }));
  document.querySelector('[data-action="close-marker"]')?.addEventListener('click',()=>{selectedMarker=null;render()});
  document.querySelector('[data-action="map"]')?.addEventListener('click',()=>scrollToId('peta'));
  document.querySelector('[data-action="explore"]')?.addEventListener('click',()=>scrollToId('konten'));
  document.querySelectorAll('[data-scroll-content]').forEach(link=>link.addEventListener('click',e=>{
    e.preventDefault();
    const target=e.currentTarget.dataset.scrollContent;
    if(target==='umkm' && activeTab!=='umkm'){activeTab='umkm';selectedCard=null;render()}
    else if(target==='wisata' && activeTab!=='wisata'){activeTab='wisata';selectedCard=null;render()}
    document.getElementById('konten')?.scrollIntoView({behavior:'smooth'});
  }));
  document.querySelector('[data-action="add"]')?.addEventListener('click',()=>alert('Fitur tambah data belum diaktifkan. Hubungkan tombol ini ke form/database desa.'));
}

render();
