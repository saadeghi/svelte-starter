import { mdsvex } from "mdsvex";
// import mdsvexConfig from "./mdsvex.config.js";
import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";
import path from "path";

export default {
  extensions: [".svelte",".svelte.md", ".svx"],

  preprocess: [
    mdsvex({
      extensions: [".svelte.md", ".svx"],
    }),
    preprocess({
      postcss: true,
    }),
  ],

  kit: {
    adapter: adapter({
      pages: "dist",
      assets: "dist",
      fallback: null,
    }),
    vite: {
      resolve: {
        alias: {
          "@src": path.resolve("./src"),
          "@static": path.resolve("./static"),
          "@components": path.resolve("./src/components"),
        },
      },
    },
  },
};
