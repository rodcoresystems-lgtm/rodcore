import WhatsAppIcon from './WhatsAppIcon';

export default function Button({ href, variant = 'primary', whatsapp = false, className = '', children, ...rest }) {
  const external = /^https?:/.test(href);
  return (
    <a
      {...rest}
      className={`btn btn--${variant}${className ? ` ${className}` : ''}`}
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {whatsapp && <WhatsAppIcon size={18} />}
      {children}
    </a>
  );
}
