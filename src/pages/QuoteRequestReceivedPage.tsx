import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CheckCheck, MessageCircle, TimerReset } from "lucide-react";
import { PageSeo } from "@/components/seo/PageSeo";
import { company } from "@/lib/site-data";

const REDIRECT_DELAY = 3;

const buildWhatsAppUrl = (search: string) => {
  const params = new URLSearchParams(search);
  const name = params.get("name")?.trim();
  const subject = params.get("subject")?.trim();

  const parts = [
    "Hi I submitted a quote request on velocityweb.online.",
    name ? `My name is ${name}.` : null,
    subject ? `Project type: ${subject}.` : null,
  ].filter(Boolean);

  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(parts.join(" "))}`;
};

const QuoteRequestReceivedPage = () => {
  const location = useLocation();
  const [secondsRemaining, setSecondsRemaining] = useState(REDIRECT_DELAY);

  const whatsappUrl = useMemo(() => buildWhatsAppUrl(location.search), [location.search]);

  useEffect(() => {
    const countdown = window.setInterval(() => {
      setSecondsRemaining((current) => (current > 0 ? current - 1 : 0));
    }, 1000);

    const redirect = window.setTimeout(() => {
      window.location.assign(whatsappUrl);
    }, REDIRECT_DELAY * 1000);

    return () => {
      window.clearInterval(countdown);
      window.clearTimeout(redirect);
    };
  }, [whatsappUrl]);

  return (
    <>
      <PageSeo
        title="Quote Request Received | Velocity Web"
        description="Thank you for contacting Velocity Web. Your quote request has been received and you will be redirected to WhatsApp shortly."
        canonical="https://velocityweb.online/quote-request-received"
        ogTitle="Quote Request Received | Velocity Web"
        ogDescription="Your request has been received. Continue the conversation with Velocity Web on WhatsApp."
        robots="noindex, nofollow"
      />

      <main className="min-h-screen bg-[#f5f5fd] px-4 py-10 text-[#0f0f1a] sm:px-6 lg:px-8">
        <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-3xl items-center justify-center">
          <section className="relative w-full overflow-hidden rounded-[32px] border border-[#2a2416] bg-[linear-gradient(180deg,rgba(20,20,20,0.98),rgba(9,9,9,0.98))] px-6 py-10 shadow-[0_30px_120px_rgba(0,0,0,0.55)] sm:px-10 sm:py-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_35%)]" />

            <div className="relative z-10 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#6366f166] bg-[#6366f114] shadow-[0_0_0_8px_rgba(99,102,241,0.06)]">
                <CheckCheck className="h-10 w-10 text-[#6366f1]" />
              </div>

              <p className="mt-8 text-[0.72rem] uppercase tracking-[0.34em] text-[#b59a66]">Velocity Web</p>
              <h1 className="mt-4 text-4xl leading-none text-[#0f0f1a] [font-family:'Instrument_Serif',Georgia,serif] sm:text-5xl">
                Request Received
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#b8b2a7] [font-family:'Geist_Mono','SFMono-Regular',ui-monospace,monospace] sm:text-base">
                We&apos;ve received your quote request. Redirecting you to WhatsApp so we can continue the conversation
                right away.
              </p>

              <div className="mt-8 rounded-[24px] border border-[#2f2a1d] bg-[#111111] p-5 text-left">
                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-full border border-[#6366f155] bg-[#6366f112] p-2">
                    <TimerReset className="h-4 w-4 text-[#6366f1]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#3b3b5c] [font-family:'Geist_Mono','SFMono-Regular',ui-monospace,monospace]">
                      You&apos;ll be redirected in {secondsRemaining}s
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#9f988b]">
                      If WhatsApp doesn&apos;t open automatically, use the button below. We&apos;ll pick up your request
                      there and respond as quickly as possible.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={whatsappUrl}
                  className="inline-flex min-w-[220px] items-center justify-center gap-2 rounded-full bg-[#6366f1] px-6 py-3 text-sm font-semibold text-black transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#d8ff73] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ecffc2] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  <MessageCircle className="h-4 w-4" />
                  Open WhatsApp
                </a>
                <Link
                  to="/"
                  className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-[#6366f133] px-6 py-3 text-sm font-medium text-[#6366f1] transition-colors hover:border-[#6366f166] hover:bg-[#6366f1]"
                >
                  Back to Website
                </Link>
              </div>

              <p className="mt-8 text-xs leading-6 text-[#7d776d] [font-family:'Geist_Mono','SFMono-Regular',ui-monospace,monospace]">
                We typically reply quickly on WhatsApp for quote requests, project scoping, and next-step planning.
              </p>

              {/* Google Ads conversion tracking pixel/comment placeholder goes here. */}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default QuoteRequestReceivedPage;
