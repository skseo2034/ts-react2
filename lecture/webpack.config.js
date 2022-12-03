// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
const webpack = require('webpack');

// entry 에 module 적용하고, 추가적으로 plugins 적용해서 output 으로 결과를 내 보낸다.
module.exports = {
    mode: 'development', // 개발시 development 운영시 production
    devtool: 'eval', // 개발시 eval 운영시 hidden-source-map
    resolve: {
        // 모듈을 해석할 때 검색할 디렉터리를 webpack에 알려줍니다.
        // 기본적으로 node_modules 이다. node_modules 만 있을때는 생략 가능!!
        //modules: [path.resolve(__dirname, 'myTypes'), 'node_modules'],
        // 확장자를 배열로 넣어둠
        extensions: ['.jsx', '.js', '.tsx', '.ts']
    },

    entry: {
        app: './client'
    },
    module: {
        // entry -> output 으로 변환 할때 중간에 개입하는 것이 module 임.
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
            },
        ],
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({ debug: true }),
    ],
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
    }
};
