# Asset Pipeline
The asset pipeline provides a framework to concatenate, minify or compress, and fingerprint JavaScript, CSS assets, and images. This is achieved using a combination of [Hugo Pipes](https://gohugo.io/hugo-pipes/introduction/) and [Gulp](https://gulpjs.com).

## Images
Images used across the site are for articles live in the `assets/img` directory. The hero images are called directly from the templates HTML using the following code:
```html
{{ $ellew := resources.Get "img/puppies/elle.webp" }}
{{ $ellej := resources.Get "img/puppies/elle" type="jpg" }}
```
We are using two resource calls for each file types. Most browsers support the `webp` format which provides lossless compression and small file sizes.

Images are called using a custom shortcode inside a `picture` tag with the fallback file, which are also lazy loaded:
```html
<picture>
  <source data-srcset="{{ $ncw.RelPermalink }}" type="image/webp">
  <source data-srcset="{{ $ncj.RelPermalink }}" type="image/jpg">
  <img data-src="{{ $ncj.RelPermalink }}" alt="Electra" class="lazy prod-logo">
</picture>
```
The `data-src` and `data-srcset` is used in combination with the `lazy` class as an indication for the Lazy Loading library that this image file should be lazy loaded.

Shortcodes have access to parameters delimited in the shortcode declaration via `.Get` , page- and site-level variables, which takes the file name and passes that to `resources.Get`, which takes one argument: the filepath of the file relative to the asset directory.

Once the filepath is generated and the shortcode then generates the `<img>` and `<source>` tags. The `source` files are used to dynamically load the supported file type depending on browser support. These are wrapped in a `<picture>` container.

Images are also optimized using a combination of different optimization tools. These are built into an image optimization task with Gulp that handles all filetypes. You can place your PNGs and JPGs inside the `/assests/img/` folder and Webpack will convert the images on build.

This will create the `.webp` files inside the same directory.

## Stylesheets
These live in the `assets/css` directory. They are written using SCSS and compile with [PostCSS](https://postcss.org). There is a `postcss.config.js` configuration file which declared the plugins used for minification and browser prefixing, among other vital plugins used for proper CSS render.

### Critical CSS
* All critical stylesheets are imported to `assets/css/critical.scss`.
* Gulp then takes this file and processes it using:
  * PostCSS to compile to CSS.
  * [Autoprefixer](https://github.com/postcss/autoprefixer) to add vendor prefixes for the past 2 browser versions.
  * [cssnano](https://github.com/cssnano/cssnano) for minification.
* The processed file is then extracted and place into `layouts/partials/critical.html` wrapped with `<style>` tags.
* The partial is then called in the page **head** to be rendered into HTML via Hugo.

### External CSS
* All critical stylesheets are imported to `assets/css/main.scss`.
* This file is then called with Hugo on the page **head** using:
```html
{{ $styles := resources.Get "scss/main.scss" | toCSS | postCSS | minify }}
<link rel="stylesheet" href="{{ $styles.Permalink }}" media="screen">
```
* Hugo Pipes then compiles and minifies the file.

## JavaScript
Scripts used across the site live in the `assets/js` directory. These scripts are imported, bundled, and minified using Webpack and Babel. They are then called using Hugo Pipes at the foot of the `baseOf.html` template.

To add a new script, place your new file in the `assets/js` directory. Then, update the Webpack configuration file at the root of the repo: `webpack.babel.js`. There, on line `#8` of the file, you'll see a list of files. Add you new JavaScript file in the same maner (no matter the order). Now when the site builds on the server, it will include your new file to the bundle.

If you wish to bundle the file locally for testing, run this comman on the terminal:
```sh
webpack
```
