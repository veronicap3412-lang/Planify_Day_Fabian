import logo from '../images/LOGO.jpg'

function Sidebar() {
  return (
    <aside className="sidebar">
      <img src={logo} alt="Logo de Planify Day" className="sidebar-logo" />
      <h2>Panel administrador</h2>
      <nav className="sidebar-menu">
        <a href="#/administradores">Gestión de administradores</a>
        <a href="#/estadisticas">Estadísticas</a>
        <a href="#/ajustes">Ajustes globales</a>
        <a href="#/perfil">Perfil</a>
        <a href="#/inicio">Volver al inicio</a>
      </nav>
    </aside>
  )
}

export default Sidebar