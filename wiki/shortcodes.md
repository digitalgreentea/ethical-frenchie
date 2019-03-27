# Shortcodes
Hugo loves Markdown because of its simple content format, but there are times when Markdown falls short. [Shortcodes](https://gohugo.io/content-management/shortcodes/) were made to circumvent these limitations. A shortcode is a simple snippet inside a content file that Hugo will render using a predefined template.

In your content files, a shortcode can be called with this syntax: `{{% shortcodename parameters %}}`. Shortcode parameters can be space delimited, parameters with internal spaces can be quoted, and others can be built using TOML like key-value format.

There are several [built-in](https://gohugo.io/content-management/shortcodes/#use-hugo-s-built-in-shortcodes) shortcodes, but we’ve built a few custom ones to fit our needs.

## Links
Links can easily be added with markdown:
```
[Ethical Frenchie](https://ethicalfrenchie.com/)
```

Whenever an internal link is referenced, you can do it by using traditional Markdown links as shown above.

But there are instances where we need a little more than what is offered with Markdown. For example, when adding external links to which we need to add attributes like `rel="noopener"` or `rel="noreferrer"`. For this, we have the following shortcode:
```
<a href="{{ .Get "href" }}" {{ with .Get "class" }}class="{{.}}"{{ end }} {{ with .Get "title" }}title="{{.}}"{{ end }} target="_blank" rel="noopener">{{ .Get "content" }}</a>
```
Which can be called in a page like so:
```
{{< link href="https://github.com" content="GitHub" >}}
```

The shortcode is called using `link` as it’s keyword, followed by a few attributes. These attributes take in a value which rendered in the HTML link. In this case, we have `href` and `content`. Just like a traditional HTML link, `href` takes the link we are referring to, while `content` takes in the content of the link. There's an optional `class` attribute can be applied if the like needs to be styled differently using a class. The rendered HTML looks something like this:
```
<a href="https://github.com" target="_blank" rel="noopener">Github</a>
```

## Images
Although Hugo comes with a built-in image shortcode, there’s a custom one in place to fit our specific needs. This shortcode applies the necessary lazy-loading classes, asset pipeline link, and utilizes `webp` image format while providing a fallback with jpg/png.

Shortcode:
```
{{ $type := (print "." (.Get "type")) }}
{{ $webp := resources.Get (print "img/" (.Get "src") ".webp") | fingerprint }}
{{ $img := resources.Get (print "img/" (.Get "src") $type) | fingerprint }}
<picture {{ with .Get "id" }}id="{{.}}"{{ end }}>
  <source data-srcset="{{ $webp.RelPermalink }}" type="image/webp">
  <source data-srcset="{{ $img.RelPermalink }}" type="image/{{ $type }}">
  <img data-src="{{ $img.Permalink }}" {{ with .Get "alt"}}alt="{{.}}"{{ end }} class="lazy {{ with .Get "class" }}{{.}}{{ end }}"/>
</picture>
```
Call:
```
{{< img src="puppies/elle_1" type="jpg" alt="Elle" >}}
```

All shortcodes work the same way; attributes take in a value specific to themselves. In our case, `src` takes the image filename (without it’s extension), `type` takes the file type, and the shortcode then builds out the appropriate link form the asset pipeline. If the image resides inside a child folder, the corresponding filepath should be added as well. You can also use the optional class attribute to add more customization.

Render:
```
<img src="https://www.ethicalfrenchie.com/img/puppies/elle_1.png" alt="Elle" class="lazy">
```

## Videos
Although Hugo comes with a built-in youtube shortcode, there’s a custom one in place to fit our specific needs. This shortcode applies the necessary html `iframe`.

Shortcode:
```
<iframe id="video" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="640" height="360" src="https://www.youtube.com/embed/{{ .Get "id" }}"></iframe>
```
Call:
```
{{< vid id="gUTtJjV852c" >}}
```

All shortcodes work the same way; attributes take in a value specific to themselves. In our case, `src` takes the image filename (without it’s extension), `type` takes the file type, and the shortcode then builds out the appropriate link form the asset pipeline. If the image resides inside a child folder, the corresponding filepath should be added as well. You can also use the optional class attribute to add more customization.

Render:
```
<iframe id="video" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="640" height="360" src="https://www.youtube.com/embed/gUTtJjV852c"></iframe>
```

## Note:
For Hugo to know which shortcode is being used, you need to declare the name right after the opening brackets (`{{< `).
