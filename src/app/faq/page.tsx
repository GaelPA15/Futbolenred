"use client";

import { useState } from "react";

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: "¿Cómo puedo restablecer mi contraseña?",
      answer:
        "Puedes restablecer tu contraseña haciendo clic en el enlace '¿Olvidaste tu contraseña?' en la página de inicio de sesión.",
    },
    {
      question: "¿Dónde puedo encontrar mis facturas?",
      answer:
        "Tus facturas están disponibles en tu cuenta. Ingresa a 'Mi Perfil' y selecciona la opción de 'Facturación'.",
    },
    {
      question: "¿Cómo contacto al soporte técnico?",
      answer:
        "Puedes contactarnos a través del formulario en la sección de Soporte Técnico o enviando un correo a soporte@ejemplo.com.",
    },
    {
      question: "¿Cuál es el horario de atención?",
      answer:
        "Nuestro equipo está disponible de lunes a viernes de 9:00 AM a 6:00 PM.",
    },
  ];

  return (
    <section className="flex items-center justify-center min-h-screen bg-[#0A0E1A] text-white">
      <div className="bg-[#161B2E] p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Preguntas Frecuentes
        </h2>
        <p className="text-center text-gray-300 mb-6">
          Encuentra respuestas a las preguntas más comunes.
        </p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="p-4 rounded-lg bg-[#0A0E1A] border border-gray-600"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="flex justify-between items-center w-full text-left text-lg font-semibold text-gray-300"
              >
                {faq.question}
                <span className="ml-2 text-gray-500">
                  {openQuestion === index ? "-" : "+"}
                </span>
              </button>
              {openQuestion === index && (
                <p className="mt-3 text-sm text-gray-400">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
