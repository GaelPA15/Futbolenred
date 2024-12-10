export default function DomingoPage() {
    return (
      <div className="container mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold text-center mb-8">Entrenamiento de Fútbol para Adultos - Domingo</h1>
        <p className="text-lg text-center mb-8">
          Aquí tienes información detallada sobre el entrenamiento del domingo.
        </p>
  
        <div className="bg-[var(--background)] border-2 border-black shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Detalles del Entrenamiento</h2>
          <p className="text-white mb-4">
            <strong>Temporada:</strong> Otoño 2024
            <br />
            <strong>Fechas:</strong> 13/10/24 - 12/01/25 (7 semanas)
            <br />
            <strong>Comienza:</strong> 13 de octubre de 2024
            <br />
            <strong>Finaliza:</strong> 12 de enero de 2025
            <br />
          </p>
  
          <div className="text-white mb-4">
            <strong>Fechas de Inscripción:</strong>
            <ul className="list-disc pl-6">
              <li><strong>Regular:</strong> 23 de septiembre de 2024 - 6 de octubre de 2024</li>
              <li><strong>Tardía:</strong> 7 de octubre de 2024 - 30 de octubre de 2024</li>
            </ul>
          </div>
  
          <p className="text-white mb-4">
            <strong>Ubicación:</strong> Campo Deportivo Central (Calle 10 & Av. 25)
            <br />
            <strong>Edad mínima:</strong> 18 años (Edad al 1 de octubre de 2024)
            <br />
            <strong>Horarios de sesión:</strong> Domingo, 9:00 a. m. - 10:00 a. m.
            <br />
            <strong>Nivel:</strong> Principiante/Intermedio
            <br />
            <strong>Duración del curso:</strong> 7 clases (con fechas intercaladas para las fiestas)
            <br />
            <strong>Fechas de las clases:</strong> 13/10, 20/10, 27/10, 3/11, 17/11, 8/12, 12/01
            <br />
          </p>
  
          <div className="text-white mb-4">
            <strong>Tarifas Individuales:</strong>
            <ul className="list-disc pl-6">
              <li><strong>Regular:</strong> $275.00 + 4.0% de comisión</li>
              <li><strong>Tardía:</strong> $295.00 + 4.0% de comisión</li>
            </ul>
          </div>
  
          <p className="text-white mb-4">
            Este curso de entrenamiento de fútbol al aire libre está diseñado para adultos que desean mejorar sus habilidades futbolísticas en un entorno relajado y sin presión. Las clases estarán a cargo de un entrenador certificado, y podrás asistir a todas las 7 sesiones al registrarte. El nivel de las clases varía entre principiante e intermedio, lo que te permitirá trabajar a tu propio ritmo y según tu nivel de habilidad.
          </p>
          <p className="text-white mb-4">
            El tamaño del grupo será entre 10 y 15 participantes. Se proporcionará un balón de fútbol para usar durante las clases. Se recomienda el uso de espinilleras (aunque no son obligatorias), así como calzado adecuado para el entrenamiento (ya sean zapatos de fútbol para césped sintético o tacos de fútbol, no se permiten tacos metálicos ni tenis).
          </p>
          <p className="text-white mb-4">
            ¡Esperamos que te unas a nuestro entrenamiento y mejores tus habilidades en el campo!
            Si tienes preguntas, contáctanos a <strong>info@futbolred.com</strong> o llama al <strong>415-123-4567</strong>.
          </p>
  
          <div className="flex justify-center mb-4">
            <img
              src="https://mundoentrenamiento.com/wp-content/uploads/2019/01/sesion-de-entrenamiento-en-futbol.jpg"
              alt="Entrenamiento de Fútbol"
              className="w-80 h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    );
  }
  