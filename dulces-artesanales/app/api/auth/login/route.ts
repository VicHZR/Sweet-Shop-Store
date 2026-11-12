import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    
    if (email === process.env.ADMIN_USER && password === process.env.ADMIN_PASSWORD) {
      const respuesta = NextResponse.json({ exito: true }, { status: 200 });

      
      respuesta.cookies.set('dulce_session', process.env.AUTH_SECRET || '', {
        httpOnly: true, 
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24, 
        path: '/',
      });

      return respuesta;
    }

    return NextResponse.json({ error: 'Credenciales inválidas' }, { status: 401 });
  } catch (error) {
    console.error("❌ ERROR EN AUTH API:", error);
    return NextResponse.json({ error: 'Fallo interno en el servidor' }, { status: 500 });
  }
}
