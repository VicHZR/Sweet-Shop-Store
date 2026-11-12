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

    // Convertir el archivo a un Buffer de Node.js
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Generar un nombre único para evitar que imágenes con el mismo nombre se sobrescriban
    const extension = file.name.split('.').pop() || 'jpg';
    const nombreUnico = `${Date.now()}-${Math.round(Math.random() * 1e9)}.${extension}`;

    // Definir la ruta de la carpeta dentro de "public/uploads"
    const carpetaUploads = join(process.cwd(), 'public', 'uploads');
    
    // Asegurar que la carpeta "public/uploads" exista; si no, la crea automáticamente
    await mkdir(carpetaUploads, { recursive: true });

    // Ruta completa del archivo en el disco duro
    const rutaArchivo = join(carpetaUploads, nombreUnico);

    // Guardar el archivo físicamente en tu computadora
    await writeFile(rutaArchivo, buffer);

    // Retornar la URL pública que Next.js puede leer directamente
    return NextResponse.json({ url: `/uploads/${nombreUnico}` });
  } catch (error) {
    console.error('Error al guardar la imagen de forma local:', error);
    return NextResponse.json({ error: 'Error al guardar la imagen localmente' }, { status: 500 });
  }
}
