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
};

declare function SlugGenerator({ title, value, onChange, label, placeholder, buttonText, disabled, className, icon, }: SlugGeneratorProps): react.JSX.Element;

export { SlugGenerator, type SlugGeneratorProps };
