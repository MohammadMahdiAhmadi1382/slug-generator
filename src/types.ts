import type { ReactNode } from "react";

export type SlugGeneratorProps = {
  title: string;
  value: string;
  onChange: (slug: string) => void;
  label?: string;
  placeholder?: string;
  buttonText?: string;
  disabled?: boolean;
  className?: string;
  icon?: ReactNode;
  dir?: "ltr" | "rtl" | "auto";
  generateOnTitleChange?: boolean;
  transliteratePersian?: boolean;
};
