import { Separator } from '@/components/ui/separator'

const STAGES = [
  { label: 'Assessed', value: 1240, pct: 100 },
  { label: 'Prepared', value: 1080, pct: 87 },
  { label: 'Connected', value: 860, pct: 69 },
  { label: 'Interviewing', value: 540, pct: 44 },
  { label: 'Offered', value: 312, pct: 25 },
]

export function PipelineBoard() {
  return (
    <div className="rounded-xl border border-border bg-background p-5">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-0.5">
          <span className="font-mono text-[0.7rem] tracking-wide text-muted-foreground uppercase">
            Placement Pipeline
          </span>
          <span className="text-sm font-medium">Batch 2026 &middot; Overview</span>
        </div>
        <div className="flex flex-col items-end gap-0.5">
          <span className="text-2xl font-semibold tracking-tight tabular-nums">
            25%
          </span>
          <span className="text-[0.7rem] text-muted-foreground">offer rate</span>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="flex flex-col gap-3">
        {STAGES.map((stage) => (
          <div key={stage.label} className="flex flex-col gap-1.5">
            <div className="flex items-baseline justify-between">
              <span className="text-xs font-medium text-foreground">
                {stage.label}
              </span>
              <span className="font-mono text-xs text-muted-foreground tabular-nums">
                {stage.value.toLocaleString()}
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary"
                style={{ width: `${stage.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <Separator className="my-4" />

      <div className="grid grid-cols-3 gap-3">
        {[
          { k: 'Employers', v: '48' },
          { k: 'Drives', v: '12' },
          { k: 'Ready', v: '87%' },
        ].map((item) => (
          <div
            key={item.k}
            className="rounded-lg border border-border bg-card px-3 py-2.5"
          >
            <div className="text-lg font-semibold tracking-tight tabular-nums">
              {item.v}
            </div>
            <div className="text-[0.7rem] text-muted-foreground">{item.k}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
