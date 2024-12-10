"use client"; // Asegúrate de mantener este atributo

import { useRouter } from 'next/navigation';

export default function TrainingPage() {
  const router = useRouter();

  const handleJoin = (trainingType: string) => {
    // Redirigir a la página respectiva o manejar la acción según el tipo
    router.push(`/entrenamiento/${trainingType}`); // Ejemplo, ajusta la ruta según sea necesario
  };

  return (
    <div className="container mx-auto py-12 px-6">
      {/* Título de la página */}
      <h1 className="text-4xl font-bold text-center mb-8 text-white-900">
        Programas de Entrenamiento
      </h1>
      <p className="text-lg text-center mb-12 text-black-700">
        Ya seas un entusiasta de toda la vida o estés comenzando en el mundo del fútbol, tenemos algo emocionante preparado para ti. Explora nuestra variedad de programas y oportunidades de entrenamiento diseñadas para mejorar tus habilidades futbolísticas y fomentar un sentido de comunidad.
      </p>

      {/* Contenedor de programas de entrenamiento (en una columna) */}
      <div className="flex flex-col gap-8">
        {/* Tarjeta para Entrenamiento para Adultos - Domingo */}
        <div className="bg-[var(--background)] border-2 border-black shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-white mb-4">Entrenamiento para Adultos - Domingo</h2>
          <p className="text-white mb-4">
            Duración: 7 semanas - 13/10, 20/10, 27/10, 3/11, 17/11, 8/12, 12/1
            <br />
            Sesiones distribuidas para adaptarse a la temporada navideña.
          </p>
          <p className="text-white mb-4">
            ¡Mejora tus habilidades futbolísticas en un ambiente divertido y seguro con un entrenador licenciado!
          </p>

          {/* Imagen del programa */}
          <div className="flex justify-center mb-4">
            <img 
              src="https://static.wixstatic.com/media/53a3ab_de58b2c2ad3140b783239170d12af754~mv2.png/v1/fill/w_319,h_371,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/55467a_5b258cf7b5424099a5d576d4702b9f11mv2.png" 
              alt="Entrenamiento Domingo"
              className="w-80 h-auto object-cover rounded-lg"
            />
          </div>

          <button
            onClick={() => handleJoin('domingo')}
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            Unirse al entrenamiento de Fútbol - Domingo
          </button>
        </div>

        {/* Tarjeta para Entrenamiento para Adultos - Martes */}
        <div className="bg-[var(--background)] border-2 border-black shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-white mb-4">Entrenamiento para Adultos - Martes</h2>
          <p className="text-white mb-4">
            **Martes - Masterclass en Marcar Goles**
            <br />
            Duración: 7 semanas - 29/10, 5/11, 12/11, 19/11, 3/12, 10/12, 7/1
            <br />
            Horario: 7:00 pm - 8:00 pm en Beach Chalet.
          </p>
          <p className="text-white mb-4">
            Ven a mejorar tus habilidades en la marca de goles en una clase sin presión y en grupo pequeño.
          </p>

          {/* Imagen del programa */}
          <div className="flex justify-center mb-4">
            <img 
              src="https://static.wixstatic.com/media/53a3ab_e0bb41515e364c0facb81f944786fec1~mv2.jpg/v1/fill/w_319,h_521,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/soccer-player-dribbling-through-cones-2021-08-28-22-12-44-utc-845x682.jpg" 
              alt="Entrenamiento Martes"
              className="w-80 h-auto object-cover rounded-lg"
            />
          </div>

          <button
            onClick={() => handleJoin('martes')}
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            Unirse al entrenamiento de Fútbol - Martes
          </button>
        </div>

        {/* Tarjeta para Entrenamiento Privado de Fútbol */}
        <div className="bg-[var(--background)] border-2 border-black shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-white mb-4">Entrenamiento Privado de Fútbol</h2>
          <p className="text-white mb-4">
            Ofrecemos lecciones privadas para adultos, ya sea de forma individual o en grupo pequeño.
          </p>
          <p className="text-white mb-4">
            ¿Quieres mejorar tu confianza con el balón? ¿Aprender habilidades técnicas? ¡Estamos aquí para ayudarte!
          </p>

          {/* Imagen del programa */}
          <div className="flex justify-center mb-4">
            <img 
              src="https://static.wixstatic.com/media/53a3ab_86bcc5aeedb84e4286fb78266860bbc9~mv2.jpeg/v1/fill/w_319,h_665,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/55467a_b941d86c72c54d3aa363bfa0d39082dfmv2.jpeg" 
              alt="Entrenamiento Privado"
              className="w-80 h-auto object-cover rounded-lg"
            />
          </div>

          <button
            onClick={() => handleJoin('privado')}
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            Solicitar Entrenamiento Privado
          </button>
        </div>
      </div>
    </div>
  );
}
