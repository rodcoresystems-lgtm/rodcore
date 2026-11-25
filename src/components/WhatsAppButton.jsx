import { whatsappLink } from '../data/site';
import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppButton() {
  return (
    <a
      className="wa-float"
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Dra. Rozangela pelo WhatsApp"
    >
      <WhatsAppIcon size={30} />
      <span className="wa-float__label">Agendar avaliação</span>
    </a>
  );
}
