import planificacion from '../images/WhatsApp Image 2026-04-09 at 9.52.04 AM (1).jpeg'

function Bienvenida() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>TU DÍA, BAJO CONTROL</h1>
        <p>
          Bienvenido a <strong>Planify Day</strong>, una herramienta sencilla para
          organizar tus tareas, priorizar lo importante y alcanzar tus metas
          diarias sin estrés.
        </p>
        <div className="botones">
          <a className="btn btn-primary" href="#/registro">Comenzar</a>
          <a className="btn btn-secondary" href="#/login">Ya tengo cuenta</a>
        </div>
      </div>
      <div className="hero-img">
        <img src={planificacion} alt="Planificación" />
      </div>
    </section>
  )
}

export default Bienvenida