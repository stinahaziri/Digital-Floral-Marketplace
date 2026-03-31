import { useRef } from 'react'
import AdminSidebar from '../../components/AdminSidebar'

const conversations = [
  { name:'Arjeta Morina',   av:'AM', last:'A keni trëndafila të kuq?', unread:2, color:'linear-gradient(135deg,#e8927a,#c8614a)' },
  { name:'Blerim Krasniqi', av:'BK', last:'Faleminderit shumë!',       unread:0, color:'linear-gradient(135deg,#a8c5aa,#7a9e7e)' },
  { name:'Drita Hoxha',     av:'DH', last:'Kur mbërrijn lulët?',       unread:3, color:'linear-gradient(135deg,#e8c97a,#c9a96e)' },
]

const initialMsgs = [
  { text:'Përshëndetje! A keni trëndafila të kuq për ditëlindje?', mine:false, time:'10:32' },
  { text:'Mirëdita! Po, kemi trëndafila të kuq premium, €3.50/cope. Sa keni nevojë?', mine:true, time:'10:34' },
  { text:'Do të doja një buketë me 12 trëndafila. A mundeni dërgesa sot?', mine:false, time:'10:35' },
  { text:'Sigurisht! Dërgesa sot është e mundur brenda 3 orësh.', mine:true, time:'10:36' },
]

export default function AdminChat() {
  const inputRef = useRef<HTMLInputElement>(null)
  const msgsRef  = useRef<HTMLDivElement>(null)

  function sendMsg() {
    const txt = inputRef.current?.value.trim()
    if (!txt || !msgsRef.current) return
    const now = new Date().toLocaleTimeString('sq-AL',{hour:'2-digit',minute:'2-digit'})
    msgsRef.current.innerHTML += `<div class="msg me">${txt}<div class="msg-time">${now}</div></div>`
    if (inputRef.current) inputRef.current.value = ''
    msgsRef.current.scrollTop = msgsRef.current.scrollHeight
  }

  return (
    <div className="admin-layout">
      <AdminSidebar />
      <main className="admin-main" style={{ display:'flex', flexDirection:'column', height:'100vh' }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'20px' }}>
          <div><div className="adm-title">Chat</div><div className="adm-sub">Komuniko me klientët në kohë reale</div></div>
          <div style={{ display:'flex', gap:'10px', alignItems:'center' }}>
            <div className="live-badge"><div className="live-dot"></div> SignalR aktiv</div>
            <span style={{ fontSize:'11px', padding:'4px 10px', borderRadius:'100px', background:'rgba(201,169,110,.12)', color:'var(--gold)', fontWeight:500 }}>🤖 AI Chatbot aktiv</span>
          </div>
        </div>

        <div className="chat-layout" style={{ flex:1, minHeight:0 }}>
          <div className="conversations">
            <div className="conv-header">Bisedat (5 të palexuara)</div>
            {conversations.map(c => (
              <div key={c.name} className="conv-item">
                <div className="conv-avatar" style={{ background:c.color }}>{c.av}</div>
                <div style={{ flex:1, minWidth:0 }}>
                  <div className="conv-name">{c.name}</div>
                  <div className="conv-last">{c.last}</div>
                </div>
                {c.unread > 0 && <span className="conv-unread">{c.unread}</span>}
              </div>
            ))}
          </div>

          <div className="chat-window">
            <div className="chat-top">
              <div className="conv-avatar" style={{ background:'linear-gradient(135deg,#e8927a,#c8614a)' }}>AM</div>
              <div><div className="chat-user-name">Arjeta Morina</div><div className="chat-user-sub">Online • Klient</div></div>
            </div>
            <div ref={msgsRef} className="chat-msgs">
              {initialMsgs.map((m,i) => (
                <div key={i} className={`msg ${m.mine ? 'me' : 'them'}`}>
                  {m.text}<div className="msg-time">{m.time}</div>
                </div>
              ))}
            </div>
            <div className="chat-input-bar">
              <input ref={inputRef} className="chat-input" placeholder="Shkruaj mesazhin..." onKeyDown={e => { if(e.key==='Enter') sendMsg() }} />
              <button className="btn btn-primary btn-icon" onClick={sendMsg}>→</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
