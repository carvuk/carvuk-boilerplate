# ๐ฅ Boiler plate ๐ณ

Este boiler plate tiene:

- โก [Next.js](https://nextjs.org) for Static Site Generator
- ๐ฅ Type checking [TypeScript](https://www.typescriptlang.org)
- ๐ Integrate with [Tailwind CSS](https://tailwindcss.com)
- โ Strict Mode for TypeScript and React 18
- ๐ Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals, Tailwind CSS and Airbnb configuration)
- ๐ Code Formatter with [Prettier](https://prettier.io)
- ๐ฆ Husky for Git Hooks
- ๐ซ Lint-staged for running linters on Git staged files
- ๐ Lint git commit with Commitlint
- ๐งช E2E Testing with Cypress
- ๐ก Absolute Imports using `@` prefix
- ๐ VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript
- ๐ค SEO metadata, JSON-LD and Open Graph tags with Next SEO
- โ๏ธ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- ๐ฑ๏ธ One click deployment with Vercel or Netlify (or manual deployment to any hosting services)
- ๐ Include a FREE minimalist theme
- ๐ฏ Maximize lighthouse score

Built-in feature from Next.js:

- โ Minify HTML & CSS
- ๐จ Live reload
- โ Cache busting

### Philosophy

- Minimal code
- SEO-friendly
- ๐ Production-ready

### Requirements

- Node.js +18 and yarn

### Getting started

Use this:

![alt text](./public/assets/template.png "Title")

Then, you can run locally in development mode with live reload:

```shell
yarn install
yarn run dev
```

Open http://localhost:3000 with your favorite browser to see your project.

```shell
.
โโโ README.md                       # README file
โโโ __mocks__                       # Mocks for testing
โโโ .github                         # GitHub folder
โโโ .husky                          # Husky configuration
โโโ .vscode                         # VSCode configuration
โโโ public                          # Public assets folder
โโโ src
โ   โโโ layouts                     # Layouts components
โ   โโโ pages                       # Next JS Pages
โ   โโโ pages.test                  # Next JS Pages tests (this avoid test to treated as a Next.js pages)
โ   โโโ styles                      # Styles folder
โ   โโโ templates                   # Default template
โ   โโโ utils                       # Utility functions
โโโ tailwind.config.js              # Tailwind CSS configuration
โโโ tsconfig.json                   # TypeScript configuration
```

### Deploy to production

You can see the results locally in production mode with:

```shell
$ yarn run build
$ yarn run start
```

The generated HTML and CSS files are minified (built-in feature from Next js). It will also removed unused CSS from [Tailwind CSS](https://tailwindcss.com).

You can create an optimized production build with:

```shell
yarn run build-prod
```

Now, your blog is ready to be deployed. All generated files are located at `out` folder, which you can deploy with any hosting service.

### Testing

All tests are colocated with the source code inside the same directory. So, it makes it easier to find them. Unfortunately, it is not possible with the `pages` folder which is used by Next.js for routing. So, what is why we have a `pages.test` folder to write tests from files located in `pages` folder.

### .env

You will need the following environment variables:
```shell
NEXT_PUBLIC_SUPABASE_URL=https://doluyopawzjftlsmghuw.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRvbHV5b3Bhd3pqZnRsc21naHV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTkwMTc2MjMsImV4cCI6MTk3NDU5MzYyM30.LPw_rL68bfs3qTsa8eixsvVtCrVPkHzgD45pVxaOXwg
NEXT_PUBLIC_KEY_SEGMENT=HBREo9GH9jf2MUF30g8Xvr9Mn9kTlczy
```
### Reglas

**Commit messages**
```shell
type(scope?): subject  #scope is optional; multiple scopes are supported (current delimiter options: "/", "\" and ",")
```
Examples:
```shell
fix(server): send cors headers
```
```shell
feat(blog): add comment section
```

**Componentes**

We use https://tailwindui.com/ components, please contact nico@carvuk.com for credentials.

**CLEAN**

*Names*

- Use camelCase
- Choose descriptive and unambiguous names.
- Make meaningful distinction.
- Use pronounceable names.
- Use searchable names.
- Replace magic numbers with named constants.
- Avoid encodings. Don't append prefixes or type information.

*Functions*

- Small.
- Do one thing.
- Use descriptive names.
- Prefer fewer arguments.
- Have no side effects.
- Don't use flag arguments. Split method into several independent methods that can be called from the client without the flag.

*Comments*

- Always try to explain yourself in code.
- Don't be redundant.
- Don't add obvious noise.
- Don't use closing brace comments.
- Don't comment out code. Just remove.
- Use as explanation of intent.
- Use as clarification of code.
- Use as warning of consequences.

For more good practices:
https://gist.github.com/wojteklu/73c6914cc446146b8b533c0988cf8d29
