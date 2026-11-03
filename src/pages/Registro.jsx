function Registro() {
  return (
    <form className="form-section" onSubmit={(e) => { e.preventDefault(); window.location.hash = '#/exito' }}>
      <h2>Registrarme</h2>
      <label htmlFor="nombre">Nombre completo:</label>
      <input type="text" id="nombre" name="nombre" required />
      <label htmlFor="usuario">Nombre de usuario:</label>
      <input type="text" id="usuario" name="usuario" required />
      <label htmlFor="correo-registro">Correo electrónico:</label>
      <input type="email" id="correo-registro" name="correo" required />
      <label htmlFor="telefono">Teléfono:</label>
      <input type="tel" id="telefono" name="telefono" />
      <label htmlFor="password-registro">Contraseña:</label>
      <input type="password" id="password-registro" name="password" required />
      <label htmlFor="confirmar">Confirmar contraseña:</label>
      <input type="password" id="confirmar" name="confirmar" required />
      <button type="submit" className="btn-register">Registrarse</button>
      <a href="#/inicio" className="btn btn-cancel">Cancelar</a>
    </form>
  )
}

export default Registro