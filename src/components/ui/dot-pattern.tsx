import React from "react";

export function DotPattern() {
  return (
    <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
      <div className="absolute inset-0 bg-repeat bg-dot-pattern opacity-50" />
    </div>
  );
} 