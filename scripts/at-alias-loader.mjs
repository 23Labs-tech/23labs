// Minimal Node ESM loader resolving the "@/*" -> "./*" alias from
// tsconfig.json's compilerOptions.paths, so scripts/test-lib-utils.mjs can
// import lib/ files directly without a bundler. Not used by the app itself.
import { pathToFileURL } from "node:url";

function withExtension(specifier) {
  return /\.[a-z]+$/i.test(specifier) ? specifier : `${specifier}.ts`;
}

export async function resolve(specifier, context, nextResolve) {
  if (specifier.startsWith("@/")) {
    const target = pathToFileURL(`${process.cwd()}/${withExtension(specifier.slice(2))}`).href;
    return nextResolve(target, context);
  }
  if (specifier.startsWith("./") || specifier.startsWith("../")) {
    return nextResolve(withExtension(specifier), context);
  }
  return nextResolve(specifier, context);
}
