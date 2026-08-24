import { Link } from 'react-router-dom'

const SECTIONS: { title: string; body: string }[] = [
  {
    title: '1. Acceptance of Terms',
    body: 'By creating an account or otherwise using ClubSynq ("the App"), you agree to be bound by this End User License Agreement (EULA). If you do not agree, do not use the App.',
  },
  {
    title: '2. License Grant',
    body: 'ClubSynq grants you a limited, non-exclusive, non-transferable, revocable license to use the App for its intended purpose: discovering and participating in university clubs, events, and related social and marketplace features.',
  },
  {
    title: '3. User-Generated Content',
    body: 'You are responsible for content you post — profile information, posts, messages, marketplace listings, and club materials. You must not post unlawful, harassing, or infringing content. ClubSynq may remove content that violates this policy.',
  },
  {
    title: '4. Club Leadership & Permissions',
    body: 'Users granted club leadership roles (e.g. president, officer) receive elevated permissions to manage their club\'s profile, membership, events, and positions. These permissions are granted at ClubSynq\'s and the club\'s discretion and may be revoked.',
  },
  {
    title: '5. Karak Points & Rewards',
    body: 'Karak points are an in-app engagement mechanic with no cash value. Points, rewards, and redemption availability may change or be discontinued at any time without compensation.',
  },
  {
    title: '6. Events & Check-Ins',
    body: 'Event registration, QR check-ins, and attendance data are used to operate event features and may be shared with the hosting club. Registration status is managed by clubs and is not guaranteed until confirmed in-app.',
  },
  {
    title: '7. Account & Termination',
    body: 'You are responsible for maintaining the confidentiality of your account. ClubSynq may suspend or terminate accounts that violate this EULA or applicable law.',
  },
  {
    title: '8. Disclaimer of Warranties',
    body: 'The App is provided "as is" without warranties of any kind, express or implied, including fitness for a particular purpose or non-infringement.',
  },
  {
    title: '9. Limitation of Liability',
    body: 'To the maximum extent permitted by law, ClubSynq is not liable for indirect, incidental, or consequential damages arising from use of the App.',
  },
  {
    title: '10. Changes to This Agreement',
    body: 'ClubSynq may update this EULA from time to time. Continued use of the App after changes take effect constitutes acceptance of the revised terms.',
  },
]

export default function EULAPage() {
  return (
    <div style={{ minHeight:'100vh', background:'#0d0708', fontFamily:"'Be Vietnam Pro', sans-serif", padding:'48px 20px' }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700;800;900&display=swap');`}</style>
      <div style={{ maxWidth:680, margin:'0 auto' }}>
        <Link to="/signup" style={{ color:'#c0255a', textDecoration:'none', fontSize:13, fontWeight:700 }}>← Back</Link>
        <h1 style={{ fontSize:26, fontWeight:900, color:'#f3dddf', letterSpacing:'-.5px', margin:'18px 0 6px' }}>End User License Agreement</h1>
        <p style={{ fontSize:13, color:'rgba(243,221,223,.35)', marginBottom:32 }}>
          Placeholder draft — replace with a reviewed EULA (e.g. via Termly or iubenda) before public launch.
        </p>
        {SECTIONS.map(s => (
          <div key={s.title} style={{ marginBottom:22 }}>
            <h2 style={{ fontSize:15, fontWeight:800, color:'#e0aab4', marginBottom:6 }}>{s.title}</h2>
            <p style={{ fontSize:13.5, color:'rgba(243,221,223,.55)', lineHeight:1.7, margin:0 }}>{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
