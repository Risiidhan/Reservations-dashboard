This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

If you don't have `yarn` installed

```bash
corepack enable
```

First, install dependencies

```bash
yarn install
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Rules

- Component names always have PascalCase
- Variable names have camelCase
- Component file names and component name don’t need to include the word `component`
  - i.e. `AlertComponent` —> `Alert`
- Folder and file names are more readable by having names that are lowercase and with dashes
  - i.e. `/components`, `/assets`, `alert.tsx`, `my-component-name.tsx`
- Don’t create files (components, pages, styles) that are unused or empty unless it is required if you need to test something create and remove before comitting changes
  - i.e. `style.css` files or empty `page.tsx`

## Commit messages

- `feat` – a new feature is introduced with the changes
- `fix` – a bug fix has occurred
- `chore` – changes that do not relate to a fix or feature and don't modify src or test files (for example updating dependencies)
- `refactor` – refactored code that neither fixes a bug nor adds a feature
- `docs` – updates to documentation such as a the README or other markdown files
- `style` – changes that do not affect the meaning of the code, likely related to code formatting such as white-space, missing semi-colons, and so on.
- `test` – including new or correcting previous tests
- `perf` – performance improvements
- `ci` – continuous integration related
- `build` – changes that affect the build system or external dependencies
- `revert` – reverts a previous commit

## Folder structure:

- `/src`
  - `/app` (react pages and related components that are only used within that page)
    - `layout.tsx` (barebone layout like `html`, `body` elements and assigning fonts)
    - `not-found.tsx` (add not found page in case an invalid page was pushed)
    - `/auth` (for later)
    - `/dashboard` (no need to use route groups here to keep the path structure clear)
      - `layout.tsx` (dashboard layout including the sidebar etc…)
      - `/example-child-page`
        - `/_components` (components used by this page only and not reusable anywhere else)
        - `page.tsx`
        - `layout.tsx` (if needed)
  - `/assets`
    - `icons` (svg files coming from design and transformed to a React component)
  - `/constants`
    - `config.ts` (app configuration)
    - `index.ts` (general purpose constants)
    - `enums.ts` (add enums here)
  - `/lib` (external instances of installed libraries)
    - `axios.ts`
    - `api.ts` (api calls)
  - `/utils` (utility functions)
    - `index.ts` (general purpose or what doesn’t fit any other type like tailwind merge i.e. `cn` function)
    - `string.ts` (string formatting/manipulation utilities)
    - `date.ts` (date formatting/manipulation utilities)
    - etc…
  - `/types`
    - `index.ts` (general purpose types)
    - `auth.ts` (auth types if any)
    - etc…
  - `hooks` (react hooks) start with use<HookName>
