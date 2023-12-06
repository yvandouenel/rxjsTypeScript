# Installation
```shell
npm install
```
# Lancer le serveur local
```shell
npm start
```
# Intallation initiale
Cette application a été créée en suivant les étapes suivantes :
## 1 créer un répertoire "myApp" par exemple et placez vous sur ce répertoire
## 2 installer les dépendances
```shell
npm install --save-dev typescript webpack webpack-cli rxjs html-webpack-plugin ts-loader webpack-dev-server
```
## 3 Crére le fichier  tsconfig.json
```json
{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "commonjs",
    "target": "es6",
    "jsx": "react"
  },
  "include": [
    "./src/**/*"
  ]
}
```

## 4 Créer le fichier webpack.config.js
```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  devServer: {open: true},
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new HtmlWebpackPlugin({ template: __dirname + '/src/index.html' })],
};
```
## 5 Créer le répertoire src et placer à l'intérieur les fichiers index.html et index.ts
## 6 modifier le fichier package.json
```json
{
  "name": "tp02autocomplete",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack-dev-server",
    "build": "NODE_ENV=production webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "html-webpack-plugin": "^5.5.3",
    "rxjs": "^7.8.1",
    "ts-loader": "^9.5.1",
    "typescript": "^5.3.2",
    "webpack": "^5.89.0",
    "webpack-cli": "^5.1.4",
    "webpack-dev-server": "^4.15.1"
  }
}
```

