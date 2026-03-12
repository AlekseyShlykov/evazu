# Ekaterina Zueva — Portfolio

A minimal, single-page portfolio and commission landing page for illustrator, graphic designer, and 2D animator Ekaterina Zueva. Built with Next.js and Tailwind CSS.

## Tech stack

- **Next.js 14** (App Router)
- **Tailwind CSS**
- **TypeScript**
- **Static export only** — no Node.js server in production; the site runs as static files only.

## Static-only / no server

This project is built for **static export only**. It does not use any features that require a Node.js server in production:

- **Configured:** `output: 'export'` in `next.config.js` (generates static files into `out/`).
- **Images:** `images.unoptimized: true` — no image optimization API; use `<img>` or unoptimized `next/image` if needed.
- **No API routes** (`app/api/`), **no Server Actions** (`'use server'`), **no** `getServerSideProps` / `getInitialProps`.
- **No** `cookies()`, `headers()`, or dynamic `searchParams` in pages (would require server).
- **Page** uses `export const dynamic = 'force-static'` so the root page stays statically generated.

Deploy the `out/` folder to any static host (e.g. GitHub Pages); no server runtime is required.

## GitHub Pages — subpath (important)

The site is **static-export friendly**: `output: 'export'` is set, and no server-only features (API routes, server components that require a server, server actions, or image optimization) are used.

- **If the site is at the repo root** (e.g. `https://username.github.io/`):  
  In `next.config.js`, leave `repoSubpath` as an empty string: `const repoSubpath = '';`

- **If the site is under a repository subpath** (e.g. `https://username.github.io/evazu/`):  
  In `next.config.js`, set `repoSubpath` to your repo name: `const repoSubpath = 'evazu';`  
  This sets `basePath` and `assetPrefix` so assets and routes work correctly. Then run `npm run build` and deploy the `out/` folder.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build (static export)

```bash
npm run build
```

Output is generated in the `out/` directory. This folder contains the full static site.

## Deploying to GitHub Pages

### 1. Static export

The project uses static export only:

- `next.config.js`: `output: 'export'`, `images: { unoptimized: true }`
- No server-side features, API routes, or server actions
- Deployment is the contents of the `out/` folder

### 2. Repo subpath (basePath / assetPrefix)

- **Root domain** (`https://<user>.github.io/`): keep `repoSubpath = ''` in `next.config.js`.
- **Repo subpath** (`https://<user>.github.io/<repo-name>/`): set `repoSubpath = '<repo-name>'` in `next.config.js`, then build. All assets and links will use `/<repo-name>/` automatically.

### 3. Deploy steps

1. Set `repoSubpath` in `next.config.js` as above (empty for root, or your repo name for subpath).
2. Run `npm run build`.
3. Deploy the contents of `out/` to the `gh-pages` branch or the `docs/` folder (see GitHub Pages settings).

### 4. GitHub Actions (автодеплой)

В репозитории есть workflow **`.github/workflows/deploy.yml`**: при каждом пуше в `main` он собирает сайт и выкладывает его в ветку `gh-pages`. Чтобы сайт открывался:

1. В репозитории: **Settings → Pages → Build and deployment**
2. **Source:** выберите **Deploy from a branch** (не «GitHub Actions» — наш workflow пушит в ветку, а не в Pages через Actions).
3. **Branch:** обязательно **`gh-pages`** (не `main`!). Если выбрана `main`, будет показываться README, а не сайт. Папка: **`/ (root)`**.
4. Save. После первого успешного запуска workflow сайт будет доступен по адресу вида `https://<логин>.github.io/evazu/` (не путать с адресом репозитория github.com/...).

## Project structure

- `app/` — App Router: `layout.tsx`, `page.tsx`, `globals.css`
- `components/` — Reusable UI: Header, Hero, SectionTitle, ServiceCard, ProjectCard, ContactCard, PlaceholderImage, AnimationVideoCard
- `lib/data.ts` — Site content and portfolio data (replace placeholder images by updating components or adding image paths here when ready)

## Placeholder images

All artwork and project visuals use a white placeholder component (`PlaceholderImage`) so the layout and aspect ratios are clear. Replace with real images by swapping the placeholder for `<img>` or Next.js `Image` (with `unoptimized: true` for static export) and using the appropriate `src`.

## Where to put images (куда загружать картинки)

**Папка для картинок:** положите файлы в папку **`public/images/`** в корне проекта.

- Файлы из `public/` отдаются сайтом по корневому пути.
- Пример: файл `public/images/hero.jpg` будет доступен по адресу `/images/hero.jpg`.
- Можно создать подпапки, например: `public/images/portfolio/`, `public/images/about/`.

**Как подставить картинки в сайт:**

1. Положите изображения в `public/images/` (например `hero.jpg`, `portrait.jpg`).
2. В компонентах замените `PlaceholderImage` на обычный тег:
   ```jsx
   <img src="/images/hero.jpg" alt="Hero artwork" className="w-full aspect-[16/10] object-cover rounded-sm" />
   ```
3. Либо добавьте в `lib/data.ts` пути к картинкам для проектов и используйте их в `ProjectCard` и других компонентах.

При деплое на GitHub Pages с `repoSubpath` пути вида `/images/...` автоматически превратятся в `/<repo-name>/images/...` — ничего менять не нужно.

---

## Как запустить сайт на GitHub Pages

1. **Репозиторий на GitHub**  
   Создайте репозиторий (например `evazu`), залейте туда код.

2. **Подставьте правильный путь в конфиг**  
   В `next.config.js` задайте `repoSubpath`:
   - Сайт будет по адресу **`https://<ваш-логин>.github.io/evazu/`** → напишите:  
     `const repoSubpath = 'evazu';`
   - Сайт будет по адресу **`https://<ваш-логин>.github.io/`** (только для репозитория `<логин>.github.io`) → оставьте:  
     `const repoSubpath = '';`

3. **Включите GitHub Pages**  
   В репозитории: **Settings → Pages**.  
   В разделе **Build and deployment** выберите **Source: Deploy from a branch**.  
   В **Branch** выберите ветку **`gh-pages`**, папку **`/ (root)`**. Сохраните.

4. **Запустите деплой**  
   Сделайте пуш в ветку `main` (или вручную запустите workflow **Actions → Deploy to GitHub Pages → Run workflow**).  
   Workflow соберёт проект и зальёт результат в ветку `gh-pages`. Через 1–2 минуты сайт откроется по адресу, указанному в настройках Pages.

## Превью для видео с Google Drive (2D Animation)

Карточки «Hobby app» и «Learn with Mochi» берут превью с Google Drive. Иногда миниатюры блокируются при запросе с другого сайта. Сделано:

- Для запроса миниатюры Drive у картинки выставлен `referrerPolicy="no-referrer"` — часто этого достаточно.
- Можно использовать **локальное превью**: положите картинку в `public/images/` и в `lib/data.ts` у элемента с `type: 'driveVideo'` укажите поле `previewImage: 'имя-файла.webp'`. Тогда будет использоваться локальная картинка (например, `hobby-app-preview.webp` для Hobby app). Для «Learn with Mochi» можно добавить `previewImage: 'learn-with-mochi-preview.webp'` и файл в `public/images/`.

## Contact

- **Email:** evazu.art@gmail.com  
- **Telegram:** [Evazu_K](https://t.me/Evazu_K)
