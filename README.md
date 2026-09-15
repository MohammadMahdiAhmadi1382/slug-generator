# @codav/slug-generator

A lightweight, reusable and TypeScript-first React component for generating clean, URL-friendly slugs directly from titles.

Built for modern React and Next.js applications with a simple API, zero unnecessary complexity, and easy integration.

## ✨ Features

- Generate slugs directly from titles
- Supports Persian, English, numbers and Unicode characters
- Automatically removes unnecessary characters
- Converts spaces into `-`
- Prevents duplicate hyphens
- Removes leading and trailing hyphens
- Fully controlled React component
- Written in TypeScript
- React 18 and React 19 compatible
- Next.js compatible
- Customizable labels and button text
- Supports custom classes
- Lightweight package architecture
- ESM and CommonJS builds
- Built-in TypeScript declarations

## 📦 Installation

```bash
npm install @codav/slug-generator
```

Or:

```bash
yarn add @codav/slug-generator
```

```bash
pnpm add @codav/slug-generator
```

## 🚀 Basic Usage

```tsx
"use client";

import { useState } from "react";
import { SlugGenerator } from "@codav/slug-generator";

export default function Example() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");

  return (
    <SlugGenerator
      title={title}
      value={slug}
      onChange={setSlug}
    />
  );
}
```

## 🧩 With a Title Input

```tsx
"use client";

import { useState } from "react";
import { SlugGenerator } from "@codav/slug-generator";

export default function BlogForm() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");

  return (
    <div>
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Article title"
      />

      <SlugGenerator
        title={title}
        value={slug}
        onChange={setSlug}
        label="Slug"
        buttonText="Generate Slug"
      />
    </div>
  );
}
```

## 🌍 Persian Support

The component is designed to work with Unicode text, making it suitable for Persian and other non-Latin languages.

For example:

```text
آموزش لاراول برای مبتدیان
```

can become:

```text
آموزش-لاراول-برای-مبتدیان
```

English titles are supported as well:

```text
Learn Laravel From Scratch
```

becomes:

```text
learn-laravel-from-scratch
```

## ⚙️ API

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | — | Source title used to generate the slug |
| `value` | `string` | — | Current slug value |
| `onChange` | `(slug: string) => void` | — | Called when the slug changes |
| `label` | `string` | `"Slug"` | Input label |
| `placeholder` | `string` | `"your-slug"` | Input placeholder |
| `buttonText` | `string` | `"Generate"` | Generate button text |
| `disabled` | `boolean` | `false` | Disables the component |
| `className` | `string` | `""` | Custom CSS class |
| `icon` | `ReactNode` | — | Optional label icon |

## 🏗️ Build From Source

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/slug-generator.git
cd slug-generator
```

Install dependencies:

```bash
npm install
```

Build the package:

```bash
npm run build
```

Development mode:

```bash
npm run dev
```

## 📁 Package Architecture

```text
slug-generator/
├── src/
│   ├── SlugGenerator.tsx
│   ├── index.ts
│   └── types.ts
├── package.json
├── tsconfig.json
├── tsup.config.ts
└── README.md
```

## 🎯 Design Philosophy

`@codav/slug-generator` is intentionally focused on one responsibility:

> Convert user-provided titles into clean, URL-friendly slugs through a reusable React component.

The package is designed to remain independent from any specific CMS, blog system, backend framework, database or application architecture.

This makes it suitable for:

- Blogs
- Products
- Categories
- Pages
- Courses
- Documentation
- News systems
- E-commerce platforms
- Admin dashboards
- Content management systems

## 🛠️ Tech Stack

- React
- TypeScript
- tsup
- ESM
- CommonJS

## 📄 License

MIT

## 👨‍💻 Author

Developed and maintained by **CODAV**.

---

If you find this package useful, consider giving the repository a ⭐ on GitHub.
