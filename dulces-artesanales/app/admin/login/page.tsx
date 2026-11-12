"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginAdmin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [cargando, setCargando] = useState(false);

  const manejarLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setCargando(true);

    try {
      const respuesta = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (respuesta.ok) {
        router.push('/admin');
        router.refresh();
      } else {
        const datos = await respuesta.json();
        setError(datos.error || 'Correo o contraseña incorrectos');
      }
    } catch (err) {
      console.error(err);
      setError('Fallo de red al conectar con el servidor.');
    } finally {
      setCargando(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full border border-gray-100 shadow-xs">
        
        <div className="text-center mb-6">
          <span className="text-2xl">🍩</span>
          <h1 className="text-xl font-black text-gray-900 tracking-tight mt-2">Acceso Administrativo</h1>
          <p className="text-xs text-stone-500 mt-1">Ingresa tus credenciales para gestionar Dulce Diferencia</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-700 text-xs font-bold p-3 rounded-xl border border-red-100 mb-4 animate-pulse">
            ⚠️ {error}
          </div>
        )}

        <form onSubmit={manejarLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Correo Electrónico</label>
            <input 
              type="email" 
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full text-sm bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 outline-none focus:border-amber-700"
              placeholder="admin@dulcediferencia.com"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Contraseña</label>
            <input 
              type="password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full text-sm bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 outline-none focus:border-amber-700"
              placeholder="••••••••••••"
              required
            />
          </div>

          <button 
            type="submit"
            disabled={cargando}
            className="w-full bg-amber-700 hover:bg-amber-800 text-white font-bold text-sm py-3 rounded-xl transition-colors disabled:opacity-50 cursor-pointer shadow-xs uppercase tracking-wider mt-2"
          >
            {cargando ? 'Validando...' : 'Iniciar Sesión'}
          </button>
          
          <Link href="/" className="block text-center text-[11px] font-bold text-amber-700 hover:underline mt-4">
            🏠 Volver a la Vitrina Pública
          </Link>
        </form>
      </div>
    </main>
  );
}
