import { useRef } from 'react'
import AdminSidebar from '../../components/AdminSidebar'

const existingProducts = [
  { emoji:'🌹', name:'Buketë Trëndafilash', meta:'€28.50 · Trëndafila · Stoku: 12' },
  { emoji:'🌺', name:'Orkide Elegante',     meta:'€45.00 · Orkide · Stoku: 8' },
  { emoji:'💐', name:'Buketë Dasme',        meta:'€120.00 · Dasme · Stoku: 3' },
  { emoji:'🌻', name:'Lule Dielli',         meta:'€18.00 · Buketa · Stoku: 25' },
  { emoji:'🌿', name:'Bima Jade',           meta:'€22.00 · Bimë · Stoku: 15' },
]

export default function AdminProduktet() {
  const fileInputRef   = useRef<HTMLInputElement>(null)
  const previewRef     = useRef<HTMLImageElement>(null)
  const previewWrapRef = useRef<HTMLDivElement>(null)
  const fuAreaRef      = useRef<HTMLDivElement>(null)
  const fuTitleRef     = useRef<HTMLDivElement>(null)
  const fuSubRef       = useRef<HTMLDivElement>(null)
  const fuIconRef      = useRef<HTMLSpanElement>(null)
  const fileNameRef    = useRef<HTMLSpanElement>(null)

  function handleFileSelect(file: File) {
    if (file.size > 5 * 1024 * 1024) { alert('Skedari është shumë i madh! Max 5MB'); return }
    const reader = new FileReader()
    reader.onload = e => {
      if (!previewRef.current || !previewWrapRef.current) return
      previewRef.current.src = e.target?.result as string
      previewWrapRef.current.style.display = 'block'
      if (fuIconRef.current)  fuIconRef.current.textContent  = '✓'
      if (fuTitleRef.current) fuTitleRef.current.textContent = 'Foto e ngarkuar!'
      if (fuSubRef.current)   fuSubRef.current.textContent   = file.name
      if (fileNameRef.current) fileNameRef.current.textContent = `${file.name} (${(file.size/1024).toFixed(0)}KB)`
      fuAreaRef.current?.classList.add('has-file')
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className="admin-layout">
      <AdminSidebar />
      <main className="admin-main">
        <div className="adm-title">Produktet</div>
        <div className="adm-sub">Shto, ndrysho dhe menaxho produktet e dyqanit tënd</div>

        <div className="prod-layout">

          {/* ADD FORM */}
          <div className="adm-card">
            <div className="adm-card-title">➕ Shto produkt të ri</div>

            {/* FILE UPLOAD */}
            <div className="form-group">
              <label className="form-label">📷 Foto e Lules</label>
              <div
                ref={fuAreaRef}
                className="file-upload-area"
                onClick={() => fileInputRef.current?.click()}
                onDragOver={e => { e.preventDefault(); fuAreaRef.current!.style.borderColor='var(--rose)' }}
                onDragLeave={() => { if(fuAreaRef.current) fuAreaRef.current.style.borderColor='' }}
                onDrop={e => {
                  e.preventDefault()
                  if(fuAreaRef.current) fuAreaRef.current.style.borderColor=''
                  const f = e.dataTransfer.files[0]
                  if (f && f.type.startsWith('image/')) handleFileSelect(f)
                }}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  style={{ display:'none' }}
                  onChange={e => { const f = e.target.files?.[0]; if(f) handleFileSelect(f) }}
                />
                <span ref={fuIconRef} className="fu-icon">🌹</span>
                <div ref={fuTitleRef} className="fu-title">Kliko për të ngarkuar foton</div>
                <div ref={fuSubRef}   className="fu-sub">ose tërhiq dhe lësho skedarin këtu</div>
                <div className="fu-types">PNG, JPG, WEBP — max 5MB</div>
              </div>
              <div ref={previewWrapRef} className="preview-wrap" style={{ display:'none' }}>
                <img ref={previewRef} className="preview-img" alt="Preview" />
                <div className="preview-info">
                  <span ref={fileNameRef}>—</span>
                  <button
                    className="remove-img"
                    onClick={() => {
                      if (fileInputRef.current) fileInputRef.current.value = ''
                      if (previewWrapRef.current) previewWrapRef.current.style.display = 'none'
                      if (fuIconRef.current)  fuIconRef.current.textContent  = '🌹'
                      if (fuTitleRef.current) fuTitleRef.current.textContent = 'Kliko për të ngarkuar foton'
                      if (fuSubRef.current)   fuSubRef.current.textContent   = 'ose tërhiq dhe lësho skedarin këtu'
                      fuAreaRef.current?.classList.remove('has-file')
                    }}
                  >✕ Hiq foton</button>
                </div>
              </div>
            </div>

            <div className="form-group"><label className="form-label">Emri i produktit *</label><input className="form-input" placeholder="p.sh. Trëndafil i Kuq Premium" /></div>

            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px' }}>
              <div className="form-group"><label className="form-label">Çmimi (€) *</label><input className="form-input" type="number" placeholder="0.00" step="0.01" /></div>
              <div className="form-group"><label className="form-label">Stoku (cope)</label><input className="form-input" type="number" placeholder="0" /></div>
            </div>

            <div className="form-group">
              <label className="form-label">Kategoria *</label>
              <select className="form-select">
                <option value="">— Zgjidh kategorinë —</option>
                <option>🌹 Trëndafila</option><option>💐 Buketa</option>
                <option>🌺 Orkide</option><option>🌷 Tulipanë</option>
                <option>🌿 Bimë Shtëpiake</option><option>👰 Lule Dasme</option>
                <option>🏺 Dekorë</option><option>🧺 Esenciale</option>
              </select>
            </div>

            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px' }}>
              <div className="form-group">
                <label className="form-label">Ngjyra</label>
                <select className="form-select"><option>— Ngjyra —</option><option>E kuqe</option><option>Rozë</option><option>E bardhë</option><option>E verdhë</option><option>Vjollcë</option></select>
              </div>
              <div className="form-group">
                <label className="form-label">Rasti</label>
                <select className="form-select"><option>— Rasti —</option><option>Dasëm</option><option>Ditëlindje</option><option>Valentinë</option><option>Funeral</option></select>
              </div>
            </div>

            <div className="form-group"><label className="form-label">Përshkrimi</label><textarea className="form-textarea" placeholder="Përshkruaj produktin tënd..." /></div>
            <div className="form-group">
              <label className="form-label">Tags (ndaj me presje)</label>
              <input className="form-input" placeholder="p.sh. romantik, dimëror, premium" />
              <div className="form-hint">Tags ndihmojnë klientët të gjejnë produktin më lehtë</div>
            </div>

            <div style={{ display:'flex', gap:'10px' }}>
              <button className="btn btn-primary" style={{ flex:1 }}>✓ Shto produktin</button>
              <button className="btn btn-ghost">Pastro</button>
            </div>
          </div>

          {/* PRODUCT LIST */}
          <div className="adm-card">
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'16px' }}>
              <div className="adm-card-title" style={{ margin:0 }}>Produktet aktuale</div>
              <input className="form-input" style={{ width:'180px', padding:'7px 12px' }} placeholder="Kërko..." />
            </div>
            {existingProducts.map((p, i) => (
              <div key={i} className="prod-list-item">
                <div className="prod-thumb">{p.emoji}</div>
                <div className="prod-info">
                  <div className="prod-nm">{p.name}</div>
                  <div className="prod-meta">{p.meta}</div>
                </div>
                <div style={{ display:'flex', gap:'8px' }}>
                  <button className="btn btn-ghost btn-sm">✏️</button>
                  <button className="btn btn-sm" style={{ background:'rgba(200,97,74,.1)', color:'var(--rose)', border:'none' }}>🗑</button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  )
}
