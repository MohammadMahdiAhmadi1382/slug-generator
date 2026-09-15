"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  SlugGenerator: () => SlugGenerator
});
module.exports = __toCommonJS(index_exports);

// src/SlugGenerator.tsx
var import_lucide_react = require("lucide-react");
var import_clsx = __toESM(require("clsx"));
var import_jsx_runtime = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: (0, import_clsx.default)("w-full space-y-1.5", className), children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { className: "flex items-center gap-2 text-sm font-medium text-(--color-text-primary)", children: [
      icon,
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "group relative", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
          className: (0, import_clsx.default)(
            "h-12 w-full rounded-xl border border-(--color-border)",
            "bg-(--color-bg-main)",
            "py-3 pe-4 ps-36",
            "text-sm text-(--color-text-primary)",
            "outline-none transition-all duration-300",
            "placeholder:text-(--color-text-secondary)/70",
            "hover:border-[color-mix(in_oklab,var(--color-primary)_28%,var(--color-border))]",
            "focus:border-[color-mix(in_oklab,var(--color-primary)_50%,var(--color-border))]",
            "focus:ring-4 focus:ring-[color-mix(in_oklab,var(--color-primary)_10%,transparent)]",
            "dark:bg-white/[0.03]",
            "disabled:cursor-not-allowed disabled:opacity-50"
          )
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "button",
        {
          type: "button",
          onClick: handleGenerate,
          disabled: disabled || !title.trim(),
          "aria-label": buttonText,
          className: (0, import_clsx.default)(
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
            "disabled:pointer-events-none disabled:opacity-40"
          ),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "span",
              {
                className: (0, import_clsx.default)(
                  "absolute inset-0 -translate-x-full",
                  "bg-gradient-to-r from-transparent via-white/20 to-transparent",
                  "transition-transform duration-700",
                  "group-hover:translate-x-full"
                )
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_lucide_react.WandSparkles,
              {
                className: (0, import_clsx.default)(
                  "relative size-4 shrink-0",
                  "transition-transform duration-300",
                  "group-hover:rotate-12 group-hover:scale-110"
                )
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative whitespace-nowrap", children: buttonText })
          ]
        }
      )
    ] })
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SlugGenerator
});
//# sourceMappingURL=index.js.map