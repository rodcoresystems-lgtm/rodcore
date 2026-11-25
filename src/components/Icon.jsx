import {
  Sparkles, Activity, Layers, CircleDot, Zap, Gem, Droplets,
  HeartHandshake, UserRound, ClipboardCheck, Flower2, Scale,
} from 'lucide-react';

const ICONS = {
  sparkles: Sparkles,
  activity: Activity,
  layers: Layers,
  'circle-dot': CircleDot,
  zap: Zap,
  gem: Gem,
  droplets: Droplets,
  'heart-handshake': HeartHandshake,
  'user-round': UserRound,
  'clipboard-check': ClipboardCheck,
  'flower-2': Flower2,
  scale: Scale,
};

export default function Icon({ name, size = 24, ...rest }) {
  const Component = ICONS[name] || Sparkles;
  return <Component size={size} aria-hidden="true" strokeWidth={1.5} {...rest} />;
}
