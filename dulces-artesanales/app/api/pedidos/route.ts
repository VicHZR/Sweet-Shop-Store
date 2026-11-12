import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import nodemailer from 'nodemailer';

// 🏛️ RECTIFICACIÓN: Creamos el transporte SMTP seguro conectándonos directo a los servidores de Google
const transportadorGmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER || '',
    pass: process.env.GMAIL_PASS || '',
  },
});

interface ProductoEstructurado {
  id?: string;
  nombre: string;
  cantidad: number;
  precio: number;
}

interface PedidoEstructurado {
  id: string;
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
  direccion: string;
  ciudad: string | null;
  productos: string;
  total: number;
  estado: string;
  createdAt: string | Date;
  updatedAt?: string | Date;
}

interface OrdenBoleta {
  id: string;
  nombre: string;
  apellidos: string;
  direccion: string;
  ciudad: string | null;
  telefono: string;
  total: number | string;
}

interface RegistroCierreDiario {
  id: string;
  fecha: Date;
  totalVentas: number;
  numPedidos: number;
  pedidosJson: string;
  createdAt: Date;
}
function generarHtmlBoletaElectronica(orden: OrdenBoleta, productos: ProductoEstructurado[]): string {
  const filasProductosHtml = productos.map(p => `
    <tr style="border-b: 1px solid #f3f4f6; text-align: left;">
      <td style="padding: 12px 0; font-size: 14px; color: #374151;">${p.nombre}</td>
      <td style="padding: 12px 0; font-size: 14px; color: #374151; text-align: center;">${p.cantidad}</td>
      <td style="padding: 12px 0; font-size: 14px; color: #374151; text-align: right;">S/ ${(p.precio).toFixed(2)}</td>
      <td style="padding: 12px 0; font-size: 14px; font-weight: bold; color: #111827; text-align: right;">S/ ${(p.precio * p.cantidad).toFixed(2)}</td>
    </tr>
  `).join('');

  return `
    <div style="font-family: 'Segoe UI', Helvetica, Arial, sans-serif; max-w: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border: 1px solid #f3f4f6; border-radius: 16px;">
      <div style="text-align: center; padding-bottom: 20px; border-b: 2px solid #fff7ed;">
        <h2 style="color: #92400e; margin: 0; font-size: 24px; font-weight: 900; letter-spacing: -0.5px;">Dulce Diferencia</h2>
        <p style="margin: 4px 0 0 0; font-size: 12px; color: #9ca3af; text-transform: uppercase; font-weight: 700; tracking: 1px;">Comprobante de Compra Electrónico</p>
      </div>
      
      <div style="margin-top: 24px; font-size: 14px; color: #4b5563; line-height: 1.5;">
        <p style="margin: 0;">¡Hola <strong style="color: #111827;">${orden.nombre} ${orden.apellidos}</strong>!</p>
        <p style="margin: 4px 0 0 0;">Muchas gracias por tu compra. Tu pedido ha sido registrado con éxito y ya está en manos de nuestros maestros reposteros.</p>
        <p style="margin: 4px 0 0 0;">A continuación, encontrarás el resumen de tu orden. Si tienes alguna consulta, no dudes en contactarnos.</p>
        <p style="margin: 4px 0 0 0;">El pago es a contra entrega</p>
        <p style="margin: 4px 0 0 0;">Número de Orden: <strong style="color: #111827;">${orden.id.substring(0, 8)}</strong></p>
      </div>

      <div style="margin-top: 24px; padding: 16px; background-color: #f9fafb; border-radius: 12px;">
        <h4 style="margin: 0 0 10px 0; color: #374151; font-size: 12px; text-transform: uppercase;">Detalles del Despacho</h4>
        <p style="margin: 0; font-size: 13px; color: #4b5563;"><strong>Dirección de Entrega:</strong> ${orden.direccion} ${orden.ciudad ? `, ${orden.ciudad}` : ''}</p>
        <p style="margin: 4px 0 0 0; font-size: 13px; color: #4b5563;"><strong>Teléfono de Contacto:</strong> ${orden.telefono}</p>
      </div>

      <table style="width: 100%; margin-top: 24px; border-collapse: collapse;">
        <thead>
          <tr style="border-b: 2px solid #f3f4f6; text-align: left; font-size: 11px; text-transform: uppercase; color: #9ca3af;">
            <th style="padding-bottom: 8px;">Producto</th>
            <th style="padding-bottom: 8px; text-align: center;">Cant.</th>
            <th style="padding-bottom: 8px; text-align: right;">P. Unit.</th>
            <th style="padding-bottom: 8px; text-align: right;">Total</th>
          </tr>
        </thead>
        <tbody>
          ${filasProductosHtml}
        </tbody>
      </table>

      <div style="margin-top: 20px; padding-top: 20px; border-t: 2px solid #f3f4f6; text-align: right;">
        <span style="font-size: 14px; color: #4b5563; font-weight: 600;">Monto Total a Pagar:</span>
        <span style="font-size: 20px; color: #92400e; font-weight: 900; margin-left: 8px; display: inline-block;">S/ ${Number(orden.total).toFixed(2)}</span>
      </div>

      <div style="margin-top: 32px; text-align: center; border-t: 1px solid #f3f4f6; padding-top: 16px; font-size: 11px; color: #9ca3af;">
        <p style="margin: 0;">Este documento sirve como constancia digital de tu orden de compra en Dulce Diferencia.</p>
        <p style="margin: 2px 0 0 0;">Lima, Perú &copy; 2026</p>
      </div>
    </div>
  `;
}
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const tipoFiltro = searchParams.get('tipo');

    if (tipoFiltro === 'diarios') {
      const dbDinamica = prisma as unknown as Record<string, { findMany: (args?: Record<string, unknown>) => Promise<unknown[]> }>;
      const cierresDiariosDb = await dbDinamica.cierreDiario.findMany({
        orderBy: { createdAt: 'desc' }
      }) as RegistroCierreDiario[];

      const listaPedidosConsolidados: PedidoEstructurado[] = [];

      cierresDiariosDb.forEach((cierre) => {
        try {
          const pedidosParseados = JSON.parse(cierre.pedidosJson) as PedidoEstructurado[];
          if (Array.isArray(pedidosParseados)) {
            pedidosParseados.forEach((pedido) => {
              listaPedidosConsolidados.push({
                ...pedido,
                createdAt: pedido.createdAt || cierre.createdAt
              });
            });
          }
        } catch {
          // Ignorado
        }
      });

      return NextResponse.json(listaPedidosConsolidados);
    }

    const todosLosPedidos = await prisma.pedido.findMany({
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json(todosLosPedidos);
  } catch (error: unknown) {
    const errorMensaje = error instanceof Error ? error.message : "Error desconocido";
    console.error('❌ ERROR EN GET /api/pedidos:', errorMensaje);
    return NextResponse.json({ error: 'Error al recuperar la colección de pedidos' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const idPedido = searchParams.get('id');

    if (!idPedido) {
      return NextResponse.json({ error: 'El identificador (id) de la orden es mandatorio' }, { status: 400 });
    }

    const datosCuerpo = await request.json() as { estado?: string };
    const nuevoEstadoSolicitado = datosCuerpo.estado;

    if (!nuevoEstadoSolicitado) {
      return NextResponse.json({ error: 'El nuevo estado no ha sido especificado' }, { status: 400 });
    }

    const estadosValidos = ['pendiente', 'completado', 'cancelado'];
    if (!estadosValidos.includes(nuevoEstadoSolicitado)) {
      return NextResponse.json({ error: 'El estado provisto es inválido' }, { status: 400 });
    }

    const pedidoActualizado = await prisma.pedido.update({
      where: { id: idPedido },
      data: { estado: nuevoEstadoSolicitado }
    });

    return NextResponse.json(pedidoActualizado);
  } catch (error: unknown) {
    const errorMensaje = error instanceof Error ? error.message : "Error desconocido";
    console.error('❌ ERROR EN PUT /api/pedidos:', errorMensaje);
    return NextResponse.json({ error: 'Error interno de servidor al actualizar el estado de la orden' }, { status: 500 });
  }
}
export async function POST(request: Request) {
  try {
    const datosOrden = await request.json() as Omit<PedidoEstructurado, 'id' | 'createdAt' | 'updatedAt'>;

    if (!datosOrden.nombre || !datosOrden.total || !datosOrden.productos || !datosOrden.email) {
      return NextResponse.json({ error: 'Payload insuficiente. El email del cliente es obligatorio para el comprobante.' }, { status: 400 });
    }

    let listaProductosArray: ProductoEstructurado[] = [];
    try {
      listaProductosArray = JSON.parse(datosOrden.productos) as ProductoEstructurado[];
    } catch {
      return NextResponse.json({ error: 'La cadena de productos no corresponde a un formato JSON válido' }, { status: 400 });
    }

    // 1. Guardar la orden en PostgreSQL
    const nuevaOrdenGuardada = await prisma.pedido.create({
      data: {
        nombre: datosOrden.nombre,
        apellidos: datosOrden.apellidos,
        email: datosOrden.email,
        telefono: datosOrden.telefono,
        direccion: datosOrden.direccion,
        ciudad: datosOrden.ciudad || null,
        productos: datosOrden.productos,
        total: Number(datosOrden.total),
        estado: datosOrden.estado || 'pendiente'
      }
    });

    // 2. Despachar el correo de la boleta directo al email del cliente usando SMTP de Gmail
    try {
      const objetoOrdenTipado: OrdenBoleta = {
        id: nuevaOrdenGuardada.id,
        nombre: nuevaOrdenGuardada.nombre,
        apellidos: nuevaOrdenGuardada.apellidos,
        direccion: nuevaOrdenGuardada.direccion,
        ciudad: nuevaOrdenGuardada.ciudad,
        telefono: nuevaOrdenGuardada.telefono,
        total: nuevaOrdenGuardada.total
      };

      const cuerpoHtmlBoleta = generarHtmlBoletaElectronica(objetoOrdenTipado, listaProductosArray);
      
      // 🌟 RECTIFICACIÓN: Envío dinámico ilimitado a cualquier cuenta de correo (Gmail, Hotmail, etc.)
      await transportadorGmail.sendMail({
        from: `"Dulce Diferencia" <${process.env.GMAIL_USER}>`,
        to: nuevaOrdenGuardada.email, // 👈 Envía al email real de tu cliente
        subject: `Confirmación de Pedido N° ${nuevaOrdenGuardada.id.substring(0, 8)} - Dulce Diferencia`,
        html: cuerpoHtmlBoleta,
      });

      console.log(`✅ Boleta electrónica enviada por Gmail con éxito a: ${nuevaOrdenGuardada.email}`);
      
    } catch (emailError: unknown) {
      const msg = emailError instanceof Error ? emailError.message : "Error SMTP";
      console.error("⚠️ Excepción al despachar correo por Gmail:", msg);
    }

    return NextResponse.json(nuevaOrdenGuardada, { status: 201 });
  } catch (error: unknown) {
    const errorMensaje = error instanceof Error ? error.message : "Error desconocido";
    console.error('❌ ERROR EN POST /api/pedidos:', errorMensaje);
    return NextResponse.json({ error: 'Error fatal al dar de alta la orden de compra' }, { status: 500 });
  }
}
