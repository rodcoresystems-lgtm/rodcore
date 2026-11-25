import { TREATMENTS } from '../data/site';
import ServiceCard from './ServiceCard';
import Marquee from './Marquee';

export default function Services() {
  return (
    <section id="tratamentos" className="section section--beige" aria-labelledby="services-title">
      <div className="container">
        <header className="section__head">
          <p className="eyebrow">Tratamentos</p>
          <h2 id="services-title">Descubra nossos cuidados</h2>
          <p>
            Conheça tratamentos faciais e corporais pensados para valorizar sua beleza natural e
            cuidar do seu bem-estar. Com avaliação profissional e atendimento individualizado, a
            Dra. Rozangela Gomes ajuda você a encontrar os cuidados mais adequados aos seus
            objetivos.
          </p>
        </header>

        <Marquee
          items={TREATMENTS}
          renderItem={(t) => <ServiceCard treatment={t} />}
          label="Tratamentos"
          listLabel="Lista de tratamentos"
        />
      </div>
    </section>
  );
}
