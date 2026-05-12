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
      <g transform="translate(10, 20)">
        <circle cx="30" cy="30" r="28" stroke="#D4AF37" strokeWidth="1.5" />
        <circle cx="30" cy="30" r="22" stroke="#D4AF37" strokeWidth="0.5" opacity="0.5" />
        {/* Star/Celestial Icon */}
        <path 
          d="M30 15 V45 M15 30 H45 M20 20 L40 40 M40 20 L20 40" 
          stroke="#D4AF37" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
        />
        <circle cx="30" cy="30" r="4" fill="#D4AF37" />
        
        {/* Badge Background for 'JADE' */}
        <rect x="0" y="65" width="60" height="15" fill="#D4AF37" rx="2" />
        <text x="30" y="76" textAnchor="middle" fill="#0D0D0D" fontSize="10" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">JADE</text>
      </g>

      {/* Text Part */}
      <g transform="translate(85, 25)">
        <text x="0" y="35" fill="#D4AF37" fontSize="52" fontWeight="400" fontFamily="serif" style={{ fontStyle: 'italic' }}>
          jade
        </text>
        <text x="2" y="62" fill="white" fontSize="14" fontWeight="800" fontFamily="sans-serif" letterSpacing="4">
          RESTAURANT
        </text>
      </g>

      {/* Divider */}
      <line x1="75" y1="20" x2="75" y2="85" stroke="#D4AF37" strokeWidth="2" opacity="0.6" />

      {/* Multan (Bottom) - Optional but kept for heritage */}
      <text x="160" y="98" textAnchor="middle" fill="#D4AF37" fontSize="10" fontWeight="900" fontFamily="sans-serif" letterSpacing="5">EST. 2009</text>
    </svg>
  );
}
