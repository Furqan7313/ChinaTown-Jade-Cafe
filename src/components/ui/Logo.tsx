import React from "react";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 400 160" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Chinatown Part (Left) */}
      <g transform="translate(10, 20)">
        {/* Circular Icon */}
        <circle cx="50" cy="50" r="45" stroke="#D4AF37" strokeWidth="2" />
        <circle cx="50" cy="50" r="38" stroke="#D4AF37" strokeWidth="1" />
        {/* Simplified Chinese-style pattern */}
        <path 
          d="M35 50 H65 M50 35 V65 M40 40 L60 60 M60 40 L40 60" 
          stroke="#D4AF37" 
          strokeWidth="3" 
          strokeLinecap="round" 
        />
        <rect x="42" y="42" width="16" height="16" stroke="#D4AF37" strokeWidth="2" />
        
        {/* Text */}
        <text x="50" y="115" textAnchor="middle" fill="#D4AF37" fontSize="18" fontWeight="900" fontFamily="sans-serif" letterSpacing="2">CHINATOWN</text>
        <line x1="0" y1="125" x2="100" y2="125" stroke="#D4AF37" strokeWidth="1" />
        <text x="50" y="140" textAnchor="middle" fill="#D4AF37" fontSize="10" fontWeight="700" fontFamily="sans-serif" letterSpacing="1">SZECHUAN CUISINE</text>
        <line x1="0" y1="145" x2="100" y2="145" stroke="#D4AF37" strokeWidth="1" />
      </g>

      {/* Divider */}
      <line x1="140" y1="30" x2="140" y2="130" stroke="#D4AF37" strokeWidth="1" opacity="0.5" />

      {/* Jade Café Part (Right) */}
      <g transform="translate(160, 40)">
        {/* Stylized 'jade' */}
        <text x="0" y="60" fill="#E67E22" fontSize="60" fontWeight="300" fontFamily="serif" style={{ fontStyle: 'italic' }}>
          j<tspan fontWeight="700">ade</tspan>
        </text>
        <text x="85" y="75" fill="#E67E22" fontSize="20" fontWeight="400" fontFamily="sans-serif">café</text>
        
        {/* Border Box for Jade */}
        <path 
          d="M-10 10 H130 V80 H-10 Q-20 80 -20 70 V20 Q-20 10 -10 10" 
          stroke="white" 
          strokeWidth="1" 
          strokeOpacity="0.3" 
          fill="none" 
        />
      </g>

      {/* Multan (Bottom) */}
      <text x="200" y="155" textAnchor="middle" fill="url(#goldGradient)" fontSize="24" fontWeight="800" fontFamily="sans-serif" letterSpacing="8">MULTAN</text>

      <defs>
        <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#F5F5F5" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
      </defs>
    </svg>
  );
}
