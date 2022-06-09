async function withNativeMeta() {
  return import.meta.resolve?.('simple', import.meta.url);
}

// eslint-disable-next-line no-console
console.log(await withNativeMeta());
