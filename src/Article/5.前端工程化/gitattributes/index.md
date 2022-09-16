---
order: 5
nav:
  title: Article
  path: /article
---

## gitattributes

- `.gitattributes`
- 将 `github` 的仓库识别语言的 `js` 文件全部变成 `ts`

```bash
*.tsx linguist-language=typescript
*.js linguist-language=typescript
*.css linguist-language=typescript
*.less linguist-language=typescript
* -text
```
