# 🍬 candyNote API

このリポジトリは「candyNote」のバックエンドAPIです。`Hono` + `Effect.ts` + `Bun` を使用して、シンプルかつテストしやすい構成で設計されています。

## 🔧 スタック

- [Hono](https://hono.dev/) — 軽量高速なWebフレームワーク
- [Effect.ts](https://effect.website/) — 型安全な関数型エフェクトシステム
- [Bun](https://bun.sh/) — 高速なJSランタイム
  - Bun の入門マニュアル: https://zenn.dev/gatsby/books/0622aa61e0a3e8/viewer/7dec37
- DynamoDB（本番用） / DynamoDB Local（開発・テスト）

## 📁 ディレクトリ構成

- `src/app`: アプリのエントリポイントやDI構成
- `src/modules`: 各機能（notesなど）のルート、サービス、リポジトリなどを縦割り管理
- `src/shared`: DB、エラー、ユーティリティなどの共通機能
- `tests`: 単体/HTTP/統合テストを種類ごとに分離

## 🚀 開発

```bash
bun install
bun run dev
```

## 🧪 テスト

```bash
bun test
```

### テストポリシー
- Unit: サービス、Zodスキーマ、関数（厚め）
- API: 各エンドポイントの代表ケースのみ（200, 400, 404, etc）
- Integration: DynamoDB Local を用いたスモークテスト（最小限）
