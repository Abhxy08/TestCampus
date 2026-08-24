import { useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { useAuth } from '../contexts/AuthContext'

interface Props { onDone: () => void }

export default function EULAGateModal({ onDone }: Props) {
  const { user, signOut, refreshProfile } = useAuth()
  const [agreed, setAgreed] = useState(false)
  const [saving, setSaving] = useState(false)

  async function handleAccept() {
    if (!user || !agreed) return
    setSaving(true)
    await supabase.from('profiles').update({ terms_accepted_at: new Date().toISOString() }).eq('id', user.id)
    await refreshProfile()
    setSaving(false)
    onDone()
  }

  return createPortal(
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(4,1,3,0.92)', backdropFilter: 'blur(20px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 16px' }}>
      <style>{`@keyframes egIn { from{opacity:0;transform:translateY(28px) scale(.97)} to{opacity:1;transform:none} }`}</style>
      <div style={{
        width: '100%', maxWidth: 460, maxHeight: '90vh',
        background: 'linear-gradient(170deg,#16090d,#0d050a)',
        border: '1px solid rgba(138,21,56,.3)', borderRadius: 24,
        overflowY: 'auto', animation: 'egIn .3s cubic-bezier(.22,1,.36,1) both',
        boxShadow: '0 40px 100px rgba(0,0,0,.85)',
        padding: '32px 28px 28px',
      }}>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <div style={{ fontSize: 40, marginBottom: 10 }}>📜</div>
          <h2 style={{ fontSize: 21, fontWeight: 900, color: '#fff', letterSpacing: '-.5px', marginBottom: 8 }}>One more thing</h2>
          <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,.55)', lineHeight: 1.65 }}>
            Before you continue, please review and accept our EULA / Terms of Service.
          </p>
        </div>

        <label style={{ display: 'flex', alignItems: 'flex-start', gap: 9, cursor: 'pointer', marginBottom: 22, padding: '12px 14px', borderRadius: 12, background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.08)' }}>
          <input
            type="checkbox"
            checked={agreed}
            onChange={e => setAgreed(e.target.checked)}
            style={{ marginTop: 2, width: 15, height: 15, accentColor: '#c0255a', flexShrink: 0, cursor: 'pointer' }}
          />
          <span style={{ fontSize: 12.5, color: 'rgba(255,255,255,.6)', lineHeight: 1.6 }}>
            I agree to the <Link to="/legal/eula" target="_blank" style={{ color: '#c0255a', fontWeight: 700, textDecoration: 'none' }}>EULA / Terms of Service</Link>.
          </span>
        </label>

        <button onClick={handleAccept} disabled={!agreed || saving} style={{
          width: '100%', padding: '12px', borderRadius: 12, border: 'none', color: '#fff',
          fontSize: 14, fontWeight: 800, fontFamily: 'inherit', marginBottom: 12,
          background: agreed ? 'linear-gradient(135deg,#8a1538,#c0185c)' : 'rgba(87,65,68,.3)',
          cursor: agreed && !saving ? 'pointer' : 'default',
          boxShadow: agreed ? '0 4px 20px rgba(138,21,56,.5)' : 'none',
          opacity: saving ? .7 : 1,
        }}>
          {saving ? 'Saving…' : 'Accept & Continue'}
        </button>

        <button onClick={() => signOut()} style={{
          width: '100%', padding: '10px', borderRadius: 12, background: 'transparent',
          border: '1px solid rgba(255,255,255,.1)', color: 'rgba(255,255,255,.4)',
          fontSize: 12.5, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
        }}>
          Sign out instead
        </button>
      </div>
    </div>,
    document.body
  )
}
