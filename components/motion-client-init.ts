"use client";

import { useEffect } from "react";
import { MotionGlobalConfig } from "framer-motion";

export function MotionClientInit() {
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      MotionGlobalConfig.skipAnimations = true;
    }
  }, []);

  return null;
}
