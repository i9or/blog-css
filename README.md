# BlogCSS

A few BEM styles for simple responsive blog.

## Blocks

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
