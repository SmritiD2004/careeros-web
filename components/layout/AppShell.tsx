import { ReactNode } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";

export function AppShell({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex min-h-screen w-full max-w-[1800px]">
        <Sidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
}
