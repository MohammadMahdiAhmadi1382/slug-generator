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

function transliterate(text: string) {
  return text
    .normalize("NFKC")
    .replace(ARABIC_DIACRITICS, "")
    .split("")
    .map((char) => PERSIAN_MAP[char] ?? char)
    .join("");
}

function generateSlug(
  title: string,
  transliteratePersian: boolean,
) {
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
    .replace(/^-|-$/g, "");
}

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
  dir = "ltr",
  generateOnTitleChange = false,
  transliteratePersian = true,
}: SlugGeneratorProps) {
  const createSlug = () => {
    onChange(generateSlug(title, transliteratePersian));
  };

  return (
    <div className={clsx("w-full space-y-1.5", className)}>
      {label && (
        <div className="flex items-center justify-between gap-3">
          <label className="flex items-center gap-2 text-sm font-medium text-(--color-text-primary)">
            {icon}
            {label}
          </label>

          <button
            type="button"
            onClick={createSlug}
            disabled={disabled || !title.trim()}
            className={clsx(
              "inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium",
              "text-white transition-all duration-200",
              "bg-[var(--color-primary)]",
              "hover:bg-[var(--color-primary-soft)]",
              "focus:outline-none focus:ring-4 focus:ring-[color-mix(in_oklab,var(--color-primary)_15%,transparent)]",
              "disabled:cursor-not-allowed disabled:opacity-50",
            )}
          >
            <WandSparkles className="size-4" />
            {buttonText}
          </button>
        </div>
      )}

      <div className="relative group">
        <div className="pointer-events-none absolute -inset-[1px] rounded-lg opacity-0 transition group-focus-within:opacity-100" />

        <input
          dir={dir}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              createSlug();
            }
          }}
          className={clsx(
            "relative w-full rounded-lg border border-(--color-border) bg-(--color-bg-main)",
            "px-4 py-3 pe-32 text-sm text-(--color-text-primary)",
            "outline-none transition-all placeholder:text-(--color-text-secondary)/70",
            "hover:border-[color-mix(in_oklab,var(--color-primary)_22%,var(--color-border))]",
            "focus:border-[color-mix(in_oklab,var(--color-primary)_45%,var(--color-border))]",
            "focus:ring-4 focus:ring-[color-mix(in_oklab,var(--color-primary)_12%,transparent)]",
            "dark:bg-white/[0.03]",
            "disabled:cursor-not-allowed disabled:opacity-50",
          )}
        />

        {!label && (
          <button
            type="button"
            onClick={createSlug}
            disabled={disabled || !title.trim()}
            className={clsx(
              "absolute inset-y-1.5 end-1.5 inline-flex items-center gap-1.5",
              "rounded-md px-3 text-xs font-medium text-white",
              "bg-[var(--color-primary)] transition-all duration-200",
              "hover:bg-[var(--color-primary-soft)]",
              "disabled:cursor-not-allowed disabled:opacity-50",
            )}
          >
            <WandSparkles className="size-4" />
            {buttonText}
          </button>
        )}

        {label && (
          <button
            type="button"
            onClick={createSlug}
            disabled={disabled || !title.trim()}
            className={clsx(
              "absolute inset-y-1.5 end-1.5 inline-flex items-center gap-1.5",
              "rounded-md px-3 text-xs font-medium text-white",
              "bg-[var(--color-primary)] transition-all duration-200",
              "hover:bg-[var(--color-primary-soft)]",
              "disabled:cursor-not-allowed disabled:opacity-50",
            )}
          >
            <WandSparkles className="size-4" />
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
}
