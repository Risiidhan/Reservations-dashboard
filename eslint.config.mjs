import { FlatCompat } from "@eslint/eslintrc";
import eslintPrettier from "eslint-plugin-prettier/recommended";
import { dirname } from "path";
import tseslint from "typescript-eslint";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  eslintPrettier,
  ...tseslint.configs.recommended,
  ...compat.config({
    plugins: ["unused-imports"],
    extends: ["next/core-web-vitals"],
    ignorePatterns: [
      "node_modules",
      ".next",
      "dist",
      "out",
      "public",
      "coverage",
      "*.config.js",
      "*.config.cjs",
      "*.config.mjs",
      "*.d.ts",
    ],
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "error",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  }),
];

export default eslintConfig;
