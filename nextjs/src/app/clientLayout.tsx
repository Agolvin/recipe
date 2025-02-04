"use client";

import { GlobalProvider } from "@/context/globlaContext";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return <GlobalProvider>{children}</GlobalProvider>;
}