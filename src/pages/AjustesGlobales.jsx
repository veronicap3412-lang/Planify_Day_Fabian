import { useEffect, useState } from 'react'

function AjustesGlobales() {
  const [modoOscuro, setModoOscuro] = useState(false)
  const [color, setColor] = useState('#2750F5')
  const [tamano, setTamano] = useState('16px')
  const [fuente, setFuente] = useState('Arial')

  useEffect(() => {
    const guardado = localStorage.getItem('configuracionPlanify')
    if (guardado) {
      const config = JSON.parse(guardado)
      setModoOscuro(config.modoOscuro || false)
      setColor(config.color || '#2750F5')
      setTamano(config.tamano || '16px')
      setFuente(config.fuente || 'Arial')
    }
  }, [])

  function guardar() {
    const configuracion = { modoOscuro, color, tamano, fuente }
    localStorage.setItem('configuracionPlanify', JSON.stringify(configuracion))
    alert('Cambios guardados correctamente')
  }

  function restablecer() {
    localStorage.removeItem('configuracionPlanify')
    setModoOscuro(false)
    setColor('#2750F5')
    setTamano('16px')
    setFuente('Arial')
  }

  return (
    <section className={modoOscuro ? 'contenido-panel ajustes dark-mode' : 'contenido-panel ajustes'}
      style={{ fontSize: tamano, fontFamily: fuente }}>
      <h1 style={{ background: `linear-gradient(to right, ${color}, #751E87)` }}>AJUSTES GLOBALES</h1>
      <div className="top-buttons">
        <button className="guardar" onClick={guardar}>GUARDAR CAMBIOS</button>
        <button className="restablecer" onClick={restablecer}>RESTABLECER</button>
      </div>
      <div className="ajustes-grid">
        <div className="ajuste-card">
          <h2>PERSONALIZACIÓN DE COLORES</h2>
          <div className="box"><p>COLOR PRIMARIO: {color}</p><p>COLOR SECUNDARIO: Morado</p><p>COLOR DE FONDO: {modoOscuro ? 'Oscuro' : 'Claro'}</p></div>
          <button className="palette" onClick={() => setColor('#2750F5')}>PALETA SELECCIONADA</button>
          <div className="colors">
            <button title="Azul" style={{ background: '#2750F5' }} onClick={() => setColor('#2750F5')}></button>
            <button title="Morado" style={{ background: '#751E87' }} onClick={() => setColor('#751E87')}></button>
            <button title="Verde" style={{ background: '#098d86' }} onClick={() => setColor('#098d86')}></button>
          </div>
          <div className="modo">
            <button className="claro" onClick={() => setModoOscuro(false)}>MODO CLARO</button>
            <button className="oscuro" onClick={() => setModoOscuro(true)}>MODO OSCURO</button>
          </div>
        </div>
        <div className="ajuste-card">
          <h2>CONFIGURACIÓN DE TEXTOS</h2>
          <div className="box"><p>PLANIFY DAY</p><p>BIENVENIDO A PLANIFY DAY</p><p>DISFRUTA CON UNA GRAN COMODIDAD</p></div>
          <div className="box">
            <p>TAMAÑO DE FUENTE:</p>
            <div className="options">
              <button onClick={() => setTamano('12px')}>PEQUEÑO</button>
              <button onClick={() => setTamano('16px')}>MEDIANO</button>
              <button onClick={() => setTamano('22px')}>GRANDE</button>
            </div>
          </div>
          <div className="box">
            <p>ESTILOS DE FUENTE:</p>
            <div className="options">
              <button onClick={() => setFuente('cursive')}>Cursive</button>
              <button onClick={() => setFuente('monospace')}>Mono</button>
              <button onClick={() => setFuente('serif')}>Serif</button>
              <button onClick={() => setFuente('Arial')}>Arial</button>
            </div>
          </div>
        </div>
        <div className="ajuste-card">
          <h2>PARÁMETROS GENERALES</h2>
          <div className="box">
            <p>Duración de sesión: 30 minutos</p><p>Intentos máximos de login: 5</p>
            <p>Formato de fecha: dd/mm/yyyy</p><p>Idioma: Español / Inglés</p>
            <p>Notificaciones de email: Sí / No</p>
          </div>
          <div className="update">Última actualización: configuración local</div>
        </div>
      </div>
    </section>
  )
}

export default AjustesGlobales