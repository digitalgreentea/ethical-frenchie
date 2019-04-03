# Build Process
There are several tools used to build the site. Here you'll find what these tools do and how you can use them.

## npm
[npm](https://docs.npmjs.com/getting-started/what-is-npm) is used to managed dependencies. To ensure compatibility, version 10.15.1 of node and version 6.7.0 of npm are recommended. You can manage node versions using [nvm](https://github.com/creationix/nvm#installation).

To install npm on your OS, follow the [instructions on the npm website](https://www.npmjs.com/get-npm).

Once npm is installed, you'll need to install nvm. There are more detailed instructions on the [repo](https://github.com/creationix/nvm#installation-and-update), but you can install the package with the following command:
```sh
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
```

Once both npm and nvm are installed, from the root directory of the repo, run the install command for the recommended node version:
```sh
nvm install
```

Then, tell nvm to use that version:
```sh
nvm use
```

Then, from the root directory of the repo, run the following command to install all the projects dependencies:
```sh
npm install
```

## Webpack
[Webpack](https://webpack.js.org/concepts) is used to import external libraries, bundle, and minify all our JavaScript assets. The output is a bundled and minified file that is readable on all browsers. The file can be found in `/assets/js/bundle.js`.

To install the core command line utility, type this command:
```sh
npm install --global webpack-cli
```

To run the webpack bundler, run this command:
```sh
webpack
```
_**Note:** Webpack is run by Gulp on build. For more information, keep reading below on Gulp._

### Babel, ESLint, and Prettier
Babel is used to compile modern ES6 specification of JavaScript to a version that is readable by most browsers in use today. ESLint and Prettier are used in conjunction to ensure error-free and properly formatted JavaScript syntax.

These are all used by Webpack to bundle and compile the various JavaScript files. These dependencies are automatically installed will the rest via `npm` and their configurations are available in the root of the repository directory.

## Gulp
[Gulp](https://gulpjs.com/docs/en/getting-started/quick-start) v4 is used for various tasks. It compiles the critical Sass and outputs a minified HTML partial that is added to the `baseOf.html` template head for inlined critical CSS. It watches for changes in JavaScript and runs Webpacks. And lastly, it optimizes images.

Once npm is installed, install the Gulp CLI utility:
```sh
npm install --global gulp-cli
```

The various gulp tasks utilized can run individually by using the `gulp` command, followed by the task name. For example:
```sh
gulp critical
```

Running the `watch` task will watch all the specified files. When Gulp detects any changes on the code, it will rerun the associated task.
```sh
gulp watch
```
_**Note:** This is what you want to keep running while working locally._

On build, the `gulp build` command runs all the associated tasks:
```sh
critical # Critical CSS is compiled from Sass, created into an HTML partial, and then inlined to the HTML head
```

## PostCSS
[PostCSS](https://github.com/postcss/postcss) handles part of the Sass to CSS compile. It adds vendor prefixes, converts modern CSS features into better-supported ones, and also minifies the CSS. It is essential to Hugo and Gulp.

Although there are a number of dependencies associated with PostCSS that are handled by `npm`, the core command line utility can be installed on your machine with this command:
```sh
npm install --global postcss-cli
```

## Hugo
Version `0.53` of [Hugo](https://gohugo.io/getting-started/installing/) is being used on the Netlify server. Although Hugo strives to maintain backward compatibility on all versions, it is recommended to consult the [Hugo news section](https://gohugo.io/news/) for any changes that might break the build before upgrading.

A package manager is recommended for installing Hugo.

[Brew](https://brew.sh/) on macOS or Linux:
```sh
brew install hugo
```

[Chocolatey](https://chocolatey.org/) on Windows:
```sh
choco install hugo
```

To build the `/public` directory with the rendered static files, run:
```sh
hugo
```

To run the local server with automatic refresh on changes to the code, run:
```sh
hugo serve
```
_**Note:** This is what you want to keep running while working locally._

## Local Build Process
Now, with all that being said, here's a high-level view of the commands you need to run to get your local build running **after** you've installed all dependencies. npm scripts are used to simplify the process.

On one terminal:
```sh
npm run develop-gulp
```
On another:
```sh
npm run develop-hugo
```

The gulp `npm` script run `gulp build` which runs all associate tasks and then runs `gulp watch` that watches for changes are you work and automatically runs any associate tasks with the edited files.

The hugo `npm` script runs `hugo` to generate the static HTML and then `hugo serve` that launches the local server which live-reloads as you save changes.

And that's it. Any changes made will reflect automatically on your browser. The site will be available on [localhost:1313](http://localhost:1313/).

## Netlify Build Process
npm scripts are also used here to run the two commands needed:
```sh
npm run build
```
This is already set up on the Netlify build settings.

---

## Further Documentation
This page explains how these tools fit into EF's website build process. This should not be used as documentation for each of these tools. For more information on everything you can do with these tools, I highly recommend you refer to their documentation.
- [Hugo Docs](https://gohugo.io/documentation/)
- [PostCSS](https://github.com/postcss/postcss)
- [Gulp Docs](https://gulpjs.com/docs/en/getting-started/quick-start)
- [Webpack Docs](https://webpack.js.org/concepts)
- [npm Docs](https://docs.npmjs.com/)
- [nvm Docs](https://github.com/creationix/nvm)
- [Babel Docs](https://babeljs.io/docs/en/)
- [ESLint Docs](https://eslint.org/docs/user-guide/getting-started)
- [Prettier Docs](https://prettier.io/docs/en/)
- [Netlify Docs](https://www.netlify.com/docs/)
