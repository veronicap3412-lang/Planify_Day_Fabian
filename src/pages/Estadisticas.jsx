import estadisticas from '../images/estadisticas.jpg'
import estadisticasDos from '../images/estadisticas_2.jpg'
import estadisticasMeses from '../images/estadisticas_meses_mejor.png'
import usuario from '../images/usuario.png'

function Estadisticas() {
  return (
    <section className="contenido-panel estadisticas">
      <div className="admin-usuario">
        <span>ADMIN</span>
        <img src={usuario} alt="Usuario administrador" />
      </div>
      <h1>Estadísticas</h1>
      <img className="grafica grafica-principal" src={estadisticas} alt="Estadísticas generales" />
      <img className="grafica grafica-secundaria" src={estadisticasDos} alt="Resumen de estadísticas" />
      <h2>Meses</h2>
      <img className="grafica grafica-meses" src={estadisticasMeses} alt="Estadísticas por meses" />
    </section>
  )
}

export default Estadisticas