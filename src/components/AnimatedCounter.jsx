import React, { useEffect, useState, useRef } from 'react';

export const AnimatedCounter = ({ value, duration = 1600, prefix = "", suffix = "" }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let start = 0;
    const end = parseFloat(value);
    const isFloat = value.toString().includes('.');
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = start + (end - start) * ease;

      setDisplayValue(isFloat ? current.toFixed(1) : Math.floor(current).toLocaleString());

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(isFloat ? end.toFixed(1) : end.toLocaleString());
      }
    };

    requestAnimationFrame(animate);
  }, [hasAnimated, value, duration]);

  return (
    <span ref={elementRef} className="tabular-nums font-bold">
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
};
