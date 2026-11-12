import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'No se proporcionó ningún archivo' }, { status: 400 });
    }

    
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    
    const extension = file.name.split('.').pop() || 'jpg';
    const nombreUnico = `${Date.now()}-${Math.round(Math.random() * 1e9)}.${extension}`;

    
    const carpetaUploads = join(process.cwd(), 'public', 'uploads');
    
    
    await mkdir(carpetaUploads, { recursive: true });

    
    const rutaArchivo = join(carpetaUploads, nombreUnico);

    
    await writeFile(rutaArchivo, buffer);

    
    return NextResponse.json({ url: `/uploads/${nombreUnico}` });
  } catch (error) {
    console.error('Error al guardar la imagen de forma local:', error);
    return NextResponse.json({ error: 'Error al guardar la imagen localmente' }, { status: 500 });
  }
}
