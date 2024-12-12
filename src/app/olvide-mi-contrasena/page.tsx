"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function OlvideMiContrasena() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handlePasswordReset = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setMessage("Por favor, introduce un correo electrónico válido.");
      return;
    }
    setMessage("Se ha enviado un correo para restablecer tu contraseña.");
    setTimeout(() => {
      router.push("/login");
    }, 3000); // Redirige después de 3 segundos
  };

  return (
    <section className="flex flex-col min-h-screen bg-[#0A0E1A] text-white">
      <div className="flex-grow bg-[#161B2E] p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto mt-10 mb-12">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Restablecer contraseña
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
            Enviar enlace de recuperación
          </button>
        </form>
        {message && (
          <p className="mt-4 text-center text-sm text-green-400">{message}</p>
        )}
      </div>
    </section>
  );
}
