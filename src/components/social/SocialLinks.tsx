import { Facebook, Instagram, Youtube } from 'lucide-react';
import { siteConfig } from '../../data';

interface SocialLinksProps {
  variant?: 'icons' | 'pills';
  className?: string;
}

/** Shared links keep social destinations consistent across the portfolio. */
export default function SocialLinks({ variant = 'icons', className = '' }: SocialLinksProps) {
  const links = [
    { label: 'YouTube', href: siteConfig.youtube, Icon: Youtube },
    { label: 'Instagram', href: siteConfig.instagram, Icon: Instagram },
    { label: 'Facebook', href: siteConfig.facebook, Icon: Facebook },
  ];

  return (
    <div className={['social-links', `social-links-${variant}`, className].filter(Boolean).join(' ')}>
      {links.map(({ label, href, Icon }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
          <Icon size={variant === 'icons' ? 18 : 17} aria-hidden="true" />
          {variant === 'pills' && <span>{label}</span>}
        </a>
      ))}
    </div>
  );
}
