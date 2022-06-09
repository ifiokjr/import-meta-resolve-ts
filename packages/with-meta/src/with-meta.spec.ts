import { resolve } from 'import-meta-resolve';
import { test } from 'vitest';

test('withMeta', async ({ expect }) => {
  expect(resolve('simple', import.meta.url)).resolves.toMatchInlineSnapshot('""');
});
