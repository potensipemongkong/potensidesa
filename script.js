const markers = [
  {id:1,x:28,y:35,type:'wisata',name:'Makam TGH sibawaeh'},
  {id:2,x:55,y:22,type:'wisata',name:'Gili areng'},
  {id:3,x:72,y:48,type:'wisata',name:'Bukit Panorama'},
  {id:4,x:42,y:58,type:'umkm',name:'Batik Bu Sari'},
  {id:5,x:62,y:70,type:'umkm',name:'Kerajinan Pak Hadi'},
  {id:6,x:20,y:62,type:'umkm',name:'Kuliner Mak Inah'},
  {id:7,x:48,y:42,type:'fasilitas',name:'Balai Desa'},
  {id:8,x:35,y:75,type:'fasilitas',name:'Mushola Al-Falah'},
  {id:9,x:80,y:30,type:'wisata',name:'Hutan Pinus'}
];

const wisataData = [
  {id:1,name:'Curug Seribu',category:'Air Terjun',desc:'Air terjun bertingkat yang dikelilingi hutan lebat dengan pemandangan alam yang memukau. Cocok untuk wisata alam dan fotografi.',rating:4.8,visitors:'1.240',img:'https://images.unsplash.com/photo-1564460549828-f0219a31bf90?w=600&h=400&fit=crop&auto=format',jam:'07.00 – 17.00',tiket:'Rp 10.000'},
  {id:2,name:'Gili areng',category:'Alam pulau',desc:'Pulau yang indah dengan potensi sebagai camp..',rating:4.6,visitors:'2.810',img:'https://images.unsplash.com/photo-1513415756790-2ac1db1297d0?w=600&h=400&fit=crop&auto=format',jam:'06.00 – 18.00',tiket:'Gratis'},
  {id:3,name:'Bukit Panorama',category:'Perbukitan',desc:'Puncak bukit dengan pemandangan 360° seluruh wilayah desa dan lembah sekitarnya. Spot terbaik untuk sunrise.',rating:4.9,visitors:'980',img:'https://images.unsplash.com/photo-1588084188698-e626698fd8cb?w=600&h=400&fit=crop&auto=format',jam:'05.00 – 18.00',tiket:'Rp 5.000'},
  {id:4,name:'Hutan Pinus',category:'Ekowisata',desc:'Hutan pinus seluas 12 hektar dengan jalur trekking, area kemah, dan spot foto yang instagramable di antara pepohonan tinggi.',rating:4.5,visitors:'1.650',img:'https://images.unsplash.com/photo-1593901138884-02ee723a96f7?w=600&h=400&fit=crop&auto=format',jam:'07.00 – 17.00',tiket:'Rp 8.000'}
];

const umkmData = [
  {id:1,name:'Batik Sari Nusantara',owner:'Ibu Sari Wulandari',category:'Kerajinan Tangan',desc:'Usaha batik tulis dan cap tradisional yang sudah berdiri sejak 1998. Menggunakan pewarna alami dari tanaman sekitar desa.',produk:['Batik Tulis','Batik Cap','Sarung','Selendang'],img:'https://images.unsplash.com/photo-1590251869641-dd94fb569954?w=600&h=400&fit=crop&auto=format',omzet:'Rp 8,5 jt/bln',berdiri:'1998'},
  {id:2,name:'Kerajinan Bambu Pak Hadi',owner:'Bapak Hadi Santoso',category:'Kerajinan Bambu',desc:'Pengrajin bambu yang memproduksi berbagai perabot dan kerajinan dari bambu lokal. Produk telah dipasarkan hingga ke kota besar.',produk:['Furniture','Anyaman','Lampu Bambu','Dekorasi'],img:'https://images.unsplash.com/photo-1604973104381-870c92f10343?w=600&h=400&fit=crop&auto=format',omzet:'Rp 12 jt/bln',berdiri:'2005'},
  {id:3,name:'Dapur Mak Inah',owner:'Ibu Suminah',category:'Kuliner',desc:'Usaha kuliner makanan khas desa dengan resep turun-temurun. Menyajikan masakan tradisional dan oleh-oleh khas daerah.',produk:['Pecel','Keripik Singkong','Dodol','Jamu Tradisional'],img:'https://images.unsplash.com/photo-1539755530862-00f623c00f52?w=600&h=400&fit=crop&auto=format',omzet:'Rp 5,2 jt/bln',berdiri:'2012'},
  {id:4,name:'Gerabah Tanah Liat',owner:'Kelompok Ibu PKK',category:'Keramik',desc:'Kelompok usaha ibu-ibu PKK yang memproduksi gerabah dan keramik dari tanah liat lokal dengan motif khas desa.',produk:['Pot Bunga','Vas','Piring Gerabah','Souvenir'],img:'https://images.unsplash.com/photo-1590605095243-072811dbe64c?w=600&h=400&fit=crop&auto=format',omzet:'Rp 3,8 jt/bln',berdiri:'2018'}
];

