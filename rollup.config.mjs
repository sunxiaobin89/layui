import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import postcss from "rollup-plugin-postcss";
import url from "postcss-url";

export default [
  {
    input: "src/index.js",
    output: {
      file: "dist/layui.esm.js",
      format: "es",
    },
    plugins: [
      postcss({
        minimize: false,
        sourceMap: true,
        extract: "css/layui.css",
        plugins: [url({ url: "inline" })],
      }),
      resolve(),
      commonjs(),
    ],
  },
  {
    input: "src/index.global.js",
    output: {
      file: "dist/layui.js",
      format: "iife",
      name: "layui",
    },
    plugins: [
      postcss(),
      resolve(),
      commonjs({
        requireReturnsDefault: "preferred",
      }),
    ],
  },
];
