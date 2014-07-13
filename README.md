# Tuts Plus: jQuery UI 101: The Essentials

Learning [jQuery UI](https://courses.tutsplus.com/courses/jquery-ui-101-the-essentials) with [Tuts Plus](https://tutsplus.com/)

jQuery UI [reference](http://jqueryui.com/)

```
bower install jqueryui
```

## Introduction

Every component in the framework has a method that is the same as its name,
and this method is responsible for initializing the component, eg `accordion()`

API for components consists of:

* configurable options that control how the component behaves
* a suite of methods that can be called to make the component do something
* range of events that are fired during interesting points in the widgets' lifecycle

Options can be set in one of two ways:

* as a configuration object passed to components' init method
* via methods to set or change the options after the component is initialized

Components also have other methods that can be called to invoke other behaviour programmatically. All components have these common methods:

* destroy
* disable
* enable
* option
* refresh
* widget

To call a method, the method name is passed as a string to the init method.
For example, to disable an accordion:

  ```javascript
  // Initialize a default accordion
  var accordionElement = $('#accordion');
  accordionElement.accordion({});

  // Click handler that disables the accordion
  $('.button').on('click', function() {
    accordionElement.accordion('disable');
  });
  ```

This seems like a strange way to call methods in JavaScript, but its consistent across the jQueryUI framework.

## The Accordion Widget

[JavaScript](app/scripts/accordion.js) [HTML](app/partials/accordion.html) [Demo](http://danielabar.github.io/jqui101-tuts/#accordion)

Configuration options:

* active (defaults to first panel)
* animate (defaults to slide)
* collapsible (defaults to false, whether all panels can be collapsed at once)
* disabled (defaults to false, whether user can interact with the widget)
* event (defaults to click, controls event that causes panel to open, could be mouseover)
* hidestyle (controls how much space the widget takes up, by default is auto, and determined by panel that has most content)
* icons (controls open and closed icons)

Fires events:

* active
* beforeactive
* create (nearly every widget triggers create event when initialized)

## The Tabs Widget

[JavaScript](app/scripts/tabs.js) [HTML](app/partials/tabs.html) [Demo](http://danielabar.github.io/jqui101-tuts/#tabs)

Configuration options:

* active (which tab panel is initially visible)
* collapsible (controls whether one tab must be open at all times or whether they can all be closed)
* disabled (same as accordion, part of common API)
* event (which user event triggers showing of tab, default is `click`, but could be changed to `mouseover`)
* hidestyle (same as accordion)
  * `auto` all tabs will be fixed height, no matter how much content the open tab has in it, its height is based on tab panel that has the most content
  * `content` tabs will grow in height according to content in visible tab
  * `fill` tabs will fill total height of their container and ignore content in each panel
* hide (controls animation for when tab is hidden, default is null)
* show (controls animation for when tab is shown, default is null)

### Development

  ```
  grunt serve
  ```

### Build

  ```
  grunt build
  grunt connect:dist:keepalive
  ```

Make sure optimized version of site is working locally.

### Deploy

Push changes to master, then:

  ```
  git subtree push --prefix dist origin gh-pages
  ```