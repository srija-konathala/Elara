import { useRef, useEffect } from 'react'
import { Heart, Gamepad2, MessageCircle, Sparkles, Award, Users, Zap } from 'lucide-react'

const JOURNEY_PHASES = [
  {
    label: 'For women, by women',
    heading: 'For women, by women',
    body: [
      'We started as a women-led team frustrated by how little real-world health data reflected us.',
      'Our first goal was simple: better representation in the data behind everyday care.',
    ],
    icon: Heart,
  },
  {
    label: 'Gamified health platform',
    heading: 'A gamified health platform',
    body: [
      'We explored a gamified platform that rewarded people for sharing health behaviors and study participation.',
      'The idea was to make clinical research feel less extractive and more like a win for the communities involved.',
    ],
    icon: Gamepad2,
    youtubeId: '1bhMsDWeP-o',
  },
  {
    label: 'Listening and market research',
    heading: 'Listening and market research',
    body: [
      'As we spoke with researchers, startups, and mentors, we saw the biggest pain wasn\'t just data, it was recruiting and keeping the right people.',
      'We paused building product and ran structured interviews and literature reviews to understand retention and trust gaps.',
    ],
    icon: MessageCircle,
  },
  {
    label: 'Genesis program',
    heading: 'Genesis program',
    body: [
      'Through the Genesis program, we turned loose ideas into a clearer problem statement and early experiments.',
      'Genesis pushed us to test our assumptions with real stakeholders and to treat recruitment and retention as a repeatable system, not a one-off campaign.',
    ],
    icon: Sparkles,
  },
  {
    label: 'CREATE-X feedback',
    heading: 'CREATE-X feedback',
    body: [
      'Office hours and feedback sessions challenged us to find the true "tech bridge" instead of becoming just another agency.',
      'That guidance nudged us toward a model that combines hands-on consultancy now with a concrete path to software later.',
    ],
    icon: Award,
  },
  {
    label: 'Immersed pilot projects',
    heading: 'Immersed pilot projects',
    body: [
      'Today, we work with early clinical and health-tech teams on focused pilots to deeply map their recruitment and retention funnels.',
      'By immersing ourselves in real studies and pilots, we\'re building the playbooks and datasets that generic ads never see.',
    ],
    icon: Users,
  },
  {
    label: 'Next: automation layer',
    heading: 'Next: automation layer',
    body: [
      'The next step is turning those playbooks into a lightweight tool that recommends where to recruit, how to message, and how to keep people engaged.',
      'We\'re moving from manual experiments to an automation layer that makes representative recruitment repeatable at scale.',
    ],
    icon: Zap,
  },
]

function OurJourneySection() {
  const cardRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    cardRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="our-journey" className="scroll-mt-20 min-h-screen bg-[#F7FAF8] py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <header className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-ink md:text-4xl">
            Our journey so far
          </h2>
          <p className="mx-auto mt-4 max-w-[80ch] text-lg text-ink/75">
            Elara has always been about giving underrepresented communities a real seat in health data, programs like Genesis and CREATE-X helped us refine how we get there.
          </p>
        </header>

        <div className="md:flex md:gap-12">
          {/* Left: timeline labels */}
          <div className="relative hidden w-48 shrink-0 md:block">
            <div className="absolute left-[5px] top-3 bottom-3 w-0.5 bg-sage-300" />
            {JOURNEY_PHASES.map((phase, i) => (
              <div
                key={phase.label}
                className="relative flex items-center gap-3 py-6 first:pt-0 last:pb-0"
                style={{ minHeight: i === 1 ? '280px' : '120px' }}
              >
                <span className="h-3.5 w-3.5 shrink-0 rounded-full bg-sage-500" />
                <span className="text-sm font-medium text-ink/90">{phase.label}</span>
              </div>
            ))}
          </div>

          {/* Right: cards (desktop) */}
          <div className="hidden flex-1 space-y-6 md:block">
            {JOURNEY_PHASES.map((phase, i) => {
              const Icon = phase.icon
              return (
                <article
                  key={phase.label}
                  ref={(el) => { cardRefs.current[i] = el }}
                  className="translate-y-4 rounded-2xl border border-sage-200/80 bg-white p-6 shadow-soft opacity-0 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-soft-lg"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-sage-100 text-sage-600">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-bold text-ink">{phase.heading}</h3>
                  <div className="mt-2 space-y-2 text-ink/85">
                    {phase.body.map((line, j) => (
                      <p key={j} className="text-[15px] leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                  {phase.youtubeId && (
                    <div className="mt-4 overflow-hidden rounded-xl bg-sage-50">
                      <iframe
                        title="Elara journey video"
                        src={`https://www.youtube.com/embed/${phase.youtubeId}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="h-56 w-full md:h-72"
                      />
                    </div>
                  )}
                </article>
              )
            })}
          </div>
        </div>

        {/* Mobile: single column with inline timeline */}
        <div className="mt-12 space-y-6 md:hidden">
          {JOURNEY_PHASES.map((phase, i) => {
            const Icon = phase.icon
            return (
              <article
                key={phase.label}
                className="flex gap-4 rounded-2xl border border-sage-200/80 bg-white p-5 shadow-soft"
              >
                <div className="flex shrink-0 flex-col items-center">
                  <span className="h-3.5 w-3.5 rounded-full bg-sage-500" />
                  {i < JOURNEY_PHASES.length - 1 && (
                    <div className="mt-1 w-0.5 flex-1 bg-sage-200" style={{ minHeight: '40px' }} />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-sage-100 text-sage-600">
                    <Icon className="h-4 w-4" strokeWidth={2} />
                  </div>
                  <h3 className="font-bold text-ink">{phase.heading}</h3>
                  <div className="mt-2 space-y-1.5 text-sm text-ink/85">
                    {phase.body.map((line, j) => (
                      <p key={j}>{line}</p>
                    ))}
                  </div>
                  {phase.youtubeId && (
                    <div className="mt-3 overflow-hidden rounded-lg bg-sage-50">
                      <iframe
                        title="Elara journey video"
                        src={`https://www.youtube.com/embed/${phase.youtubeId}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="h-48 w-full"
                      />
                    </div>
                  )}
                </div>
              </article>
            )
          })}
        </div>

        <p className="mt-16 text-center text-sm text-ink/70">
          We're still early, but every pilot brings us closer to making inclusive recruitment the default, not the exception.
        </p>
      </div>
    </section>
  )
}

export default OurJourneySection
