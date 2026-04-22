

"use client";

import React, { useState } from "react";

const icons: Record<string, string> = {
  wordpress: "/wordpress.svg.png",
  dropBox: "/dropbox.png",
  sharepoint: "/sharepoint.png",
  googleDrive: "/google-drive.png",
  youtube: "/youtube.png",
};

type Node = {
  key: string;
  label: string;
  angle: number;
  radius: number;
  opacity: number;
};

const nodes: Node[] = [
  { key: "dropBox", label: "Dropbox", angle: 180, radius: 150, opacity: 1 },
  { key: "sharepoint", label: "SharePoint", angle: 0, radius: 150, opacity: 1 },
  { key: "googleDrive", label: "Google Drive", angle: 180, radius: 230, opacity: 0.3 },
  { key: "youtube", label: "YouTube", angle: 0, radius: 230, opacity: 0.3 },
];

function polarToXY(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: Math.cos(rad) * radius, y: Math.sin(rad) * radius };
}

function scaled(value: number, factor: number) {
  return value * factor;
}

interface HubSpokeProps {
  scaleFactor?: number;
}

const HubSpoke: React.FC<HubSpokeProps> = ({ scaleFactor = 1 }) => {
  const [hovered, setHovered] = useState<string | null>(null);

  const BASE = 400;
  const size = BASE * scaleFactor;
  const cx = 200;
  const cy = 200;
  const innerR = 86;

  const hubSize = scaled(170, scaleFactor);
  const nodeSize = scaled(56, scaleFactor);
  const iconSize = scaled(32, scaleFactor);
  const hubIconSz = scaled(58, scaleFactor);

  return (
    <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
        <circle cx={cx} cy={cy} r={150} fill="white" fillOpacity={0.5} />

        <line x1={cx} y1={cy - 67} x2={cx} y2={cy - 150} stroke="#c8cce0" strokeWidth="1" />
        <line x1={cx} y1={cy + 67} x2={cx} y2={cy + 150} stroke="#c8cce0" strokeWidth="1" />

        {nodes.map((node) => {
          const start = polarToXY(node.angle, innerR);
          const end = polarToXY(node.angle, node.radius);
          return (
            <line
              key={node.key}
              x1={cx + start.x}
              y1={cy + start.y}
              x2={cx + end.x}
              y2={cy + end.y}
              stroke={hovered === node.key ? "#6c8ef5" : "#c8cce0"}
              strokeWidth="0.5"
              style={{ transition: "stroke 0.3s" }}
            />
          );
        })}
      </svg>

      {/* Center hub */}
      <div
        className="absolute flex items-center justify-center rounded-full bg-white"
        style={{
          width: hubSize,
          height: hubSize,
          left: size / 2 - hubSize / 2,
          top: size / 2 - hubSize / 2,
          zIndex: 10,
        }}
      >
        <img
          src={icons.wordpress}
          alt="WordPress"
          style={{ width: hubIconSz, height: hubIconSz }}
          className="object-contain hover:scale-110 transition-transform duration-200"
        />
      </div>

      {/* Nodes */}
      {nodes.map((node) => {
        const { x, y } = polarToXY(node.angle, node.radius);
        const isHovered = hovered === node.key;

        return (
          <div
            key={node.key}
            onMouseEnter={() => setHovered(node.key)}
            onMouseLeave={() => setHovered(null)}
            className="absolute flex items-center justify-center rounded-full bg-white cursor-pointer"
            style={{
              width: nodeSize,
              height: nodeSize,
              left: size / 2 + x * scaleFactor - nodeSize / 2,
              top: size / 2 + y * scaleFactor - nodeSize / 2,
              opacity: node.opacity,
              border: `1px solid ${isHovered ? "#6c8ef5" : "#dde0ee"}`,
              boxShadow: isHovered
                ? "0 4px 16px rgba(108,142,245,0.18)"
                : "0 2px 8px rgba(0,0,0,0.06)",
              transform: isHovered ? "scale(1.12)" : "scale(1)",
              transition: "all 0.25s ease",
              zIndex: 10,
            }}
          >
            <img
              src={icons[node.key]}
              alt={node.label}
              style={{ width: iconSize, height: iconSize }}
              className="object-contain"
            />
          </div>
        );
      })}
    </div>
  );
};

function useHubScale() {
  const [scale, setScale] = React.useState(1);

  React.useEffect(() => {
    function update() {
      const w = window.innerWidth;
      if (w < 360) setScale(0.55);
      else if (w < 480) setScale(0.65);
      else if (w < 640) setScale(0.75);
      else if (w < 768) setScale(0.85);
      else if (w < 1024) setScale(0.9);
      else setScale(1);
    }

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return scale;
}

const ConnectAi: React.FC = () => {
  const scale = useHubScale();

  return (
    <section
      className="bg-[#eef0f7] flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-24 xl:gap-48 py-12 lg:py-16 px-6 sm:px-10 lg:px-16"
      style={{
        borderLeft: "1px solid #cbcbcb",
        borderRight: "1px solid #cbcbcb",
      }}
    >
      {/* Text */}
      <div className="w-full max-w-lg text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#1a1a1a]">
          Connect AI to your{" "}
          <span className="text-gray-400 whitespace-nowrap">
            business knowledge today
          </span>
        </h1>

        <p className="mt-4 text-gray-500 leading-relaxed text-sm sm:text-base">
          Build, test, and deploy custom GPT AI agents that answer with accuracy.
          Drive revenue, save time, delight customers.
        </p>

        <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
          <button
            className="h-[47px] rounded-xl px-6 sm:px-8 py-3.5 text-sm sm:text-base font-semibold text-white"
            style={{
              background:
                "radial-gradient(114.65% 114.65% at 9.73% 17.27%, #1E82E0 0%, #1C38EA 100%)",
            }}
          >
            Try free for 7 days
          </button>

          <button className="h-[47px] rounded-xl px-6 sm:px-8 py-3.5 bg-white border border-[#CBCBCB80] text-sm sm:text-base text-gray-700 hover:bg-gray-50 transition">
            Talk to sales
          </button>
        </div>
      </div>

      {/* Hub */}
      <div className="flex justify-center items-center">
        <HubSpoke scaleFactor={scale} />
      </div>
    </section>
  );
};

export default ConnectAi;