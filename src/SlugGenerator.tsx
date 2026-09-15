"use client";

import { WandSparkles } from "lucide-react";
import type { SlugGeneratorProps } from "./types";

export default function SlugGenerator({
  title,
  value,
  onChange,
  label = "Slug",
  placeholder = "your-slug",
  buttonText = "Generate",
  disabled = false,
  className = "",
  icon,
}: SlugGeneratorProps) {
  const generateSlug = () => {
    const slug = title
      .toLowerCase()
      .trim()
      .replace(/[^\p{L}\p{N}\s-]/gu, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");

    onChange(slug);
  };

  return (
    <div className={className}>
      <div className="mb-2 flex items-center justify-between gap-3">
        <label className="text-sm font-medium">
          {icon}
          {label}
        </label>

        <button
          type="button"
          onClick={generateSlug}
          disabled={disabled || !title.trim()}
          className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium transition disabled:cursor-not-allowed disabled:opacity-50"
        >
          <WandSparkles className="size-4" />
          {buttonText}
        </button>
      </div>

      <input
        dir="ltr"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className="w-full rounded-lg border px-3 py-3 text-sm outline-none"
      />
    </div>
  );
}