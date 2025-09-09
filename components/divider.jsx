'use client';

import { useEffect, useState } from "react";

const rainbowColors = [
  'rgb(255, 0, 0)',      // Red
  'rgb(255, 64, 0)',     // Red-Orange
  'rgb(255, 127, 0)',    // Orange
  'rgb(255, 191, 0)',    // Orange-Yellow
  'rgb(255, 255, 0)',    // Yellow
  'rgb(191, 255, 0)',    // Yellow-Green
  'rgb(127, 255, 0)',    // Lime
  'rgb(0, 255, 0)',      // Green
  'rgb(0, 255, 127)',    // Spring Green
  'rgb(0, 255, 255)',    // Cyan
  'rgb(0, 191, 255)',    // Deep Sky Blue
  'rgb(0, 127, 255)',    // Dodger Blue
  'rgb(0, 0, 255)',      // Blue
  'rgb(75, 0, 130)',     // Indigo
  'rgb(111, 0, 255)',    // Violet-Blue
  'rgb(148, 0, 211)',    // Violet
  'rgb(199, 21, 133)',   // Medium Violet Red
  'rgb(255, 0, 127)'     // Pink
];

function getDividerLine(length = 80) {
  return "_".repeat(length);
}

export function AsciiDivider() {
  const [divider, setDivider] = useState(getDividerLine(80));

  useEffect(() => {
    const updateDivider = () => {
      // Estimate character count based on window width and font size
      const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
      const chars = Math.floor(window.innerWidth / (fontSize * 0.6)); // 0.6 is a good width for monospace
      setDivider(getDividerLine(chars));
    };
    updateDivider();
    window.addEventListener("resize", updateDivider);
    return () => window.removeEventListener("resize", updateDivider);
  }, []);

  return (
    <pre className="font-mono text-sm md:text-lg leading-none py-5 w-full overflow-x-hidden m-0">
      <div>
        {divider.split('').map((char, charIndex) => (
          <span
            key={charIndex}
            style={{ color: rainbowColors[charIndex % rainbowColors.length] }}
          >
            {char}
          </span>
        ))}
      </div>
    </pre>
  );
};