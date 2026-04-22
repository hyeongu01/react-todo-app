# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite)
npm run build     # Type-check + build for production
npm run lint      # ESLint
```

No test runner is configured.

## Architecture

React 19 + TypeScript + Vite SPA. No external state library — all state lives in two React Contexts defined in `src/contexts/`:

- **`TodoContext.tsx`** — `todoList`, `addTodo`, `toggleTodo`. Consumed via `useTodoList()`.
- **`ThemeContext.tsx`** — `theme` (`'light' | 'dark'`), `toggleTheme`. Consumed via `useTheme()`. Dark mode is applied by toggling the `dark` class on `document.documentElement`.

Both providers are mounted in `main.tsx` wrapping `<App>`, with `ThemeContextProvider` as the outermost wrapper.

`App.tsx` is purely layout — it composes `Header`, `AddTask`, `Filter`, `TodoList`, and `Footer` with no logic of its own.

## Styling

Each component has a co-located CSS Module (e.g., `TodoItem.module.css`). Global design tokens (colors, typography, spacing) are CSS custom properties defined in `src/index.css` under `:root`, with a `@media (prefers-color-scheme: dark)` override block. The manual theme toggle (`ThemeContext`) adds/removes the `dark` class; the CSS module files are expected to handle `.dark` selector variants where needed.

## Conventions

- Prettier: single quotes, 2-space indent, semicolons, `trailingComma: "es5"`.
- Core type: `TodoType { id: number; title: string; isDone: boolean }` in `src/types/Todo.types.ts`.
- `Filter.tsx` filter buttons are currently UI-only (no active filter state wired up).

## TODO

- [x] Filter 동작 구현 — `TodoContext`에 `filter` 상태 추가, `Filter.tsx`와 `TodoList.tsx` 연결
- [x] Todo 삭제 — `TodoContext`에 `deleteTodo` 추가, `TodoItem.tsx`에 삭제 버튼
- [ ] Todo 수정 — `TodoItem.tsx` 인라인 편집
- [ ] localStorage 연동 — `useEffect`로 `todoList` 저장/불러오기
- [ ] 다크모드 CSS 검증 — 각 CSS Module에 `.dark` 대응 스타일 확인
- [x] 빈 목록 상태 UI — `TodoList.tsx`에 todo 없을 때 안내 문구
