



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
  { key: "dropBox",     label: "Dropbox",     angle: 180, radius: 150, opacity: 1   },
  { key: "sharepoint",  label: "SharePoint",  angle: 0,   radius: 150, opacity: 1   },
  { key: "googleDrive", label: "Google Drive", angle: 180, radius: 230, opacity: 0.3 },
  { key: "youtube",     label: "YouTube",     angle: 0,   radius: 230, opacity: 0.3 },
];

function polarToXY(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: Math.cos(rad) * radius, y: Math.sin(rad) * radius };
}

const HubSpoke: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const cx = 200;
  const cy = 200;
  const innerR = 86;

  return (
    <div className="relative" style={{ width: 400, height: 400 }}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx={cx} cy={cy} r={150} fill="white" fillOpacity={0.5} />

        {/* vertical axis lines */}
        <line x1={cx} y1={cy - 67} x2={cx} y2={cy - 150} stroke="#c8cce0" strokeWidth="1" />
        <line x1={cx} y1={cy + 67} x2={cx} y2={cy + 150} stroke="#c8cce0" strokeWidth="1" />

        {/* spoke lines from inner circle edge to node */}
        {nodes.map((node) => {
          const start = polarToXY(node.angle, innerR);
          const end   = polarToXY(node.angle, node.radius);
          return (
            <line
              key={node.key}
              x1={cx + start.x} y1={cy + start.y}
              x2={cx + end.x}   y2={cy + end.y}
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
        style={{ width: 170, height: 170, left: cx - 85, top: cy - 85, zIndex: 10 }}
      >
        <img
          src={icons.wordpress}
          alt="WordPress"
          className="w-[58px] h-[58px] object-contain bg-white  hover:scale-110 transition-transform duration-200"
        />
      </div>

      {/* Outer nodes */}
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
              width: 56,
              height: 56,
              left: cx + x - 28,
              top:  cy + y - 28,
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
              className="w-8 h-8 object-contain"
            />
          </div>
        );
      })}
    </div>
  );
};

const ConnectAi: React.FC = () => {
  return (
<section
  className="bg-[#eef0f7] flex flex-wrap justify-center items-center gap-48 py-16 px-8"
  style={{ borderLeft: "1px solid #cbcbcb", borderRight: "1px solid #cbcbcb" }}
>     <div className="max-w-lg">
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
          Connect AI to your{" "}
          <span className="text-gray-400 whitespace-nowrap">
            business knowledge today
          </span>
        </h1>
        <p className="mt-4 text-gray-500 leading-relaxed">
          Build, test, and deploy custom GPT AI agents that answer with accuracy.
          Drive revenue, save time, delight customers.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
  className="w-[196px] h-[47px] rounded-xl px-8 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90"
  style={{
    background:
      "radial-gradient(114.65% 114.65% at 9.73% 17.27%, #1E82E0 0%, #1C38EA 100%), linear-gradient(167.06deg, rgba(57, 143, 243, 0.2) 0%, rgba(255, 255, 255, 0) 100%)",
    boxShadow:
      "4px 4px 4px 0px #131AE41A inset, -3px -3px 4px 0px #BFE5FB66 inset",
  }}
>
  Try free for 7 days
</button>
          <button className="w-[155px] h-[47px] rounded-xl px-8 py-3.5 bg-white border border-[#CBCBCB80] text-gray-700 hover:bg-gray-50 transition">
  Talk to sales
</button>
        </div>
      </div>

      <HubSpoke />
    </section>
  );
};

export default ConnectAi;


