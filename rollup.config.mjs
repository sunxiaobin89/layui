import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import postcss from "rollup-plugin-postcss";
import url from "postcss-url";

export default [
  // 用于浏览器的 esm 版本
  {
    input: "src/index.js",
    output: {
      file: "dist/layui.esm.js",
      format: "es",
      sourcemap: true,
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
  // 用于浏览器的 iife 版本
  {
    input: "src/index.global.js",
    output: {
      file: "dist/layui.js",
      format: "iife",
      name: "layui",
      sourcemap: true,
    },
    plugins: [
      postcss(),
      resolve(),
      commonjs({
        requireReturnsDefault: "preferred",
      }),
    ],
  },
  // 用于构建工具的 esm 版本，treeShake 效果更好
  {
    external: ["jquery"],
    input: "src/index.js",
    output: {
      format: "es",
      dir: "dist",
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: "src",
    },
    plugins: [postcss(), resolve(), commonjs()],
  },
];