const stats = [
  {label:'Destinasi Wisata',value:'4',icon:'🏔️'},
  {label:'UMKM Aktif',value:'12',icon:'🏪'},
  {label:'Pengunjung/Bulan',value:'6.680',icon:'👥'},
  {label:'Omzet UMKM/Bln',value:'Rp 89 jt',icon:'💰'}
];

const markerColors = {wisata:'#2d7a52',umkm:'#c4531f',fasilitas:'#c98a0f'};
let activeTab = 'wisata';
let selectedMarker = null;
let selectedCard = null;

const $ = id => document.getElementById(id);

function scrollToSection(id) {
  $(id)?.scrollIntoView({behavior:'smooth'});
}

function renderStats() {
  $('stats').innerHTML = stats.map(s => `
    <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-center min-w-[120px]">
      <div class="text-2xl mb-1">${s.icon}</div>
      <div class="font-display text-2xl font-bold text-[#f0b429]">${s.value}</div>
      <div class="text-[#a8d8bc] text-xs mt-1 leading-tight">${s.label}</div>
    </div>`).join('');
}

function renderLegend() {
  const items = [['wisata','Wisata Alam'],['umkm','UMKM Lokal'],['fasilitas','Fasilitas Desa']];
  $('desktopLegend').innerHTML = items.map(([t,label]) => `
    <div class="flex items-center gap-1.5">
      <div class="w-3 h-3 rounded-full" style="background:${markerColors[t]}"></div>
      <span class="capitalize text-[#1a5c3a]">${label}</span>
    </div>`).join('');
  $('mobileLegend').innerHTML = items.map(([t,label]) => `
    <div class="flex items-center gap-1 bg-white/80 rounded-full px-2 py-0.5">
      <div class="w-2 h-2 rounded-full" style="background:${markerColors[t]}"></div>
      <span class="text-[10px] font-medium text-[#0f3b24]">${label}</span>
    </div>`).join('');
}

function renderMap() {
  const svg = $('mapSvg');
  const markerSvg = markers.map(m => {
    const selected = selectedMarker?.id === m.id;
    return `
      <g class="map-marker" data-id="${m.id}" style="cursor:pointer">
        <circle cx="${m.x}" cy="${m.y}" r="${selected ? 4.5 : 3.2}" fill="${markerColors[m.type]}" stroke="white" stroke-width=".8"/>
        ${m.type === 'wisata' ? `<path d="M${m.x},${m.y-6} L${m.x-2.5},${m.y-2} L${m.x+2.5},${m.y-2} Z" fill="${markerColors[m.type]}" opacity=".4"/>` : ''}
        ${selected ? `<circle cx="${m.x}" cy="${m.y}" r="7" fill="${markerColors[m.type]}" opacity=".2"/>` : ''}
      </g>`;
  }).join('');

  svg.innerHTML = `
    <defs>
      <linearGradient id="terrainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#b8ddb0"/><stop offset="60%" stop-color="#c8e8c0"/><stop offset="100%" stop-color="#a8d0a0"/>
      </linearGradient>
      <linearGradient id="riverGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#7bbfd8"/><stop offset="100%" stop-color="#5aabcc"/>
      </linearGradient>
    </defs>
    <rect width="100" height="90" fill="url(#terrainGrad)"/>
    <ellipse cx="75" cy="25" rx="22" ry="18" fill="#98c890" opacity=".6"/>
    <ellipse cx="20" cy="30" rx="16" ry="14" fill="#90c088" opacity=".5"/>
    <ellipse cx="50" cy="15" rx="20" ry="12" fill="#a0cc98" opacity=".6"/>
    ${[0,1,2,3,4].map(i=>`<rect x="48" y="${18+i*4}" width="18" height="3.5" rx=".5" fill="${i%2===0?'#70b868':'#88c880'}" opacity=".7"/>`).join('')}
    ${[[78,28],[82,26],[80,32],[84,30],[86,28],[76,34],[82,22]].map(([cx,cy])=>`<circle cx="${cx}" cy="${cy}" r="3" fill="#2d7a52" opacity=".6"/>`).join('')}
    <path d="M5,45 Q20,38 35,48 Q50,58 65,52 Q80,46 95,55" stroke="url(#riverGrad)" stroke-width="1.8" fill="none" opacity=".8"/>
    <path d="M5,46.5 Q20,39.5 35,49.5 Q50,59.5 65,53.5 Q80,47.5 95,56.5" stroke="#7bbfd8" stroke-width=".6" fill="none" opacity=".4"/>
    <path d="M48,42 L28,35 M48,42 L55,22 M48,42 L72,48 M48,42 L42,58 M48,42 L62,70 M48,42 L20,62" stroke="#d4c070" stroke-width=".8" stroke-dasharray="2,1" opacity=".8"/>
    <path d="M48,42 L80,30 M48,42 L35,75" stroke="#d4c070" stroke-width=".6" stroke-dasharray="1.5,1" opacity=".6"/>
    <rect x="44" y="38" width="8" height="8" rx="1" fill="#e8d8b0" opacity=".6"/>
    ${markerSvg}`;

  svg.querySelectorAll('.map-marker').forEach(el => {
    el.addEventListener('click', () => {
      const marker = markers.find(m => m.id === Number(el.dataset.id));
      selectedMarker = selectedMarker?.id === marker.id ? null : marker;
      renderMap();
      renderTooltip();
    });
  });
}

