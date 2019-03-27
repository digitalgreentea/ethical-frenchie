# File Structure
```
|--assets           // Files that will pass through the asset pipeline
|  |--css           // Sass files are compiled, minified and autoprefixed
|  |--fonts         // Font files
|  |--icons         // Icons files used for favicon, iOS webclip, OpenGraph icons, and other alike
|  |--img           // Image files
|  |--js            // Custom scripts and external libraries minified and locally loaded
|--content          // Pages and collections
|  |--blog          // Blog posts
|  |--puppies       // Puppy posts
|--data             // Data files that are used to store static data
|--layouts          // This is where all templates go
|  |--_default      // This is where base templates and blocks live
|  |--blog          // Blog list and single templates
|  |--partials      // This is where includes live
|  |--puppies       // Puppies list and single templates
|  |--shortcodes    // This is where shortcodes live
|--static           // Files in here end up in the public folder
|  |--admin         // Netlify CMS configuration files
```

## Sass
- `critical.scss` Critical CSS rendered in the head of every HTML file
- `extends.scss` Sass extendes used throught stylesheets
- `fonts.scss` Local font declarations
- `main.scss` Main Sass file to be compiled to CSS
- `mixins.scss` Sass mixins used throught stylesheets
- `reset.scss` A set of rules that reset the styling of all HTML elements to a consistent baseline
- `variables.scss` Color, box shadow, and pixel value variables used throught stylesheets

## JS
- `bundle.js` Transpiled and bundled JS file the contains the JS from all other JS files
- `lazy.js` Image lazy loading module script from an external library
- `smooth.js` Script used for smooth scroll to the top animation
- `swiper.js` Hero swiper loading module script from an external library
- `testimonials.js` Script used to determine if a testimonial is too long and need a button hide and load extra content
- `webp.js` Script used to determine where Webp image format is supported and dynamically uses the format if possible

## [Content](https://gohugo.io/content-management/)
Every file inside this folder and it's subfolders are pages in the site to be rendered into HTML by templates.

## [Data](https://gohugo.io/data-templates/)
The `data` folder is where you can store additional data for Hugo to use when generating your site. Data files aren’t used to generate standalone pages; rather, they’re meant to be supplemental to content files. For Ethical Frenchie, this is where the Puppies information, Ratings, Hero images, and Testimonials live.
- `puppies.json` Name, description, and image informatino for puppies currently on sale
- `ratings.json` Ratings information from Facebook
- `hero.yml` Hero section image and text information

## [Templates](https://gohugo.io/templates/)
Any and all template files with the same name in other subdirectories under `/layouts`, do the same as their counterparts.
- `baseof.html` Base template the wraps all other templates
- `category.html` Taxonomy template that builds the blog categories feed
- `list.html` List template that lists a feed of posts in a given section
- `li.html` List item used for list templates
- `single.html` Renderes single pages
- `summary.html` Page summary; similary to `li` template, but with a post summary
- `index.html` Homepage template
- `404.html` Renders 404 page

## [Partials](https://gohugo.io/templates/partials/)
These are components meant to be reused where needed.
- `about-us.html` Content for About Us page
- `analytics.html` Google Analytics script
- `contact-us.html` Content for Contact Us page
- `critical.html` This the critical CSS that will be called in the `baseof` template
- `footer.html` General site footer
- `header.html` General site header
- `navbar.html` Navbar that's sticky to the site foot
- `reviews.html` Content for Reviews section
- `tax.html` Range over blog tags
- `testimonials.html` Content for Testimonials section

## [Shortcodes](https://gohugo.io/content-management/shortcodes/)
Simple snippets inside your content files calling built-in or custom templates.
- `img.html` Dynamic HTML image with `picture` wrapper
- `link.html` External links with proper `rel` and `target` attributes
- `vid.html` Embeded YouTube iframe tag

## Configuration
- `.babelrc` Babel configuration file
- `.eslintignore` ESLint list of ignored files
- `.eslintrc.js` ESLint configuration file
- `gulpfile.js` Gulp configuration file with all the Gulp tasks
- `postcss.config.js` PostCSS configuration file
- `prettier.config.js` Prettier configuration file
- `webpack.config.js` Webpack configuration file
- `.nvmrc` NVM Node version specification
- `config.toml` Hugo configuration file
- `netlify.toml` Netlify build configuration file

---

For further information on how the Hugo file structure works and detailed explanations on what each file does, visit the [Hugo Documentation](https://gohugo.io/documentation/).

For more information on Babel, ESlint, Gulp, PostCSS, Prettier, Webpack, and NVM, visit the [Build Process](https://github.com/jamesETF/ethical-frenchie/blob/master/wiki/build-process.md) page on the Wiki.

For information on Netlify configuration, visit their [documentation](https://www.netlify.com/docs/netlify-toml-reference/).
