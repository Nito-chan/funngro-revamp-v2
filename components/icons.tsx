"use client";

import type { LucideIcon } from "lucide-react";
import {
  AppWindow,
  AudioLines,
  CheckCheck,
  Clapperboard,
  ClipboardList,
  FileCheck,
  Film,
  Folder,
  GraduationCap,
  Handshake,
  LayoutTemplate,
  Lightbulb,
  ListChecks,
  MapPin,
  Megaphone,
  Mic,
  Microscope,
  Package,
  PenLine,
  PenTool,
  Quote,
  RefreshCw,
  Share2,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Table,
  TrendingUp,
  Users,
  Wallet,
  Zap,
} from "lucide-react";

/** Maps the plain-string icon names used in the data layer to Lucide icons. */
const registry: Record<string, LucideIcon> = {
  wallet: Wallet,
  sparkles: Sparkles,
  folder: Folder,
  trending: TrendingUp,
  clapperboard: Clapperboard,
  megaphone: Megaphone,
  users: Users,
  "list-checks": ListChecks,
  "share-2": Share2,
  film: Film,
  layout: LayoutTemplate,
  mic: Mic,
  smartphone: Smartphone,
  "graduation-cap": GraduationCap,
  "clipboard-list": ClipboardList,
  table: Table,
  "audio-lines": AudioLines,
  "pen-line": PenLine,
  "pen-tool": PenTool,
  "app-window": AppWindow,
  package: Package,
  lightbulb: Lightbulb,
  "shopping-cart": ShoppingCart,
  "refresh-cw": RefreshCw,
  handshake: Handshake,
  "check-check": CheckCheck,
  quote: Quote,
  "map-pin": MapPin,
  "file-check": FileCheck,
  shield: ShieldCheck,
  microscope: Microscope,
};

export function DataIcon({
  name,
  className = "size-5",
}: {
  name: string;
  className?: string;
}) {
  const Icon = registry[name] ?? Zap;
  return <Icon className={className} strokeWidth={1.9} aria-hidden="true" />;
}
