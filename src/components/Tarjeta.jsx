function Tarjeta({ titulo, descripcion, estado }) {
  return (
    <article className="tarjeta">
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <span>{estado}</span>
    </article>
  )
}

export default Tarjeta