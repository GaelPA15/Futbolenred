// src/app/ligas/[ligaId]/page.tsx
import { Metadata } from 'next';

interface LigaDetailsPageProps {
  params: { ligaId: 'futbol7' | 'nocturna' | 'infantil' | 'universitaria' | 'femenil' | 'master' };
}

export default function LigaDetailsPage({ params }: LigaDetailsPageProps) {
  const ligas = {
    futbol7: {
      nombre: "Liga de Futbol 7",
      descripcion: "La liga más divertida para disfrutar del fútbol en formato 7 vs 7.",
      detalles: "Horarios flexibles y canchas en toda la ciudad.",
      informacionAdicional: {
        nombreEvento: "Domingo – Liga Mixta de Fútbol 7 al Aire Libre",
        tipo: "Mixto - Fútbol 7 al Aire Libre - Campo de Césped Sintético",
        requisitos: "(Mínimo 2 mujeres en el campo)",
        medidas: "Tamaño de las porterías: 7x21, Campo: Mitad de cancha",
        ubicacion: "Dónde: Campo Deportivo Central (Calle 10 & Av. 25)",
        inicio: "Cuándo: Inicia el 2/9/25",
        nivelJuego: "Nivel de Juego: Nivel Intermedio",
        horarios: "Horarios de Juego: 9 a. m. - 12 p. m.",
        inscripcionEquipos: "Inscripción para Equipos: ABIERTA",
        inscripcionJugadores: "Inscripción para Jugadores Individuales/Grupos Pequeños: ABIERTA",
        cuentaRequerida: "Es necesario crear una cuenta en SoccerApps para inscribirse",
        imagenUrl: "https://bubblefootball.es/wp-content/uploads/2016/11/futbol-7-2.jpg"
      }
    },
    nocturna: {
      nombre: "Liga Nocturna",
      descripcion: "Partidos nocturnos llenos de emoción después de las 8 PM.",
      detalles: "Ideal para los que trabajan o estudian de día.",
    },
    infantil: {
      nombre: "Liga Infantil",
      descripcion: "Liga para niños y niñas de 6 a 12 años.",
      detalles: "Actividades recreativas y entrenadores especializados.",
    },
    universitaria: {
      nombre: "Liga Universitaria",
      descripcion: "Para estudiantes universitarios que buscan competencia sana entre campus.",
      detalles: "Horarios compatibles con la vida estudiantil.",
    },
    femenil: {
      nombre: "Liga Femenil",
      descripcion: "Una liga exclusiva para mujeres.",
      detalles: "Cancha de calidad y entrenadores especializados.",
    },
    master: {
      nombre: "Liga Máster",
      descripcion: "Para jugadores mayores de 35 años.",
      detalles: "Espacio para mantenerse activo y competitivo.",
    },
  };

  const liga = ligas[params.ligaId];

  if (!liga) {
    return <p className="text-center mt-12">Liga no encontrada.</p>;
  }

  // Verificar si la liga tiene la propiedad informacionAdicional
  const tieneInformacionAdicional = 'informacionAdicional' in liga;

  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-8">{liga.nombre}</h1>
      <p className="text-lg text-center mb-4">{liga.descripcion}</p>
      <p className="text-md text-center mb-4">{liga.detalles}</p>

      {/* Información adicional para la liga de Fútbol 7 */}
      {tieneInformacionAdicional && params.ligaId === 'futbol7' && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-center mb-4">{liga.informacionAdicional.nombreEvento}</h2>
          <p className="text-center mb-2">{liga.informacionAdicional.tipo}</p>
          <p className="text-center mb-2">{liga.informacionAdicional.requisitos}</p>
          <p className="text-center mb-2">{liga.informacionAdicional.medidas}</p>
          <p className="text-center mb-2">{liga.informacionAdicional.ubicacion}</p>
          <p className="text-center mb-2">{liga.informacionAdicional.inicio}</p>
          <p className="text-center mb-2">{liga.informacionAdicional.nivelJuego}</p>
          <p className="text-center mb-2">{liga.informacionAdicional.horarios}</p>
          <p className="text-center mb-2">{liga.informacionAdicional.inscripcionEquipos}</p>
          <p className="text-center mb-2">{liga.informacionAdicional.inscripcionJugadores}</p>
          <p className="text-center mb-2">{liga.informacionAdicional.cuentaRequerida}</p>
          
          {/* Imagen de la liga */}
          <div className="mt-6 text-center">
            <img
              src={liga.informacionAdicional.imagenUrl}
              alt="Futbol 7"
              className="mx-auto w-full max-w-md rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
