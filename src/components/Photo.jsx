import { Camera } from 'lucide-react';

// Renderiza a foto real quando `src` existir; caso contrário, um espaço reservado elegante.
export default function Photo({ src, alt, label, className = '', priority = false }) {
  if (src) {
    return (
      <img
        className={`photo ${className}`}
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
    );
  }
  return (
    <div className={`photo photo--placeholder ${className}`} role="img" aria-label={alt}>
      <Camera size={30} strokeWidth={1.25} aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}
