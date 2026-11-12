# 🍬 Dulce Diferencia — Tienda Web de Dulces Artesanales

Aplicación web moderna para una dulcería artesanal, desarrollada con **Next.js**, **TypeScript**, **Tailwind CSS** y **Prisma**. Permite a los clientes explorar el catálogo de productos, gestionar pedidos y realizar consultas directas mediante integración con WhatsApp.

---

## ✨ Características principales

* **Catálogo interactivo:** Visualización de dulces artesanales con tarjetas personalizadas (`TarjetaDulce`).
* **Gestión de pedidos y autenticación:** Rutas API integradas (`/api/pedidos`, `/api/login`) para el manejo de solicitudes y acceso de usuarios.
* **Contacto directo por WhatsApp:** Botón flotante (`WhatsappButton`) con mensaje preconfigurado para atención rápida al cliente.
* **Base de datos relacional:** Modelado y consultas gestionadas con Prisma ORM y PostgreSQL.
* **Diseño responsivo:** Interfaz adaptable a dispositivos móviles y escritorio estilizada con Tailwind CSS.

---

## 🛠️ Tecnologías utilizadas

* **Frontend:** Next.js (App Router), React, TypeScript, Tailwind CSS
* **Backend / API:** Next.js Route Handlers (`route.ts`)
* **Base de datos & ORM:** PostgreSQL, Prisma
* **Calidad de código:** ESLint, Prettier

---

## 📁 Estructura del proyecto

```text
Sweet-Shop-Store/
└── dulces-artesanales/
    ├── app/                  # Páginas principales, layouts y rutas API (login, pedidos)
    ├── components/           # Componentes reutilizables (TarjetaDulce, WhatsappButton, etc.)
    ├── prisma/               # Esquema de base de datos y migraciones
    ├── public/               # Imágenes y recursos estáticos
    ├── .env                  # Variables de entorno (no incluido en el repositorio)
    ├── next.config.ts        # Configuración de Next.js
    ├── package.json          # Dependencias y scripts del proyecto
    └── tsconfig.json         # Configuración de TypeScript
```

---

## 🚀 Instalación y ejecución local

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

### 1. Clona el repositorio
```bash
git clone https://github.com
cd Sweet-Shop-Store/dulces-artesanales
```

### 2. Instala las dependencias
```bash
npm install
```

### 3. Configura las variables de entorno
Crea un archivo `.env` dentro de la carpeta `dulces-artesanales` y agrega tu cadena de conexión a la base de datos y las claves necesarias:
```env
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/dulce_diferencia?schema=public"
```

### 4. Configura la base de datos con Prisma
```bash
npx prisma generate
npx prisma db push
```

### 5. Inicia el servidor de desarrollo
```bash
npm run dev
```
Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación en funcionamiento.

---

## 👤 Autor

* **Víctor Hugo Guzmán** — [@VicHZR](https://github.com/VicHZR)
