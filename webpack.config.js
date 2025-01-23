const path = require("path")

module.exports = {
    mode: "development",
    entry: {
        main: path.resolve("src", "main.js"),
        info: path.resolve("src", "info.js"),
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve("dist"),
    },

    devServer: {
        static: {
            directory: path.resolve("dist"),
        },
        compress: true,
        port: 7070,
        open: true,
        hot: true,
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, "src"),
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
        ],
    }
}
