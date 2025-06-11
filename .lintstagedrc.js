import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const buildEslintCommand = (files) =>
  `next lint --fix --file ${files
    .map((file) => path.relative(__dirname, file))
    .join(" --file ")}`;

const config = {
  "*.{js,jsx,ts,tsx,json,css,scss}": ["prettier --write"],
  "*.{js,jsx,ts,tsx}": [buildEslintCommand],
};

export default config;
