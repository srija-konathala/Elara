import { useMemo, useState } from 'react'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  BarChart,
  Bar,
  Cell,
} from 'recharts'
import { AlertTriangle, Info, Sparkles, Square } from 'lucide-react'

const COLORS = ['#14b8a6', '#0d9488', '#1d4ed8', '#1e40af', '#0b3b91']

const DEMO_DATA = {
  Age: {
    funnel: [1000, 240, 120, 60, 38],
    engagement: {
      sms: [100, 94, 90, 86, 82, 78, 74, 70],
      email: [100, 90, 84, 78, 72, 67, 62, 57],
    },
    dropOff: [
      { stat: '42% drop post-onboarding', body: 'Consider reducing onboarding steps' },
      { stat: '28% lose momentum in week 2', body: 'Add a short “what to expect” touchpoint' },
      { stat: '19% disengage after schedule changes', body: 'Offer rescheduling nudges within 24 hours' },
    ],
  },
  Gender: {
    funnel: [1000, 210, 105, 55, 40],
    engagement: {
      sms: [100, 95, 91, 88, 85, 81, 78, 74],
      email: [100, 89, 83, 77, 72, 66, 62, 58],
    },
    dropOff: [
      { stat: '35% drop after first reminder', body: 'Tighten reminder cadence and wording' },
      { stat: '23% pause after eligibility check', body: 'Clarify eligibility criteria in plain language' },
      { stat: '17% churn before enrollment', body: 'Add a “next steps” confirmation message' },
    ],
  },
  Ethnicity: {
    funnel: [1000, 180, 90, 42, 24],
    engagement: {
      sms: [100, 92, 86, 80, 76, 71, 67, 63],
      email: [100, 83, 76, 70, 64, 59, 55, 50],
    },
    dropOff: [
      { stat: '47% face wait-time drop-off', body: 'Reduce delays between screening and scheduling' },
      { stat: '31% disengage from long forms', body: 'Offer shorter intake or assisted completion' },
      { stat: '21% stop after unclear next steps', body: 'Send “what happens next” messages' },
    ],
  },
}

const FUNNEL_LABELS = ['Reached', 'Responded', 'Qualified', 'Enrolled', 'Retained']

