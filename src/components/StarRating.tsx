import { Star } from 'lucide-react'

export default function StarRating({
  rating,
  reviewCount,
  size = 14,
}: {
  rating: number
  reviewCount?: number
  size?: number
}) {
  return (
    <div className="flex items-center gap-1.5" aria-label={`Rated ${rating} out of 5`}>
      <div className="flex items-center gap-0.5 text-brass-deep" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((n) => (
          <Star
            key={n}
            size={size}
            fill={n <= Math.round(rating) ? 'currentColor' : 'none'}
            strokeWidth={1.5}
          />
        ))}
      </div>
      {reviewCount !== undefined && (
        <span className="text-xs text-ink-soft">({reviewCount})</span>
      )}
    </div>
  )
}
