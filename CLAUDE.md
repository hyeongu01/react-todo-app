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

- **`TodoContext.tsx`** — `todoList`, `filteredList`, `filter`, `addTodo`, `toggleTodo`, `deleteTodo`, `deleteDoneTodos`, `updateFilter`. `todoList`는 `localStorage`에 자동 저장/복원. `filteredList`는 `useMemo`로 파생. Consumed via `useTodoList()`.
- **`ThemeContext.tsx`** — `theme` (`'light' | 'dark'`), `toggleTheme`. Dark mode는 `document.documentElement`에 `dark` 클래스를 토글. Consumed via `useTheme()`.

Both providers are mounted in `main.tsx` wrapping `<App>`, with `ThemeContextProvider` as the outermost wrapper.

`App.tsx`는 layout 담당. `todoList.length !== 0`일 때만 `Footer`를 렌더링.

## Styling

각 컴포넌트는 CSS Module을 co-locate (`TodoItem.module.css` 등). 디자인 토큰(색상, 타이포그래피)은 `src/App.css`의 `:root`와 `.dark` 블록에 CSS 커스텀 프로퍼티로 정의. `src/index.css`는 Vite 템플릿 잔재로 실제 컴포넌트에서 사용되지 않음.

## Conventions

- Prettier: single quotes, 2-space indent, semicolons, `trailingComma: "es5"`.
- Core type: `TodoType { id: number; title: string; isDone: boolean }` in `src/types/Todo.types.ts`.

## TODO

- [x] Filter 동작 구현 — `TodoContext`에 `filter` 상태 추가, `Filter.tsx`와 `TodoList.tsx` 연결
- [x] Todo 삭제 — `TodoContext`에 `deleteTodo` 추가, `TodoItem.tsx`에 삭제 버튼
- [ ] Todo 수정 — `TodoItem.tsx` 인라인 편집
- [ ] 포인터 방식 분기 UX — 마우스는 hover로 액션 버튼 표시 (기존), 터치는 왼쪽 스와이프로 수정/삭제 노출
  - `src/hooks/useInputMethod.ts` 생성 — `matchMedia('pointer: coarse')` 초기값 + `mousemove`/`touchstart` 이벤트로 실시간 감지, `'mouse' | 'touch'` 반환
  - `TodoList.module.css` — `.todo-list li`에 `overflow: hidden` 추가 (슬라이드 클리핑용)
  - `TodoItem.module.css` — 터치용 클래스 추가: `.card_wrap` (flex:1), `.card_slide` (width: calc(100% + 88px), flex row), `.actions_touch` (flex-shrink:0, width:88px)
  - `TodoItem.tsx` — `useInputMethod()` 사용, touch면 `card_wrap > card_slide(translateX) > [card + actions_touch]` 구조로 렌더, `touchStart/Move/End`로 slideX 상태 관리 (절반 이상 밀면 스냅, 아니면 복귀)
- [x] localStorage 연동 — `useEffect`로 `todoList` 저장/불러오기
- [x] 다크모드 CSS 검증 — 각 CSS Module에 `.dark` 대응 스타일 확인
- [x] 빈 목록 상태 UI — `TodoList.tsx`에 todo 없을 때 안내 문구
