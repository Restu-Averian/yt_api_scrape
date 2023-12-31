"use client";
import { useMemo } from "react";

export default function Page() {
  const originUrl = window ? window.location.origin : null;
  return <a href={`${originUrl}/api`}>Api Link</a>;
}
