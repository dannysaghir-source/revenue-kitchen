"use client";
import { useEffect, useState } from "react";

const STEPS = [
  {
    id: "business_type",
    question: "What type of business do you run?",
    options: ["Restaurant / Café", "Takeaway / Fast Food", "Bar / Pub", "Other"],
    disqualify: ["Other"],
  },
  {
    id: "decision_maker",
    question: "Are you the owner or decision-maker?",
    options: ["Yes, I make the decisions", "No, I'm not the decision-maker"],
    disqualify: ["No, I'm not the decision-maker"],
  },
  {
    id: "revenue",
    question: "What is your monthly revenue (approximate)?",
    options: ["Under £5,000", "£5,000 – £20,000", "£20,000 – £50,000", "£50,000+"],
    disqualify: ["Under £5,000", "£5,000 – £20,000"],
  },
  {
    id: "locations",
    question: "How many locations do you operate?",
    options: ["1", "2 – 3", "4 – 10", "10+"],
    disqualify: [],
  },
  {
    id: "challenge",
    question: "What is your biggest challenge right now?",
    options: [
      "High platform fees (Just Eat / Uber Eats)",
      "Quiet midweek nights",
      "Low margins / not paying myself enough",
      "Growing to more locations",
    ],
    disqualify: [],
  },
];

