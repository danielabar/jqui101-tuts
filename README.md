# Tuts Plus: jQuery UI 101: The Essentials

Learning [jQuery UI](https://courses.tutsplus.com/courses/jquery-ui-101-the-essentials) with [Tuts Plus](https://tutsplus.com/)

jQuery UI [reference](http://jqueryui.com/)

```
bower install jqueryui
```

## Introduction

Every component in the framework has a method that is the same as its name,
and this method is responsible for initializing the component, eg `accordion()`

Components also have other methods that can be called to invoke other behaviour programmatically.

API for components consists of:

* configurable options that control how the component behaves
* a suite of methods that can be called to make the component do something
* range of events that are fired during interesting points in the widgets' lifecycle

Options can be set in one of two ways:

* as a configuration object passed to components' init method
* via methods to set or change the options after the component is initialized

## The Accordion Widget

Exposes configuration options:

* active (defaults to first panel)
* animate (defaults to slide)
* collapsible
* disabled
* event
* hidestyle
* icons
