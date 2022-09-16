---
order: 5
nav:
  title: Article
  path: /article
---

## stylelintrc

- .stylelintrc.js
- https://zhuanlan.zhihu.com/p/493920283

```js
module.exports = {
  ignoreFiles: [],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-prettier/recommended',
  ],
  plugins: ['stylelint-scss', 'stylelint-color-format'],
  rules: {
    indentation: 'tab',
    'rule-empty-line-before': 'never',
    'selector-type-no-unknown': null,
    'selector-type-case': null,
    'no-descending-specificity': null, //[true, { ignore: ['selectors-within-list'] }],
    'selector-list-comma-newline-after': 'always-multi-line',
    'value-keyword-case': null,
    'function-name-case': null,
    'at-rule-no-unknown': null,
    'color-format/format': {
      format: 'rgba',
    },
  },
};
```