export default function Contact() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState("form");

  useEffect(() => {
    const w = window as any;

    // Set up Cal as a queuing function if not already loaded
    if (!w.Cal) {
      w.Cal = function () {
        (w.Cal.q = w.Cal.q || []).push(arguments);
      };
      w.Cal.q = [];
    }

    // Set up the 30min namespace queue before the script loads
    w.Cal.ns = w.Cal.ns || {};
    if (!w.Cal.ns["30min"]) {
      w.Cal.ns["30min"] = function () {
        (w.Cal.ns["30min"].q = w.Cal.ns["30min"].q || []).push(arguments);
      };
      w.Cal.ns["30min"].q = [];
    }

    // Queue all setup calls — replayed when embed.js loads
    w.Cal("init", "30min", { origin: "https://app.cal.eu" });
    w.Cal.ns["30min"]("inline", {
      elementOrSelector: "#my-cal-inline-30min",
      config: { layout: "month_view", useSlotsViewOnSmallScreen: "true", theme: "dark" },
      calLink: "revenuekitchen/30min",
    });
    w.Cal.ns["30min"]("ui", {
      theme: "dark",
      cssVarsPerTheme: { light: { "cal-brand": "#0e9e8e" } },
      hideEventTypeDetails: false,
      layout: "month_view",
    });

    // Load the script — it will process the queued calls on load
    if (!document.querySelector('script[src*="cal.eu/embed"]')) {
      const s = document.createElement("script");
      s.src = "https://app.cal.eu/embed/embed.js";
      s.async = true;
      document.head.appendChild(s);
    }
  }, []);

  const currentStep = STEPS[Math.min(step, STEPS.length - 1)];

  const handleOption = (option: string) => {
    if (currentStep.disqualify.includes(option)) {
      setStatus("disqualified");
      return;
    }
    if (step + 1 < STEPS.length) {
      setStep(step + 1);
    } else {
      setStatus("contact");
    }
  };

  const base = {
    section: {
      background: "#0d1f1f",
      padding: "80px 20px",
      textAlign: "center" as const,
      minHeight: "600px",
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "center",
      justifyContent: "center",
    },
    heading: {
      fontSize: "clamp(28px, 5vw, 56px)",
      fontWeight: 900, fontFamily: "'Bebas Neue', sans-serif",
      color: "#ffffff",
      marginBottom: "16px",
      textTransform: "uppercase" as const,
      letterSpacing: "1px",
    },
    sub: {
      color: "#0e9e8e",
      fontSize: "clamp(14px, 2vw, 18px)",
      marginBottom: "48px",
      maxWidth: "560px",
    },
    card: {
      background: "#0a1a1a",
      border: "1px solid #1a3333",
      borderRadius: "4px",
      padding: "40px 32px",
      maxWidth: "600px",
      width: "100%",
    },
    question: {
      color: "#ffffff",
      fontSize: "clamp(16px, 3vw, 22px)",
      fontWeight: 700,
      marginBottom: "32px",
      lineHeight: 1.4,
    },
    btn: {
      display: "block",
      width: "100%",
      padding: "16px 20px",
      marginBottom: "12px",
      background: "transparent",
      border: "1px solid #1a3333",
      borderRadius: "2px",
      color: "#cccccc",
      fontSize: "16px",
      textAlign: "left" as const,
      cursor: "pointer",
    },
  };

  return (
    <section id="contact" style={base.section}>

      {/* Disqualified */}
      {status === "disqualified" && (
        <div style={base.card}>
          <div style={{ fontSize: "40px", marginBottom: "20px", color: "#ff4444" }}>✕</div>
          <h2 style={{ ...base.question, marginBottom: "16px" }}>
            We don&apos;t think we&apos;re the right fit — yet.
          </h2>
          <p style={{ color: "#888888", fontSize: "16px", lineHeight: 1.7 }}>
            Revenue Kitchen works best with established restaurant and takeaway
            businesses turning over £20k+ a month. If that changes, we&apos;d
            love to hear from you.
          </p>
          <p style={{ color: "#0e9e8e", marginTop: "24px", fontSize: "15px" }}>
            danyalsaghir@outlook.com
          </p>
        </div>
      )}

      {/* Form */}
      {status === "form" && (
        <>
          <h2 style={base.heading}>
            READY TO <span style={{ color: "#0e9e8e", fontFamily: "'Instrument Serif', serif", fontStyle: "italic", textTransform: "none", fontSize: "1.15em" }}>Actually</span> GROW?
          </h2>
          <p style={base.sub}>Answer 5 quick questions to see if we&apos;re the right fit.</p>
          <div style={base.card}>
            <div style={{ display: "flex", gap: "6px", marginBottom: "28px", justifyContent: "center" }}>
              {STEPS.map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: i <= step ? "#0e9e8e" : "#1a3333",
                  }}
                />
              ))}
            </div>
            <p style={base.question}>{currentStep.question}</p>
            {currentStep.options.map((option) => (
              <button
                key={option}
                style={base.btn}
                onMouseEnter={(e) => {
                  const t = e.currentTarget;
                  t.style.borderColor = "#0e9e8e";
                  t.style.color = "#ffffff";
                  t.style.background = "rgba(14,158,142,0.08)";
                }}
                onMouseLeave={(e) => {
                  const t = e.currentTarget;
                  t.style.borderColor = "#1a3333";
                  t.style.color = "#cccccc";
                  t.style.background = "transparent";
                }}
                onClick={() => handleOption(option)}
              >
                {option}
              </button>
            ))}
            <p style={{ color: "#444444", fontSize: "13px", marginTop: "16px" }}>
              Step {step + 1} of {STEPS.length}
            </p>
          </div>
        </>
      )}

      {/* Qualified heading */}
      {status === "contact" && (
        <>
          <h2 style={base.heading}>
            READY TO <span style={{ color: "#0e9e8e", fontFamily: "'Instrument Serif', serif", fontStyle: "italic", textTransform: "none", fontSize: "1.15em" }}>Actually</span> GROW?
          </h2>
          <p style={base.sub}>You&apos;re a good fit. Book your free 30-minute call below.</p>
        </>
      )}

      {/* Cal.com div — always in DOM so the queued inline call can attach on load */}
      <div
        id="my-cal-inline-30min"
        style={{
          display: status === "contact" ? "block" : "none",
          width: "100%",
          maxWidth: "900px",
          minHeight: "600px",
          overflow: "scroll",
        }}
      />
    </section>
  );
}
