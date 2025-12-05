"use client";

import Clarity from "@microsoft/clarity";
import { useEffect } from "react";

export function ClarityScript() {
  useEffect(() => {
    const projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

    if (projectId) {
      Clarity.init(projectId);
    }
  }, []);

  return null;
}
