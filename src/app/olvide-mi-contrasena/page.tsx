"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function OlvideContrasena() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handlePasswordReset = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el correo de restablecimiento de contraseña
    alert(`Se ha enviado un enlace de restablecimiento a ${email}`);
    router.push("/login"); // Cambia la ruta según tu aplicación
  };

  return (
    <section className="flex flex-col min-h-screen bg-[#0A0E1A] text-white">
      <div className="flex-grow bg-[#161B2E] p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto mt-10 mb-12">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Olvidé mi contraseña
        </h2>

        <form onSubmit={handlePasswordReset} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-300"
            >
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-600 rounded-lg bg-[#0A0E1A] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="tu-email@ejemplo.com"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-6 text-white bg-green-600 hover:bg-green-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Enviar enlace de restablecimiento
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-300">
            ¿Ya tienes una cuenta? {" "}
            <a
              href="/login"
              className="text-green-400 hover:underline"
            >
              Inicia sesión aquí
            </a>
          </p>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-6 w-full mt-auto">
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
    </section>
  );
}
