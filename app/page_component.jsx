"use client";

import { useEffect, useState } from "react";
import {
  sections,
  hero,
  valueChain,
  valueChainHighlight,
  statCards,
  pestelData,
  porterData,
  competitorData,
  segments,
  infoSources,
  journeyStages,
  strategyData,
  sectionHints,
  swotData,
  reviewInsightsData,
} from "./report-content-vi";
import {
  reportSources,
  marketSizing,
  marketSizingLabels,
} from "./report-sources";
import { masterGlossary } from "./master-glossary";
import { clientTheme as theme, fontStylesheet } from "./lk-nail-salon-theme";

const sourceById = Object.fromEntries(reportSources.map((s) => [s.id, s]));

const BADGE_COLORS = {
  critical: "#C62828",
  high: "#E65100",
  opportunity: "#2E7D32",
  insight: "#1565C0",
};

const BADGE_LABELS = {
  critical: "Quan trọng",
  high: "Cao",
  opportunity: "Cơ hội",
  insight: "Nhận định",
};

const sectionStyle = {
  scrollMarginTop: "88px",
  marginBottom: "64px",
  paddingTop: "8px",
};

const cardStyle = {
  background: theme.colors.white,
  border: `1px solid ${theme.colors.lineSoft}`,
  borderRadius: theme.radius.md,
  padding: "24px",
  marginBottom: "16px",
  boxShadow: theme.colors.cardShadow,
};

function SourceRefs({ ids }) {
  if (!ids?.length) return null;
  return (
    <span style={{ fontSize: "12px", color: theme.colors.muted }}>
      {" "}
      [
      {ids.map((id, i) => {
        const s = sourceById[id];
        if (!s) return null;
        return (
          <span key={id}>
            {i > 0 && ", "}
            {s.url ? (
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: theme.colors.accentDeep, textDecoration: "underline" }}
              >
                {s.label}
              </a>
            ) : (
              <span>{s.label}</span>
            )}
          </span>
        );
      })}
      ]
    </span>
  );
}

function SectionSources({ ids, title = "Nguồn tham khảo" }) {
  const unique = [...new Set(ids || [])];
  if (!unique.length) return null;
  return (
    <div style={{ marginTop: "20px", fontSize: "13px", color: theme.colors.muted }}>
      <strong style={{ color: theme.colors.ink }}>{title}</strong>
      <ul style={{ margin: "8px 0 0", paddingLeft: "20px" }}>
        {unique.map((id) => {
          const s = sourceById[id];
          if (!s) return null;
          return (
            <li key={id} style={{ marginBottom: "4px" }}>
              {s.url ? (
                <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ color: theme.colors.accentDeep }}>
                  {s.title}
                </a>
              ) : (
                s.title
              )}
              {s.note ? ` — ${s.note}` : ""}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function SectionTermHint({ terms, sectionId }) {
  if (!terms?.length) return null;
  return (
    <div
      style={{
        ...cardStyle,
        background: theme.colors.bgAlt,
        border: `1px dashed ${theme.colors.line}`,
        padding: "16px 20px",
      }}
    >
      <div style={{ fontSize: "12px", fontWeight: 600, color: theme.colors.muted, marginBottom: "8px" }}>
        THUẬT NGỮ NHANH
      </div>
      {terms.map((t) => (
        <div key={t.term} style={{ fontSize: "13px", marginBottom: "6px", lineHeight: 1.5 }}>
          <strong style={{ color: theme.colors.accent }}>{t.term}</strong>
          <span style={{ color: theme.colors.muted }}> — {t.def}</span>
        </div>
      ))}
      <a
        href="#glossary"
        style={{ fontSize: "12px", color: theme.colors.accentDeep, fontWeight: 600 }}
      >
        Xem bảng thuật ngữ đầy đủ →
      </a>
    </div>
  );
}

function Badge({ type, children }) {
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: "10px",
        fontWeight: 700,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        padding: "3px 8px",
        borderRadius: theme.radius.sm,
        background: BADGE_COLORS[type] || theme.colors.muted,
        color: "#fff",
        marginRight: "8px",
        verticalAlign: "middle",
      }}
    >
      {children || BADGE_LABELS[type]}
    </span>
  );
}

function ForceBar({ level, color }) {
  const pct = (level / 5) * 100;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
      <div style={{ flex: 1, height: "8px", background: theme.colors.lineSoft, borderRadius: "4px", overflow: "hidden" }}>
        <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: "4px" }} />
      </div>
      <span style={{ fontFamily: theme.fonts.mono, fontSize: "13px", fontWeight: 600, color: theme.colors.ink, minWidth: "32px" }}>
        {level}/5
      </span>
    </div>
  );
}

