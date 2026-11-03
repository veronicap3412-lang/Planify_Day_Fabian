import { useEffect, useState } from 'react'
import './App.css'
import Encabezado from './components/Encabezado'
import Sidebar from './components/Sidebar'
import PiePagina from './components/PiePagina'
import Bienvenida from './pages/Bienvenida'
import Login from './pages/Login'
import Registro from './pages/Registro'
import Recuperar from './pages/Recuperar'
import Exito from './pages/Exito'
import GestionAdministradores from './pages/GestionAdministradores'
import Estadisticas from './pages/Estadisticas'
import AjustesGlobales from './pages/AjustesGlobales'
import Perfil from './pages/Perfil'

function App() {
  const [pagina, setPagina] = useState(window.location.hash || '#/inicio')

  useEffect(() => {
    function cambiarPagina() {
      setPagina(window.location.hash || '#/inicio')
    }

    window.addEventListener('hashchange', cambiarPagina)
    return () => window.removeEventListener('hashchange', cambiarPagina)
  }, [])

  function mostrarPagina() {
    switch (pagina) {
      case '#/login':
        return <Login />
      case '#/registro':
        return <Registro />
      case '#/recuperar':
        return <Recuperar />
      case '#/exito':
        return <Exito />
      case '#/administradores':
        return <GestionAdministradores />
      case '#/estadisticas':
        return <Estadisticas />
      case '#/ajustes':
        return <AjustesGlobales />
      case '#/perfil':
        return <Perfil />
      default:
        return <Bienvenida />
    }
  }

  const esPanel = ['#/administradores', '#/estadisticas', '#/ajustes', '#/perfil'].includes(pagina)
  const esAcceso = ['#/login', '#/registro', '#/recuperar', '#/exito'].includes(pagina)

  return (
    <div className={esPanel ? 'app panel-layout' : 'app'}>
      {esPanel ? (
        <>
          <Sidebar />
          <div className="panel-contenido">
            <Encabezado />
            {mostrarPagina()}
          </div>
        </>
      ) : (
        <>
          <Encabezado />
          <main className={esAcceso ? 'pagina-acceso' : 'pagina-inicio'}>
            {mostrarPagina()}
          </main>
          <PiePagina />
        </>
      )}
    </div>
  )
}

export default App