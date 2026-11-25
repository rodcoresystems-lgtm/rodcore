import { WELLNESS } from '../data/site';
import Icon from './Icon';
import Marquee from './Marquee';

export default function Wellness() {
  return (
    <section id="bem-estar" className="section section--dark" aria-labelledby="wellness-title">
      <div className="container">
        <header className="section__head">
          <p className="eyebrow">Cuidado e bem-estar</p>
          <h2 id="wellness-title">Mais do que um tratamento, um momento para você</h2>
          <p>
            Aqui, cada atendimento é pensado com acolhimento, respeito e orientação profissional,
            para que você se sinta bem em cada etapa.
          </p>
        </header>
        <Marquee
          className="carousel--wellness"
          items={WELLNESS}
          label="Cuidado e bem-estar"
          listLabel="Pilares do atendimento"
          renderItem={(item) => (
            <article className="wellness__item">
              <span className="wellness__icon"><Icon name={item.icon} size={26} /></span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          )}
        />
      </div>
    </section>
  );
}
