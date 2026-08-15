import { useState } from 'react'

type Tab = 'wisata' | 'umkm'
type MarkerType = 'wisata' | 'umkm' | 'fasilitas'

interface MapMarker {
  id: number
  x: number
  y: number
  type: MarkerType
  name: string
}

interface WisataItem {
  id: number
  name: string
  category: string
  desc: string
  rating: number
  visitors: string
  img: string
  jam: string
  tiket: string
  lat: number
  lng: number
}

interface UmkmItem {
  id: number
  name: string
  owner: string
  category: string
  desc: string
  produk: string[]
  img: string
  omzet: string
  berdiri: string
  lat: number
  lng: number
}

function openMaps(lat: number, lng: number, name: string) {
  const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving&destination_place_name=${encodeURIComponent(name)}`
  window.open(url, '_blank', 'noopener,noreferrer')
}

const markers: MapMarker[] = [
  { id: 1, x: 28, y: 35, type: 'wisata', name: 'Curug Seribu' },
  { id: 2, x: 55, y: 22, type: 'wisata', name: 'Sawah Bertingkat' },
  { id: 3, x: 72, y: 48, type: 'wisata', name: 'Bukit Panorama' },
  { id: 4, x: 42, y: 58, type: 'umkm', name: 'Batik Bu Sari' },
  { id: 5, x: 62, y: 70, type: 'umkm', name: 'Kerajinan Pak Hadi' },
  { id: 6, x: 20, y: 62, type: 'umkm', name: 'Kuliner Mak Inah' },
  { id: 7, x: 48, y: 42, type: 'fasilitas', name: 'Balai Desa' },
  { id: 8, x: 35, y: 75, type: 'fasilitas', name: 'Mushola Al-Falah' },
  { id: 9, x: 80, y: 30, type: 'wisata', name: 'Hutan Pinus' },
]

const wisataData: WisataItem[] = [
  {
    id: 1,
    name: 'Curug Seribu',
    category: 'Air Terjun',
    desc: 'Air terjun bertingkat yang dikelilingi hutan lebat dengan pemandangan alam yang memukau. Cocok untuk wisata alam dan fotografi.',
    rating: 4.8,
    visitors: '1.240',
    img: 'https://images.unsplash.com/photo-1564460549828-f0219a31bf90?w=600&h=400&fit=crop&auto=format',
    jam: '07.00 – 17.00',
    tiket: 'Rp 10.000',
    lat: -8.8412,
    lng: 116.4978,
  },
  {
    id: 2,
    name: 'Sawah Bertingkat',
    category: 'Alam Pertanian',
    desc: 'Hamparan sawah terasering indah yang membentang di lereng bukit. Pemandangan terbaik saat musim tanam dan panen.',
    rating: 4.6,
    visitors: '2.810',
    img: 'https://images.unsplash.com/photo-1513415756790-2ac1db1297d0?w=600&h=400&fit=crop&auto=format',
    jam: '06.00 – 18.00',
    tiket: 'Gratis',
    lat: -8.8385,
    lng: 116.5021,
  },
  {
    id: 3,
    name: 'Bukit Panorama',
    category: 'Perbukitan',
    desc: 'Puncak bukit dengan pemandangan 360° seluruh wilayah desa dan lembah sekitarnya. Spot terbaik untuk sunrise.',
    rating: 4.9,
    visitors: '980',
    img: 'https://images.unsplash.com/photo-1588084188698-e626698fd8cb?w=600&h=400&fit=crop&auto=format',
    jam: '05.00 – 18.00',
    tiket: 'Rp 5.000',
    lat: -8.8361,
    lng: 116.5063,
  },
  {
    id: 4,
    name: 'Hutan Pinus',
    category: 'Ekowisata',
    desc: 'Hutan pinus seluas 12 hektar dengan jalur trekking, area kemah, dan spot foto yang instagramable di antara pepohonan tinggi.',
    rating: 4.5,
    visitors: '1.650',
    img: 'https://images.unsplash.com/photo-1593901138884-02ee723a96f7?w=600&h=400&fit=crop&auto=format',
    jam: '07.00 – 17.00',
    tiket: 'Rp 8.000',
    lat: -8.8338,
    lng: 116.5110,
  },
]

const umkmData: UmkmItem[] = [
  {
    id: 1,
    name: 'Batik Sari Nusantara',
    owner: 'Ibu Sari Wulandari',
    category: 'Kerajinan Tangan',
    desc: 'Usaha batik tulis dan cap tradisional yang sudah berdiri sejak 1998. Menggunakan pewarna alami dari tanaman sekitar desa.',
    produk: ['Batik Tulis', 'Batik Cap', 'Sarung', 'Selendang'],
    img: 'https://images.unsplash.com/photo-1590251869641-dd94fb569954?w=600&h=400&fit=crop&auto=format',
    omzet: 'Rp 8,5 jt/bln',
    berdiri: '1998',
    lat: -8.8401,
    lng: 116.5005,
  },
  {
    id: 2,
    name: 'Kerajinan Bambu Pak Hadi',
    owner: 'Bapak Hadi Santoso',
    category: 'Kerajinan Bambu',
    desc: 'Pengrajin bambu yang memproduksi berbagai perabot dan kerajinan dari bambu lokal. Produk telah dipasarkan hingga ke kota besar.',
    produk: ['Furniture', 'Anyaman', 'Lampu Bambu', 'Dekorasi'],
    img: 'https://images.unsplash.com/photo-1604973104381-870c92f10343?w=600&h=400&fit=crop&auto=format',
    omzet: 'Rp 12 jt/bln',
    berdiri: '2005',
    lat: -8.8425,
    lng: 116.5038,
  },
  {
    id: 3,
    name: 'Dapur Mak Inah',
    owner: 'Ibu Suminah',
    category: 'Kuliner',
    desc: 'Usaha kuliner makanan khas desa dengan resep turun-temurun. Menyajikan masakan tradisional dan oleh-oleh khas daerah.',
    produk: ['Pecel', 'Keripik Singkong', 'Dodol', 'Jamu Tradisional'],
    img: 'https://images.unsplash.com/photo-1539755530862-00f623c00f52?w=600&h=400&fit=crop&auto=format',
    omzet: 'Rp 5,2 jt/bln',
    berdiri: '2012',
    lat: -8.8448,
    lng: 116.4992,
  },
  {
    id: 4,
    name: 'Gerabah Tanah Liat',
    owner: 'Kelompok Ibu PKK',
    category: 'Keramik',
    desc: 'Kelompok usaha ibu-ibu PKK yang memproduksi gerabah dan keramik dari tanah liat lokal dengan motif khas desa.',
    produk: ['Pot Bunga', 'Vas', 'Piring Gerabah', 'Souvenir'],
    img: 'https://images.unsplash.com/photo-1590605095243-072811dbe64c?w=600&h=400&fit=crop&auto=format',
    omzet: 'Rp 3,8 jt/bln',
    berdiri: '2018',
    lat: -8.8437,
    lng: 116.5055,
  },
]

const stats = [
  { label: 'Destinasi Wisata', value: '4', icon: '🏔️' },
  { label: 'UMKM Aktif', value: '12', icon: '🏪' },
  { label: 'Pengunjung/Bulan', value: '6.680', icon: '👥' },
  { label: 'Omzet UMKM/Bln', value: 'Rp 89 jt', icon: '💰' },
]

const markerColors: Record<MarkerType, string> = {
  wisata: '#2d7a52',
  umkm: '#c4531f',
  fasilitas: '#c98a0f',
}

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} width="12" height="12" viewBox="0 0 12 12" fill={s <= Math.round(rating) ? '#c98a0f' : '#d4c9a8'}>
          <path d="M6 1l1.3 2.7 3 .4-2.2 2.1.5 3L6 7.8 3.4 9.2l.5-3L1.7 4.1l3-.4z" />
        </svg>
      ))}
      <span className="font-mono-dm text-xs text-[#7c5c3a] ml-1">{rating}</span>
    </span>
  )
}

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('wisata')
  const [selectedMarker, setSelectedMarker] = useState<MapMarker | null>(null)
  const [selectedCard, setSelectedCard] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-[#f5f0e4] text-[#0f3b24]">
      {/* HEADER */}
      <header className="bg-[#0f3b24] text-[#f5f0e4] px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#2d7a52] flex items-center justify-center text-lg">🌴</div>
          <div>
            <div className="font-display text-lg font-semibold leading-tight">Desa Pemongkong</div>
            <div className="font-mono-dm text-[10px] text-[#4caf72] tracking-widest uppercase">Kec. Jerowaru · Kab. Lombok Timur</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#peta" className="text-[#a8d8bc] hover:text-[#f5f0e4] transition-colors">Peta</a>
          <a href="#wisata" className="text-[#a8d8bc] hover:text-[#f5f0e4] transition-colors">Wisata</a>
          <a href="#umkm" className="text-[#a8d8bc] hover:text-[#f5f0e4] transition-colors">UMKM</a>
          <button className="bg-[#c4531f] hover:bg-[#e07040] text-white text-xs px-4 py-2 rounded-full transition-colors font-semibold">
            + Tambah Data
          </button>
        </nav>
      </header>

      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0f3b24 0%, #1a5c3a 50%, #2d7a52 100%)',
          minHeight: 320,
        }}
      >
        {/* decorative grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(#4caf72 1px, transparent 1px), linear-gradient(90deg, #4caf72 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <div className="font-mono-dm text-[#4caf72] text-xs tracking-widest uppercase mb-3">
              Sistem Informasi Geografis Desa
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#f5f0e4] leading-tight mb-4">
              Peta Wisata &<br />
              <span className="text-[#f0b429]">UMKM Desa</span>
            </h1>
            <p className="text-[#a8d8bc] text-base leading-relaxed max-w-md mb-6">
              Temukan destinasi wisata alam dan produk unggulan UMKM Desa Pemongkong, Jerowaru — Lombok Timur.
              Dukung ekonomi lokal, lestarikan budaya Sasak.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => document.getElementById('peta')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#c4531f] hover:bg-[#e07040] text-white px-6 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105"
              >
                Lihat Peta
              </button>
              <button
                onClick={() => document.getElementById('konten')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-[#4caf72] text-[#a8d8bc] hover:bg-[#2d7a52]/30 px-6 py-3 rounded-full font-semibold text-sm transition-all"
              >
                Jelajahi Desa
              </button>
            </div>
          </div>
          {/* mini stat cards */}
          <div className="grid grid-cols-2 gap-3 shrink-0">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-center min-w-[120px]">
                <div className="text-2xl mb-1">{s.icon}</div>
                <div className="font-display text-2xl font-bold text-[#f0b429]">{s.value}</div>
                <div className="text-[#a8d8bc] text-xs mt-1 leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PETA INTERAKTIF */}
      <section id="peta" className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex items-end justify-between mb-6">
          <div>
            <div className="font-mono-dm text-[#c4531f] text-xs tracking-widest uppercase mb-1">Pemetaan Wilayah</div>
            <h2 className="font-display text-3xl font-bold text-[#0f3b24]">Peta Desa Interaktif</h2>
          </div>
          {/* legend */}
          <div className="hidden md:flex gap-4 text-xs font-medium">
            {(['wisata', 'umkm', 'fasilitas'] as MarkerType[]).map((t) => (
              <div key={t} className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: markerColors[t] }} />
                <span className="capitalize text-[#1a5c3a]">{t === 'fasilitas' ? 'Fasilitas Desa' : t === 'wisata' ? 'Wisata Alam' : 'UMKM Lokal'}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden border-2 border-[#c8d8c0] shadow-xl bg-[#daecd4]">
          {/* map background svg */}
          <svg
            viewBox="0 0 100 90"
            className="w-full"
            style={{ display: 'block', minHeight: 320 }}
          >
            {/* terrain base */}
            <defs>
              <linearGradient id="terrainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#b8ddb0" />
                <stop offset="60%" stopColor="#c8e8c0" />
                <stop offset="100%" stopColor="#a8d0a0" />
              </linearGradient>
              <linearGradient id="riverGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7bbfd8" />
                <stop offset="100%" stopColor="#5aabcc" />
              </linearGradient>
            </defs>

            {/* base terrain */}
            <rect width="100" height="90" fill="url(#terrainGrad)" />

            {/* hills/contour */}
            <ellipse cx="75" cy="25" rx="22" ry="18" fill="#98c890" opacity="0.6" />
            <ellipse cx="20" cy="30" rx="16" ry="14" fill="#90c088" opacity="0.5" />
            <ellipse cx="50" cy="15" rx="20" ry="12" fill="#a0cc98" opacity="0.6" />

            {/* rice fields pattern */}
            {[0,1,2,3,4].map((i) => (
              <rect key={i} x={48} y={18 + i * 4} width="18" height="3.5" rx="0.5"
                fill={i % 2 === 0 ? '#70b868' : '#88c880'} opacity="0.7" />
            ))}

            {/* forest area */}
            {[
              [78,28],[82,26],[80,32],[84,30],[86,28],[76,34],[82,22]
            ].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r="3" fill="#2d7a52" opacity="0.6" />
            ))}

            {/* river */}
            <path d="M5,45 Q20,38 35,48 Q50,58 65,52 Q80,46 95,55"
              stroke="url(#riverGrad)" strokeWidth="1.8" fill="none" opacity="0.8" />
            <path d="M5,46.5 Q20,39.5 35,49.5 Q50,59.5 65,53.5 Q80,47.5 95,56.5"
              stroke="#7bbfd8" strokeWidth="0.6" fill="none" opacity="0.4" />

            {/* road network */}
            <path d="M48,42 L28,35 M48,42 L55,22 M48,42 L72,48 M48,42 L42,58 M48,42 L62,70 M48,42 L20,62"
              stroke="#d4c070" strokeWidth="0.8" strokeDasharray="2,1" opacity="0.8" />
            <path d="M48,42 L80,30 M48,42 L35,75"
              stroke="#d4c070" strokeWidth="0.6" strokeDasharray="1.5,1" opacity="0.6" />

            {/* settlement area */}
            <rect x="44" y="38" width="8" height="8" rx="1" fill="#e8d8b0" opacity="0.6" />

            {/* markers */}
            {markers.map((m) => (
              <g
                key={m.id}
                onClick={() => setSelectedMarker(selectedMarker?.id === m.id ? null : m)}
                style={{ cursor: 'pointer' }}
              >
                <circle
                  cx={m.x}
                  cy={m.y}
                  r={selectedMarker?.id === m.id ? 4.5 : 3.2}
                  fill={markerColors[m.type]}
                  stroke="white"
                  strokeWidth="0.8"
                  style={{ transition: 'r 0.15s ease' }}
                />
                {m.type === 'wisata' && (
                  <path
                    d={`M${m.x},${m.y - 6} L${m.x - 2.5},${m.y - 2} L${m.x + 2.5},${m.y - 2} Z`}
                    fill={markerColors[m.type]}
                    opacity="0.4"
                  />
                )}
                {selectedMarker?.id === m.id && (
                  <circle cx={m.x} cy={m.y} r="7" fill={markerColors[m.type]} opacity="0.2" />
                )}
              </g>
            ))}
          </svg>

          {/* tooltip */}
          {selectedMarker && (
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur rounded-2xl shadow-lg p-4 max-w-[180px] border border-[#c8d8c0]">
              <div
                className="text-xs font-semibold uppercase tracking-wider mb-1 font-mono-dm"
                style={{ color: markerColors[selectedMarker.type] }}
              >
                {selectedMarker.type === 'wisata' ? 'Wisata Alam' : selectedMarker.type === 'umkm' ? 'UMKM Lokal' : 'Fasilitas'}
              </div>
              <div className="font-display font-semibold text-[#0f3b24] text-sm leading-tight">{selectedMarker.name}</div>
              <button
                onClick={() => setSelectedMarker(null)}
                className="mt-2 text-xs text-[#7c5c3a] hover:text-[#c4531f] transition-colors"
              >
                Tutup ×
              </button>
            </div>
          )}

          {/* mobile legend */}
          <div className="absolute bottom-3 left-3 flex gap-3 md:hidden">
            {(['wisata', 'umkm', 'fasilitas'] as MarkerType[]).map((t) => (
              <div key={t} className="flex items-center gap-1 bg-white/80 rounded-full px-2 py-0.5">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: markerColors[t] }} />
                <span className="text-[10px] font-medium text-[#0f3b24] capitalize">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KONTEN TAB */}
      <section id="konten" className="max-w-5xl mx-auto px-6 pb-16">
        {/* Tab nav */}
        <div id="wisata" className="flex gap-2 mb-8">
          {[
            { key: 'wisata' as Tab, label: '🏔️ Destinasi Wisata', count: wisataData.length },
            { key: 'umkm' as Tab, label: '🏪 UMKM Lokal', count: umkmData.length },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => { setActiveTab(tab.key); setSelectedCard(null) }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all ${
                activeTab === tab.key
                  ? 'bg-[#1a5c3a] text-[#f5f0e4] shadow-md'
                  : 'bg-white text-[#1a5c3a] border border-[#c8d8c0] hover:border-[#1a5c3a]'
              }`}
            >
              {tab.label}
              <span className={`font-mono-dm text-xs px-2 py-0.5 rounded-full ${
                activeTab === tab.key ? 'bg-[#2d7a52] text-[#a8d8bc]' : 'bg-[#e8e0cc] text-[#7c5c3a]'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* WISATA CARDS */}
        {activeTab === 'wisata' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wisataData.map((w) => (
              <div
                key={w.id}
                onClick={() => setSelectedCard(selectedCard === w.id ? null : w.id)}
                className="group bg-white rounded-3xl overflow-hidden border border-[#e0d8c8] hover:border-[#1a5c3a] hover:shadow-xl transition-all cursor-pointer"
                style={{ boxShadow: selectedCard === w.id ? '0 0 0 2px #1a5c3a' : undefined }}
              >
                <div className="relative overflow-hidden h-48 bg-[#c8d8c0]">
                  <img
                    src={w.img}
                    alt={w.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#1a5c3a]/90 text-[#a8d8bc] text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                      {w.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-white/90 text-[#0f3b24] text-xs font-mono-dm font-medium px-2 py-1 rounded-full">
                      {w.visitors} pengunjung
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-display text-xl font-semibold text-[#0f3b24]">{w.name}</h3>
                    <StarRating rating={w.rating} />
                  </div>
                  <p className="text-[#4a6a58] text-sm leading-relaxed mb-4">{w.desc}</p>

                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: selectedCard === w.id ? 120 : 0 }}
                  >
                    <div className="border-t border-[#e8e0cc] pt-4 grid grid-cols-2 gap-3 mb-3">
                      <div>
                        <div className="font-mono-dm text-[10px] text-[#7c5c3a] uppercase tracking-wider mb-0.5">Jam Buka</div>
                        <div className="text-sm font-semibold text-[#0f3b24]">{w.jam}</div>
                      </div>
                      <div>
                        <div className="font-mono-dm text-[10px] text-[#7c5c3a] uppercase tracking-wider mb-0.5">Tiket Masuk</div>
                        <div className="text-sm font-semibold text-[#c4531f]">{w.tiket}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <span className="text-xs text-[#7c5c3a] bg-[#f0ead8] px-2 py-1 rounded-full">🕐 {w.jam.split('–')[0]}</span>
                      <span className="text-xs text-[#c4531f] bg-[#fae8e0] px-2 py-1 rounded-full font-semibold">{w.tiket}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => { e.stopPropagation(); openMaps(w.lat, w.lng, w.name) }}
                        className="flex items-center gap-1.5 bg-[#1a5c3a] hover:bg-[#0f3b24] text-white text-xs font-semibold px-3 py-1.5 rounded-full transition-all hover:scale-105 active:scale-95"
                      >
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                          <circle cx="12" cy="9" r="2.5"/>
                        </svg>
                        Kunjungi
                      </button>
                      <span className="text-xs text-[#2d7a52] font-semibold">
                        {selectedCard === w.id ? '▲' : '▼'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* UMKM CARDS */}
        {activeTab === 'umkm' && (
          <div id="umkm" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {umkmData.map((u) => (
              <div
                key={u.id}
                onClick={() => setSelectedCard(selectedCard === u.id ? null : u.id)}
                className="group bg-white rounded-3xl overflow-hidden border border-[#e0d8c8] hover:border-[#c4531f] hover:shadow-xl transition-all cursor-pointer"
                style={{ boxShadow: selectedCard === u.id ? '0 0 0 2px #c4531f' : undefined }}
              >
                <div className="relative overflow-hidden h-48 bg-[#e8d8c0]">
                  <img
                    src={u.img}
                    alt={u.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#c4531f]/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                      {u.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-white/90 text-[#c4531f] text-xs font-mono-dm font-semibold px-2 py-1 rounded-full">
                      Sejak {u.berdiri}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="mb-1">
                    <h3 className="font-display text-xl font-semibold text-[#0f3b24]">{u.name}</h3>
                    <div className="text-xs text-[#7c5c3a] font-medium mt-0.5">👤 {u.owner}</div>
                  </div>
                  <p className="text-[#4a6a58] text-sm leading-relaxed my-3">{u.desc}</p>

                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: selectedCard === u.id ? 120 : 0 }}
                  >
                    <div className="border-t border-[#e8e0cc] pt-3 mb-3">
                      <div className="font-mono-dm text-[10px] text-[#7c5c3a] uppercase tracking-wider mb-2">Produk Unggulan</div>
                      <div className="flex flex-wrap gap-1.5">
                        {u.produk.map((p) => (
                          <span key={p} className="text-xs bg-[#f0ead8] text-[#4a3520] px-2 py-0.5 rounded-full">{p}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <span className="text-xs text-[#c98a0f] bg-[#fdf4e0] px-2 py-1 rounded-full font-semibold">💰 {u.omzet}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => { e.stopPropagation(); openMaps(u.lat, u.lng, u.name) }}
                        className="flex items-center gap-1.5 bg-[#c4531f] hover:bg-[#a03e12] text-white text-xs font-semibold px-3 py-1.5 rounded-full transition-all hover:scale-105 active:scale-95"
                      >
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                          <circle cx="12" cy="9" r="2.5"/>
                        </svg>
                        Kunjungi
                      </button>
                      <span className="text-xs text-[#c4531f] font-semibold">
                        {selectedCard === u.id ? '▲' : '▼'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0f3b24] text-[#a8d8bc] py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#2d7a52] flex items-center justify-center">🌿</div>
            <div>
              <div className="font-display text-[#f5f0e4] font-semibold">Desa Pemongkong</div>
              <div className="font-mono-dm text-[10px] tracking-widest text-[#4caf72]">SISTEM INFORMASI DESA</div>
            </div>
          </div>
          <div className="text-xs text-center">
            Data diperbarui: <span className="font-mono-dm text-[#f0b429]">Agustus 2026</span>
            {' · '}
            <span>Pemerintah Desa Pemongkong, Jerowaru, Lombok Timur</span>
          </div>
          <div className="flex gap-4 text-sm font-medium">
            <a href="#peta" className="hover:text-[#f5f0e4] transition-colors">Peta</a>
            <a href="#wisata" className="hover:text-[#f5f0e4] transition-colors">Wisata</a>
            <a href="#umkm" className="hover:text-[#f5f0e4] transition-colors">UMKM</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
