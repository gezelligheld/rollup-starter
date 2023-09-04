import serve from 'rollup-plugin-serve';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import deleteDist from 'rollup-plugin-delete';

export default {
  input: 'src/index.tsx',
  output: {
    name: 'demo',
    file: 'dist/index.js',
    format: 'iife', // 自执行函数，适用于 <script> 标签
    sourcemap: true,
  },
  plugins: [
    deleteDist({ targets: 'dist/*' }),
    resolve(),
    commonjs(),
    typescript(),
    serve({
      open: true, // 是否打开浏览器
      contentBase: './', // 入口 html 文件位置
      historyApiFallback: true, // 设置为 true 返回 index.html 而不是 404
      host: 'localhost', //
      port: 8000, // 端口号
    }),
  ],
};
