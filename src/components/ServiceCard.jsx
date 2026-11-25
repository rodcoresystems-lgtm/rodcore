import { whatsappLink } from '../data/site';
import Button from './Button';
import Icon from './Icon';

export default function ServiceCard({ treatment }) {
  const { name, category, description, icon, image, imageAlt } = treatment;
  const message = `Olá! Tenho interesse no tratamento "${name}" e gostaria de agendar uma avaliação.`;

  return (
    <article className="card">
      <div className="card__media">
        {image ? (
          <img src={image} alt={imageAlt || `Tratamento: ${name}`} decoding="async" />
        ) : (
          <Icon name={icon} size={44} />
        )}
        <span className="card__category">{category}</span>
      </div>
      <div className="card__body">
        <h3>{name}</h3>
        <p>{description}</p>
        <Button href={whatsappLink(message)} variant="outline" whatsapp>
          Tenho interesse neste tratamento
        </Button>
      </div>
    </article>
  );
}
