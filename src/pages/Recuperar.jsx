function Recuperar() {
  function enviar(e) {
    e.preventDefault()
    alert('Si el correo está registrado, recibirás las instrucciones de recuperación.')
  }

  return (
    <form className="form-section" onSubmit={enviar}>
      <h2>¿Olvidaste tu contraseña?</h2>
      <p className="texto-ayuda">Introduce tu correo electrónico para enviarte un enlace de recuperación.</p>
      <label htmlFor="email-recuperar">Correo electrónico:</label>
      <input type="email" id="email-recuperar" name="email" placeholder="ejemplo@correo.com" required />
      <button type="submit" className="btn-login">Enviar enlace</button>
      <a href="#/login" className="link">Volver al inicio de sesión</a>
    </form>
  )
}

export default Recuperar