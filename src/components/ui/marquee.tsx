import * as React from 'react'

const GAP_WIDTH = '2rem' // same as mr-8

const itemClasses =
  'mr-6 w400:mr-4 inline-flex shrink-0 items-center justify-center px-4 w400:px-2 text-4xl w700:text-3xl w600:text-2xl w500:text-xl w400:text-lg'

export default function Marquee({
  items,
}: {
  items: (string | React.ReactNode)[]
}) {
  const gapSpan = (
    <span
      className="shrink-0"
      style={{ width: GAP_WIDTH, minWidth: GAP_WIDTH }}
      aria-hidden
    />
  )

  return (
    <div className="relative flex min-w-0 max-w-full overflow-x-hidden border-b-2 border-t-2 border-border bg-secondary-background text-foreground font-base w-full">
      {/* Single strip: [items, gap, items, gap] — animates -50% so the gap is at the seam */}
      <div className="animate-marquee-single whitespace-nowrap py-8 w600:py-10 w400:py-6">
        {items.map((item, i) => (
          <span key={`a-${i}`} className={itemClasses}>
            {item}
          </span>
        ))}
        {gapSpan}
        {items.map((item, i) => (
          <span key={`b-${i}`} className={itemClasses}>
            {item}
          </span>
        ))}
        {gapSpan}
      </div>
    </div>
  )
}
