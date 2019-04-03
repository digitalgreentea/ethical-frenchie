# Dependencies
EF uses several dependencies to build the site. A few of these, which are core to building the site, are mentioned in the [Build Process](https://github.com/jamesETF/ethical-frenchie/blob/master/wiki/build-process.md) page of the Wiki. However, here is a list of all the dependencies used and their use cases.

## PostCSS
PostCSS is used as part of the Sass to CSS compiling. It's used by both Hugo and Gulp. _More information on installing the core package can be found over at the [Build Process](https://github.com/jamesETF/ethical-frenchie/blob/master/wiki/build-process.md) section of the Wiki._
- [postcss-calc](https://github.com/postcss/postcss-calc)
- [postcss-custom-properties](https://github.com/postcss/postcss-custom-properties)
- [postcss-import](https://github.com/postcss/postcss-import)
- [postcss-mixins](https://github.com/postcss/postcss-mixins)
- [postcss-nested](https://github.com/postcss/postcss-nested)
- [postcss-simple-vars](https://github.com/postcss/postcss-simple-vars)
- [sugarss](https://github.com/postcss/sugarss)

## Gulp
Gulp handles compiling the Critical CSS from Sass and generating the HTML partial used to call it on the site's Head. _More information on installing the core package can be found over at the [Build Process](https://github.com/jamesETF/ethical-frenchie/blob/master/wiki/build-process.md) section of the Wiki._
These are the packages used to accomplish that:
- [gulp-sass](https://github.com/dlmanning/gulp-sass)
- [autoprefixer](https://github.com/postcss/autoprefixer)
- [cssnano](https://github.com/cssnano/cssnano)
- [gulp-concat-util](https://github.com/mgcrea/gulp-concat-util)
- [gulp-rename](https://github.com/hparra/gulp-rename)

A similar process is used to compile the stylesheet used by Wufoo for the forms. In this case, a CSS file is outputted instead.

Images can be converted from a JPEG and PNG to [WEBP](https://developers.google.com/speed/webp/). For that, Gulp uses the following package:
 - [gulp-gm](https://github.com/scalableminds/gulp-gm)

Images can also be optimized to provide better load times with smaller file size.
- [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin)
- [gulp-cache](https://github.com/jgable/gulp-cache)
- [imagemin-mozjpeg](https://github.com/imagemin/imagemin-mozjpeg)
- [imagemin-pngquant](https://github.com/imagemin/imagemin-pngquant)
- [imagemin-svgo](https://github.com/imagemin/imagemin-svgo)

There are a few Hugo related issues where a `<p>` tag is sometimes generated randomly in the rendered HTML. This tag wraps certain elements and causes some layout issues. To mitigate this problem, a Gulp task removes the tags after the static files are rendered.
- ['gulp-htmlmin](https://github.com/jonschlinkert/gulp-htmlmin)
- [gulp-replace](https://github.com/lazd/gulp-replace)

The HTML is first minfied for better [regex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) matching. Then, the tags are matched and removed.

Plumber is used throughout all tasks to prevent pipe breaking caused by errors from gulp plugins.
- [gulp-plumber](https://github.com/floatdrop/gulp-plumber)

Webpack runs when Gulp issues the build command. Simply put, Gulp executes the Webpack build command. It those this by using the native Nodejs `child process` module.
-[child_process](https://nodejs.org/api/child_process.html)

## Webpack
There is one external library that is used to lazy load images for better performance:
- [vanilla-lazyload](https://github.com/verlok/lazyload)

This library is installed via npm and build via [JavaScript modules](https://developers.google.com/web/fundamentals/primers/modules). This library, along with the other JavaScript files, is the transpiled into a more compatible version of JavaScript, bundled, and minified. This is done with the help of ESlint for correcting errors, Prettier for specifying syntax standards, and Babel for the actual transpiling. _More information on installing the core package can be found over at the [Build Process](https://github.com/jamesETF/ethical-frenchie/blob/master/wiki/build-process.md) section of the Wiki._
- [babel core](https://babeljs.io)
- [babel-eslint](https://github.com/babel/babel-eslint)
- [babel-loader](https://github.com/babel/babel-loader)
- [eslint](https://eslint.org)
- [eslint-config-airbnb](https://github.com/airbnb/javascript)
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- [eslint-import-resolver-webpack](https://github.com/benmosher/eslint-plugin-import)
- [eslint-loader](https://github.com/webpack-contrib/eslint-loader)
- [eslint-plugin-html](https://github.com/Stuk/eslint-plugin-header)
- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
- [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
- [webpack](https://webpack.js.org)

## Updating Packages
Packages are handled through npm. For more information on npm, visit their [documentation](https://docs.npmjs.com/getting-started/what-is-npm). These dependencies can be found in the `package.json` file. Each package has a set version number. This is the known version that works with the current site build.

If you wish to update any dependency, you should first consult the repository for that package and see if there are any changes that could potentially break the site. It is not recommended to update packages without doing so first.

The version number for each package can be found in the `devDependencies` and `dependencies` sections in the `package.json` file. These version numbers are specified in a way in which set how high they can be updated.

For example, `@babel/core` is set to `^7.3.3`. Which means that it can be updated to any "dot" version of v7 and no further. That means it will not go to v8 if there is such a version available. To update dependencies within their caret restrictions, run:
```
npm update
```

For more information on updating npm packages, consult the [npm documentation](https://docs.npmjs.com/cli/update.html) on the subject.
