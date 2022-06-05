import { defineConfig } from 'rollup';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';

const filename = 'Chinesejs';
export default defineConfig({
    input: './src/Chinese.ts',
    output: [
        {
            file: `./dist/${filename}.esm.js`,
            format: 'esm',
        },
        {
            file: `./dist/${filename}.umd.js`,
            format: 'umd',
            name: 'Clang',
        },
    ],
    plugins: [
        typescript({
            target: 'es6',
            module: 'es6',
            lib: [
                "dom",
                "esnext",
                "dom.iterable"
            ]
        }),
        babel(),
    ]
});

