"use client";

import { motion } from "framer-motion";
import {
  Lock,
  Trophy,
  Flame,
  Zap,
  Rocket,
  Crown,
  Code2,
} from "lucide-react";
import { cn } from "@/lib/utils";

type BadgeIcon =
  | "streak"
  | "dsa"
  | "speed"
  | "opensource"
  | "top"
  | "hackathon";

interface AchievementBadgeProps {
  title: string;
  unlocked?: boolean;
  icon?: BadgeIcon;
}

const iconMap = {
  streak: Flame,
  dsa: Code2,
  speed: Zap,
  opensource: Rocket,
  top: Crown,
  hackathon: Trophy,
};

export default function AchievementBadge({
  title,
  unlocked = false,
  icon = "hackathon",
}: AchievementBadgeProps) {
  const Icon = iconMap[icon];

  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.03,
      }}
      transition={{ duration: 0.2 }}
      className={cn(
        "relative overflow-hidden rounded-3xl border p-4 transition-all duration-300",
        unlocked
          ? "border-orange-500/20 bg-orange-500/10 shadow-[0_0_30px_rgba(255,87,34,0.18)]"
          : "border-white/10 bg-white/5 opacity-75"
      )}
    >
      {unlocked && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,87,34,0.18),transparent_60%)]" />
      )}

      <div className="relative flex items-center gap-3">
        <div
          className={cn(
            "grid h-12 w-12 place-items-center rounded-2xl border",
            unlocked
              ? "border-orange-500/20 bg-orange-500/15 text-orange-300"
              : "border-white/10 bg-white/5 text-zinc-500"
          )}
        >
          {unlocked ? (
            <Icon className="h-5 w-5" />
          ) : (
            <Lock className="h-5 w-5" />
          )}
        </div>

        <div>
          <p
            className={cn(
              "font-semibold",
              unlocked ? "text-white" : "text-zinc-400"
            )}
          >
            {title}
          </p>

          <p
            className={cn(
              "text-xs mt-1",
              unlocked ? "text-orange-300" : "text-zinc-500"
            )}
          >
            {unlocked ? "Unlocked" : "Locked"}
          </p>
        </div>
      </div>
    </motion.div>
  );
}