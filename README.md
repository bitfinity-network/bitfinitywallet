## Bitfinitywallet utils and types

# Install

Install required peer dependencies:
```
npm install @dfinity/agent @dfinity/candid @dfinity/principal
```

Install th package itself:
```
npm install @bitfinity-network/bitfinitywallet 
```

# Usage

After installation your editor will show you typehints for various wallet methods. Please check the docs here: https://infinityswap-docs-wallet.web.app/docs/wallet.

For example try:

```typescript
await window.ic.infinityWallet.requestConnect({
  whitelist: ['ryjl3-tyaaa-aaaaa-aaaba-cai']
});
```