function renderTooltip() {
  const box = $('mapTooltip');
  if (!selectedMarker) {
    box.classList.add('hidden');
    return;
  }
  const type = selectedMarker.type === 'wisata' ? 'Wisata Alam' : selectedMarker.type === 'umkm' ? 'UMKM Lokal' : 'Fasilitas';
  box.classList.remove('hidden');
  box.innerHTML = `
    <div class="text-xs font-semibold uppercase tracking-wider mb-1 font-mono-dm" style="color:${markerColors[selectedMarker.type]}">${type}</div>
    <div class="font-display font-semibold text-[#0f3b24] text-sm leading-tight">${selectedMarker.name}</div>
    <button onclick="selectedMarker=null;renderMap();renderTooltip()" class="mt-2 text-xs text-[#7c5c3a] hover:text-[#c4531f] transition-colors">Tutup ×</button>`;
}

function starRating(rating) {
  return `<span class="flex items-center gap-1">${[1,2,3,4,5].map(s=>`
    <svg width="12" height="12" viewBox="0 0 12 12" fill="${s <= Math.round(rating) ? '#c98a0f' : '#d4c9a8'}"><path d="M6 1l1.3 2.7 3 .4-2.2 2.1.5 3L6 7.8 3.4 9.2l.5-3L1.7 4.1l3-.4z"/></svg>`).join('')}
    <span class="font-mono-dm text-xs text-[#7c5c3a] ml-1">${rating}</span>
  </span>`;
}

function renderTabs() {
  const tabs = [
    {key:'wisata',label:'🏔️ Destinasi Wisata',count:wisataData.length},
    {key:'umkm',label:'🏪 UMKM Lokal',count:umkmData.length}
  ];
  $('tabs').innerHTML = tabs.map(t=>`
    <button data-tab="${t.key}" class="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all ${activeTab===t.key?'bg-[#1a5c3a] text-[#f5f0e4] shadow-md':'bg-white text-[#1a5c3a] border border-[#c8d8c0] hover:border-[#1a5c3a]'}">
      ${t.label}
      <span class="font-mono-dm text-xs px-2 py-0.5 rounded-full ${activeTab===t.key?'bg-[#2d7a52] text-[#a8d8bc]':'bg-[#e8e0cc] text-[#7c5c3a]'}">${t.count}</span>
    </button>`).join('');
  $('tabs').querySelectorAll('button').forEach(btn=>{
    btn.onclick=()=>{activeTab=btn.dataset.tab;selectedCard=null;renderTabs();renderCards()};
  });
}

