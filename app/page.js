import Link from 'next/link';

export default function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
      }}
    >
      <div
        style={{
          background: '#fff',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          textAlign: 'center',
          maxWidth: '400px',
          width: '100%',
        }}
      >
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#333' }}>
          Welcome to Our Website
        </h1>
        <p style={{ fontSize: '1rem', marginBottom: '1.5rem', color: '#555' }}>
          A professional authentication and authorization platform.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <Link
            href="/login"
            style={{
              background: '#3b82f6',
              color: '#fff',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              textDecoration: 'none',
            }}
          >
            Login
          </Link>
          <Link
            href="/signup"
            style={{
              background: '#10b981',
              color: '#fff',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              textDecoration: 'none',
            }}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
