'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from 'lib/firebase';

export default function DashboardPage() {
  const router = useRouter();
  const [selectedTool, setSelectedTool] = useState('Inicio');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        router.push('/'); // Redirige al login si no está autenticado
      }
    });

    return () => unsubscribe();
  }, [router]);

  const tools = ['Inicio', 'Usuarios', 'Reportes', 'Configuración'];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Banner superior */}
      <header
        style={{
          backgroundColor: '#0070f3',
          color: 'white',
          padding: '1rem',
          textAlign: 'center',
          fontSize: '1.5rem',
          fontWeight: 'bold',
        }}
      >
        Meraky Technology - Dashboard
      </header>

      <div style={{ display: 'flex', flex: 1 }}>
        {/* Menú lateral */}
        <aside
          style={{
            width: '250px',
            backgroundColor: '#f5f5f5',
            padding: '1rem',
            boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h2 style={{ fontSize: '1.2rem', color: '#333', marginBottom: '1rem' }}>
            Herramientas
          </h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {tools.map((tool) => (
              <li
                key={tool}
                onClick={() => setSelectedTool(tool)}
                style={{
                  padding: '10px',
                  marginBottom: '10px',
                  backgroundColor: selectedTool === tool ? '#0070f3' : 'white',
                  color: selectedTool === tool ? 'white' : '#333',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  textAlign: 'center',
                  fontWeight: selectedTool === tool ? 'bold' : 'normal',
                }}
              >
                {tool}
              </li>
            ))}
          </ul>
        </aside>

        {/* Contenido principal */}
        <main
          style={{
            flex: 1,
            padding: '2rem',
            backgroundColor: '#ffffff',
            overflowY: 'auto',
          }}
        >
          <h1 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '1rem' }}>
            {selectedTool}
          </h1>
          <p style={{ fontSize: '1rem', color: '#666' }}>
            {selectedTool === 'Inicio' && 'Bienvenido al Dashboard. Selecciona una herramienta del menú.'}
            {selectedTool === 'Usuarios' && 'Aquí puedes gestionar los usuarios de tu sistema.'}
            {selectedTool === 'Reportes' && 'Visualiza y genera reportes detallados.'}
            {selectedTool === 'Configuración' && 'Ajusta las configuraciones de tu sistema.'}
          </p>
        </main>
      </div>
    </div>
  );
}