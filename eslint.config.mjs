import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    files: ["src/**/*.{ts,tsx}"],
    ignores: ["src/content/**"],
    rules: {
      // Banlys em-dash (U+2014) i all kode og innhold; se CLAUDE.md.
      // Bruk komma, kolon, semikolon eller bindestrek istedenfor.
      "no-restricted-syntax": [
        "error",
        {
          selector: "Literal[value=/—/]",
          message: "Em-dash er forbudt: bruk komma, kolon, semikolon eller bindestrek.",
        },
        {
          selector: "TemplateElement[value.raw=/—/]",
          message: "Em-dash er forbudt: bruk komma, kolon, semikolon eller bindestrek.",
        },
        {
          selector: "JSXText[value=/—/]",
          message: "Em-dash er forbudt: bruk komma, kolon, semikolon eller bindestrek.",
        },
      ],
    },
  },
]);

export default eslintConfig;
