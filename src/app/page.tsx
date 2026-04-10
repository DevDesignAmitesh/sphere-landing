import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteContent } from "@/data/site";

export default function Home() {
  const {
    company,
    navigation,
    hero,
    stats,
    about,
    services,
    strengths,
    process,
    gallery,
    testimonials,
    contact,
    footer,
  } = siteContent;

  return (
    <main className="flex flex-col">
      <SiteHeader navigation={navigation} />

      <section
        id="home"
        className="relative overflow-hidden pb-14 pt-8 md:pb-20 md:pt-10"
      >
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(11,31,58,0.02),transparent_40%)]" />
        <div className="section-shell grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <FadeIn className="order-2 space-y-6 lg:order-1">
            <div className="space-y-4">
              <p className="eyebrow">{hero.eyebrow}</p>
              <h1 className="section-title max-w-xl text-[2.45rem] font-extrabold leading-[1.02] text-primary md:text-[4rem]">
                {hero.title}
              </h1>
              <p className="max-w-lg text-[0.96rem] leading-7 text-slate-600">
                {hero.description}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={hero.primaryCta.href}
                className="rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-white shadow-xl shadow-primary/20 hover:-translate-y-0.5 hover:bg-secondary"
              >
                {hero.primaryCta.label}
              </a>
              <a
                href={hero.secondaryCta.href}
                className="rounded-full border border-primary/15 bg-white px-5 py-3 text-center text-sm font-semibold text-primary hover:-translate-y-0.5 hover:border-primary/30 hover:bg-slate-50"
              >
                {hero.secondaryCta.label}
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <FadeIn
                  key={stat.label}
                  delay={0.06 + index * 0.05}
                  className="card-surface rounded-[1.35rem] p-4"
                >
                  <p className="font-display text-[1.6rem] font-extrabold text-primary">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-[0.8rem] leading-6 text-slate-600">
                    {stat.label}
                  </p>
                </FadeIn>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.12} className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-[2rem]">
              <Image
                src={hero.image}
                alt="Professional meeting for banking presentation"
                width={1400}
                height={980}
                className="h-[24rem] w-full object-cover md:h-[34rem]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/12 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-[1.5rem] border border-white/15 bg-white/12 p-4 backdrop-blur-md md:bottom-6 md:left-6 md:right-6 md:p-5">
                <div className="grid gap-3 md:grid-cols-3">
                  {hero.highlights.map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.1rem] bg-white/10 px-3.5 py-3 text-[0.8rem] font-medium leading-6 text-white"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="about" className="py-16 md:py-20">
        <div className="section-shell grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <FadeIn className="relative overflow-hidden rounded-[2rem]">
            <Image
              src={about.image}
              alt="Corporate consultation in office"
              width={1200}
              height={1000}
              className="h-[22rem] w-full object-cover md:h-[30rem]"
            />
          </FadeIn>

          <FadeIn delay={0.08} className="space-y-5">
            <SectionHeading
              eyebrow={about.eyebrow}
              title={about.title}
              description={about.description}
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {about.features.map((item) => (
                <div
                  key={item}
                  className="card-surface rounded-[1.3rem] px-4 py-4 text-[0.84rem] font-medium text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="services" className="bg-primary py-16 text-white md:py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow={services.eyebrow}
            title={services.title}
            description={services.description}
            invert
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.items.map((service, index) => (
              <FadeIn
                key={service.title}
                delay={0.05 + index * 0.04}
                className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/6"
              >
                <div className="relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={900}
                    height={720}
                    className="h-52 w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                </div>
                <div className="space-y-2.5 p-5">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-accent">
                    {service.kicker}
                  </p>
                  <h3 className="font-display text-[1.3rem] font-bold">
                    {service.title}
                  </h3>
                  <p className="text-[0.84rem] leading-6 text-slate-200">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className="py-16 md:py-20">
        <div className="section-shell grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <FadeIn className="space-y-5">
            <SectionHeading
              eyebrow={strengths.eyebrow}
              title={strengths.title}
              description={strengths.description}
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {strengths.items.map((item) => (
                <div key={item.title} className="card-surface rounded-[1.35rem] p-4">
                  <h3 className="font-display text-[1.08rem] font-bold text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[0.82rem] leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.08} className="relative overflow-hidden rounded-[2rem]">
            <Image
              src={strengths.image}
              alt="Modern business building"
              width={1300}
              height={1000}
              className="h-[22rem] w-full object-cover md:h-[32rem]"
            />
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="section-shell grid gap-6 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <FadeIn className="relative overflow-hidden rounded-[2rem]">
            <Image
              src={process.image}
              alt="Team discussion in office"
              width={1200}
              height={1000}
              className="h-[22rem] w-full object-cover md:h-[30rem]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/55 to-transparent" />
          </FadeIn>

          <FadeIn delay={0.08} className="space-y-5">
            <SectionHeading
              eyebrow={process.eyebrow}
              title={process.title}
              description={process.description}
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {process.steps.map((step, index) => (
                <div
                  key={step.title}
                  className="card-surface rounded-[1.35rem] p-4"
                >
                  <p className="font-display text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-accent">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-2.5 font-display text-[1.08rem] font-bold text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[0.82rem] leading-6 text-slate-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="gallery" className="bg-surface-muted py-16 md:py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow={gallery.eyebrow}
            title={gallery.title}
            description={gallery.description}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {gallery.items.map((item, index) => (
              <FadeIn
                key={`${item.alt}-${index}`}
                delay={0.04 + index * 0.03}
                className="overflow-hidden rounded-[1.55rem]"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1000}
                  height={780}
                  className="h-64 w-full object-cover transition duration-300 hover:scale-[1.03]"
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 md:py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow={testimonials.eyebrow}
            title={testimonials.title}
            description={testimonials.description}
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {testimonials.items.map((item, index) => (
              <FadeIn
                key={item.name}
                delay={0.04 + index * 0.05}
                className="card-surface rounded-[1.45rem] p-5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {item.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div>
                    <p className="font-display text-[1rem] font-bold text-primary">
                      {item.name}
                    </p>
                    <p className="text-[0.8rem] text-slate-500">{item.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-[0.9rem] leading-7 text-slate-600">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-20">
        <div className="section-shell grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <FadeIn className="overflow-hidden rounded-[2rem] bg-primary text-white">
            <div className="relative">
              <Image
                src={hero.image}
                alt="Corporate consultation visual"
                width={1200}
                height={980}
                className="h-56 w-full object-cover opacity-65"
              />
              <div className="absolute inset-0 bg-primary/55" />
            </div>
            <div className="space-y-5 p-6 md:p-8">
              <div>
                <p className="eyebrow !text-white/70">{contact.eyebrow}</p>
                <h2 className="section-title mt-3 text-3xl font-extrabold md:text-[2.3rem]">
                  {contact.title}
                </h2>
                <p className="mt-3 max-w-xl text-[0.94rem] leading-7 text-slate-200">
                  {contact.description}
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                    Phone
                  </p>
                  <a
                    href={`tel:${company.phone}`}
                    className="mt-1.5 block text-base font-semibold text-white"
                  >
                    {company.phone}
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                    Email
                  </p>
                  <a
                    href={`mailto:${company.email}`}
                    className="mt-1.5 block break-all text-base font-semibold text-white"
                  >
                    {company.email}
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                    Address
                  </p>
                  <p className="mt-1.5 max-w-lg text-[0.92rem] leading-7 text-slate-200">
                    {company.address}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <ContactForm
              title={contact.formTitle}
              description={contact.formDescription}
              buttonLabel={contact.submitLabel}
              loadingLabel={contact.loadingLabel}
              successTitle={contact.successTitle}
              successMessage={contact.successMessage}
            />
          </FadeIn>
        </div>
      </section>

      <footer className="border-t border-border bg-white py-7">
        <div className="section-shell flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-lg font-extrabold tracking-[0.2em] text-primary">
              SHOP SPHERE
            </p>
            <p className="mt-2 max-w-md text-[0.82rem] leading-6 text-slate-500">
              {footer.description}
            </p>
          </div>
          <div className="text-[0.82rem] leading-6 text-slate-500 md:text-right">
            <p>{company.name}</p>
            <p>{footer.copy}</p>
          </div>
        </div>
      </footer>

      <WhatsAppFloat href={company.whatsappUrl} />
    </main>
  );
}
