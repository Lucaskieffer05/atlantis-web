import type { ImageMetadata } from 'astro';
import pileta_chicos_fideos from '../assets/photos/pileta-chicos-fideos.jpg';
import chicos_colchoneta from '../assets/photos/chicos-colchoneta.jpg';
import aquagym_adultos from '../assets/photos/aquagym-adultos.jpg';
import adultos_grupo from '../assets/photos/adultos-grupo.jpg';
import equipo_bandera_natatorio from '../assets/photos/equipo-bandera-natatorio.jpg';
import equipo_bandera_familias from '../assets/photos/equipo-bandera-familias.jpg';
import nadadores_medallas from '../assets/photos/nadadores-medallas.jpg';
import equipo_natatorio from '../assets/photos/equipo-natatorio.jpg';
import torneo_largada from '../assets/photos/torneo-largada.jpg';
import torneo_borde from '../assets/photos/torneo-borde.jpg';
import rio_boyas from '../assets/photos/rio-boyas.jpg';
import rio_nadadora from '../assets/photos/rio-nadadora.jpg';
import rio_orilla from '../assets/photos/rio-orilla.jpg';
import inflable_tunel from '../assets/photos/inflable-tunel.jpg';
import pelotero_acuatico from '../assets/photos/pelotero-acuatico.jpg';
import juegos_aire_libre from '../assets/photos/juegos-aire-libre.jpg';
import inflable_tobogan from '../assets/photos/inflable-tobogan.jpg';
import cocina from '../assets/photos/cocina.jpg';
import pileta_cartel from '../assets/photos/pileta-cartel.jpg';
import chicos_fideos_colchoneta from '../assets/photos/chicos-fideos-colchoneta.jpg';
import colchoneta_agua from '../assets/photos/colchoneta-agua.jpg';
import chicos_borde from '../assets/photos/chicos-borde.jpg';
import chicos_borde_cartel from '../assets/photos/chicos-borde-cartel.jpg';
import instructora_con_nene from '../assets/photos/instructora-con-nene.jpg';

// Todas las fotos son reales: Instagram y Facebook oficiales de Atlantis, entregadas o autorizadas por el dueño.
export type Photo = { src: ImageMetadata | string; alt: string; width: number; height: number; position?: string };

const real = (src: ImageMetadata, alt: string, position?: string): Photo => ({
  src,
  alt,
  width: src.width,
  height: src.height,
  position,
});

export const photos = {
  hero: real(pileta_chicos_fideos, 'Chicos de Atlantis jugando con fideos de espuma en la pileta cubierta', '50% 62%'),
  kids: real(chicos_colchoneta, 'Chicos de Atlantis sonriendo sobre una colchoneta en el agua', '50% 45%'),
  adults: real(aquagym_adultos, 'Clase de gimnasia en el agua para adultos con fideos de colores', '50% 70%'),
  race: real(equipo_bandera_natatorio, 'Nadadoras de Atlantis con la bandera de la escuela en un torneo', '50% 40%'),
  competition: real(equipo_bandera_familias, 'Equipo de Atlantis con familias y profes, con medallas y la bandera de la escuela', '50% 45%'),
  pool: real(chicos_borde_cartel, 'Alumnos de Atlantis sentados en el borde de la pileta cubierta, bajo el cartel de la escuela', '50% 50%'),
};

export const tournaments: Photo[] = [
  real(nadadores_medallas, 'Nadadores de Atlantis con sus medallas', '50% 35%'),
  real(torneo_largada, 'Largada de una prueba vista desde arriba', '50% 50%'),
  real(equipo_natatorio, 'Nadadores de Atlantis en un natatorio antes de competir', '50% 40%'),
  real(torneo_borde, 'Nadadores esperando su prueba al borde de la pileta en un torneo', '50% 45%'),
];

export const river = {
  main: real(rio_nadadora, 'Nadadora de Atlantis sonriendo en el río con su boya de arrastre', '50% 70%'),
  group: real(rio_boyas, 'Chicos de Atlantis con gorras rosas y boyas antes de nadar en el río', '50% 40%'),
  shore: real(rio_orilla, 'Orilla del río con kayaks y nadadores el día de la travesía', '50% 50%'),
};

export const extras = [
  { title: 'Inflables y pelotero acuático', photo: real(pelotero_acuatico, 'Chicos jugando en un pelotero acuático inflable', '50% 55%') },
  { title: 'Colonia de verano', photo: real(inflable_tunel, 'Chicos de la colonia en un inflable con forma de túnel', '50% 50%') },
  { title: 'Juegos al aire libre', photo: real(juegos_aire_libre, 'Chicos de Atlantis jugando en el parque', '50% 50%') },
  { title: 'Toboganes', photo: real(inflable_tobogan, 'Chico subiendo a un tobogán inflable al aire libre', '50% 50%') },
  { title: 'Manos en la masa', photo: real(cocina, 'Chicos de Atlantis cocinando juntos', '50% 55%') },
];

export const gallery: Photo[] = [
  real(chicos_fideos_colchoneta, 'Chicos con fideos de espuma apoyados en una colchoneta', '50% 40%'),
  real(adultos_grupo, 'Grupo de adultos saludando desde la pileta', '50% 55%'),
  real(colchoneta_agua, 'Clase con una colchoneta larga en el agua', '50% 55%'),
  real(pileta_cartel, 'Chicos en la pileta bajo el cartel de Atlantis', '50% 45%'),
  real(chicos_borde, 'Chicos sentados en el borde de la pileta con colchonetas en el agua', '50% 60%'),
  real(instructora_con_nene, 'Instructora enseñando a nadar a un nene', '65% 55%'),
];
