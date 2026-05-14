import React from "react";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 320 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Icon Part */}
      <g transform="translate(10, 15)">
        <circle cx="35" cy="35" r="32" stroke="#0F6B5B" strokeWidth="1.5" />
        <circle cx="35" cy="35" r="28" stroke="#C8A96B" strokeWidth="0.5" opacity="0.3" />
        {/* Star/Celestial Icon - More Detailed */}
        <path 
          d="M35 15 V55 M15 35 H55 M22 22 L48 48 M48 22 L22 48" 
          stroke="#C8A96B" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
        />
        <circle cx="35" cy="35" r="6" fill="#0F6B5B" />
        <circle cx="35" cy="35" r="4" fill="#111111" />
        <circle cx="35" cy="35" r="2" fill="#C8A96B" />
      </g>

      {/* Text Part */}
      <g transform="translate(90, 20)">
        <text x="0" y="38" fill="#C8A96B" fontSize="58" fontWeight="500" fontFamily="serif" style={{ fontStyle: 'italic' }}>
          jade
        </text>
        <text x="2" y="65" fill="#F5F3EE" fontSize="12" fontWeight="900" fontFamily="sans-serif" letterSpacing="6">
          RESTAURANT
        </text>
      </g>

      {/* Divider */}
      <line x1="82" y1="15" x2="82" y2="85" stroke="#0F6B5B" strokeWidth="1" opacity="0.4" />

      {/* Multan (Bottom) - Optional but kept for heritage */}
      <text x="160" y="98" textAnchor="middle" fill="#0F6B5B" fontSize="10" fontWeight="900" fontFamily="sans-serif" letterSpacing="5">EST. 2009</text>
    </svg>
  );
}
