import { useEffect, useRef, useState } from "react";

export const Counter = ({
  to, suffix = "", prefix = "", duration = 1800, decimals = 0,
}: { to: number; suffix?: string; prefix?: string; duration?: number; decimals?: number }) => {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            const newVal = decimals > 0 
              ? parseFloat((to * eased).toFixed(decimals))
              : Math.round(to * eased);
            setVal(newVal);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration, decimals]);

  const displayVal = decimals > 0 ? val.toFixed(decimals) : val.toLocaleString();
  return <span ref={ref}>{prefix}{displayVal}{suffix}</span>;
};
