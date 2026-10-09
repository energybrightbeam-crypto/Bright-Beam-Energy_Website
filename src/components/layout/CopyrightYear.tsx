// src/components/layout/CopyrightYear.tsx
"use client";

import { useEffect, useState } from "react";

// Starts at a fixed year so server and client markup match,
// then updates to the real year in the browser.
export function CopyrightYear() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    const timer = window.setTimeout(() => setYear(new Date().getFullYear()), 0);
    return () => window.clearTimeout(timer);
  }, []);

  return <>{year}</>;
}

export default CopyrightYear;
