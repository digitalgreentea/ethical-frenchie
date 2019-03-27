# Content
All pages are written using [Markdown](https://guides.github.com/features/mastering-markdown/). They live inside the `content/` directory. Any child directories inside content are rendered as sections. A **section** is a collection of pages that gets defined based on the organization structure under the content/ directory.
```
|--content
|  |--puppies
```

## New Pages
* Create a new Markdown file for your new page. The file name should have dashes (-) in place of spaces.
* Add the Front Matter with all the page attributes. (See below)
* Write the content as you would will any text editor. No need for code. You can use [this](https://guides.github.com/features/mastering-markdown/) article for reference on how to use the Markdown syntax.
* Use shortcodes (See [this](https://github.com/jamesETF/ethical-frenchie/blob/master/wiki/shortcodes.md) page) for images and custom HTML containers.

## Front Matter
Front matter allows you to add metadata to your page. Hugo supports three formats for front matter, each with their own identifying tokens: **toml**, **yaml**, and **json**. There are a few predefined variables that Hugo is aware of. See [Page Variables](https://gohugo.io/variables/page/)  for how to call many of these predefined variables in your templates.

Example:
```
---
title: Elle
description: >-
  Elle found her new home. Her new name is Luna. Good luck baby girl!"
image: 'elle.jpg'
date: '2018-12-15'
draft: false
showthedate: false
---
```

### Page Parameters:
* `title` is the page title.
* `description` is the page description.
* `image` is the hero image. Just the file name (and extension) should be used as the value. No need to add the full file path.

_For further information on how hero images are rendered, take a look at the [Images](https://github.com/jamesETF/ethical-frenchie/blob/master/wiki/asset-pipeline.md#images) section in the Asset Pipeline page._

## Editing Articles
Editing existing articles is pretty straightforward. Updating any of the front matter value is just a matter of editing the text. As long as the value maintains the original format (quotes, dashes and such), updates will reflect with no problems.

You can also use the Netlify CMS which is accessible via [ethicalfrenchie.com/admin](https://ethicalfrenchie.com/admin).