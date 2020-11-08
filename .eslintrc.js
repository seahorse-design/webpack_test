module.exports = {
    root: true, //ディレクトリより上の階層に設定ファイルを探しにいかなくなる
    env: { //検証するJSの環境の設定
        browser: true, //ブラウザなのかnodeなのか
        es2020: true, //es2020までのコードでエラーが発生しなくなる
    },
    parserOptions: {
        sourceType: 'module',//importやexportを使用してもエラーがでなくなる
    },
    extends: [
        'eslint:recommended',//外部のルールを使用するか
        'plugin:prettier/recommended'  //これを使うにはeslint-config-prettierとeslint-plugin-prettierが必要、最後に記述
    ],
    rules: {
        'prefer-const': 'error',//const以外が使用されていたらエラーが発生される
    },
};