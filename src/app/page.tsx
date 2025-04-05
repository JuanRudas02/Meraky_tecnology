'use client';

import Head from 'next/head';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>MERAKI Technology</title>
        <meta name="description" content="Bienvenido a MERAKI Technology, tu solución tecnológica." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          backgroundColor: '#f5f5f5',
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        <h1 style={{ fontSize: '2.5rem', color: '#333' }}>Bienvenido a MERAKI Technology</h1>
        <p style={{ fontSize: '1.2rem', color: '#666', marginTop: '1rem' }}>
          Tu solución tecnológica para un mundo conectado.
        </p>
        <div style={{ marginTop: '2rem' }}>
          <button
            onClick={() => router.push('/login')}
            style={{
              padding: '10px 20px',
              marginRight: '10px',
              backgroundColor: '#0070f3',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
          >
            Iniciar sesión
          </button>
          <button
            onClick={() => router.push('/register')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#34c759',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
          >
            Registrarse
          </button>
        </div>
      </main>
    </>
  );
}