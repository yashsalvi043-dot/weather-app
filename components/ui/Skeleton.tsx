interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
}

export default function Skeleton({
  className = '',
  variant = 'rectangular',
  width,
  height,
}: SkeletonProps) {
  const base =
    'bg-gradient-to-r from-white/5 via-white/15 to-white/5 bg-[length:200%_100%]';
  const shape = {
    text: 'rounded-sm h-4',
    circular: 'rounded-full',
    rectangular: 'rounded-xl',
  }[variant];

  return (
    <div
      className={`${base} ${shape} ${className}`}
      style={{
        width: width ?? '100%',
        height: height ?? (variant === 'text' ? '1rem' : undefined),
        animation: 'shimmer 1.5s ease-in-out infinite',
      }}
      role="status"
      aria-label="Loading"
    />
  );
}
