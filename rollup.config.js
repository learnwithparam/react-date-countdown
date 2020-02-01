import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import resolve from "rollup-plugin-node-resolve";
import url from "rollup-plugin-url";
import svgr from "@svgr/rollup";

export default {
  input: `src/index.js`,
  output: [
    {
      file: `dist/index.js`,
      format: "cjs",
      sourcemap: true
    },
    {
      file: `dist/index.es.js`,
      format: "es",
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    postcss({
      modules: true
    }),
    url(),
    svgr(),
    babel({
      exclude: "node_modules/**"
    }),
    resolve(),
    commonjs()
  ]
};
