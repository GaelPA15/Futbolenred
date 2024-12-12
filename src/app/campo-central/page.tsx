"use client";

export default function CampoFutbolCentralPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Encabezado */}
      <header className=" text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold">Campo de Fútbol Central</h1>
          <p className="text-lg mt-2">¡Vive la emoción del fútbol en el corazón de la ciudad!</p>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="container mx-auto py-12 px-6 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Imagen del campo */}
          <div>
            <img
              src="https://news.mondoiberica.com.es/wp-content/uploads/2020/09/WhatsApp-Image-2020-07-17-at-10.15.35-1024x576.jpeg"
              alt="Campo de Fútbol Central"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Información sobre el campo */}
          <div>
            <h2 className="text-3xl font-bold text-white-800 mb-4">¡Disfruta del Campo de Fútbol Central!</h2>
            <p className="text-lg text-white-700 mb-6">
              El Campo Central es uno de los espacios más completos para practicar fútbol en la ciudad. Con una
              capacidad para 22 jugadores (11 por equipo), este campo ofrece las mejores condiciones para partidos
              competitivos y entrenamientos. Su césped sintético de última generación permite un juego rápido y seguro,
              mientras que sus instalaciones de primer nivel hacen de este un lugar ideal para cualquier evento deportivo.
            </p>

            <ul className="list-disc list-inside text-white-700 mb-6">
              <li>Disponibilidad de lunes a viernes de 8:00 AM a 10:00 PM.</li>
              <li>Capacidad para hasta 22 jugadores por partido.</li>
              <li>Alquiler de vestuarios y duchas para equipos.</li>
              <li>Estacionamiento disponible para jugadores y visitantes.</li>
            </ul>

            {/* Botón para reservar el campo */}
            <button
              onClick={() => alert('¡Reserva exitosa! Recibirás más detalles por correo electrónico.')}
              className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors duration-300"
            >
              Reservar ahora
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">© 2024 Kickit365. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
