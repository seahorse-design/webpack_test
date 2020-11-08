module.exports = {
    presets: [
        [
            '@babel/preset-env',
            { //babel-presetのオプションで指定
                useBuiltIns: 'usage',
                corejs: 3, //corejsのバージョン　必ず3を指定
                debug: true,
            },
        ],
    ],
};