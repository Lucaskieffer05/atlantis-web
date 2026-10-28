// Datos de contacto de la escuela. Fuente: PRODUCT.md (confirmados por el dueño el 2026-10-27).
export const site = {
  name: 'Atlantis Escuela de Natación',
  address: 'Suchón 990',
  city: 'San Carlos Centro, Santa Fe',
  instagram: 'https://www.instagram.com/atlantisescueladenatacion/',
  instagramHandle: '@atlantisescueladenatacion',
  facebook: 'https://www.facebook.com/atlantis.escueladenatacion/',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Such%C3%B3n+990%2C+San+Carlos+Centro%2C+Santa+Fe',
  mapsEmbed: 'https://www.google.com/maps/embed?origin=mfe&pb=!1m2!2m1!1sSuch%C3%B3n+990,+San+Carlos+Centro,+Santa+Fe',
};

// Las dos atienden todas las consultas por WhatsApp; el visitante elige a quién escribirle.
// `phone` va en formato internacional para WhatsApp (54 9 + característica + número).
export const contacts = [
  { name: 'Silvina', phone: '5493404435552', display: '3404 435552' },
  { name: 'Camila', phone: '5493404436889', display: '3404 436889' },
];

export const contactVerb = 'Escribinos';

// Cada consulta pasa por /gracias (cuenta la conversión de Google Ads) y de ahí abre WhatsApp.
export const contactLink = (name: string, message: string) =>
  `/gracias/?a=${name.toLowerCase()}&m=${encodeURIComponent(message)}`;

// wa.me abre la app en el celular; en la computadora, /gracias usa WhatsApp Web.
export const waLink = (phone: string, message: string, desktop = false) =>
  desktop
    ? `https://web.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`
    : `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

// ID de la etiqueta de Google Ads (empieza con AW-). Mientras sea null, no se carga ninguna etiqueta.
export const GOOGLE_ADS_ID: string | null = null;

export const defaultMessage = 'Hola, quería consultar por las clases de natación.';
