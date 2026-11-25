import { MapPin, ShieldCheck } from 'lucide-react';
import { SITE, whatsappLink } from '../data/site';
import { IMAGES } from '../data/images';
import Button from './Button';
import Photo from './Photo';

export default function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow">Seu momento de se cuidar, sua hora de brilhar</p>
          <h1 id="hero-title">
            Sua beleza, sua <em>essência</em>, seu melhor.
          </h1>
          <p className="hero__text">
            Um espaço pensado para você cuidar da sua beleza, renovar sua autoestima e dedicar um
            momento especial a si mesma.
          </p>
          <div className="hero__actions">
            <Button
              href={whatsappLink('Olá! Gostaria de agendar uma avaliação.')}
              whatsapp
              className="btn--lg"
            >
              Agende sua avaliação
            </Button>
            <Button href="#tratamentos" variant="outline" className="btn--lg">
              Conheça nossos tratamentos
            </Button>
          </div>
          <ul className="hero__facts">
            <li><ShieldCheck size={18} aria-hidden="true" /> {SITE.credential}</li>
            <li><MapPin size={18} aria-hidden="true" /> Caldas Novas - GO</li>
          </ul>
        </div>

        <div className="hero__visual">
          <Photo
            src={IMAGES.hero}
            alt="Sala de atendimento da clínica de estética da Dra. Rozangela Gomes, com maca, armário de produtos e poltrona"
            label="Foto principal da clínica"
            className="hero__photo"
            priority
          />
        </div>
      </div>
    </section>
  );
}
