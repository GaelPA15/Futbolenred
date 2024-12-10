"use client"; // Asegúrate de mantener este atributo al principio del archivo

import { useRouter } from 'next/navigation';

export default function LigasPage() {
  const router = useRouter();

  // Lista de ligas
  const ligas = [
    {
      id: "futbol7",
      nombre: "Liga de Futbol 7",
      descripcion: "Únete a la liga más divertida de futbol 7, donde podrás jugar con amigos y formar nuevos equipos.",
    },
    {
      id: "nocturna",
      nombre: "Liga Nocturna",
      descripcion: "Para los que prefieren jugar de noche, esta liga te ofrece partidos emocionantes después de las 8 PM.",
    },
    {
      id: "infantil",
      nombre: "Liga Infantil",
      descripcion: "Fomenta el deporte en los más pequeños con esta liga pensada para niños y niñas de 6 a 12 años.",
    },
    {
      id: "universitaria",
      nombre: "Liga Universitaria",
      descripcion: "Diseñada para estudiantes universitarios, esta liga fomenta la competencia sana entre campus.",
    },
    {
      id: "femenil",
      nombre: "Liga Femenil",
      descripcion: "Una liga exclusiva para mujeres que buscan un espacio competitivo y lleno de emociones.",
    },
    {
      id: "master",
      nombre: "Liga Máster",
      descripcion: "Para jugadores mayores de 35 años que buscan mantenerse activos y disfrutar del fútbol.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto py-12 px-6 flex-grow">
        {/* Título de la página */}
        <h1 className="text-4xl font-bold text-center mb-8 text-white">Ligas de Fútbol</h1>
        <p className="text-lg text-center mb-12 text-white-700">
          Encuentra las ligas disponibles para ti, con diferentes modalidades y horarios. ¡Únete a la acción!
        </p>

        {/* Contenedor de ligas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {ligas.map((liga) => (
            <div
              key={liga.id}
              className="bg-gray-800 border-2 border-black shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">{liga.nombre}</h2>
              <p className="text-gray-300 mb-4">{liga.descripcion}</p>

              {/* Botón para unirse a la liga */}
              <button
                onClick={() => router.push(`/ligas/${liga.id}`)}
                className="bg-blue-600 text-white px-6 py-2 mt-4 rounded-full hover:bg-blue-700 transition-colors duration-300"
              >
                Unirse a la liga
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-auto">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-4 lg:mb-0">
              <h3 className="text-lg font-semibold">FutbolEnRed</h3>
              <p className="text-sm">Juega, conecta y vive el fútbol como nunca antes.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#inicio" className="text-sm hover:underline">Inicio</a>
              <a href="#comunidad" className="text-sm hover:underline">Comunidad</a>
              <a href="#entrenamiento" className="text-sm hover:underline">¿Por qué nosotros?</a>
              <a href="#lugares" className="text-sm hover:underline">Más información</a>
            </div>
            <div>
              <p className="text-sm">Contacto: info@futbolenred.com</p>
              <p className="text-sm">Teléfono: +52 555 123 4567</p>
            </div>
          </div>
          <p className="text-center text-sm mt-4">© 2024 FutbolEnRed. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
