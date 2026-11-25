import { BadgeCheck } from 'lucide-react';
import { SITE, whatsappLink } from '../data/site';
import { IMAGES } from '../data/images';
import Button from './Button';
import Photo from './Photo';

const POINTS = [
  'Atendimento individualizado',
  'Avaliação profissional antes de cada indicação',
  'Atenção às características e necessidades de cada cliente',
];

export default function About() {
  return (
    <section id="sobre" className="section" aria-labelledby="about-title">
      <div className="container about">
        <Photo
          src={IMAGES.about}
          alt="Retrato da biomédica esteta Dra. Rozangela Gomes"
          label="Foto da Dra. Rozangela"
          className="about__photo"
        />
        <div className="about__content">
          <p className="eyebrow">Sobre a profissional</p>
          <h2 id="about-title">Prazer, sou Rozângela Gomes</h2>
          <p className="about__credential">{SITE.credential}</p>
          <p className="about__text">
            Sou biomédica pós-graduada em Estética Avançada, com três anos de experiência. Apaixonada
            pelo cuidado com as pessoas, atuo com procedimentos faciais e corporais, oferecendo
            atendimento acolhedor, ético e personalizado. Meu compromisso é valorizar a beleza
            individual, promover o bem-estar e a autoestima, sempre priorizando a segurança, a
            qualidade e a avaliação profissional em cada tratamento.
          </p>
          <ul className="check-list">
            {POINTS.map((p) => (
              <li key={p}><BadgeCheck size={20} aria-hidden="true" /> {p}</li>
            ))}
          </ul>
          <Button href={whatsappLink('Olá! Gostaria de agendar uma avaliação com a Dra. Rozângela.')} whatsapp>
            Agende sua avaliação
          </Button>
        </div>
      </div>
    </section>
  );
}
