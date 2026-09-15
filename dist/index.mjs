// src/SlugGenerator.tsx
import { WandSparkles } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs("div", { className, children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-2 flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxs("label", { className: "text-sm font-medium", children: [
        icon,
        label
      ] }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          onClick: generateSlug,
          disabled: disabled || !title.trim(),
          className: "inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium transition disabled:cursor-not-allowed disabled:opacity-50",
          children: [
            /* @__PURE__ */ jsx(WandSparkles, { className: "size-4" }),
            buttonText
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
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
export {
  SlugGenerator
};
//# sourceMappingURL=index.mjs.map