import React from "react";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 320 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <g transform="translate(10, 15)">
        <circle cx="35" cy="35" r="32" stroke="#D4AF37" strokeWidth="1.5" />
        <circle cx="35" cy="35" r="28" stroke="#D4AF37" strokeWidth="0.5" opacity="0.3" />
        <path 
          d="M35 15 V55 M15 35 H55 M22 22 L48 48 M48 22 L22 48" 
          stroke="#D4AF37" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
        />
        <circle cx="35" cy="35" r="6" fill="#D4AF37" />
        <circle cx="35" cy="35" r="4" fill="#080808" />
        <circle cx="35" cy="35" r="2" fill="#D4AF37" />
      </g>

      <g transform="translate(90, 52)">
        <text x="0" y="0" fill="#D4AF37" fontSize="42" fontWeight="500" fontFamily="serif" letterSpacing="2">
          JADE
        </text>
        <text x="125" y="0" fill="#ffffff" fontSize="42" fontWeight="300" fontFamily="serif" letterSpacing="2">
          RESTAURANT
        </text>
        <text x="3" y="24" fill="#D4AF37" fontSize="10" fontWeight="600" fontFamily="sans-serif" letterSpacing="6" opacity="0.8">
          EST. 2008
        </text>
      </g>

      <line x1="82" y1="15" x2="82" y2="85" stroke="#D4AF37" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}
