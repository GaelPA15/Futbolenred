"use client";

export default function Futbol7Page() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Encabezado */}
      <header className="bg-white-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold">Liga de Fútbol 7</h1>
          <p className="text-lg mt-2">¡Forma parte de la experiencia más emocionante del fútbol 7!</p>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="container mx-auto py-12 px-6 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Imagen de la liga */}
          <div>
            <img
              src="https://bubblefootball.es/wp-content/uploads/2016/11/futbol-7-2.jpg"
              alt="Liga de Fútbol 7"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Información de la liga */}
          <div>
            <h2 className="text-3xl font-bold text-white-800 mb-4">¡Únete a la Liga de Fútbol 7!</h2>
            <p className="text-lg text-white-700 mb-6">
              La Liga de Fútbol 7 es el lugar perfecto para disfrutar del fútbol con tus amigos o
              para conocer nuevos equipos. Con horarios flexibles y un ambiente competitivo, esta
              liga te garantiza diversión y emoción en cada partido.
            </p>

            <ul className="list-disc list-inside text-white-700 mb-6">
              <li>Partidos semanales en instalaciones de primer nivel.</li>
              <li>Equipos mixtos y formato inclusivo.</li>
              <li>Premios para los mejores equipos de cada temporada.</li>
            </ul>

            {/* Botón para registrarse */}
            <button
              onClick={() => alert('¡Registro exitoso! Pronto recibirás más información.')}
              className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              Registrarme ahora
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">© 2024 FutbolEnRed. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
