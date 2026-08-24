import { Link } from 'react-router-dom'

const SECTIONS: { title: string; body: string }[] = [
  {
    title: '1. Acceptance of Terms',
    body: 'By creating an account or otherwise using ClubSynq ("the App"), you agree to be bound by this End User License Agreement (EULA). If you do not agree, do not use the App.',
  },
  {
    title: '2. Who Operates ClubSynq',
    body: 'ClubSynq is created and operated by its founding team — Abhay, Aarif, and Isaac (collectively, "we", "us", or "the ClubSynq team"). ClubSynq is not currently registered as a formal business entity; this section will be updated with the registered company\'s legal name once incorporation is complete.',
  },
  {
    title: '3. Eligibility',
    body: 'You must be at least 14 years old to use ClubSynq. If you are under the age of majority in your jurisdiction, you confirm that a parent or legal guardian has consented to your use of the App.',
  },
  {
    title: '4. License Grant',
    body: 'ClubSynq grants you a limited, non-exclusive, non-transferable, revocable license to use the App for its intended purpose: discovering and participating in university clubs, events, and related social and marketplace features.',
  },
  {
    title: '5. User-Generated Content',
    body: 'You are responsible for content you post — profile information, posts, messages, marketplace listings, and club materials. You must not post unlawful, harassing, or infringing content. ClubSynq may remove content that violates this policy.',
  },
  {
    title: '6. Club Leadership & Permissions',
    body: 'Users granted club leadership roles (e.g. president, officer) receive elevated permissions to manage their club\'s profile, membership, events, and positions. These permissions are granted at ClubSynq\'s and the club\'s discretion and may be revoked.',
  },
  {
    title: '7. Karak Points & Rewards',
    body: 'Karak points are an in-app engagement mechanic with no cash value. Points, rewards, and redemption availability may change or be discontinued at any time without compensation.',
  },
  {
    title: '8. Events & Check-Ins',
    body: 'Event registration, QR check-ins, and attendance data are used to operate event features and may be shared with the hosting club. Registration status is managed by clubs and is not guaranteed until confirmed in-app. Events are hosted and run by the clubs themselves, not by ClubSynq — ClubSynq is not responsible for the conduct, safety, cancellation, or outcome of any event hosted by a club.',
  },
  {
    title: '9. Marketplace & Skill Souq',
    body: 'Marketplace listings are created directly by users and paid for via cash on delivery — ClubSynq does not process payments or hold funds. We are not a party to the transaction between buyer and seller and are not responsible for the quality, safety, legality, or delivery of items exchanged. Disputes are between the transacting users.',
  },
  {
    title: '10. Account & Termination',
    body: 'You are responsible for maintaining the confidentiality of your account. ClubSynq may suspend or terminate accounts that violate this EULA or applicable law.',
  },
  {
    title: '11. Third-Party Services',
    body: 'ClubSynq uses third-party infrastructure to operate, including Supabase (database, authentication, and file storage) and Google Sign-In (optional login). Information you provide may be processed by these providers under their own terms and privacy policies.',
  },
  {
    title: '12. Disclaimer of Warranties',
    body: 'The App is provided "as is" without warranties of any kind, express or implied, including fitness for a particular purpose or non-infringement.',
  },
  {
    title: '13. Limitation of Liability',
    body: 'To the maximum extent permitted by law, ClubSynq and its founders are not liable for indirect, incidental, or consequential damages arising from use of the App.',
  },
  {
    title: '14. Governing Law',
    body: 'This EULA is governed by the laws of the State of Qatar, and any disputes arising from it are subject to the exclusive jurisdiction of the courts of Qatar.',
  },
  {
    title: '15. Changes to This Agreement',
    body: 'ClubSynq may update this EULA from time to time. Continued use of the App after changes take effect constitutes acceptance of the revised terms.',
  },
  {
    title: '16. Contact',
    body: 'For questions about this EULA, contact us at clubsynq.official@gmail.com.',
  },
]

export default function EULAPage() {
  return (
    <div style={{ minHeight:'100vh', background:'#0d0708', fontFamily:"'Be Vietnam Pro', sans-serif", padding:'48px 20px' }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700;800;900&display=swap');`}</style>
      <div style={{ maxWidth:680, margin:'0 auto' }}>
        <Link to="/signup" style={{ color:'#c0255a', textDecoration:'none', fontSize:13, fontWeight:700 }}>← Back</Link>
        <h1 style={{ fontSize:26, fontWeight:900, color:'#f3dddf', letterSpacing:'-.5px', margin:'18px 0 32px' }}>End User License Agreement</h1>
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
