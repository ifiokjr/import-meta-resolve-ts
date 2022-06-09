import { resolve } from 'import-meta-resolve';

// eslint-disable-next-line no-console
console.log(await resolve('simple', import.meta.url));
