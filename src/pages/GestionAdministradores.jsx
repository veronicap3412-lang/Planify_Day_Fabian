import { useState } from 'react'
import { administradoresData } from '../data/administradores'

function GestionAdministradores() {
  const [busqueda, setBusqueda] = useState('')
  const [administradores, setAdministradores] = useState(administradoresData)

  function cambiarEstado(id) {
    const listaActualizada = administradores.map((admin) => {
      if (admin.id === id) {
        return { ...admin, activo: !admin.activo }
      }
      return admin
    })
    setAdministradores(listaActualizada)
  }

  const filtrados = administradores.filter((admin) =>
    admin.nombre.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <section className="contenido-panel">
      <h1>Gestión de Administradores</h1>
      <input
        className="buscador"
        type="text"
        placeholder="Buscar administrador"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <div className="tabla-contenedor">
        <table>
          <thead>
            <tr><th>Nombre</th><th>Correo electrónico</th><th>Rol</th><th>Estado</th></tr>
          </thead>
          <tbody>
            {filtrados.map((admin) => (
              <tr key={admin.id}>
                <td>{admin.nombre}</td>
                <td>{admin.correo}</td>
                <td>{admin.rol}</td>
                <td>
                  <label className="switch">
                    <input type="checkbox" checked={admin.activo} onChange={() => cambiarEstado(admin.id)} />
                    <span className="slider"></span>
                  </label>
                  {admin.activo ? 'Activo' : 'Inactivo'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default GestionAdministradores