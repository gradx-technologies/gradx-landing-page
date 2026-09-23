import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 font-mono text-xs tracking-wide text-muted-foreground uppercase">
          <span className="h-px w-6 bg-border" />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="max-w-4xl text-balance text-[3rem] font-medium leading-[0.98] tracking-[-0.055em] sm:text-[4.25rem] lg:text-[5rem]">
        <span className="bg-gradient-to-r from-[#6246d9] via-[#8066e6] to-[#a99af0] bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {description ? (
        <p
          className={cn(
            'max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg',
            align === 'center' && 'mx-auto',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
