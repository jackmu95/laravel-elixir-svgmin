# laravel-elixir-svgmin

[![npm](https://img.shields.io/npm/v/laravel-elixir-svgmin.svg)](https://www.npmjs.com/package/laravel-elixir-svgmin/)
[![dependency Status](https://img.shields.io/david/jackmu95/laravel-elixir-svgmin.svg)](https://david-dm.org/jackmu95/laravel-elixir-svgmin/)

A Laravel Elixir extension for SVG minification via [SVGO](https://github.com/svg/svgo/).

## Installation
`npm install laravel-elixir-svgmin --save-dev`

## Usage
```javascript
var Elixir = require('laravel-elixir');
require('laravel-elixir-svgmin');
...

Elixir(function(mix) {
  mix.svg(src, output, baseDir, options);
});
```