function FunnelDesktop({ steps }) {
  const max = steps[0]?.value ?? 1000
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm border border-gray-100">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-base font-extrabold text-gray-900">Recruitment Funnel</h3>
        <div className="text-sm font-semibold text-gray-500">Mock cohort</div>
      </div>

      <div className="flex gap-4">
        <div className="min-w-[220px] flex-1">
          <ResponsiveContainer width="100%" height={260}>
            <BarChart layout="vertical" data={steps} margin={{ top: 10, right: 20, bottom: 10, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" domain={[0, max]} hide />
              <YAxis type="category" dataKey="label" width={90} hide />
              <Tooltip
                content={({ active, payload }) => {
                  if (!active || !payload || payload.length === 0) return null
                  const p = payload[0]?.payload
                  if (!p) return null
                  return (
                    <div className="rounded-2xl border border-gray-200 bg-white px-3 py-2 text-xs shadow-sm">
                      <div className="font-extrabold text-gray-900">{p.label}</div>
                      <div className="mt-1 text-gray-700">
                        <span className="font-extrabold">{Number(p.value).toLocaleString()}</span>
                        <span className="ml-2 font-semibold text-gray-500">
                          {Number(p.conversionFromPrev).toFixed(0)}% conversion
                        </span>
                      </div>
                    </div>
                  )
                }}
              />
              <Bar dataKey="value" barSize={44} radius={[10, 10, 10, 10]}>
                {steps.map((s, idx) => (
                  <Cell key={s.label} fill={COLORS[idx % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="w-[240px]">
          <div className="space-y-3">
            {steps.map((s, idx) => (
              <div key={s.label} className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="h-2.5 w-2.5 rounded-full shrink-0" style={{ background: COLORS[idx % COLORS.length] }} />
                  <span className="truncate text-sm font-semibold text-gray-800">{s.label}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-extrabold text-gray-900">{s.value.toLocaleString()}</div>
                  <div className="text-xs font-semibold text-gray-500">{s.conversionFromPrev.toFixed(0)}%</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl bg-gray-50 border border-gray-100 p-3 text-xs text-gray-500">
            Conversion is computed from the previous step count.
          </div>
        </div>
      </div>
    </div>
  )
}

function FunnelMobile({ steps }) {
  const reached = steps[0]?.value ?? 1
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm border border-gray-100">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-base font-extrabold text-gray-900">Recruitment Funnel</h3>
      </div>

      <div className="space-y-4">
        {steps.map((s, idx) => {
          const pctOfReached = (s.value / reached) * 100
          return (
            <div key={s.label} className="space-y-2">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: COLORS[idx % COLORS.length] }} />
                  <span className="text-sm font-semibold text-gray-800">{s.label}</span>
                </div>
                <div className="text-right text-sm">
                  <span className="font-extrabold text-gray-900">{s.value.toLocaleString()}</span>
                  <span className="ml-2 font-semibold text-gray-500">{s.conversionFromPrev.toFixed(0)}%</span>
                </div>
              </div>
              <div className="h-2.5 w-full rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${pctOfReached.toFixed(1)}%`,
                    background: `linear-gradient(90deg, ${COLORS[idx % COLORS.length]}, rgba(20,184,166,0.35))`,
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function EngagementChart({ engagement }) {
  const chartData = useMemo(() => {
    const weeks = Array.from({ length: 8 }, (_, i) => i + 1)
    return weeks.map((w, i) => ({
      week: `Week ${w}`,
      sms: engagement.sms[i] ?? 0,
      email: engagement.email[i] ?? 0,
    }))
  }, [engagement])

  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm border border-gray-100">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-base font-extrabold text-gray-900">Engagement Over Time</h3>
        <div className="text-sm font-semibold text-gray-500">Retention %</div>
      </div>

      <ResponsiveContainer width="100%" height={270}>
        <LineChart data={chartData} margin={{ top: 10, right: 10, bottom: 10, left: 0 }}>
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="week" tick={{ fontSize: 12, fill: '#6b7280' }} interval={0} />
          <YAxis domain={[50, 105]} tickFormatter={(v) => `${v}%`} tick={{ fontSize: 12, fill: '#6b7280' }} />
          <Tooltip
            formatter={(v) => [`${Number(v).toFixed(0)}%`, 'Retention']}
            labelFormatter={(label) => label}
            contentStyle={{ borderRadius: 12, border: '1px solid #e5e7eb' }}
          />
          <Legend verticalAlign="top" align="right" />
          <Line
            type="monotone"
            dataKey="sms"
            name="SMS cohort"
            stroke="#14b8a6"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="email"
            name="Email cohort"
            stroke="#4f46e5"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

function DropOffInsights({ dropOff }) {
  const IconA = AlertTriangle
  const IconB = Info
  const icons = [IconA, IconB, IconA]
  return (
    <div id="drop-off-insights" className="rounded-2xl bg-white p-5 shadow-sm border border-gray-100">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-base font-extrabold text-gray-900">Drop-off Insights</h3>
        <div className="text-sm font-semibold text-gray-500">What to fix next</div>
      </div>

      <div className="grid gap-4">
        {dropOff.map((card, idx) => {
          const Icon = icons[idx % icons.length]
          return (
            <div
              key={card.stat}
              className="rounded-xl bg-white border border-gray-100 border-l-4 border-amber-300/70 px-4 py-3 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                  <Icon className="h-4 w-4" strokeWidth={2} />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-extrabold text-gray-900">{card.stat}</div>
                  <div className="mt-1 text-sm font-medium text-gray-600">{card.body}</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function RecommendationBox() {
  const actions = [
    { title: 'Prioritize SMS reminders in week 2', detail: 'Boost momentum after onboarding' },
    { title: 'Shorten enrollment steps for qualified participants', detail: 'Reduce friction between screening and enrollment' },
    { title: 'Segment outreach by response intent', detail: 'Personalize channel strategy for higher retention' },
  ]

  return (
    <div className="rounded-xl border border-white/20 border-t-4 border-teal-200 bg-gradient-to-r from-teal-600 via-indigo-600 to-blue-600 p-6 text-white shadow-[0_18px_60px_rgba(20,184,166,0.25)] relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 -z-0 opacity-40 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white/10">
              <Sparkles className="h-4 w-4 text-white" />
            </span>
            <h3 className="text-lg font-extrabold">Recommended Actions</h3>
          </div>
          <div className="mt-2 text-sm text-white/85">
            Clear next steps based on structured pilot patterns.
          </div>
        </div>
      </div>

      <div className="mt-5 space-y-3">
        {actions.map((a, idx) => (
          <div
            key={a.title}
            className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-left transition hover:bg-white/10"
          >
            <div className="flex items-start gap-3">
              <span
                className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md border border-white/70 bg-transparent"
              >
                <Square className="h-3.5 w-3.5 text-white/80" strokeWidth={2} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-extrabold">{a.title}</span>
                <span className="mt-1 block text-xs text-white/85">{a.detail}</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-xs text-white/80">
        Recommendations are generated from structured pilot patterns, not live AI
      </div>
    </div>
  )
}

export default function Dashboard() {
  const [segment, setSegment] = useState('Age')

  const data = DEMO_DATA[segment]

  const funnelSteps = useMemo(() => {
    const counts = data.funnel
    const steps = FUNNEL_LABELS.map((label, idx) => {
      const value = counts[idx]
      const prev = idx === 0 ? counts[idx] : counts[idx - 1]
      const conversionFromPrev = idx === 0 ? 100 : (value / prev) * 100
      return { label, value, conversionFromPrev }
    })
    return steps
  }, [data])

  const dropOff = data.dropOff

  return (
    <section id="demo" className="bg-gray-50 px-6 py-24">
      <div className="mx-auto max-w-content">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Demo Dashboard</h2>
          <p className="mt-3 text-gray-500">A realistic, interactive view of recruitment and engagement outcomes.</p>
        </div>

        <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <label htmlFor="segment" className="text-sm font-semibold text-gray-700">
              Filter demographic
            </label>
            <div className="relative">
              <select
                id="segment"
                value={segment}
                onChange={(e) => setSegment(e.target.value)}
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-200"
              >
                <option value="Age">Age</option>
                <option value="Gender">Gender</option>
                <option value="Ethnicity">Ethnicity</option>
              </select>
            </div>
          </div>

          {segment === 'Ethnicity' && (
            <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-bold text-red-700">
              <AlertTriangle className="h-4 w-4" strokeWidth={2} />
              Underrepresentation detected
            </div>
          )}
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="md:hidden">
              <FunnelMobile steps={funnelSteps} />
            </div>
            <div className="hidden md:block">
              <FunnelDesktop steps={funnelSteps} />
            </div>
          </div>

          <div className="lg:col-span-2">
            <EngagementChart engagement={data.engagement} />
          </div>

          <div className="lg:col-span-1">
            <DropOffInsights dropOff={dropOff} />
          </div>

          <div className="lg:col-span-2">
            <RecommendationBox />
          </div>
        </div>
      </div>
    </section>
  )
}

