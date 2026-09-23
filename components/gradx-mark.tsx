import { cn } from '@/lib/utils'

export function GradXMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'grid place-items-center rounded-md bg-primary text-primary-foreground',
        className,
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="size-[62%]"
        strokeWidth={2.2}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 8.5 12 5l7 3.5-7 3.5-7-3.5Z" />
        <path d="M8.5 10.2v3.4c0 .9 1.6 1.9 3.5 1.9s3.5-1 3.5-1.9v-3.4" />
        <path d="M19 8.5v4" />
      </svg>
    </span>
  )
}
