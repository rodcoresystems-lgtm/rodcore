// Carrossel infinito reutilizável (CSS puro). Renderiza o grupo de itens duas vezes;
// a cópia é só visual: oculta para leitores de tela e fora da navegação por teclado (inert).
function Group({ items, renderItem, listLabel, clone = false }) {
  return (
    <ul
      className="carousel__group"
      {...(clone ? { 'aria-hidden': 'true', inert: true } : { 'aria-label': listLabel })}
    >
      {items.map((item) => (
        <li key={item.id ?? item.title} className="carousel__slide">
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}

export default function Marquee({ items, renderItem, label, listLabel, className = '' }) {
  return (
    <div className={`carousel ${className}`} role="region" aria-label={label}>
      <div className="carousel__track">
        <Group items={items} renderItem={renderItem} listLabel={listLabel} />
        <Group items={items} renderItem={renderItem} clone />
      </div>
    </div>
  );
}
