import { ChevronDown, ChevronRight } from 'lucide-react'

const WEEKS = [
  {
    week: 'Week 1',
    title: 'Understand your participants',
    bullets: ['Map representative demographics and eligibility', 'Identify recruitment friction and drop-off points'],
    connectors: { right: true, down: true },
  },
  {
    week: 'Week 2',
    title: 'Test outreach channels',
    bullets: ['Run targeted messaging and channel experiments', 'Track response quality and intent signals'],
    connectors: { down: true },
  },
  {
    week: 'Week 3',
    title: 'Onboard and track engagement',
    bullets: ['Screen and schedule with minimal friction', 'Measure engagement week-over-week'],
    connectors: { right: true },
  },
  {
    week: 'Week 4',
    title: 'Deliver insights, not just leads',
    bullets: ['Summarize what worked by cohort', 'Recommend next steps to improve retention'],
    connectors: {},
  },
]

function ConnectorRight() {
  return (
    <div className="pointer-events-none absolute right-[-18px] top-1/2 hidden w-14 -translate-y-1/2 items-center md:flex">
      <div className="h-0 w-10 border-t-2 border-dashed border-teal-300" />
      <span className="ml-1 grid h-7 w-7 place-items-center rounded-full border border-teal-200 bg-white text-teal-600 shadow-sm">
        <ChevronRight className="h-4 w-4" />
      </span>
    </div>
  )
}

function ConnectorDown() {
  return (
    <div className="pointer-events-none absolute bottom-[-18px] left-1/2 hidden h-14 w-7 -translate-x-1/2 items-center justify-center md:flex">
      <div className="h-10 w-0 border-l-2 border-dashed border-teal-300" />
      <span className="absolute bottom-1 grid h-7 w-7 place-items-center rounded-full border border-teal-200 bg-white text-teal-600 shadow-sm">
        <ChevronDown className="h-4 w-4" />
      </span>
    </div>
  )
}

export default function PilotWeeks() {
  return (
    <section id="pilots" className="bg-gray-50 px-6 py-24">
      <div className="mx-auto max-w-content">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Your 4-week pilot</h2>
          <p className="mt-3 text-gray-500">A practical plan to recruit and retain representative participants.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {WEEKS.map((weekData, idx) => {
            const isWeek4 = idx === 3
            return (
              <div
                key={weekData.week}
                className={[
                  'relative rounded-2xl bg-white p-6 shadow-sm transition',
                  'border border-gray-100 hover:shadow-lg',
                  'border-l-4 border-l-transparent hover:border-l-teal-500',
                  isWeek4 ? 'border-t-4 border-t-teal-500' : '',
                ].join(' ')}
              >
                {weekData.connectors.right && <ConnectorRight />}
                {weekData.connectors.down && <ConnectorDown />}

                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full border border-teal-100 bg-teal-50 px-4 py-1.5 text-sm font-bold text-teal-700">
                    {weekData.week}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-gray-900">{weekData.title}</h3>
                <ul className="mt-4 space-y-2 text-gray-600">
                  {weekData.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

