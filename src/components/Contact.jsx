import { Phone } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { SITE, whatsappLink } from '../data/site';
import Button from './Button';
import Location from './Location';

export default function Contact() {
  return (
    <section id="contato" className="section section--beige" aria-labelledby="contact-title">
      <div className="container contact">
        <div className="contact__info">
          <p className="eyebrow">Contato e agendamento</p>
          <h2 id="contact-title">Seu momento de cuidado começa aqui</h2>
          <p>
            Dê o primeiro passo para cuidar de você! Agende sua avaliação, esclareça suas dúvidas e
            conheça as possibilidades de tratamentos estéticos indicados para suas necessidades e
            seus objetivos. A Dra. Rozângela Gomes está pronta para receber você com atenção,
            acolhimento e orientação profissional.
          </p>
          <Button href={whatsappLink()} whatsapp className="btn--lg">
            Chamar no WhatsApp
          </Button>
          <ul className="contact__list">
            <li>
              <Phone size={20} aria-hidden="true" />
              <a href={`tel:+${SITE.whatsappNumber}`}>{SITE.phoneLabel}</a>
            </li>
            <li>
              <InstagramIcon size={20} />
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">{SITE.instagramHandle}</a>
            </li>
          </ul>
        </div>
        <Location />
      </div>
    </section>
  );
}
