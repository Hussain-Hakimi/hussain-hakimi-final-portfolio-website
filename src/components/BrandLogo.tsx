interface BrandLogoProps {
  compact?: boolean;
  className?: string;
}

export default function BrandLogo({ compact = false, className = '' }: BrandLogoProps) {
  return (
    <span className={`brand-logo ${compact ? 'brand-logo-compact' : ''} ${className}`.trim()} aria-hidden="true">
      <img src="/brand/hh-monogram.svg" alt="" />
      {!compact && <span className="brand-logo-name">Hussain Hakimi</span>}
    </span>
  );
}
