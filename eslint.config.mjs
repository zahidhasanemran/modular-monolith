import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import boundaries from "eslint-plugin-boundaries";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),

  {
    plugins: { boundaries },
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
        },
      },
      "boundaries/elements": [
        {
          type: "authentication",
          pattern: "src/modules/authentication/**/*",
          mode: "full",
        },
        {
          type: "modules",
          pattern: "src/modules/*/**/*",
          mode: "full",
          capture: ["moduleName"],
        },
        {
          type: "shared",
          pattern: "src/shared/**/*",
          mode: "full",
        },
      ],
    },
    rules: {
      "boundaries/dependencies": [
        "error",
        {
          default: "disallow",
          rules: [
            {
              from: { type: "authentication" },
              allow: { to: { type: ["shared", "authentication"] } },
            },
            {
              from: { type: "shared" },
              allow: { to: { type: ["shared"] } },
            },
            {
              from: { type: "modules" },
              allow: [
                { to: { type: ["shared", "authentication"] } },
                {
                  to: {
                    type: ["modules"],
                    captured: { moduleName: "{{from.captured.moduleName}}" },
                  },
                },
              ],
            },
            {
              allow: { dependency: { kind: "type" } },
            },
          ],
        },
      ],
    },
  },
]);

export default eslintConfig;
