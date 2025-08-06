## 폴더 구조

src
├─ apis
│ ├─ api
│ │ ├─ bookmark.ts
│ │ └─ results.ts
│ └─ sevices
│ │ ├─ useBookmark.ts
│ │ └─ useGetResults.ts
├─ assets
│ ├─ icons
│ └─ images
├─ components
│ ├─ ErrorModal.tsx
│ ├─ ResultList.tsx
│ ├─ SearchBar.tsx
│ └─ SkeletonList.tsx
├─ hooks
│ ├─ useBottomIntersection.ts
│ └─ useIntersection.ts
├─ pages
│ ├─ Home.tsx
│ └─ Result.tsx
├─ shared
│ └─ Router.tsx
├─ styles
│ ├─ App.css
│ ├─ Common.css
│ ├─ ErrorModal.css
│ ├─ Home.css
│ ├─ Result.css
│ └─ SearchBar.css
├─ types
│ └─ results.d.ts
├─ App.tsx
└─ main.tsx

## 폴더 구조

src
├─ apis
│ ├─ api
│ │ ├─ bookmark.ts
│ │ └─ results.ts
│ └─ sevices
│ │ ├─ useBookmark.ts
│ │ └─ useGetResults.ts
├─ assets
│ ├─ icons
│ └─ images
├─ components
│ ├─ ErrorModal.tsx
│ ├─ ResultList.tsx
│ ├─ SearchBar.tsx
│ └─ SkeletonList.tsx
├─ hooks
│ ├─ useBottomIntersection.ts
│ └─ useIntersection.ts
├─ pages
│ ├─ Home.tsx
│ └─ Result.tsx
├─ shared
│ └─ Router.tsx
├─ styles
│ ├─ App.css
│ ├─ Common.css
│ ├─ ErrorModal.css
│ ├─ Home.css
│ ├─ Result.css
│ └─ SearchBar.css
├─ types
│ └─ results.d.ts
├─ App.tsx
└─ main.tsx

## 특이사항

### 북마크: Optimistic Update 적용

- onSuccess 대신 onMutate 사용
- 서버 응답을 기다리지 않고 UI 먼저 업데이트
- 클릭 시 바로 UI 변경되어 사용자 친화적인 UI 제공

### 무한 스크롤 (Infinite Scroll)

- React Query useInfiniteQuery + Intersection Observer 조합
- 리스트 끝에 1px짜리 감시용 div를 두고,
- 해당 div가 화면에 보이면(fetchNextPage) 자동으로 다음 데이터를 불러옴.
