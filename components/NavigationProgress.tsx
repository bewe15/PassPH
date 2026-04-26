"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function NavigationProgress() {
  const pathname = usePathname();
  const [key, setKey] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setKey((k) => k + 1);
    setVisible(true);
    const t = setTimeout(() => setVisible(false), 550);
    return () => clearTimeout(t);
  }, [pathname]);

  if (!visible) return null;
  return <div key={key} className="nav-progress" />;
}
