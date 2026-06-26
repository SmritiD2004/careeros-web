import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PageContainer({
  title,
  subtitle,
  action,
  children,
  className,
}: {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <main className={cn("flex-1 px-4 py-5 lg:px-6", className)}>
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-amber-300/70">
            CareerOS
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-4xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-2 max-w-3xl text-sm text-zinc-400 md:text-base">
              {subtitle}
            </p>
          )}
        </div>
        {action}
      </div>
      {children}
    </main>
  );
}
