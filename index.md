# React + TypeScript 학습 로드맵

> 환경: Vite + React + TypeScript (.tsx)
> TypeScript 기본 문법은 알고 있는 상태

## 1단계: 기초
| 순서 | 주제 | 핵심 내용 |
|---|---|---|
| 1 | **JSX/TSX** | HTML처럼 생긴 문법, `{}`로 JS 값 삽입 |
| 2 | **컴포넌트** | 함수로 UI 조각 만들기 + 타입 적용 |
| 3 | **Props** | 부모 → 자식으로 데이터 전달 + interface로 타입 정의 |
| 4 | **State (useState)** | 변하는 데이터 관리 + 제네릭 타입 |
| 5 | **이벤트 처리** | onClick, onChange + 이벤트 타입 |
| 6 | **조건부 렌더링** | 조건에 따라 다른 UI 보여주기 |
| 7 | **리스트 렌더링** | 배열을 map으로 반복 출력 |

## 2단계: 중급
| 순서 | 주제 | 핵심 내용 |
|---|---|---|
| 8 | **useEffect** | API 호출, 사이드 이펙트 |
| 9 | **상태 끌어올리기** | 컴포넌트 간 데이터 공유 |
| 10 | **React Router** | 페이지 이동 |
| 11 | **폼 처리** | 입력값 관리 + 폼 타입 |

## 3단계: 심화
| 순서 | 주제 | 핵심 내용 |
|---|---|---|
| 12 | **useContext** | 전역 상태 + 제네릭 Context |
| 13 | **useRef** | DOM 직접 접근 + RefObject 타입 |
| 14 | **커스텀 Hook** | 로직 재사용 + 반환 타입 설계 |
| 15 | **API 연동** | fetch, axios + 응답 타입 정의 |

---

## 학습 체크리스트

- [x] 1. JSX/TSX
- [x] 2. 컴포넌트
- [x] 3. Props
- [x] 4. State (useState)
- [x] 5. 이벤트 처리
- [x] 6. 조건부 렌더링
- [x] 7. 리스트 렌더링
- [x] 8. useEffect
- [x] 9. 상태 끌어올리기
- [x] 10. React Router
- [x] 11. 폼 처리
- [x] 12. useContext
- [x] 13. useRef
- [x] 14. 커스텀 Hook
- [x] 15. API 연동

---

## 심화 TODO (선택 과제)

### 폼 심화 — 검증 로직 (11번 확장)
- [ ] 각 필드별 에러 state 관리: `errors: { name?: string; email?: string; age?: string }`
- [ ] 제출 전 다중 검증
  - 이름: 빈 값 금지
  - 이메일: `@` 포함 + 형식 검증 (정규식)
  - 나이: 음수/0 금지, 합리적 상한 (예: 120)
- [ ] 에러 메시지를 각 input 아래에 조건부 렌더링
- [ ] `onBlur` 시점 검증 (입력 끝났을 때 즉시 피드백)
- [ ] 실무 체감용: 다 만든 뒤 `react-hook-form` 으로 리팩토링해보며 라이브러리가 왜 필요한지 느껴보기

---

## 총정리

### 1단계: 기초

| 주제 | 배운 것 |
|---|---|
| **JSX/TSX** | `{}`로 JS 값 삽입, HTML과의 차이 |
| **컴포넌트** | 함수로 UI 조각 만들기 |
| **Props** | 부모→자식 데이터 전달, `interface`로 타입 정의 |
| **useState** | 변하는 데이터 관리, 제네릭 타입 `useState<T>()` |
| **이벤트 처리** | `onClick`, `onChange` + 이벤트 타입 |
| **조건부 렌더링** | 삼항 연산자, `&&`로 조건부 UI |
| **리스트 렌더링** | `map()` + `key` 필수 |

### 2단계: 중급

| 주제 | 배운 것 |
|---|---|
| **useEffect** | 마운트 시 실행, 의존성 배열 `[]`, StrictMode에서 2번 실행 |
| **상태 끌어올리기** | 공통 부모에서 state 관리 |
| **React Router** | `Route`, `Link`, `useParams`로 페이지 이동 |
| **폼 처리** | 입력값 state 관리, 제출 처리 |

### 3단계: 심화

| 주제 | 배운 것 |
|---|---|
| **useContext** | `createContext` → `Provider` → 커스텀 훅으로 전역 상태 관리. 다크테마 구현 (context → useEffect로 DOM 속성 변경 → CSS 변수 덮어쓰기) |
| **useRef** | DOM 접근 (`ref={inputRef}` → `.current.focus()`), 리렌더링 없이 값 저장 (setInterval ID 관리). useState와 차이: 값 변경 시 리렌더링 안 함 |
| **커스텀 Hook** | `use___` 함수로 로직 분리 재사용. UI는 컴포넌트에, 로직은 Hook에 (`useStopwatch`) |
| **API 연동** | `useEffect` + `fetch` → 응답 타입 `interface` 정의 → `useState`에 저장 → 렌더링 |

### 주요 패턴 정리

```
렌더링 ≠ 새로고침 (state 변경 → 컴포넌트 함수 재호출)
useState  → 값 변경 시 리렌더링 O
useRef    → 값 변경 시 리렌더링 X
useEffect → 사이드 이펙트 (API, DOM 조작)
커스텀 Hook → 로직 재사용
Context   → props drilling 없이 전역 공유
```
