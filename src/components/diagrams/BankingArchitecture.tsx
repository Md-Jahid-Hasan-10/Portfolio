"use client";

import { motion, useReducedMotion } from "framer-motion";

type Box = {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  sub?: string;
  tone?: "accent" | "violet" | "neutral";
};

/**
 * Architecture diagram for the banking microservices platform.
 * Pure SVG + Framer Motion — no image asset required.
 */
export function BankingArchitecture() {
  const reduceMotion = useReducedMotion();

  const W = 880;
  const H = 520;

  const client: Box = { x: 20, y: 228, w: 118, h: 64, label: "Client / UI" };
  const gateway: Box = {
    x: 186,
    y: 228,
    w: 132,
    h: 64,
    label: "API Gateway",
    sub: "JWT",
    tone: "accent",
  };

  const services: Box[] = [
    { x: 372, y: 44, w: 122, h: 52, label: "User" },
    { x: 372, y: 112, w: 122, h: 52, label: "Account" },
    { x: 372, y: 180, w: 122, h: 52, label: "Transfer", tone: "accent" },
    { x: 372, y: 248, w: 122, h: 52, label: "OTP" },
    { x: 372, y: 316, w: 122, h: 52, label: "Notification" },
  ];

  const kafka: Box = {
    x: 372,
    y: 396,
    w: 122,
    h: 52,
    label: "Kafka",
    sub: "event bus",
    tone: "violet",
  };

  const saga: Box = {
    x: 552,
    y: 396,
    w: 128,
    h: 52,
    label: "Saga + Outbox",
    tone: "violet",
  };

  const infra: Box[] = [
    { x: 728, y: 44, w: 132, h: 46, label: "Redis" },
    { x: 728, y: 106, w: 132, h: 46, label: "PostgreSQL" },
  ];

  const obs: Box = {
    x: 552,
    y: 180,
    w: 308,
    h: 120,
    label: "Observability",
    sub: "OpenTelemetry → Prometheus / Loki / Grafana",
    tone: "neutral",
  };

  const stroke = "rgb(var(--border) / 0.35)";
  const accent = "rgb(var(--accent))";
  const violet = "rgb(var(--violet))";

  const arrow = (x1: number, y1: number, x2: number, y2: number, color = accent) => (
    <motion.path
      d={`M ${x1} ${y1} L ${x2} ${y2}`}
      stroke={color}
      strokeWidth={1.4}
      fill="none"
      strokeDasharray="5 5"
      markerEnd="url(#arrowhead)"
      initial={reduceMotion ? undefined : { strokeDashoffset: 40 }}
      animate={reduceMotion ? undefined : { strokeDashoffset: 0 }}
      transition={{ duration: 1.1, ease: "linear", repeat: Infinity }}
    />
  );

  const renderBox = (b: Box, i: number) => {
    const isAccent = b.tone === "accent";
    const isViolet = b.tone === "violet";
    const strokeColor = isAccent
      ? accent
      : isViolet
        ? violet
        : "rgb(var(--border) / 0.5)";
    const fill = isAccent
      ? "rgb(var(--accent) / 0.10)"
      : isViolet
        ? "rgb(var(--violet) / 0.10)"
        : "rgb(var(--surface))";

    return (
      <motion.g
        key={b.label}
        initial={reduceMotion ? undefined : { opacity: 0, y: 10 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: i * 0.07 }}
      >
        <rect
          x={b.x}
          y={b.y}
          width={b.w}
          height={b.h}
          rx={10}
          fill={fill}
          stroke={strokeColor}
          strokeWidth={isAccent || isViolet ? 1.4 : 1}
        />
        <text
          x={b.x + b.w / 2}
          y={b.sub ? b.y + b.h / 2 - 3 : b.y + b.h / 2 + 4}
          textAnchor="middle"
          className="fill-fg"
          style={{ fontSize: 12.5, fontWeight: 600 }}
        >
          {b.label}
        </text>
        {b.sub ? (
          <text
            x={b.x + b.w / 2}
            y={b.y + b.h / 2 + 13}
            textAnchor="middle"
            className="fill-muted"
            style={{ fontSize: 10 }}
          >
            {b.sub}
          </text>
        ) : null}
      </motion.g>
    );
  };

  return (
    <div className="w-full">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Architecture diagram: Client and UI call the JWT-validated API Gateway, which routes to User, Account, Transfer, OTP and Notification services. These publish to Kafka as an event bus, with Saga and Outbox coordinating transfers. Redis and PostgreSQL provide storage. OpenTelemetry feeds Prometheus, Loki and Grafana for observability."
      >
        <defs>
          <marker
            id="arrowhead"
            markerWidth="7"
            markerHeight="7"
            refX="6"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 7 3.5, 0 7" fill={accent} />
          </marker>
          <linearGradient id="obsFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgb(var(--accent) / 0.08)" />
            <stop offset="100%" stopColor="rgb(var(--violet) / 0.08)" />
          </linearGradient>
        </defs>

        {/* Connections */}
        {arrow(client.x + client.w, client.y + client.h / 2, gateway.x - 4, gateway.y + gateway.h / 2)}
        {arrow(
          gateway.x + gateway.w,
          gateway.y + gateway.h / 2,
          services[0].x - 4,
          services[0].y + services[0].h / 2,
        )}

        {/* Gateway to each service */}
        {services.map((s, i) => {
          const startY = gateway.y + gateway.h / 2;
          const midX = 342;
          return (
            <motion.path
              key={`g-${s.label}`}
              d={`M ${midX} ${startY} L ${midX} ${s.y + s.h / 2} L ${s.x - 4} ${s.y + s.h / 2}`}
              stroke={stroke}
              strokeWidth={1.1}
              fill="none"
              strokeDasharray="5 5"
              markerEnd="url(#arrowhead)"
              initial={reduceMotion ? undefined : { strokeDashoffset: 40 }}
              animate={reduceMotion ? undefined : { strokeDashoffset: 0 }}
              transition={{
                duration: 1.1,
                ease: "linear",
                repeat: Infinity,
                delay: i * 0.12,
              }}
            />
          );
        })}

        {/* Services down to Kafka */}
        {arrow(services[0].x + services[0].w / 2, services[0].y + services[0].h, kafka.x + kafka.w / 2, kafka.y - 4, violet)}

        {/* Kafka to Saga */}
        {arrow(kafka.x + kafka.w, kafka.y + kafka.h / 2, saga.x - 4, saga.y + saga.h / 2, violet)}

        {/* Services to infra */}
        {arrow(services[3].x + services[3].w, services[3].y + services[3].h / 2, infra[0].x - 4, infra[0].y + infra[0].h / 2, stroke)}
        {arrow(services[1].x + services[1].w, services[1].y + services[1].h / 2, infra[1].x - 4, infra[1].y + infra[1].h / 2, stroke)}

        {/* Observability box */}
        <motion.rect
          x={obs.x}
          y={obs.y}
          width={obs.w}
          height={obs.h}
          rx={12}
          fill="url(#obsFill)"
          stroke="rgb(var(--border) / 0.45)"
          strokeWidth={1}
          strokeDasharray="4 4"
          initial={reduceMotion ? undefined : { opacity: 0 }}
          whileInView={reduceMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
        <text
          x={obs.x + obs.w / 2}
          y={obs.y + 34}
          textAnchor="middle"
          className="fill-fg"
          style={{ fontSize: 12.5, fontWeight: 600 }}
        >
          Observability
        </text>
        <text
          x={obs.x + obs.w / 2}
          y={obs.y + 54}
          textAnchor="middle"
          className="fill-muted"
          style={{ fontSize: 10.5 }}
        >
          OpenTelemetry → Prometheus / Loki / Grafana
        </text>

        {/* Observability label row */}
        {["Tracing", "Metrics", "Logs"].map((l, i) => (
          <g key={l}>
            <rect
              x={obs.x + 22 + i * 92}
              y={obs.y + 70}
              width={78}
              height={26}
              rx={7}
              fill="rgb(var(--surface))"
              stroke="rgb(var(--border) / 0.4)"
              strokeWidth={1}
            />
            <text
              x={obs.x + 61 + i * 92}
              y={obs.y + 87}
              textAnchor="middle"
              className="fill-muted"
              style={{ fontSize: 10.5 }}
            >
              {l}
            </text>
          </g>
        ))}

        {/* Boxes */}
        {renderBox(client, 0)}
        {renderBox(gateway, 1)}
        {services.map((s, i) => renderBox(s, i + 2))}
        {renderBox(kafka, services.length + 2)}
        {renderBox(saga, services.length + 3)}
        {infra.map((b, i) => renderBox(b, services.length + 4 + i))}
      </svg>
    </div>
  );
}
