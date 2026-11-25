import { MapPin, Navigation } from 'lucide-react';
import { SITE } from '../data/site';
import Button from './Button';

export default function Location() {
  const q = encodeURIComponent(SITE.address.mapQuery);
  return (
    <div className="location">
      <address className="location__address">
        <MapPin size={22} aria-hidden="true" />
        <span>
          {SITE.address.lines.map((l) => (<span key={l}>{l}<br /></span>))}
        </span>
      </address>

      <div className="location__map">
        <div className="location__fallback">
          <MapPin size={32} strokeWidth={1.5} aria-hidden="true" />
          <span>Se o mapa não aparecer, use os botões abaixo para abrir a localização.</span>
        </div>
        <iframe
          title="Mapa com a localização da clínica em Caldas Novas - GO"
          src={`https://www.google.com/maps?q=${q}&hl=pt-BR&z=16&output=embed`}
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      <div className="location__actions">
        <Button href={`https://www.google.com/maps/search/?api=1&query=${q}`}>
          <MapPin size={18} aria-hidden="true" /> Abrir no Google Maps
        </Button>
        <Button href={`https://www.google.com/maps/dir/?api=1&destination=${q}`} variant="outline">
          <Navigation size={18} aria-hidden="true" /> Como chegar
        </Button>
      </div>
    </div>
  );
}
