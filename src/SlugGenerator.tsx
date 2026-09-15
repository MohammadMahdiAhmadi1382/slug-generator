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
          {icon}
          <span>{label}</span>
        </label>
      )}

      <div className="relative">
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
            "w-full rounded-lg border border-(--color-border)",
            "bg-(--color-bg-main)",
            "py-3 pe-4 ps-32",
            "text-sm text-(--color-text-primary)",
            "outline-none transition-all",
            "placeholder:text-(--color-text-secondary)/70",
            "hover:border-[color-mix(in_oklab,var(--color-primary)_22%,var(--color-border))]",
            "focus:border-[color-mix(in_oklab,var(--color-primary)_45%,var(--color-border))]",
            "focus:ring-4 focus:ring-[color-mix(in_oklab,var(--color-primary)_12%,transparent)]",
            "dark:bg-white/[0.03]",
            "disabled:cursor-not-allowed disabled:opacity-50",
          )}
        />

        <button
          type="button"
          onClick={handleGenerate}
          disabled={disabled || !title.trim()}
          className={clsx(
            "absolute inset-y-1.5 start-1.5",
            "inline-flex items-center justify-center gap-1.5",
            "rounded-md px-3",
            "text-xs font-medium text-white",
            "bg-(--color-primary)",
            "transition-all duration-200",
            "hover:bg-(--color-primary-soft)",
            "focus:outline-none",
            "focus:ring-2 focus:ring-(--color-primary)/30",
            "disabled:cursor-not-allowed disabled:opacity-50",
          )}
        >
          <WandSparkles className="size-4" />
          <span>{buttonText}</span>
        </button>
      </div>
    </div>
  );
}