function renderCards() {
  if(activeTab==='wisata'){
    $('cards').innerHTML=wisataData.map(w=>`
      <div onclick="toggleCard(${w.id})" class="group bg-white rounded-3xl overflow-hidden border border-[#e0d8c8] hover:border-[#1a5c3a] hover:shadow-xl transition-all cursor-pointer" style="${selectedCard===w.id?'box-shadow:0 0 0 2px #1a5c3a':''}">
        <div class="relative overflow-hidden h-48 bg-[#c8d8c0]">
          <img src="${w.img}" alt="${w.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          <div class="absolute top-3 left-3"><span class="bg-[#1a5c3a]/90 text-[#a8d8bc] text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">${w.category}</span></div>
          <div class="absolute top-3 right-3"><span class="bg-white/90 text-[#0f3b24] text-xs font-mono-dm font-medium px-2 py-1 rounded-full">${w.visitors} pengunjung</span></div>
        </div>
        <div class="p-5">
          <div class="flex items-start justify-between mb-2"><h3 class="font-display text-xl font-semibold text-[#0f3b24]">${w.name}</h3>${starRating(w.rating)}</div>
          <p class="text-[#4a6a58] text-sm leading-relaxed mb-4">${w.desc}</p>
          <div class="overflow-hidden transition-all duration-300" style="max-height:${selectedCard===w.id?'120px':'0'}">
            <div class="border-t border-[#e8e0cc] pt-4 grid grid-cols-2 gap-3 mb-3">
              <div><div class="font-mono-dm text-[10px] text-[#7c5c3a] uppercase tracking-wider mb-0.5">Jam Buka</div><div class="text-sm font-semibold text-[#0f3b24]">${w.jam}</div></div>
              <div><div class="font-mono-dm text-[10px] text-[#7c5c3a] uppercase tracking-wider mb-0.5">Tiket Masuk</div><div class="text-sm font-semibold text-[#c4531f]">${w.tiket}</div></div>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex gap-2"><span class="text-xs text-[#7c5c3a] bg-[#f0ead8] px-2 py-1 rounded-full">🕐 ${w.jam.split('–')[0]}</span><span class="text-xs text-[#c4531f] bg-[#fae8e0] px-2 py-1 rounded-full font-semibold">${w.tiket}</span></div>
            <span class="text-xs text-[#2d7a52] font-semibold">${selectedCard===w.id?'▲ Tutup':'▼ Detail'}</span>
          </div>
        </div>
      </div>`).join('');
  } else {
    $('cards').innerHTML=umkmData.map(u=>`
      <div onclick="toggleCard(${u.id})" class="group bg-white rounded-3xl overflow-hidden border border-[#e0d8c8] hover:border-[#c4531f] hover:shadow-xl transition-all cursor-pointer" style="${selectedCard===u.id?'box-shadow:0 0 0 2px #c4531f':''}">
        <div class="relative overflow-hidden h-48 bg-[#e8d8c0]">
          <img src="${u.img}" alt="${u.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          <div class="absolute top-3 left-3"><span class="bg-[#c4531f]/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">${u.category}</span></div>
          <div class="absolute top-3 right-3"><span class="bg-white/90 text-[#c4531f] text-xs font-mono-dm font-semibold px-2 py-1 rounded-full">Sejak ${u.berdiri}</span></div>
        </div>
        <div class="p-5">
          <div class="mb-1"><h3 class="font-display text-xl font-semibold text-[#0f3b24]">${u.name}</h3><div class="text-xs text-[#7c5c3a] font-medium mt-0.5">👤 ${u.owner}</div></div>
          <p class="text-[#4a6a58] text-sm leading-relaxed my-3">${u.desc}</p>
          <div class="overflow-hidden transition-all duration-300" style="max-height:${selectedCard===u.id?'120px':'0'}">
            <div class="border-t border-[#e8e0cc] pt-3 mb-3"><div class="font-mono-dm text-[10px] text-[#7c5c3a] uppercase tracking-wider mb-2">Produk Unggulan</div><div class="flex flex-wrap gap-1.5">${u.produk.map(p=>`<span class="text-xs bg-[#f0ead8] text-[#4a3520] px-2 py-0.5 rounded-full">${p}</span>`).join('')}</div></div>
          </div>
          <div class="flex items-center justify-between"><div class="flex gap-2"><span class="text-xs text-[#c98a0f] bg-[#fdf4e0] px-2 py-1 rounded-full font-semibold">💰 ${u.omzet}</span></div><span class="text-xs text-[#c4531f] font-semibold">${selectedCard===u.id?'▲ Tutup':'▼ Produk'}</span></div>
        </div>
      </div>`).join('');
  }
}

function toggleCard(id){
  selectedCard=selectedCard===id?null:id;
  renderCards();
}

renderStats();
renderLegend();
renderMap();
renderTooltip();
renderTabs();
renderCards();
