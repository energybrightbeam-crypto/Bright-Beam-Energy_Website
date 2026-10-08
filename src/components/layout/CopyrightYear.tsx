// src/components/layout/CopyrightYear.tsx
"use client";

import { useEffect, useState } from "react";

// Starts at a fixed year so server and client markup match,
// then updates to the real year in the browser.
export function CopyrightYear() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return <>{year}</>;
}

export default CopyrightYear;