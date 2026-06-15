export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '24px',
      padding: '40px',
      textAlign: 'center'
    }}>
      <div style={{
        width: 64,
        height: 64,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 28
      }}>🚀</div>

      <h1 style={{ fontSize: '2.5rem', fontWeight: 700, margin: 0 }}>
        Pipeline Active
      </h1>

      <p style={{ fontSize: '1.1rem', color: '#9ca3af', maxWidth: 480, margin: 0, lineHeight: 1.6 }}>
        Claude built this, pushed it to GitHub, and Vercel deployed it — automatically.
        No CodeSandbox. No copy-paste.
      </p>

      <div style={{
        marginTop: 16,
        padding: '12px 24px',
        borderRadius: 8,
        border: '1px solid #27272a',
        background: '#111',
        fontSize: '0.85rem',
        color: '#71717a',
        letterSpacing: '0.05em'
      }}>
        BRUNEL STUDIOS · CLAUDE → GITHUB → VERCEL
      </div>
    </main>
  )
}
