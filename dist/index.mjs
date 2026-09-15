// src/SlugGenerator.tsx
import { WandSparkles } from "lucide-react";
import clsx from "clsx";
import { jsx, jsxs } from "react/jsx-runtime";
var PERSIAN_MAP = {
  \u0627: "a",
  \u0622: "a",
  \u0628: "b",
  \u067E: "p",
  \u062A: "t",
  \u062B: "s",
  \u062C: "j",
  \u0686: "ch",
  \u062D: "h",
  \u062E: "kh",
  \u062F: "d",
  \u0630: "z",
  \u0631: "r",
  \u0632: "z",
  \u0698: "zh",
  \u0633: "s",
  \u0634: "sh",
  \u0635: "s",
  \u0636: "z",
  \u0637: "t",
  \u0638: "z",
  \u0639: "a",
  \u063A: "gh",
  \u0641: "f",
  \u0642: "gh",
  \u06A9: "k",
  \u06AF: "g",
  \u0644: "l",
  \u0645: "m",
  \u0646: "n",
  \u0648: "v",
  \u0647: "h",
  \u06CC: "y",
  \u0626: "y",
  \u0621: "a",
  \u06C0: "h",
  \u0629: "h",
  \u064A: "y",
  \u0643: "k"
};
var ARABIC_DIACRITICS = /[\u064B-\u065F\u0670]/g;
function transliterate(text) {
  return text.normalize("NFKC").replace(ARABIC_DIACRITICS, "").split("").map((char) => PERSIAN_MAP[char] ?? char).join("");
}
function createSlug(title, transliteratePersian = true) {
  let source = title.normalize("NFKC").replace(ARABIC_DIACRITICS, "");
  if (transliteratePersian) {
    source = transliterate(source);
  }
  return source.toLowerCase().trim().replace(/['’`"]/g, "").replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").replace(/^-+|-+$/g, "");
}
function SlugGenerator({
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
  transliteratePersian = true
}) {
  const handleGenerate = () => {
    if (!title.trim() || disabled) return;
    onChange(createSlug(title, transliteratePersian));
  };
  return /* @__PURE__ */ jsxs("div", { className: clsx("w-full space-y-1.5", className), children: [
    label && /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-2 text-sm font-medium text-(--color-text-primary)", children: [
      icon,
      /* @__PURE__ */ jsx("span", { children: label })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          dir,
          value,
          onChange: (event) => onChange(event.target.value),
          placeholder,
          disabled,
          onKeyDown: (event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              handleGenerate();
            }
          },
          className: clsx(
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
            "disabled:cursor-not-allowed disabled:opacity-50"
          )
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          onClick: handleGenerate,
          disabled: disabled || !title.trim(),
          className: clsx(
            "absolute inset-y-1.5 start-1.5",
            "inline-flex items-center justify-center gap-1.5",
            "rounded-md px-3",
            "text-xs font-medium text-white",
            "bg-(--color-primary)",
            "transition-all duration-200",
            "hover:bg-(--color-primary-soft)",
            "focus:outline-none",
            "focus:ring-2 focus:ring-(--color-primary)/30",
            "disabled:cursor-not-allowed disabled:opacity-50"
          ),
          children: [
            /* @__PURE__ */ jsx(WandSparkles, { className: "size-4" }),
            /* @__PURE__ */ jsx("span", { children: buttonText })
          ]
        }
      )
    ] })
  ] });
}
export {
  SlugGenerator
};
//# sourceMappingURL=index.mjs.map