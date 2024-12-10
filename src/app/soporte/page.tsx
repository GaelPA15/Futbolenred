"use client";

import { useState } from 'react';

export default function Soporte() {
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Evita que el formulario se envíe de la manera tradicional
    setMensajeEnviado(true); // Muestra el mensaje de éxito

    // Aquí podrías agregar el código para enviar los datos del formulario a un servidor
  };

  return (
    <>
      <section className="flex items-center justify-center min-h-screen bg-[#0A0E1A] text-white">
        <div className="bg-[#161B2E] p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-white mb-6">
            Soporte Técnico
          </h2>
          <p className="text-center text-gray-300 mb-6">
            ¿Tienes problemas o dudas? Contáctanos y resolveremos tu situación lo
            antes posible.
          </p>

          {mensajeEnviado ? (
            <div className="text-center text-green-500 font-semibold">
              Tu mensaje ha sido enviado con éxito.
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Campo Nombre */}
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-sm font-semibold text-gray-300"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  placeholder="Escribe tu nombre completo"
                  className="w-full p-3 mt-2 border border-gray-600 rounded-lg bg-[#0A0E1A] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              {/* Campo Correo */}
              <div>
                <label
                  htmlFor="correo"
                  className="block text-sm font-semibold text-gray-300"
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="correo"
                  placeholder="example@correo.com"
                  className="w-full p-3 mt-2 border border-gray-600 rounded-lg bg-[#0A0E1A] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              {/* Campo Mensaje */}
              <div>
                <label
                  htmlFor="mensaje"
                  className="block text-sm font-semibold text-gray-300"
                >
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  placeholder="Describe tu problema o consulta"
                  className="w-full p-3 mt-2 border border-gray-600 rounded-lg bg-[#0A0E1A] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                ></textarea>
              </div>

              {/* Botón Enviar */}
              <button
                type="submit"
                className="w-full py-3 mt-6 text-white bg-green-600 hover:bg-green-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Enviar Mensaje
              </button>
            </form>
          )}
        </div>
      </section>

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
              <a href="#inicio" className="text-sm hover:underline">
                Inicio
              </a>
              <a href="#comunidad" className="text-sm hover:underline">
                Comunidad
              </a>
              <a href="#entrenamiento" className="text-sm hover:underline">
                ¿Por qué nosotros?
              </a>
              <a href="#lugares" className="text-sm hover:underline">
                Más información
              </a>
            </div>
            <div>
              <p className="text-sm">Contacto: info@futbolenred.com</p>
              <p className="text-sm">Teléfono: +52 555 123 4567</p>
            </div>
          </div>
          <p className="text-center text-sm mt-4">
            © 2024 FutbolEnRed. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
