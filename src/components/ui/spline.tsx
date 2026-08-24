"use client";

import React, { useEffect, useState, useRef } from "react";

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptId = "spline-viewer-script";
    const existingScript = document.getElementById(scriptId);

    if (!existingScript) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "module";
      script.src =
        "https://unpkg.com/@splinetool/viewer@1.9.72/build/spline-viewer.js";
      script.onload = () => setLoaded(true);
      document.head.appendChild(script);
    } else {
      setLoaded(true);
    }
  }, []);

  // Remove "Built with Spline" watermark logo from Spline viewer shadow root
  useEffect(() => {
    if (!containerRef.current) return;
    const interval = setInterval(() => {
      const viewer = containerRef.current?.querySelector("spline-viewer");
      if (viewer && viewer.shadowRoot) {
        // Direct element style overrides
        const logo =
          viewer.shadowRoot.querySelector("#logo") ||
          viewer.shadowRoot.querySelector("a#logo") ||
          viewer.shadowRoot.querySelector("a[href*='spline']");
        if (logo) {
          (logo as HTMLElement).style.setProperty("display", "none", "important");
          (logo as HTMLElement).style.setProperty("opacity", "0", "important");
          (logo as HTMLElement).style.setProperty("visibility", "hidden", "important");
          (logo as HTMLElement).style.setProperty("pointer-events", "none", "important");
        }

        // Inject shadow DOM style tag to prevent logo rendering
        if (!viewer.shadowRoot.querySelector("#hide-spline-logo-style")) {
          const style = document.createElement("style");
          style.id = "hide-spline-logo-style";
          style.textContent = `
            #logo, a#logo, .logo, [href*="spline.design"], [href*="spline"], #watermark {
              display: none !important;
              opacity: 0 !important;
              visibility: hidden !important;
              pointer-events: none !important;
            }
          `;
          viewer.shadowRoot.appendChild(style);
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [loaded]);

  return (
    <div ref={containerRef} className={`w-full h-full relative ${className || ""}`}>
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#1c130d] z-10">
          <div className="w-10 h-10 border-4 border-[#964900] border-t-transparent rounded-full animate-spin mb-3" />
          <span className="font-['JetBrains_Mono'] text-xs font-semibold text-[#ffb786]">
            Loading 3D Robot Scene...
          </span>
        </div>
      )}
      {React.createElement("spline-viewer", {
        url: scene,
        "loading-anim-type": "spinner",
        style: { width: "100%", height: "100%" },
      })}
    </div>
  );
}
