'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'lib/firebase';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/dashboard');
    } catch (err: any) {
      setError('Correo o contraseña incorrectos');
    }
  };

  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f4f8',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '10px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          width: '100%',
          maxWidth: '400px',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '1rem' }}>
          Meraky Tecnology 
        </h1>
        <p style={{ fontSize: '1rem', color: '#666', marginBottom: '1.5rem' }}>
          Bienvenido de nuevo, por favor ingresa tus credenciales.
        </p>
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontSize: '1rem',
          }}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontSize: '1rem',
          }}
        />
        <button
          onClick={handleLogin}
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '1rem',
            marginBottom: '10px',
          }}
        >
          Entrar
        </button>
        {error && (
          <p style={{ color: 'red', fontSize: '0.9rem', marginTop: '10px' }}>
            {error}
          </p>
        )}
        <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
          ¿No tienes una cuenta?{' '}
          <span
            onClick={() => router.push('/register')}
            style={{
              color: '#0070f3',
              cursor: 'pointer',
              textDecoration: 'underline',
            }}
          >
            Regístrate aquí
          </span>
        </p>
      </div>
    </main>
  );
}