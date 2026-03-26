import { Fragment } from 'react'
import { ClipboardList, Radar, Sparkles, ChevronRight } from 'lucide-react'

const STEPS = [
  {
    title: 'Detect patterns in your pilot',
    icon: Radar,
    bullets: ['Funnel conversion diagnostics', 'Cohort engagement signals', 'Drop-off timing insights'],
  },
  {
    title: 'Translate signals into playbooks',
    icon: ClipboardList,
    bullets: ['Channel and message variants', 'Onboarding sequence tuning', 'Retention cadence suggestions'],
  },
  {
    title: 'Recommendations',
    icon: Sparkles,
    bullets: ['Where to recruit next', 'How to adjust messaging', 'What to test in week 4'],
    payoff: true,
  },
]

export default function AILayer() {
  return (
    <section id="how-it-works" className="bg-cream px-6 py-24">
      <div className="mx-auto max-w-content">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">AI layer (3 steps)</h2>
          <p className="mt-3 text-gray-500">Turn structured pilot outcomes into practical actions for recruitment and retention.</p>
        </div>

        <div className="flex flex-col gap-8 md:flex-row md:items-stretch md:gap-6">
          {STEPS.map((step, idx) => {
            const Icon = step.icon
            const isPayoff = step.payoff

            return (
              <Fragment key={step.title}>
                <article
                  className={[
                    'flex-1 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm',
                    'transition hover:shadow-soft-lg',
                    isPayoff ? 'bg-teal-50/70' : 'bg-white',
                  ].join(' ')}
                >
                  <div className="mb-3 flex items-center justify-start">
                    <div
                      className={
                        isPayoff
                          ? 'flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-100 text-teal-700'
                          : 'flex h-11 w-11 items-center justify-center rounded-2xl bg-gray-50 text-teal-700'
                      }
                    >
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </div>
                  </div>

                  <h3 className="text-lg font-extrabold text-gray-900">{step.title}</h3>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    {step.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-500" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </article>

                {idx < STEPS.length - 1 && (
                  <div className="hidden items-center justify-center md:flex md:w-10">
                    <ChevronRight className="h-7 w-7 text-teal-500" />
                  </div>
                )}
              </Fragment>
            )
          })}
        </div>
      </div>
    </section>
  )
}

