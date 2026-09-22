import React, { useState } from 'react';
import { networkNodes } from '../data/technologies';
import { Cpu, Sparkles, Layers, Zap } from 'lucide-react';

const TechnologyNetwork = () => {
  const [activeNode, setActiveNode] = useState(null);

  // SVG viewBox center
  const cx = 350;
  const cy = 250;

  return (
    <div className="relative w-full max-w-4xl mx-auto my-8 p-4 sm:p-8 rounded-3xl glass-panel border border-slate-800/80 overflow-hidden shadow-2xl">
      
      {/* Network Header */}
      <div className="text-center max-w-lg mx-auto mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono mb-2">
          <Zap className="w-3.5 h-3.5" />
          <span>Interactive Technology Graph</span>
        </div>
        <h3 className="text-2xl font-bold text-white light:text-slate-900">
          The QYVERON Neural Stack
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Hover over nodes to inspect our integrated full-stack and AI architecture.
        </p>
      </div>

      {/* SVG Interactive Canvas */}
      <div className="relative w-full aspect-[7/5] sm:aspect-[7/4.5] flex items-center justify-center">
        <svg
          viewBox="0 0 700 500"
          className="w-full h-full select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Center Gradient */}
            <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
            </radialGradient>
            
            {/* Line Gradient */}
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Center Glow Backdrop */}
          <circle cx={cx} cy={cy} r="120" fill="url(#centerGlow)" className="animate-pulse" />

          {/* Connecting Lines */}
          {networkNodes.map((node) => {
            const rad = (node.angle * Math.PI) / 180;
            const nx = cx + Math.cos(rad) * node.distance;
            const ny = cy + Math.sin(rad) * node.distance;
            const isHovered = activeNode?.id === node.id;

            return (
              <g key={`line-${node.id}`}>
                <line
                  x1={cx}
                  y1={cy}
                  x2={nx}
                  y2={ny}
                  stroke={isHovered ? node.color : 'rgba(59, 130, 246, 0.3)'}
                  strokeWidth={isHovered ? 2.5 : 1.2}
                  strokeDasharray={isHovered ? 'none' : '4 3'}
                  className="transition-all duration-300"
                />
                {/* Simulated Signal pulse on line */}
                <circle
                  cx={cx + (nx - cx) * 0.55}
                  cy={cy + (ny - cy) * 0.55}
                  r={isHovered ? 3.5 : 2}
                  fill={node.color}
                  className="animate-ping"
                  style={{ animationDuration: '3s' }}
                />
              </g>
            );
          })}

          {/* Central Hub: QYVERON TECHNOLOGIES */}
          <g className="cursor-pointer">
            <circle
              cx={cx}
              cy={cy}
              r="62"
              fill="#030712"
              stroke="#06b6d4"
              strokeWidth="2.5"
              className="filter drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]"
            />
            <circle
              cx={cx}
              cy={cy}
              r="68"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="1"
              strokeDasharray="5 3"
              className="animate-spin"
              style={{ animationDuration: '24s', transformOrigin: `${cx}px ${cy}px` }}
            />
            <text
              x={cx}
              y={cy - 8}
              textAnchor="middle"
              fill="#ffffff"
              fontSize="12"
              fontWeight="800"
              fontFamily="monospace"
              letterSpacing="1"
            >
              QYVERON
            </text>
            <text
              x={cx}
              y={cy + 8}
              textAnchor="middle"
              fill="#06b6d4"
              fontSize="9"
              fontWeight="700"
              fontFamily="monospace"
              letterSpacing="2"
            >
              TECHNOLOGIES
            </text>
            <text
              x={cx}
              y={cy + 22}
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="7.5"
              fontFamily="sans-serif"
            >
              CORE ENGINE
            </text>
          </g>

          {/* Peripheral Technology Nodes */}
          {networkNodes.map((node) => {
            const rad = (node.angle * Math.PI) / 180;
            const nx = cx + Math.cos(rad) * node.distance;
            const ny = cy + Math.sin(rad) * node.distance;
            const isHovered = activeNode?.id === node.id;

            return (
              <g
                key={`node-${node.id}`}
                className="cursor-pointer group"
                onMouseEnter={() => setActiveNode(node)}
                onMouseLeave={() => setActiveNode(null)}
                onClick={() => setActiveNode(node)}
              >
                {/* Node Outer Halo */}
                <circle
                  cx={nx}
                  cy={ny}
                  r={isHovered ? 34 : 26}
                  fill="#0b1120"
                  stroke={node.color}
                  strokeWidth={isHovered ? 2.5 : 1.5}
                  className="transition-all duration-300 filter drop-shadow-[0_0_8px_rgba(0,0,0,0.5)]"
                />

                {/* Node Inner Accent */}
                <circle
                  cx={nx}
                  cy={ny}
                  r={isHovered ? 28 : 22}
                  fill={node.color}
                  fillOpacity={isHovered ? 0.25 : 0.12}
                  className="transition-all duration-300"
                />

                {/* Node Text Label */}
                <text
                  x={nx}
                  y={ny + 3}
                  textAnchor="middle"
                  fill="#f8fafc"
                  fontSize={node.label.length > 8 ? '8' : '9.5'}
                  fontWeight="600"
                  fontFamily="sans-serif"
                  className="pointer-events-none"
                >
                  {node.label}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Active Node Detail Card Overlay */}
        {activeNode && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 p-3.5 rounded-2xl bg-slate-900/95 border border-brand-cyan/40 shadow-2xl backdrop-blur-md flex items-center gap-3 animate-fadeIn">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: activeNode.color }}
            ></span>
            <div className="text-left">
              <span className="text-xs font-mono font-bold text-white">
                {activeNode.label}
              </span>
              <span className="text-[11px] text-slate-400 ml-2">
                Domain: <strong className="text-slate-200">{activeNode.category}</strong>
              </span>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default TechnologyNetwork;

