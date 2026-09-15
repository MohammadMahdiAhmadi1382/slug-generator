"use client";

import { WandSparkles } from "lucide-react";
import clsx from "clsx";
import type { SlugGeneratorProps } from "./types";

const PERSIAN_MAP: Record<string, string> = {
  ا: "a",
  آ: "a",
  ب: "b",
  پ: "p",
  ت: "t",
  ث: "s",
  ج: "j",
  چ: "ch",
  ح: "h",
  خ: "kh",
  د: "d",
  ذ: "z",
  ر: "r",
  ز: "z",
  ژ: "zh",
  س: "s",
  ش: "sh",
  ص: "s",
  ض: "z",
  ط: "t",
  ظ: "z",
  ع: "a",
  غ: "gh",
  ف: "f",
  ق: "gh",
  ک: "k",
  گ: "g",
  ل: "l",
  م: "m",
  ن: "n",
  و: "v",
  ه: "h",
  ی: "y",
  ئ: "y",
  ء: "a",
  ۀ: "h",
  ة: "h",
  ي: "y",
  ك: "k",
};

const ARABIC_DIACRITICS = /[\u064B-\u065F\u0670]/g;

function transliterate(text: string): string {
  return text
    .normalize("NFKC")
    .replace(ARABIC_DIACRITICS, "")
    .split("")
    .map((char) => PERSIAN_MAP[char] ?? char)
    .join("");
}

export function createSlug(
  title: string,
  transliteratePersian = true,
): string {
  let source = title
    .normalize("NFKC")
    .replace(ARABIC_DIACRITICS, "");

  if (transliteratePersian) {
    source = transliterate(source);
  }

  return source
    .toLowerCase()
    .trim()
    .replace(/['’`"]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function SlugGenerator({
  title,
  value,
  onChange,
  label = "Slug",
  placeholder = "your-slug",
  buttonText = "Generate",
  disabled = false,
  className,
  icon,
  dir = "ltr",
  transliteratePersian = true,
}: SlugGeneratorProps) {
  const handleGenerate = () => {
    if (!title.trim() || disabled) return;

    onChange(createSlug(title, transliteratePersian));
  };

  return (
    <div className={clsx("w-full space-y-1.5", className)}>
      {label && (
        <label className="flex items-center gap-2 text-sm font-medium text-(--color-text-primary)">          
          <span>{label}</span>
        </label>
      )}

      <div className="group relative">
        <input
          dir={dir}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              handleGenerate();
            }
          }}
          className={clsx(
            "h-10 w-full rounded-xl border border-(--color-border)",
            "bg-(--color-bg-main)",
            "py-3 pe-4 ps-36",
            "text-sm text-(--color-text-primary)",
            "outline-none transition-all duration-300",
            "placeholder:text-(--color-text-secondary)/70",
            "hover:border-[color-mix(in_oklab,var(--color-primary)_28%,var(--color-border))]",
            "focus:border-[color-mix(in_oklab,var(--color-primary)_50%,var(--color-border))]",
            "focus:ring-4 focus:ring-[color-mix(in_oklab,var(--color-primary)_10%,transparent)]",
            "dark:bg-white/[0.03]",
            "disabled:cursor-not-allowed disabled:opacity-50",
          )}
        />

        <button
          type="button"
          onClick={handleGenerate}
          disabled={disabled || !title.trim()}
          aria-label={buttonText}
          className={clsx(
            "absolute start-1.5 top-1/2 -translate-y-1/2",
            "flex h-9 items-center gap-2 rounded-lg px-3.5",
            "overflow-hidden",
            "text-xs font-semibold text-white",
            "bg-(--color-primary)",
            "shadow-sm shadow-(--color-primary)/20",
            "transition-all duration-300 ease-out",
            "hover:-translate-y-1/2 hover:scale-[1.02]",
            "hover:shadow-md hover:shadow-(--color-primary)/30",
            "active:-translate-y-1/2 active:scale-[0.97]",
            "focus:outline-none focus:ring-2 focus:ring-(--color-primary)/30",
            "disabled:pointer-events-none disabled:opacity-40",
          )}
        >
          <span
            className={clsx(
              "absolute inset-0 -translate-x-full",
              "bg-gradient-to-r from-transparent via-white/20 to-transparent",
              "transition-transform duration-700",
              "group-hover:translate-x-full",
            )}
          />

          <WandSparkles
            className={clsx(
              "relative size-4 shrink-0",
              "transition-transform duration-300",
              "group-hover:rotate-12 group-hover:scale-110",
            )}
          />

          <span className="relative whitespace-nowrap">
            {buttonText}
          </span>
        </button>
      </div>
    </div>
  );
}