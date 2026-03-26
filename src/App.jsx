import { useRef, useState, useEffect } from 'react'
import OurJourneySection from './pages/OurJourney'
import {
  Leaf,
  ClipboardList,
  Smartphone,
  Users,
  Search,
  Send,
  BarChart3,
  FileText,
  Target,
  Heart,
  CheckCircle2,
} from 'lucide-react'

const SECTION_IDS = {
  researchers: 'for-researchers',
  startups: 'for-startups',
  howItWorks: 'how-it-works',
  automation: 'automation',
  demo: 'demo',
  ourJourney: 'our-journey',
  footer: 'footer-cta',
}

function Nav({ footerRef }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setMobileOpen(false)
    if (id === 'footer-cta') {
      footerRef?.current?.scrollIntoView({ behavior: 'smooth' })
      return
    }
    const targetId = id === 'for-startups' ? 'for-researchers' : id
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-cream/90 shadow-nav backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-content items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2.5 text-ink no-underline">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sage-400 text-white shadow-soft">
            <Leaf className="h-5 w-5" strokeWidth={2.25} />
          </span>
          <span className="text-xl font-bold text-ink">Elara</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          <button
            type="button"
            onClick={() => scrollTo(SECTION_IDS.researchers)}
            className="text-sm font-medium text-ink/90 hover:text-sage-600"
          >
            For researchers
          </button>
          <button
            type="button"
            onClick={() => scrollTo(SECTION_IDS.startups)}
            className="text-sm font-medium text-ink/90 hover:text-sage-600"
          >
            For health startups
          </button>
          <button
            type="button"
            onClick={() => scrollTo(SECTION_IDS.automation)}
            className="text-sm font-medium text-ink/90 hover:text-sage-600"
          >
            Automation
          </button>
          <button
            type="button"
            onClick={() => scrollTo(SECTION_IDS.demo)}
            className="text-sm font-medium text-ink/90 hover:text-sage-600"
          >
            Demo
          </button>
          <button
            type="button"
            onClick={() => scrollTo(SECTION_IDS.ourJourney)}
            className="rounded-2xl border-2 border-sage-300 bg-sage-50 px-4 py-2 text-sm font-semibold text-sage-700 shadow-soft transition hover:bg-sage-100 hover:border-sage-400"
          >
            Our journey
          </button>
          <button
            type="button"
            onClick={() => scrollTo(SECTION_IDS.footer)}
            className="rounded-full bg-sage-500 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-sage-600 hover:shadow-soft-lg"
          >
            Talk to us
          </button>
        </div>
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-2xl text-ink hover:bg-sage-100"
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-5 rounded-full bg-sage-600 transition-all ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-sage-600 transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-sage-600 transition-all ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
          {mobileOpen && (
            <div className="absolute right-6 top-16 flex w-52 flex-col gap-1 rounded-3xl border border-sage-200 bg-white p-3 shadow-soft-lg">
              <button type="button" onClick={() => scrollTo(SECTION_IDS.researchers)} className="rounded-2xl py-2.5 pl-3 text-left text-sm font-medium text-ink hover:bg-sage-50">
                For researchers
              </button>
              <button type="button" onClick={() => scrollTo(SECTION_IDS.startups)} className="rounded-2xl py-2.5 pl-3 text-left text-sm font-medium text-ink hover:bg-sage-50">
                For health startups
              </button>
              <button type="button" onClick={() => scrollTo(SECTION_IDS.automation)} className="rounded-2xl py-2.5 pl-3 text-left text-sm font-medium text-ink hover:bg-sage-50">
                Automation
              </button>
              <button type="button" onClick={() => scrollTo(SECTION_IDS.demo)} className="rounded-2xl py-2.5 pl-3 text-left text-sm font-medium text-ink hover:bg-sage-50">
                Demo
              </button>
              <button type="button" onClick={() => scrollTo(SECTION_IDS.ourJourney)} className="rounded-2xl border-2 border-sage-200 bg-sage-50 py-2.5 pl-3 text-left text-sm font-semibold text-sage-700 hover:bg-sage-100">
                Our journey
              </button>
              <button type="button" onClick={() => scrollTo(SECTION_IDS.footer)} className="rounded-full bg-sage-500 py-2.5 text-sm font-semibold text-white">
                Talk to us
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

const CONTACT_EMAILS = ['skonathala3@gatech.edu', 'ysenthil3@gatech.edu']

function Hero({ howItWorksRef, footerRef }) {
  const scrollToContact = () => {
    footerRef?.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="bg-sage-dots px-6 pb-24 pt-10 md:pt-20">
      <div className="mx-auto flex max-w-content flex-col gap-14 lg:flex-row lg:items-center lg:gap-20">
        <div className="flex-1 space-y-6">
          <h1 className="text-3xl font-extrabold leading-tight text-ink md:text-4xl lg:text-[2.6rem]">
            Clinical trial recruitment and retention made easy
          </h1>
          <p className="text-xl font-semibold text-sage-600 md:text-2xl">
            at Georgia Tech
          </p>
          <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={scrollToContact}
              className="inline-flex items-center justify-center rounded-full bg-sage-500 px-7 py-3.5 text-base font-semibold text-white shadow-soft transition hover:bg-sage-600 hover:shadow-soft-lg"
            >
              Book a 20 min intro
            </button>
            <button
              type="button"
              onClick={() => howItWorksRef?.current?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sage-600 underline decoration-sage-400 underline-offset-4 hover:text-sage-700"
            >
              See our 4 week pilot plan
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhoWeHelp() {
  const cards = [
    {
      title: 'Clinical researchers',
      icon: ClipboardList,
      line: 'Fill cohorts with representative participants, not just whoever shows up.',
    },
    {
      title: 'Health tech startups',
      icon: Smartphone,
      line: 'Recruit and retain real users for pilot tests and studies.',
    },
    {
      title: 'Community partners',
      icon: Users,
      line: 'Bring research opportunities to your members, safely and transparently.',
    },
  ]
  return (
    <section id={SECTION_IDS.researchers} className="scroll-mt-20 bg-sage-50/60 px-6 py-20">
      <div className="mx-auto max-w-content">
        <h2 className="mb-14 text-center text-2xl font-bold text-ink md:text-3xl">
          Who we work with
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map(({ title, icon: Icon, line }) => (
            <div
              key={title}
              className="rounded-3xl border-2 border-sage-200/80 bg-white p-7 shadow-soft transition-all hover:-translate-y-1.5 hover:border-sage-300 hover:bg-white hover:shadow-soft-lg"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sage-100 text-sage-600">
                <Icon className="h-7 w-7" strokeWidth={2} />
              </div>
              <h3 className="mb-2 text-lg font-bold text-ink">{title}</h3>
              <p className="text-ink/85">{line}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks({ howItWorksRef }) {
  const steps = [
    { week: 'Week 1', title: 'Understand your participants', line: 'We audit your current recruitment and define target demographics.', icon: Search },
    { week: 'Week 2', title: 'Test outreach channels', line: 'We try a few digital and community channels to see who responds.', icon: Send },
    { week: 'Week 3', title: 'Onboard and track engagement', line: 'We screen, schedule, and monitor who actually shows up and stays.', icon: BarChart3 },
    { week: 'Week 4', title: 'Deliver insights, not just leads', line: 'You get a simple report: what worked, who stayed, and why.', icon: FileText },
  ]
  return (
    <section
      id={SECTION_IDS.howItWorks}
      ref={howItWorksRef}
      className="scroll-mt-20 bg-cream px-6 py-20"
    >
      <div className="mx-auto max-w-content">
        <h2 className="mb-14 text-center text-2xl font-bold text-ink md:text-3xl">
          How our 4 week pilot works
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ week, title, line, icon: Icon }, i) => (
            <div key={week} className="relative">
              {i < steps.length - 1 && (
                <div className="absolute left-9 top-14 hidden w-full border-t-2 border-dashed border-sage-300/70 lg:block" style={{ width: 'calc(100% + 1rem)' }} />
              )}
              <div className="rounded-3xl border-2 border-sage-200/80 bg-white p-6 shadow-soft">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sage-500 text-sm font-bold text-white shadow-soft">
                    {i + 1}
                  </span>
                  <span className="text-sm font-semibold text-sage-600">{week}</span>
                </div>
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-sage-100 text-sage-600">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="mb-2 font-bold text-ink">{title}</h3>
                <p className="text-sm text-ink/85">{line}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SocialProof() {
  const pills = ['OptiDrop', 'EstroSense', 'CareSync']
  return (
    <section className="border-y border-sage-200/70 bg-sage-50/50 px-6 py-14">
      <div className="mx-auto max-w-content text-center">
        <p className="mb-8 text-ink/85">
          Working with early stage health teams at Georgia Tech and beyond.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {pills.map((name) => (
            <span
              key={name}
              className="rounded-full border border-sage-200 bg-white px-5 py-2.5 text-sm font-medium text-ink/75 shadow-soft"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyElara() {
  const bullets = [
    { icon: Heart, text: 'Retention first: we design funnels that keep participants through the whole study.' },
    { icon: Target, text: 'Demographic aware: we focus on underrepresented groups, not generic ad blasts.' },
    { icon: CheckCircle2, text: 'Structured, not random: every pilot follows a clear 4 step playbook.' },
  ]
  return (
    <section className="bg-cream px-6 py-20">
      <div className="mx-auto max-w-content">
        <h2 className="mb-12 text-center text-2xl font-bold text-ink md:text-3xl">
          Why teams choose Elara
        </h2>
        <div className="mx-auto flex max-w-2xl flex-col gap-6">
          {bullets.map(({ icon: Icon, text }) => (
            <div key={text.slice(0, 24)} className="flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sage-100 text-sage-600">
                <Icon className="h-6 w-6" strokeWidth={2} />
              </div>
              <p className="pt-1 text-ink/90">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PilotIntelligenceSection() {
  const phases = [
    {
      week: 'W1',
      step: 'User segmentation',
      now: 'Manual segments by diagnosis and interview notes.',
      ai: 'Cluster participants by behavior and discover hidden cohorts.',
    },
    {
      week: 'W2',
      step: 'Outreach + messaging',
      now: 'Write and compare variants manually across channels.',
      ai: 'Generate, auto-tag, and rank message variants by segment.',
    },
    {
      week: 'W3',
      step: 'Funnel tracking',
      now: 'Spot drop-off after it already happened.',
      ai: 'Predict churn risk early and prioritize interventions.',
    },
    {
      week: 'W3-4',
      step: 'Engagement + retention',
      now: 'Same follow-up cadence for everyone.',
      ai: 'Personalize timing and tone, escalate only high-risk cases.',
    },
    {
      week: 'W4',
      step: 'Interview analysis',
      now: 'Theme extraction from notes takes days.',
      ai: 'Extract concerns and trust drivers with frequency signals.',
    },
    {
      week: 'W4',
      step: 'Final report',
      now: 'Manual synthesis across channels and outcomes.',
      ai: 'Auto-generate a consistent pilot report that feeds the next run.',
    },
  ]

  return (
    <section id="automation" className="scroll-mt-20 bg-cream px-6 py-20">
      <div className="mx-auto max-w-content">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sage-600">
            AI-powered intelligence
          </p>
          <h2 className="mt-2 text-2xl font-bold text-ink md:text-3xl">
            Every pilot becomes a learning system
          </h2>
          <p className="mt-3 text-ink/80">
            Elara maps automation across recruitment, engagement, and reporting so each pilot gets smarter than the last.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {phases.map((phase) => (
            <article
              key={`${phase.week}-${phase.step}`}
              className="rounded-3xl border-2 border-sage-200/80 bg-white p-5 shadow-soft"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-full bg-sage-100 px-3 py-1 text-xs font-semibold text-sage-700">
                  {phase.week}
                </span>
                <span className="text-xs font-medium uppercase tracking-wide text-ink/55">
                  {phase.step}
                </span>
              </div>

              <div className="space-y-3">
                <div className="rounded-2xl border border-sage-100 bg-cream/70 p-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-ink/55">
                    Today
                  </p>
                  <p className="mt-1 text-sm text-ink/85">{phase.now}</p>
                </div>
                <div className="rounded-2xl border border-sage-200 bg-sage-50/65 p-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-sage-700">
                    With AI
                  </p>
                  <p className="mt-1 text-sm text-ink/85">{phase.ai}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function AdminDemoSection() {
  const views = [
    { id: 'funnel', label: 'Funnel view', icon: BarChart3 },
    { id: 'steps', label: 'Pilot steps', icon: ClipboardList },
    { id: 'report', label: 'Final report', icon: FileText },
  ]

  const [activeView, setActiveView] = useState('funnel')
  const [activeStep, setActiveStep] = useState(2)

  const funnelStages = [
    { label: 'Reached', count: 1000 },
    { label: 'Responded', count: 240 },
    { label: 'Qualified', count: 120 },
    { label: 'Enrolled', count: 60 },
    { label: 'Retained', count: 38 },
  ]

  const pilotSteps = [
    { week: 'Week 1', title: 'Segmentation', status: 'complete' },
    { week: 'Week 2', title: 'Outreach optimization', status: 'complete' },
    { week: 'Week 3', title: 'Funnel risk detection', status: 'active' },
    { week: 'Week 3-4', title: 'Retention nudges', status: 'pending' },
    { week: 'Week 4', title: 'Interview synthesis', status: 'pending' },
    { week: 'Week 4', title: 'Final report generation', status: 'pending' },
  ]

  const maxFunnel = funnelStages[0].count

  return (
    <section id="demo" className="scroll-mt-20 bg-sage-50/40 px-6 py-20">
      <div className="mx-auto max-w-content">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-ink md:text-3xl">Client admin demo</h2>
          <p className="mt-3 text-ink/80">
            A quick interactive preview of what clients can see during a pilot: live funnel status, step progress, and final summary outputs.
          </p>
        </div>

        <div className="rounded-3xl border-2 border-sage-200/80 bg-white p-5 shadow-soft md:p-6">
          <div className="mb-6 flex flex-wrap gap-2">
            {views.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => setActiveView(id)}
                className={[
                  'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition',
                  activeView === id
                    ? 'border-sage-300 bg-sage-500 text-white shadow-soft'
                    : 'border-sage-200 bg-sage-50 text-sage-700 hover:bg-sage-100',
                ].join(' ')}
              >
                <Icon className="h-4 w-4" strokeWidth={2} />
                {label}
              </button>
            ))}
          </div>

          {activeView === 'funnel' && (
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2 rounded-2xl border border-sage-200 bg-cream/70 p-4">
                <p className="mb-4 text-sm font-semibold text-ink">Recruitment funnel snapshot</p>
                <div className="space-y-4">
                  {funnelStages.map((stage, idx) => {
                    const pct = (stage.count / maxFunnel) * 100
                    return (
                      <div key={stage.label}>
                        <div className="mb-1 flex items-center justify-between text-sm">
                          <span className="font-medium text-ink/85">{stage.label}</span>
                          <span className="font-semibold text-ink">{stage.count}</span>
                        </div>
                        <div className="h-2.5 w-full rounded-full bg-sage-100">
                          <div
                            className="h-full rounded-full bg-sage-500"
                            style={{ width: `${pct}%`, opacity: 1 - idx * 0.08 }}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="rounded-2xl border border-sage-200 bg-white p-4">
                <p className="text-sm font-semibold text-ink">Highlights</p>
                <ul className="mt-3 space-y-2 text-sm text-ink/85">
                  <li>Top drop-off: between Responded and Qualified</li>
                  <li>Retention at week 4: 38 participants</li>
                  <li>Best channel pair: Instagram DM to SMS</li>
                </ul>
              </div>
            </div>
          )}

          {activeView === 'steps' && (
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-1 rounded-2xl border border-sage-200 bg-white p-4">
                <p className="mb-3 text-sm font-semibold text-ink">Pilot workflow</p>
                <div className="space-y-2">
                  {pilotSteps.map((step, idx) => (
                    <button
                      key={`${step.week}-${step.title}`}
                      type="button"
                      onClick={() => setActiveStep(idx)}
                      className={[
                        'w-full rounded-2xl border px-3 py-2 text-left transition',
                        activeStep === idx
                          ? 'border-sage-300 bg-sage-100'
                          : 'border-sage-200 bg-cream/60 hover:bg-sage-50',
                      ].join(' ')}
                    >
                      <p className="text-xs font-semibold text-sage-700">{step.week}</p>
                      <p className="text-sm font-medium text-ink">{step.title}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-2 rounded-2xl border border-sage-200 bg-cream/70 p-5">
                <p className="text-sm font-semibold text-ink">Step details</p>
                <h3 className="mt-2 text-lg font-bold text-ink">{pilotSteps[activeStep].title}</h3>
                <p className="mt-1 text-sm text-ink/80">Status: {pilotSteps[activeStep].status}</p>
                <div className="mt-4 rounded-2xl border border-sage-200 bg-white p-4 text-sm text-ink/85">
                  {activeStep === 0 && 'Cohort segments are generated from participant intake, interview notes, and symptom signals.'}
                  {activeStep === 1 && 'Message variants are tested across channels and ranked by conversion quality.'}
                  {activeStep === 2 && 'Participants with declining engagement are flagged with predicted retention risk scores.'}
                  {activeStep === 3 && 'The system suggests nudges and escalates only high-risk participants to human operators.'}
                  {activeStep === 4 && 'Interview transcripts are auto-tagged for concerns, trust drivers, and adoption barriers.'}
                  {activeStep === 5 && 'All pilot signals compile into a structured output report with recommendations.'}
                </div>
              </div>
            </div>
          )}

          {activeView === 'report' && (
            <div className="rounded-2xl border border-sage-200 bg-cream/70 p-5">
              <div className="rounded-2xl border border-sage-200 bg-white">
                <div className="border-b border-sage-100 bg-sage-600 px-4 py-3">
                  <p className="text-sm font-semibold text-white">Elara Pilot Summary - Spring 2025</p>
                </div>
                <div className="grid gap-0 md:grid-cols-2">
                  {[
                    ['Top segment', 'Chronic pain, app-savvy'],
                    ['Best channel', 'Instagram DM -> SMS'],
                    ['Top message', '"Feel heard" (1.8x lift)'],
                    ['Highest drop-off', 'Day 3 onboarding'],
                    ['Week 4 retention', '38 / 60 enrolled'],
                    ['Primary recommendation', 'Send clinician-led explainer by Day 2'],
                  ].map(([k, v], idx) => (
                    <div key={k} className={`border-b border-sage-100 px-4 py-3 ${idx % 2 === 0 ? 'md:border-r' : ''}`}>
                      <p className="text-xs font-semibold uppercase tracking-wide text-ink/55">{k}</p>
                      <p className="mt-1 text-sm font-medium text-ink">{v}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function FooterCTA({ footerRef }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    org: '',
    role: 'Researcher',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const to = CONTACT_EMAILS.join(',')
    const mailto = `mailto:${to}?subject=Pilot%20proposal%20request&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nOrganization: ${formData.org}\nI'm a: ${formData.role}\n\nWhat are you trying to recruit for?\n${formData.message}`
    )}`
    window.location.href = mailto
  }

  return (
    <footer
      id={SECTION_IDS.footer}
      ref={footerRef}
      className="scroll-mt-20 bg-sage-200/40 px-6 py-20"
    >
      <div className="mx-auto max-w-content">
        <div className="mx-auto max-w-xl rounded-3xl border-2 border-sage-200/90 bg-white p-8 shadow-soft-lg">
          <h2 className="mb-2 text-xl font-bold text-ink">
            Planning a trial or pilot in the next 3 to 6 months?
          </h2>
          <p className="mb-8 text-ink/85">
            Share a few details and we will send a one page pilot proposal.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-ink">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData((d) => ({ ...d, name: e.target.value }))}
                className="w-full rounded-2xl border border-sage-200 bg-cream/80 px-4 py-3 text-ink placeholder:text-ink/45 focus:border-sage-400 focus:outline-none focus:ring-2 focus:ring-sage-200"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-ink">
                Work email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@org.org"
                value={formData.email}
                onChange={(e) => setFormData((d) => ({ ...d, email: e.target.value }))}
                className="w-full rounded-2xl border border-sage-200 bg-cream/80 px-4 py-3 text-ink placeholder:text-ink/45 focus:border-sage-400 focus:outline-none focus:ring-2 focus:ring-sage-200"
              />
            </div>
            <div>
              <label htmlFor="org" className="mb-1 block text-sm font-medium text-ink">
                Organization
              </label>
              <input
                id="org"
                type="text"
                placeholder="Your organization"
                value={formData.org}
                onChange={(e) => setFormData((d) => ({ ...d, org: e.target.value }))}
                className="w-full rounded-2xl border border-sage-200 bg-cream/80 px-4 py-3 text-ink placeholder:text-ink/45 focus:border-sage-400 focus:outline-none focus:ring-2 focus:ring-sage-200"
              />
            </div>
            <div>
              <label htmlFor="role" className="mb-1 block text-sm font-medium text-ink">
                I'm a…
              </label>
              <select
                id="role"
                value={formData.role}
                onChange={(e) => setFormData((d) => ({ ...d, role: e.target.value }))}
                className="w-full rounded-2xl border border-sage-200 bg-cream/80 px-4 py-3 text-ink focus:border-sage-400 focus:outline-none focus:ring-2 focus:ring-sage-200"
              >
                <option>Researcher</option>
                <option>Health startup</option>
                <option>Community org</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-ink">
                What are you trying to recruit for?
              </label>
              <textarea
                id="message"
                rows={3}
                placeholder="Brief description of your trial or pilot..."
                value={formData.message}
                onChange={(e) => setFormData((d) => ({ ...d, message: e.target.value }))}
                className="w-full rounded-2xl border border-sage-200 bg-cream/80 px-4 py-3 text-ink placeholder:text-ink/45 focus:border-sage-400 focus:outline-none focus:ring-2 focus:ring-sage-200"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-sage-500 py-3.5 text-base font-semibold text-white shadow-soft transition hover:bg-sage-600 hover:shadow-soft-lg"
            >
              Send my details
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-ink/75">
            Prefer email?{' '}
            <a
              href={`mailto:${CONTACT_EMAILS[0]}`}
              className="text-sage-600 underline decoration-sage-400 underline-offset-2 hover:text-sage-700"
            >
              {CONTACT_EMAILS[0]}
            </a>
            {' or '}
            <a
              href={`mailto:${CONTACT_EMAILS[1]}`}
              className="text-sage-600 underline decoration-sage-400 underline-offset-2 hover:text-sage-700"
            >
              {CONTACT_EMAILS[1]}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const footerRef = useRef(null)
  const howItWorksRef = useRef(null)

  return (
    <div className="min-h-screen">
      <Nav footerRef={footerRef} />
      <main>
        <Hero howItWorksRef={howItWorksRef} footerRef={footerRef} />
        <WhoWeHelp />
        <HowItWorks howItWorksRef={howItWorksRef} />
        <SocialProof />
        <WhyElara />
        <PilotIntelligenceSection />
        <AdminDemoSection />
        <OurJourneySection />
        <FooterCTA footerRef={footerRef} />
      </main>
    </div>
  )
}
