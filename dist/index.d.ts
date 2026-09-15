import * as react from 'react';
import { ReactNode } from 'react';

type SlugGeneratorProps = {
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

declare function SlugGenerator({ title, value, onChange, label, placeholder, buttonText, disabled, className, icon, dir, transliteratePersian, }: SlugGeneratorProps): react.JSX.Element;

export { SlugGenerator, type SlugGeneratorProps };
