"use client";

import Link from 'next/link';

export default function Lugares() {
  return (
    <>
      <div id="lugares" className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center">Lugares Disponibles</h2>
        <p className="text-lg text-center mt-4">
          Descubre los mejores campos de fútbol cerca de ti. ¡Reserva tu lugar y comienza a jugar hoy mismo!
        </p>

        {/* Contenedor de lugares */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Lugar 1 */}
          <div className="bg-transparent rounded-lg shadow-lg m-4">
            <img
              src="https://marcopark.mx/wp-content/uploads/2021/09/1.jpeg"
              alt="Campo Central"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">Campo Central</h3>
              <p className="mt-2 text-gray-600">
                Ubicado en el centro de la ciudad con instalaciones de calidad.
              </p>
              <Link href="/campo-central">
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Ver más
                </button>
              </Link>
            </div>
          </div>

          {/* Lugar 2 */}
          <div className="bg-transparent rounded-lg shadow-lg m-4">
            <img
              src="https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?cs=srgb&dl=pexels-markusspiske-114296.jpg&fm=jpg"
              alt="Campo del Sol"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">Parque del Sol</h3>
              <p className="mt-2 text-gray-600">
                Un lugar perfecto para disfrutar con amigos al aire libre.
              </p>
              <Link href="/parque-del-sol">
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Ver más
                </button>
              </Link>
            </div>
          </div>

          {/* Lugar 3 */}
          <div className="bg-transparent rounded-lg shadow-lg m-4">
            <img
              src="https://www.qualitysportinstalacionesdeportivas.com/wp-content/uploads/2015/09/arenales1.jpg"
              alt="Club Deportivo Norte"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">Club Deportivo Norte</h3>
              <p className="mt-2 text-gray-600">
                Canchas techadas para disfrutar sin importar el clima.
              </p>
              <Link href="/club-deportivo-norte">
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Ver más
                </button>
              </Link>
            </div>
          </div>

          {/* Lugar 4 */}
          <div className="bg-transparent rounded-lg shadow-lg m-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoExxSzSyOv2mLjm5qhtxgD3EXeMypKtO3Aw&s"
              alt="Estadio Sur"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">Estadio Sur</h3>
              <p className="mt-2 text-gray-600">
                Ideal para juegos nocturnos con iluminación de alta calidad.
              </p>
              <Link href="/estadio-sur">
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Ver más
                </button>
              </Link>
            </div>
          </div>

          {/* Lugar 5 */}
          <div className="bg-transparent rounded-lg shadow-lg m-4">
            <img
              src="https://news.mondoiberica.com.es/wp-content/uploads/2022/11/ciudad-deportiva-real-zaragoza.png"
              alt="Zona Este"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">Zona Este</h3>
              <p className="mt-2 text-gray-600">
                Canchas de césped natural para juegos profesionales.
              </p>
              <Link href="/zona-este">
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Ver más
                </button>
              </Link>
            </div>
          </div>

          {/* Lugar 6 */}
          <div className="bg-transparent rounded-lg shadow-lg m-4">
            <img
              src="https://sportmaster.mx/wp-content/uploads/cancha-de-futbol-7-con-pasto-sintetico-1.jpg"
              alt="Parque de la Amistad"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">Parque de la Amistad</h3>
              <p className="mt-2 text-gray-600">
                Ambiente familiar con áreas recreativas y zonas verdes.
              </p>
              <Link href="/parque-de-la-amistad">
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Ver más
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-4 lg:mb-0">
              <h3 className="text-lg font-semibold">FutbolEnRed</h3>
              <p className="text-sm">
                Juega, conecta y vive el fútbol como nunca antes.
              </p>
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
    </>
  );
}
