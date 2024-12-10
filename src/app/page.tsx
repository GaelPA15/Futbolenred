"use client";

export default function Home() {
  return (
    <section>
      <div
        id="inicio"
        className="container mx-auto px-6 py-12 text-center bg-cover bg-center"
        style={{
          backgroundImage: "url('https://www.living4football.club/wp-content/uploads/2019/04/1550674513-0001dm5zv.jpg')",
        }}
      >
        <h1 className="text-4xl font-bold text-black">
          Bienvenido a <span style={{ color: "var(--black)" }}>FutbolEnRed</span>
        </h1>
        <p className="mt-4 text-lg text-black">
          Paga y juega partidos de fútbol cerca de ti. ¡Únete a una comunidad apasionada por el fútbol!
        </p>
      </div>
      <div id="comunidad" className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center">¡Bienvenido a la Comunidad!</h2>
        <div className="mt-6 flex flex-col lg:flex-row items-center gap-6">
          <div className="lg:w-1/2">
            <p className="mt-4 text-lg text-center lg:text-left">
              ¡Bienvenido a FutbolEnRed!
            </p>
            <p className="mt-2 text-lg text-center lg:text-left">
              Descubre por qué nuestra comunidad apasionada por el fútbol está causando sensación. En FutbolEnRed, creamos un ambiente vibrante e inclusivo donde los amantes del fútbol de todas partes se sienten como en casa.
            </p>
            <p className="mt-2 text-lg text-center lg:text-left">
              En el corazón de nuestra comunidad, no solo encontrarás partidos emocionantes que despiertan tu espíritu competitivo, sino también momentos inolvidables dentro y fuera del campo. Aquí, el fútbol no es solo un deporte: es una experiencia que te conecta con personas que comparten tu pasión y ganas de disfrutar cada jugada.
            </p>
            <p className="mt-2 text-lg text-center lg:text-left">
              Nuestros miembros comparten cómo FutbolEnRed ha transformado sus vidas, forjando amistades duraderas y creando recuerdos únicos. Porque aquí, el pitazo final no marca el fin, sino el comienzo de nuevas conexiones. ¡Únete a nosotros y vive la experiencia FutbolEnRed! 
            </p>
          </div>
          
          <div className="lg:w-1/2">
            <img
              src="https://cdn2.mediotiempo.com/uploads/media/2022/05/19/tecos-llevaron-triunfo-condicion-local.jpg"
              alt="Comunidad jugando fútbol"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      <div id="entrenamiento" className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center">¿POR QUÉ JUGAR CON FUTBOLENRED?</h2>
        <div className="mt-6 flex flex-col lg:flex-row items-center gap-6">
          <div className="lg:w-1/2">
            <img
              src="https://www.futboltotal.com.mx/wp-content/uploads/2021/05/tecos-liga-premier.jpg"
              alt="Jugadores de fútbol celebrando"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2">
            <p className="text-lg text-left">
              En FutbolEnRed, nos enorgullecemos de ofrecer una experiencia futbolística única combinada con una comunidad vibrante e inclusiva. Nuestra misión va más allá del juego; se trata de construir conexiones duraderas y crear momentos inolvidables tanto dentro como fuera del campo.
            </p>
            <p className="mt-4 text-lg text-left">
              Creemos en el poder del fútbol para unir a las personas y fortalecer lazos que trascienden el deporte. Nuestros programas están diseñados para fomentar el trabajo en equipo, el espíritu deportivo y la camaradería, asegurándonos de que cada participante se sienta valorado y apoyado.
            </p>
            <p className="mt-4 text-lg text-left">
              Desde partidos emocionantes que encienden tu pasión por el fútbol hasta celebraciones después del juego, encontrarás un sentido de pertenencia que va mucho más allá del pitazo final. ¡Únete a FutbolEnRed y descubre cómo el fútbol puede transformar tus conexiones y tus experiencias! 
            </p>
          </div>
        </div>
      </div>
      <div id="lugares" className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold">MÁS QUE UNA LIGA DE FÚTBOL...</h2>
        <div className="mt-6 flex flex-col lg:flex-row items-center gap-6">
          <div className="lg:w-1/2">
            <h3 className="text-xl font-semibold mb-4">MISIÓN</h3>
            <p className="text-lg text-left">
              Nuestra misión es brindar a nuestros participantes la mejor experiencia futbolística y de comunidad.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-4">COMUNIDAD</h3>
            <p className="text-lg text-left">
              Entendemos la importancia de diseñar programas enfocados en los jugadores y de crear una comunidad sólida
              dentro y fuera del campo.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-4">CONEXIÓN</h3>
            <p className="text-lg text-left">
              ¡Esperamos verte pronto en uno de nuestros emocionantes programas en FutbolEnRed y compartir juntos esta
              pasión por el fútbol! 
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://pbs.twimg.com/media/GYcIAFxasAEo5mL?format=jpg&name=4096x4096"
              alt="Jugadores celebrando"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
{/* aqui va mi footer */}
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
    </section>
    
  );
}