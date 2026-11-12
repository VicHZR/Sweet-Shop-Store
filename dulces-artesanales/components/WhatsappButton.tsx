"use client";

export default function WhatsappButton() {
  
  const abrirWhatsapp = () => {
    const numero = "51999999999"; 
    const mensaje = encodeURIComponent("¡Hola! Me gustaría obtener más información sobre sus dulces artesanales.");
    window.open(`wa.me{numero}?text=${mensaje}`, "_blank");
  };

  return (
    <button
      onClick={abrirWhatsapp}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
      aria-label="Contactar por WhatsApp"
    >
      {/* Icono simple de chat usando SVG */}
      <svg 
        xmlns="w3.org" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className="w-6 h-6"
      >
        <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.521 1.5.221 2.598 1.474 2.598 2.985v10.083c0 1.511-1.097 2.764-2.598 2.986a47.548 47.548 0 0 1-5.04.425l-5.32 3.192a.75.75 0 0 1-1.141-.643v-3.034c-1.39-.14-2.712-.42-3.957-.824A2.98 2.98 0 0 1 2 15.304V5.756c0-1.51 1.098-2.764 2.598-2.985Z" clipRule="evenodd" />
      </svg>
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-medium text-sm whitespace-nowrap">
        ¿Te ayudo?
      </span>
    </button>
  );
}
