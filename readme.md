# import-meta-resolve

Run the following to enable corepack and install all dependencies (for using `pnpm`).

```bash
npm run bootstrap
```

At this point you'll notice the `dist` folders are created for each package. Take a look at `packages/simple/dist/index.esm.js`. It is a symlink which links to this source file `packages/simple/src/index.ts` during development. It is replaced with the bundled output during a build.

Now start the tests to see the error:

```bash
pnpm test:watch
```

The test file is located in `packages/with-meta/src/with-meta.spec.ts`.

If you prefer running the node code directory you can use the following command:

```bash
node --experimental-import-meta-resolve packages/with-meta/src/import-meta-resolve.js
```

The test that runs using `import-meta-resolve` is failing when it encounters the `.ts` extension via the symlinked entrypoint.

Running native node `import.meta.resolve` for the same module doesn't have the same issue.

```bash
node --experimental-import-meta-resolve packages/with-meta/src/native.js
```
