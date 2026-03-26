import { useMemo } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const trustLogos = useMemo(() => ['Partner', 'Clinical', 'Research'], [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="bg-cream px-6 py-24">
      <style>{`
        @keyframes elaraGlow {
          0%, 100% { transform: translate3d(-10px, 0, 0) scale(1); opacity: .55; filter: blur(24px); }
          50% { transform: translate3d(10px, -6px, 0) scale(1.03); opacity: .75; filter: blur(30px); }
        }
      `}</style>

      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 text-center">
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-teal-500/25 via-indigo-500/25 to-blue-500/25 blur-2xl"
            style={{ animation: 'elaraGlow 8s ease-in-out infinite' }}
          />
          <h1 className="text-5xl font-extrabold leading-[1.02] text-gray-900 md:text-6xl">
            Clinical trial recruitment and retention made easy
          </h1>
        </div>

        <p className="max-w-2xl text-xl font-semibold text-gray-600 md:text-2xl">
          Elara helps clinical researchers recruit and retain representative participants for trials and pilot studies.
          Designed for the real world at Georgia Tech.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={() => scrollTo('demo')}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-600 px-8 py-3.5 text-base font-semibold text-white shadow-soft transition hover:bg-teal-700 hover:shadow-soft-lg"
          >
            See Demo <ArrowRight className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollTo('drop-off-insights')}
            className="inline-flex items-center justify-center rounded-full border border-teal-200 px-8 py-3.5 text-base font-semibold text-teal-700 shadow-soft transition hover:bg-teal-50"
          >
            View Sample Insights
          </button>
        </div>

        <div className="flex flex-col items-center gap-3">
          <p className="text-sm text-gray-500">
            Trusted by teams building inclusive recruitment workflows
          </p>
          <div className="flex items-center justify-center gap-3">
            {trustLogos.map((name) => (
              <div
                key={name}
                className="h-10 w-24 rounded-xl border border-gray-200 bg-gray-50"
                aria-label={`${name} logo placeholder`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

