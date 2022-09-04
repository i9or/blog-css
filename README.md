# BlogCSS

A few BEM styles for simple responsive blog.

## Blocks

### Navigation

#### Search

Normal search input:

```html
<form action="" class="search">
  <input class="search__input" placeholder="Search" type="text" />
</form>
```

Disabled search input:

```html
<form action="" class="search">
  <input class="search__input" placeholder="Search" type="text" disabled />
</form>
```

### Main

#### Blockquote

```html
<figure class="blockquote">
  <blockquote cite="https://www.huxley.net/bnw/four.html">
    <p>
      Words can be like X-rays, if you use them properly—they’ll go through
      anything. You read and you’re pierced.
    </p>
  </blockquote>
  <figcaption class="blockquote__attribution">
    &mdash; Aldous Huxley,
    <a href="https://www.huxley.net/bnw/four.html">Brave New World</a>
  </figcaption>
</figure>
```

### Sidebar

#### Widget

Sidebar widget with list content:

```html
<section class="sidebar-widget">
  <header class="sidebar-widget__header">Recent posts</header>
  <ul class="sidebar-widget__content sidebar-widget__content--list">
    <li class="sidebar-widget__list-item">
      <a href="#">Post 1</a>
    </li>
    <li class="sidebar-widget__list-item">
      <a href="#">Post 2 with really long title, which should be truncated</a>
    </li>
    <li class="sidebar-widget__list-item">
      <a href="#">Post 3</a>
    </li>
  </ul>
</section>
```

Sidebar widget with tags content:

```html
<section class="sidebar-widget">
  <header class="sidebar-widget__header">Tags</header>
  <ul class="sidebar-widget__content sidebar-widget__content--tags">
    <li class="sidebar-widget__tag"><a href="#">Tag 1</a></li>
    <li class="sidebar-widget__tag"><a href="#">Tag 2</a></li>
    <li class="sidebar-widget__tag"><a href="#">Tag 3</a></li>
  </ul>
</section>
```

<!-- TODO: add AGPL3.0 logo -->
<!-- TODO: how to build? -->
