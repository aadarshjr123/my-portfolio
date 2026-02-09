import type { CardItem } from "../types/timeline";

export const PROJECTS: CardItem[] = [
  {
    id: "monitoring-2025",
    title: "Distributed API Health & Monitoring System",
    subtitle: "Personal Project",
    meta: "2025 – Present",
    badge: "In Progress",
    details: [
      "Built a backend system to monitor API uptime, latency, and failures",
      "Implemented Redis-based workers with retries and dead-letter queues",
      "Added caching, rate limiting, and basic observability (metrics/logs/tracing)",
    ],
  },
  {
    id: "blackwire-2025",
    title: "BlackWire — Remote Touchpad & Keyboard for Ubuntu",
    subtitle: "Personal Project",
    meta: "2025",
    badge: "Completed",
    links: [
      { label: "GitHub", url: "https://github.com/aadarshjr123/blackwire" },
    ],
    details: [
      "Built a Python-based LAN service enabling remote keyboard and touchpad control",
      "Implemented secure one-time QR pairing and IP whitelisting",
      "Integrated systemd user services and .deb packaging for native installation",
    ],
  },
  {
    id: "chat-backend-2024",
    title: "Real-Time Chat Backend",
    subtitle: "Personal Project",
    meta: "2024 – 2025",
    badge: "Completed",
    details: [
      "Built a real-time chat backend using WebSockets and Redis Pub/Sub",
      "Implemented JWT-based authentication with refresh tokens",
      "Designed the system to support multiple backend instances",
    ],
  },
];
