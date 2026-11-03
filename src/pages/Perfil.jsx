import { useState } from 'react'

function Perfil() {
  const [mostrar, setMostrar] = useState(false)
  const [mensaje, setMensaje] = useState(false)

  function guardar() {
    setMensaje(true)
    setTimeout(() => setMensaje(false), 2000)
  }

  return (
    <section className="perfil-contenido">
      <div className="perfil-card">
        <h2>Perfil de Administrador</h2>
        <label htmlFor="username">Nombre</label>
        <input type="text" id="username" placeholder="Tu nombre" />
        <label htmlFor="email">Correo</label>
        <input type="email" id="email" placeholder="correo@ejemplo.com" />
        <label htmlFor="password-perfil">Contraseña</label>
        <div className="pass">
          <input type={mostrar ? 'text' : 'password'} id="password-perfil" />
          <button type="button" onClick={() => setMostrar(!mostrar)}>{mostrar ? 'Ocultar' : 'Mostrar'}</button>
        </div>
        <label htmlFor="idioma">Idioma</label>
        <select id="idioma"><option>Español</option><option>English</option></select>
        <button className="guardar perfil-guardar" onClick={guardar}>Guardar</button>
      </div>
      {mensaje && <div className="mensaje">Guardado correctamente</div>}
    </section>
  )
}

export default Perfil