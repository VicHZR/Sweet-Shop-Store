/* eslint-disable @typescript-eslint/no-require-imports */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Iniciando inyección y generación modular de Prisma...');

try {
  const rutaClientSuperior = path.resolve(__dirname, '../node_modules/@prisma/client');
  const packageJsonClient = path.resolve(rutaClientSuperior, 'package.json');

  const nodeModulesLocal = path.resolve(__dirname, 'node_modules');
  const prismaClientLocal = path.resolve(nodeModulesLocal, '@prisma/client');

  if (fs.existsSync(packageJsonClient)) {
    console.log('📦 Sincronizando metadatos de dependencia local...');
    fs.mkdirSync(prismaClientLocal, { recursive: true });
    fs.copyFileSync(packageJsonClient, path.resolve(prismaClientLocal, 'package.json'));
  }

  const binarioPrisma = path.resolve(process.env.USERPROFILE, 'node_modules/prisma/build/index.js');
  
  if (!fs.existsSync(binarioPrisma)) {
    throw new Error('No se encontró el binario global de Prisma en ' + binarioPrisma);
  }

  console.log(`🎯 Ejecutando generador modular desde: ${binarioPrisma}`);
  
  execSync(`node "${binarioPrisma}" generate`, { stdio: 'inherit' });
  
  console.log('✅ ¡Cliente de Prisma generado con éxito en tu carpeta lib!');
} catch (error) {
  console.error('❌ Error durante la generación:', error.message);
}
