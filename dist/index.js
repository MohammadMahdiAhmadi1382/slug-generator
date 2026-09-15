"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  SlugGenerator: () => SlugGenerator
});
module.exports = __toCommonJS(index_exports);

// src/SlugGenerator.tsx
var import_lucide_react = require("lucide-react");
var import_jsx_runtime = require("react/jsx-runtime");
function SlugGenerator({
  title,
  value,
  onChange,
  label = "Slug",
  placeholder = "your-slug",
  buttonText = "Generate",
  disabled = false,
  className = "",
  icon
}) {
  const generateSlug = () => {
    const slug = title.toLowerCase().trim().replace(/[^\p{L}\p{N}\s-]/gu, "").replace(/\s+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
    onChange(slug);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "mb-2 flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { className: "text-sm font-medium", children: [
        icon,
        label
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "button",
        {
          type: "button",
          onClick: generateSlug,
          disabled: disabled || !title.trim(),
          className: "inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium transition disabled:cursor-not-allowed disabled:opacity-50",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.WandSparkles, { className: "size-4" }),
            buttonText
          ]
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "input",
      {
        dir: "ltr",
        value,
        onChange: (event) => onChange(event.target.value),
        placeholder,
        disabled,
        className: "w-full rounded-lg border px-3 py-3 text-sm outline-none"
      }
    )
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SlugGenerator
});
//# sourceMappingURL=index.js.map