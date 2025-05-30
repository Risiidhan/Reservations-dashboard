import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const buildEslintCommand = filenames =>
  `next lint --fix --file ${filenames
    .map(f => path.relative(__dirname, f))
    .join(' --file ')}`;

const config = {
  '*.{js,jsx,ts,tsx,json,css,scss}': ['prettier --write'],
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
};

export default config;