function ThreatDots({ level }) {
  return (
    <span style={{ display: "inline-flex", gap: "4px" }}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: n <= level ? theme.colors.accent : theme.colors.lineSoft,
          }}
        />
      ))}
    </span>
  );
}

function TermGlossary({ terms, title = "Bảng thuật ngữ" }) {
  return (
    <div style={{ display: "grid", gap: "12px" }}>
      {terms.map((t) => (
        <div key={t.term} style={cardStyle}>
          <div style={{ fontWeight: 700, fontSize: "16px", color: theme.colors.ink, marginBottom: "4px" }}>
            {t.term}
            {t.en ? (
              <span style={{ fontWeight: 400, fontSize: "13px", color: theme.colors.muted, marginLeft: "8px" }}>
                ({t.en})
              </span>
            ) : null}
          </div>
          <p style={{ margin: 0, fontSize: "14px", lineHeight: 1.6, color: theme.colors.muted }}>{t.def}</p>
        </div>
      ))}
    </div>
  );
}

function SwotPanel({ data }) {
  const allSourceIds = data.quadrants.flatMap((q) =>
    q.items.flatMap((item) => item.sourceIds || [])
  );
  return (
    <div>
      <p style={{ fontSize: "15px", lineHeight: 1.7, color: theme.colors.muted, marginBottom: "24px" }}>
        {data.intro}
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "16px",
        }}
      >
        {data.quadrants.map((q) => (
          <div
            key={q.key}
            style={{
              ...cardStyle,
              borderTop: `4px solid ${q.color}`,
              marginBottom: 0,
            }}
          >
            <h3 style={{ margin: "0 0 14px", fontSize: "16px", color: q.color }}>{q.label}</h3>
            <ul style={{ margin: 0, paddingLeft: "18px", listStyle: "disc" }}>
              {q.items.map((item, i) => (
                <li key={i} style={{ marginBottom: "12px", fontSize: "14px", lineHeight: 1.6, color: theme.colors.muted }}>
                  <strong style={{ color: theme.colors.ink }}>{item.headline}</strong>
                  <span> — {item.detail}</span>
                  <SourceRefs ids={item.sourceIds} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <SectionSources ids={allSourceIds} />
    </div>
  );
}

function ReviewInsightsPanel({ data }) {
  const allSourceIds = [
    ...data.comparison.flatMap((r) =>
      [r.google?.sourceId, r.yelp?.sourceId].filter(Boolean)
    ),
    ...data.lkThemes.positive.flatMap((t) => t.sourceIds || []),
    ...data.lkThemes.negative.flatMap((t) => t.sourceIds || []),
    ...data.implications.flatMap((i) => i.sourceIds || []),
  ];

  return (
    <div>
      <p style={{ fontSize: "15px", lineHeight: 1.7, color: theme.colors.muted, marginBottom: "12px" }}>
        {data.intro}
      </p>
      <p style={{ fontSize: "12px", color: theme.colors.muted, marginBottom: "24px", fontStyle: "italic" }}>
        {data.platformNote} · Crawl: {data.crawledAt}
      </p>

      <h3 style={{ fontSize: "18px", marginBottom: "12px" }}>So sánh rating đa nền tảng</h3>
      <div style={{ overflowX: "auto", marginBottom: "28px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
          <thead>
            <tr style={{ background: theme.colors.bgAlt }}>
              <th style={{ padding: "10px", textAlign: "left", borderBottom: `1px solid ${theme.colors.line}` }}>Salon</th>
              <th style={{ padding: "10px", textAlign: "left", borderBottom: `1px solid ${theme.colors.line}` }}>Google</th>
              <th style={{ padding: "10px", textAlign: "left", borderBottom: `1px solid ${theme.colors.line}` }}>Yelp</th>
              <th style={{ padding: "10px", textAlign: "left", borderBottom: `1px solid ${theme.colors.line}` }}>Nhận định</th>
            </tr>
          </thead>
          <tbody>
            {data.comparison.map((row) => (
              <tr key={row.salon}>
                <td style={{ padding: "10px", borderBottom: `1px solid ${theme.colors.lineSoft}`, fontWeight: 600 }}>{row.salon}</td>
                <td style={{ padding: "10px", borderBottom: `1px solid ${theme.colors.lineSoft}` }}>
                  {row.google.rating !== "—" ? (
                    <>
                      {row.google.rating}★ ({row.google.count})
                      <SourceRefs ids={row.google.sourceId ? [row.google.sourceId] : []} />
                    </>
                  ) : (
                    "—"
                  )}
                </td>
                <td style={{ padding: "10px", borderBottom: `1px solid ${theme.colors.lineSoft}` }}>
                  {row.yelp.rating}★ ({row.yelp.count})
                  <SourceRefs ids={row.yelp.sourceId ? [row.yelp.sourceId] : []} />
                </td>
                <td style={{ padding: "10px", borderBottom: `1px solid ${theme.colors.lineSoft}`, color: theme.colors.muted }}>{row.highlight}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={{ fontSize: "18px", marginBottom: "12px" }}>LK Nail Salon — theme từ Yelp</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "20px" }}>
        {data.lkThemes.topMentioned.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: "12px",
              padding: "4px 10px",
              background: "rgba(204, 51, 102, 0.1)",
              color: theme.colors.accentDeep,
              borderRadius: theme.radius.sm,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px", marginBottom: "28px" }}>
        <div style={{ ...cardStyle, borderTop: "4px solid #2E7D32", marginBottom: 0 }}>
          <h4 style={{ margin: "0 0 12px", color: "#2E7D32" }}>Positive</h4>
          {data.lkThemes.positive.map((t, i) => (
            <div key={i} style={{ marginBottom: "14px", fontSize: "13px", lineHeight: 1.55 }}>
              <strong style={{ color: theme.colors.ink }}>{t.theme}</strong>
              <span style={{ color: theme.colors.muted }}> ({t.mentions})</span>
              <blockquote style={{ margin: "6px 0 0", paddingLeft: "12px", borderLeft: `3px solid ${theme.colors.line}`, color: theme.colors.muted, fontStyle: "italic" }}>
                &ldquo;{t.quote}&rdquo; — {t.author}
              </blockquote>
              <SourceRefs ids={t.sourceIds} />
            </div>
          ))}
        </div>
        <div style={{ ...cardStyle, borderTop: "4px solid #C62828", marginBottom: 0 }}>
          <h4 style={{ margin: "0 0 12px", color: "#C62828" }}>Negative</h4>
          {data.lkThemes.negative.map((t, i) => (
            <div key={i} style={{ marginBottom: "14px", fontSize: "13px", lineHeight: 1.55 }}>
              <strong style={{ color: theme.colors.ink }}>{t.theme}</strong>
              <span style={{ color: theme.colors.muted }}> ({t.mentions})</span>
              <blockquote style={{ margin: "6px 0 0", paddingLeft: "12px", borderLeft: `3px solid ${theme.colors.line}`, color: theme.colors.muted, fontStyle: "italic" }}>
                &ldquo;{t.quote}&rdquo; — {t.author}
              </blockquote>
              <SourceRefs ids={t.sourceIds} />
            </div>
          ))}
        </div>
      </div>

      <h3 style={{ fontSize: "18px", marginBottom: "12px" }}>Ý nghĩa cho báo cáo</h3>
      {data.implications.map((imp, i) => (
        <div key={i} style={cardStyle}>
          <div style={{ fontSize: "11px", color: theme.colors.muted, marginBottom: "6px" }}>
            Hỗ trợ: {imp.supports.join(" · ")}
          </div>
          <strong style={{ fontSize: "15px", color: theme.colors.ink }}>{imp.headline}</strong>
          <p style={{ margin: "8px 0 0", fontSize: "14px", lineHeight: 1.6, color: theme.colors.muted }}>{imp.detail}</p>
          <SourceRefs ids={imp.sourceIds} />
        </div>
      ))}
      <SectionSources ids={allSourceIds} />
    </div>
  );
}

function MarketSizingPanel() {
  const { title, intro, rows } = marketSizingLabels;
  return (
    <div>
      <p style={{ fontSize: "15px", lineHeight: 1.7, color: theme.colors.muted, marginBottom: "24px" }}>{intro}</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "16px",
        }}
      >
        {rows.map(([label, key]) => {
          const m = marketSizing[key];
          if (!m || typeof m === "string") return null;
          return (
            <div key={key} style={cardStyle}>
              <div style={{ fontSize: "12px", color: theme.colors.muted, marginBottom: "6px" }}>{label}</div>
              <div style={{ fontSize: "22px", fontWeight: 700, color: theme.colors.accent, fontFamily: theme.fonts.display }}>
                {m.value}
              </div>
              <div style={{ fontSize: "12px", color: theme.colors.muted, marginTop: "6px" }}>{m.note}</div>
              <div style={{ marginTop: "8px" }}>
                <SourceRefs ids={[m.sourceId]} />
              </div>
            </div>
          );
        })}
      </div>
      <p style={{ fontSize: "12px", color: theme.colors.muted, marginTop: "16px" }}>
        Cập nhật: {marketSizing.asOf}
      </p>
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = fontStylesheet;
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-72px 0px -55% 0px", threshold: [0, 0.1, 0.25] }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const publisherLabels = [...new Set(reportSources.map((s) => s.label))].slice(0, 5).join(" · ");

  return (
    <div
      style={{
        fontFamily: theme.fonts.body,
        background: theme.colors.bg,
        color: theme.colors.ink,
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(250, 248, 249, 0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${theme.colors.lineSoft}`,
          boxShadow: theme.colors.navShadow,
        }}
      >
        <div
          style={{
            maxWidth: theme.maxWidth,
            margin: "0 auto",
            padding: "12px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <a href={theme.siteUrl} target="_blank" rel="noopener noreferrer">
            {theme.logoUrl ? (
              <img src={theme.logoUrl} alt="LK Nail Salon" style={{ height: "40px", width: "auto" }} />
            ) : (
              <span style={{ fontFamily: theme.fonts.display, fontWeight: 700, fontSize: "18px" }}>LK Nail Salon</span>
            )}
          </a>
          <span style={{ fontSize: "12px", color: theme.colors.muted }}>Báo cáo 06/2026</span>
        </div>
        <nav
          style={{
            maxWidth: theme.maxWidth,
            margin: "0 auto",
            padding: "0 24px 10px",
            display: "flex",
            gap: "6px",
            overflowX: "auto",
            flexWrap: "nowrap",
          }}
        >
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              style={{
                fontSize: "12px",
                fontWeight: 600,
                padding: "6px 12px",
                borderRadius: theme.radius.sm,
                textDecoration: "none",
                whiteSpace: "nowrap",
                background: activeSection === id ? theme.colors.accent : "transparent",
                color: activeSection === id ? "#fff" : theme.colors.muted,
                border: `1px solid ${activeSection === id ? theme.colors.accent : theme.colors.lineSoft}`,
              }}
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main style={{ maxWidth: theme.maxWidth, margin: "0 auto", padding: "32px 24px 80px" }}>
        {/* Hero */}
        <section id="overview" style={sectionStyle}>
          <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", color: theme.colors.accent, marginBottom: "12px" }}>
            {hero.eyebrow}
          </div>
          <h1
            style={{
              fontFamily: theme.fonts.display,
              fontSize: "clamp(28px, 5vw, 42px)",
              fontWeight: 700,
              lineHeight: 1.15,
              margin: "0 0 16px",
              color: theme.colors.ink,
            }}
          >
            {hero.title}
          </h1>
          <p style={{ fontSize: "17px", lineHeight: 1.65, color: theme.colors.muted, maxWidth: "720px", margin: "0 0 20px" }}>
            {hero.subtitle}
          </p>
          <p style={{ fontSize: "13px", color: theme.colors.muted }}>
            ✓ {hero.verifiedLine}: {publisherLabels}
          </p>

          <SectionTermHint terms={sectionHints.overview} />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "16px",
              margin: "32px 0",
            }}
          >
            {statCards.map((c) => (
              <div key={c.l} style={cardStyle}>
                <div style={{ fontSize: "26px", fontWeight: 700, color: theme.colors.accent, fontFamily: theme.fonts.display }}>{c.n}</div>
                <div style={{ fontSize: "14px", fontWeight: 600, marginTop: "4px" }}>{c.l}</div>
                <div style={{ fontSize: "12px", color: theme.colors.muted }}>{c.s}</div>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: theme.fonts.display, fontSize: "22px", marginBottom: "16px" }}>Chuỗi giá trị</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
            {valueChain.map((step, i) => (
              <span key={step} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span
                  style={{
                    padding: "8px 14px",
                    borderRadius: theme.radius.sm,
                    fontSize: "13px",
                    fontWeight: i === valueChainHighlight ? 700 : 500,
                    background: i === valueChainHighlight ? theme.colors.accent : theme.colors.white,
                    color: i === valueChainHighlight ? "#fff" : theme.colors.ink,
                    border: `1px solid ${i === valueChainHighlight ? theme.colors.accent : theme.colors.lineSoft}`,
                  }}
                >
                  {step}
                </span>
                {i < valueChain.length - 1 && <span style={{ color: theme.colors.muted }}>→</span>}
              </span>
            ))}
          </div>
          <SectionSources ids={["gmi-nail-salon-2025", "lk-company-site", "santee-city-demographics"]} />
        </section>

        {/* PESTEL */}
        <section id="pestel" style={sectionStyle}>
          <h2 style={{ fontFamily: theme.fonts.display, fontSize: "28px", marginBottom: "8px" }}>Phân tích PESTEL</h2>
          <p style={{ color: theme.colors.muted, marginBottom: "20px" }}>Yếu tố vĩ mô ảnh hưởng LK Nail Salon tại Santee, CA.</p>
          <SectionTermHint terms={sectionHints.pestel} />
          {pestelData.map((cat) => (
            <div key={cat.letter} style={{ ...cardStyle, borderLeft: `4px solid ${cat.color}` }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <span
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: cat.color,
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                  }}
                >
                  {cat.letter}
                </span>
                <h3 style={{ margin: 0, fontSize: "18px" }}>{cat.title}</h3>
              </div>
              {cat.items.map((item, idx) => (
                <div key={idx} style={{ marginBottom: "16px", paddingBottom: idx < cat.items.length - 1 ? "16px" : 0, borderBottom: idx < cat.items.length - 1 ? `1px solid ${theme.colors.lineSoft}` : "none" }}>
                  <div style={{ marginBottom: "6px" }}>
                    <Badge type={item.impact} />
                    <strong style={{ fontSize: "15px" }}>{item.headline}</strong>
                  </div>
                  <p style={{ margin: "6px 0 0", fontSize: "14px", lineHeight: 1.65, color: theme.colors.muted }}>
                    {item.detail}
                    <SourceRefs ids={item.sourceIds} />
                  </p>
                </div>
              ))}
              <SectionSources ids={cat.sourceIds} />
            </div>
          ))}
        </section>

        {/* Porter */}
        <section id="porter" style={sectionStyle}>
          <h2 style={{ fontFamily: theme.fonts.display, fontSize: "28px", marginBottom: "8px" }}>Lực lượng Porter</h2>
          <p style={{ color: theme.colors.muted, marginBottom: "20px" }}>5 lực lượng cạnh tranh trong ngành nail salon địa phương.</p>
          <SectionTermHint terms={sectionHints.porter} />
          {porterData.map((f) => (
            <div key={f.force} style={cardStyle}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "8px" }}>
                <h3 style={{ margin: 0, fontSize: "16px" }}>{f.force}</h3>
                <span style={{ fontSize: "11px", fontWeight: 700, color: f.color, letterSpacing: "0.05em" }}>{f.levelLabel}</span>
              </div>
              <ForceBar level={f.level} color={f.color} />
              <ul style={{ margin: "12px 0 0", paddingLeft: "20px", color: theme.colors.muted, fontSize: "14px", lineHeight: 1.65 }}>
                {f.points.map((p, i) => (
                  <li key={i} style={{ marginBottom: "6px" }}>{p}</li>
                ))}
              </ul>
              <SectionSources ids={f.sourceIds} />
            </div>
          ))}
        </section>

        {/* Market Sizing */}
        <section id="market-sizing" style={sectionStyle}>
          <h2 style={{ fontFamily: theme.fonts.display, fontSize: "28px", marginBottom: "8px" }}>{marketSizingLabels.title}</h2>
          <SectionTermHint terms={sectionHints["market-sizing"]} />
          <MarketSizingPanel />
        </section>

        {/* Competitors */}
        <section id="competitors" style={sectionStyle}>
          <h2 style={{ fontFamily: theme.fonts.display, fontSize: "28px", marginBottom: "8px" }}>Bản đồ đối thủ</h2>
          <p style={{ color: theme.colors.muted, marginBottom: "20px" }}>Salon và thay thế trong bán kính Santee / East County.</p>
          <SectionTermHint terms={sectionHints.competitors} />
          {competitorData.map((c) => (
            <div key={c.name} style={cardStyle}>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
                <div>
                  <h3 style={{ margin: "0 0 4px", fontSize: "17px" }}>{c.name}</h3>
                  <span style={{ fontSize: "12px", padding: "2px 8px", background: theme.colors.bgAlt, borderRadius: theme.radius.sm }}>{c.type}</span>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "14px", fontWeight: 600 }}>{c.rating}</div>
                  {c.threat > 0 && (
                    <div style={{ fontSize: "12px", color: theme.colors.muted, marginTop: "4px" }}>
                      Đe dọa: <ThreatDots level={c.threat} />
                    </div>
                  )}
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px", fontSize: "13px" }}>
                <div>
                  <strong style={{ color: "#2E7D32" }}>Điểm mạnh</strong>
                  <p style={{ margin: "6px 0 0", color: theme.colors.muted, lineHeight: 1.55 }}>{c.strengths}</p>
                </div>
                <div>
                  <strong style={{ color: "#C62828" }}>Điểm yếu</strong>
                  <p style={{ margin: "6px 0 0", color: theme.colors.muted, lineHeight: 1.55 }}>{c.weaknesses}</p>
                </div>
              </div>
              {c.sourceIds && <div style={{ marginTop: "10px" }}><SourceRefs ids={c.sourceIds} /></div>}
            </div>
          ))}
        </section>

        {/* SWOT */}
        <section id="swot" style={sectionStyle}>
          <h2 style={{ fontFamily: theme.fonts.display, fontSize: "28px", marginBottom: "8px" }}>Phân tích SWOT — LK Nail Salon</h2>
          <SectionTermHint terms={sectionHints.swot} />
          <SwotPanel data={swotData} />
        </section>

        {/* Review insights */}
        <section id="review-insights" style={sectionStyle}>
          <h2 style={{ fontFamily: theme.fonts.display, fontSize: "28px", marginBottom: "8px" }}>Phân tích Review — Google & Yelp</h2>
          <SectionTermHint terms={sectionHints["review-insights"]} />
          <ReviewInsightsPanel data={reviewInsightsData} />
        </section>

        {/* Consumer */}
        <section id="consumer" style={sectionStyle}>
          <h2 style={{ fontFamily: theme.fonts.display, fontSize: "28px", marginBottom: "8px" }}>Khách hàng mục tiêu</h2>
          <p style={{ color: theme.colors.muted, marginBottom: "20px" }}>Phân khúc quanh Woodside Ave & East County.</p>
          <SectionTermHint terms={sectionHints.consumer} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px", marginBottom: "32px" }}>
            {segments.map((seg) => (
              <div key={seg.name} style={cardStyle}>
                <span style={{ fontSize: "10px", fontWeight: 700, color: "#fff", background: seg.tagColor, padding: "3px 8px", borderRadius: theme.radius.sm }}>{seg.tag}</span>
                <h3 style={{ margin: "10px 0 4px", fontSize: "16px" }}>{seg.name}</h3>
                <div style={{ fontSize: "22px", fontWeight: 700, color: theme.colors.accentDeep }}>{seg.pct}</div>
                <div style={{ fontSize: "12px", color: theme.colors.muted, marginBottom: "12px" }}>{seg.sizeMarket}</div>
                <p style={{ fontSize: "13px", lineHeight: 1.55, color: theme.colors.muted, margin: "0 0 8px" }}><strong>Hồ sơ:</strong> {seg.profile}</p>
                <p style={{ fontSize: "12px", color: theme.colors.muted, margin: "4px 0" }}><strong>Kênh:</strong> {seg.channel}</p>
                <p style={{ fontSize: "12px", color: theme.colors.muted, margin: "4px 0" }}><strong>Rào cản:</strong> {seg.barrier}</p>
              </div>
            ))}
          </div>
          <h3 style={{ fontSize: "18px", marginBottom: "12px" }}>Nguồn thông tin khi chọn salon</h3>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
              <thead>
                <tr style={{ background: theme.colors.bgAlt }}>
                  <th style={{ padding: "10px", textAlign: "left", borderBottom: `1px solid ${theme.colors.line}` }}>#</th>
                  <th style={{ padding: "10px", textAlign: "left", borderBottom: `1px solid ${theme.colors.line}` }}>Nguồn</th>
                  <th style={{ padding: "10px", textAlign: "left", borderBottom: `1px solid ${theme.colors.line}` }}>Quan trọng</th>
                  <th style={{ padding: "10px", textAlign: "left", borderBottom: `1px solid ${theme.colors.line}` }}>Chi tiết</th>
                </tr>
              </thead>
              <tbody>
                {infoSources.map((row) => (
                  <tr key={row.rank}>
                    <td style={{ padding: "10px", borderBottom: `1px solid ${theme.colors.lineSoft}`, fontFamily: theme.fonts.mono }}>{row.rank}</td>
                    <td style={{ padding: "10px", borderBottom: `1px solid ${theme.colors.lineSoft}`, fontWeight: 600 }}>{row.name}</td>
                    <td style={{ padding: "10px", borderBottom: `1px solid ${theme.colors.lineSoft}` }}><ThreatDots level={row.importance} /></td>
                    <td style={{ padding: "10px", borderBottom: `1px solid ${theme.colors.lineSoft}`, color: theme.colors.muted }}>{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Journey */}
        <section id="journey" style={sectionStyle}>
          <h2 style={{ fontFamily: theme.fonts.display, fontSize: "28px", marginBottom: "8px" }}>Hành trình mua</h2>
          <p style={{ color: theme.colors.muted, marginBottom: "20px" }}>Từ kích hoạt nhu cầu đến tái mua tại LK Nail Salon.</p>
          <SectionTermHint terms={sectionHints.journey} />
          {journeyStages.map((stage) => (
            <div key={stage.num} style={{ ...cardStyle, borderLeft: `4px solid ${stage.color}`, background: stage.bgColor }}>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "flex-start" }}>
                <div style={{ fontSize: "32px" }}>{stage.icon}</div>
                <div style={{ flex: 1, minWidth: "200px" }}>
                  <div style={{ fontSize: "11px", fontWeight: 700, color: stage.color, letterSpacing: "0.08em" }}>
                    GIAI ĐOẠN {stage.num} · {stage.duration}
                  </div>
                  <h3 style={{ margin: "4px 0 2px", fontSize: "18px" }}>{stage.title}</h3>
                  <div style={{ fontSize: "13px", color: theme.colors.muted, marginBottom: "12px" }}>{stage.subtitle}</div>
                  {stage.triggers.map((t) => (
                    <div key={t.label} style={{ fontSize: "13px", marginBottom: "4px" }}>
                      <strong>{t.label}</strong>
                      {t.pct ? <span style={{ color: theme.colors.muted }}> ({t.pct})</span> : null}
                      <span style={{ color: theme.colors.muted }}> — {t.desc}</span>
                    </div>
                  ))}
                  <div
                    style={{
                      marginTop: "14px",
                      padding: "12px",
                      background: theme.colors.white,
                      borderRadius: theme.radius.sm,
                      fontSize: "13px",
                      lineHeight: 1.6,
                      border: `1px solid ${theme.colors.lineSoft}`,
                    }}
                  >
                    <strong style={{ color: theme.colors.accent }}>LK:</strong> {stage.clientBehavior}
                    <SourceRefs ids={stage.sourceIds} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Strategy */}
        <section id="strategy" style={sectionStyle}>
          <h2 style={{ fontFamily: theme.fonts.display, fontSize: "28px", marginBottom: "8px" }}>Đề xuất chiến lược</h2>
          <p style={{ color: theme.colors.muted, marginBottom: "20px" }}>Ưu tiên hành động dựa trên PESTEL, Porter và hành vi khách Santee.</p>
          <SectionTermHint terms={sectionHints.strategy} />
          {strategyData.map((s) => (
            <div key={s.priority} style={cardStyle}>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <span
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: theme.colors.accent,
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {s.priority}
                </span>
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: "0 0 8px", fontSize: "17px" }}>{s.title}</h3>
                  <p style={{ margin: "0 0 12px", fontSize: "14px", color: theme.colors.muted, lineHeight: 1.6 }}>{s.rationale}</p>
                  <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "14px", lineHeight: 1.65 }}>
                    {s.actions.map((a, i) => (
                      <li key={i} style={{ marginBottom: "4px" }}>{a}</li>
                    ))}
                  </ul>
                  <div style={{ marginTop: "10px" }}><SourceRefs ids={s.sourceIds} /></div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Glossary */}
        <section id="glossary" style={sectionStyle}>
          <h2 style={{ fontFamily: theme.fonts.display, fontSize: "28px", marginBottom: "20px" }}>Bảng thuật ngữ</h2>
          <TermGlossary terms={masterGlossary} />
        </section>
      </main>

      <footer
        style={{
          borderTop: `1px solid ${theme.colors.lineSoft}`,
          padding: "24px",
          textAlign: "center",
          fontSize: "12px",
          color: theme.colors.muted,
          background: theme.colors.white,
        }}
      >
        Báo cáo được tạo 07/06/2026 · LK Nail Salon · 10769 Woodside Ave Suite 107, Santee, CA 92071
        <br />
        <a href={theme.siteUrl} style={{ color: theme.colors.accentDeep }}>lknailsalonsantee.com</a>
      </footer>
    </div>
  );
}
