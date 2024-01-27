This app is the NextJs version of [svelte-tube](https://svelte-tube.vercel.app)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Guidelines for beginners
1. Use the colors declared in the global.css file.
2. Do NOT push to main. Push to your own working branch and make a pull request.
```
git checkout -b yourBranchName
<do your work here>
git commit -m "write a commit message"
git push origin yourBranchName
```
3. Whenever the main branch is updated, pull the changes and merge with your local branch.
```
git pull origin main
```
4. We are using the Consumet API by hosting our own instance at https://consumet-api-six-ochre.vercel.app/
5. Documentation is at https://docs.consumet.org/
