function Login() {
  return (
    <form className="form-section" onSubmit={(e) => { e.preventDefault(); window.location.hash = '#/exito' }}>
      <h2>Iniciar sesión</h2>
      <label htmlFor="correo">Correo electrónico:</label>
      <input type="email" id="correo" name="correo" required />
      <label htmlFor="password">Contraseña:</label>
      <input type="password" id="password" name="password" required />
      <button type="submit" className="btn-login">Iniciar sesión</button>
      <p><a href="#/recuperar" className="link">¿Olvidaste tu contraseña?</a></p>
    </form>
  )
}

export default Login