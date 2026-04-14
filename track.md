create `scripts\clean.sh` `package.json`

`pnpm create vite@latest`: `ui-desktop` `ui-mobile`

create `pnpm-workspace.yaml` `.gitignore`

`pnpm i`

`pnpm i -wD @tauri-apps/cli@latest`

`pnpm tauri init`

modify `ui-desktop\vite.config.ts` `ui-mobile\vite.config.ts`

create `tauri.mobile.conf.json`

`pnpm tauri android init`

`pnpm tauri dev`

`pnpm tauri android dev -c src-tauri/tauri.mobile.conf.json`
