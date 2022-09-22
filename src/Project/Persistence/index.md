---
group:
  path: /Persistence
  title: Persistence
---

## Persistence

### react-umi

```tsx | pure
// app.tsx
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
const persistConfig = {
  key: 'root',
  storage,
  blacklist: [
    'loading',
    'login',
    'routing',
    'router',
    '@@dva',
    '_persist',
    'app.collapsed',
  ],
};

/**
 * 引入redux-persist持久化
 */
const persistEnhancer = () => createStore => (
  reducer,
  initialState,
  enhancer,
) => {
  const store = createStore(
    persistReducer(persistConfig, reducer),
    initialState,
    enhancer,
  );
  const persist = persistStore(store, null);
  return {
    ...store,
    persist,
  };
};
export const dva = {
  config: {
    extraEnhancers: [persistEnhancer()],
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};
```

### vue2-vuex

- npm install --save vuex-persistedstate

```tsx | pure
import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const dataState = createPersistedState({
  paths: ['app', 'user'],
});

const store = createStore({
  // ...
  plugins: [dataState],
});
```
