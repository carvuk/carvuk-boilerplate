# 🥘 Boiler plate 🍳

Este boiler plate tiene:

- ⚡ [Next.js](https://nextjs.org) for Static Site Generator
- 🔥 Type checking [TypeScript](https://www.typescriptlang.org)
- 💎 Integrate with [Tailwind CSS](https://tailwindcss.com)
- ✅ Strict Mode for TypeScript and React 18
- 📏 Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals, Tailwind CSS and Airbnb configuration)
- 💖 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🚓 Lint git commit with Commitlint
- 🦺 Unit Testing with Jest and React Testing Library
- 🧪 E2E Testing with Cypress
- 💡 Absolute Imports using `@` prefix
- 🗂 VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript, Jest
- 🤖 SEO metadata, JSON-LD and Open Graph tags with Next SEO
- ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- 🖱️ One click deployment with Vercel or Netlify (or manual deployment to any hosting services)
- 🌈 Include a FREE minimalist theme
- 💯 Maximize lighthouse score

Built-in feature from Next.js:

- ☕ Minify HTML & CSS
- 💨 Live reload
- ✅ Cache busting

### Philosophy

- Minimal code
- SEO-friendly
- 🚀 Production-ready

### Requirements

- Node.js +18 and yarn

### Getting started

Run the following command on your local environment:

```shell
git clone --depth=1 https://github.com/ixartz/Next-js-Boilerplate.git my-project-name
cd my-project-name
npm install
```

Then, you can run locally in development mode with live reload:

```shell
yarn run dev
```

Open http://localhost:3000 with your favorite browser to see your project.

```shell
.
├── README.md                       # README file
├── __mocks__                       # Mocks for testing
├── .github                         # GitHub folder
├── .husky                          # Husky configuration
├── .vscode                         # VSCode configuration
├── public                          # Public assets folder
├── src
│   ├── layouts                     # Layouts components
│   ├── pages                       # Next JS Pages
│   ├── pages.test                  # Next JS Pages tests (this avoid test to treated as a Next.js pages)
│   ├── styles                      # Styles folder
│   ├── templates                   # Default template
│   └── utils                       # Utility functions
├── tailwind.config.js              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration
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

### Deploy to Vercel

Deploy this Next JS Boilerplate on Vercel in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fixartz%2FNext-js-Boilerplate)

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

