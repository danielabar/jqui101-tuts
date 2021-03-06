<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Tuts Plus: jQuery UI 101: The Essentials](#tuts-plus-jquery-ui-101-the-essentials)
  - [Introduction](#introduction)
  - [The Accordion Widget](#the-accordion-widget)
    - [Configuration options:](#configuration-options)
    - [Events:](#events)
  - [The Tabs Widget](#the-tabs-widget)
    - [Configuration options:](#configuration-options-1)
    - [Unique Method:](#unique-method)
    - [Events:](#events-1)
  - [The Button Widget](#the-button-widget)
  - [The Tooltip Widget](#the-tooltip-widget)
    - [Configuration options:](#configuration-options-2)
    - [Unique methods](#unique-methods)
    - [Events](#events)
  - [The Dialog Widget](#the-dialog-widget)
    - [Configuration options](#configuration-options)
    - [Unique Methods](#unique-methods)
  - [The Menu Widget](#the-menu-widget)
    - [Configuration Options](#configuration-options)
    - [Unique Methods](#unique-methods-1)
    - [Events](#events-1)
  - [The Spinner Widget](#the-spinner-widget)
    - [Configuration Options](#configuration-options-1)
    - [Unique Methods](#unique-methods-2)
    - [Events](#events-2)
  - [The Slider Widget](#the-slider-widget)
    - [Configuratioin Options](#configuratioin-options)
    - [Unique Methods](#unique-methods-3)
    - [Events](#events-3)
  - [The Datepicker Widget](#the-datepicker-widget)
    - [Configuration Options: Visible UI](#configuration-options-visible-ui)
    - [Configuration Options: Input and Immediate Vicinity](#configuration-options-input-and-immediate-vicinity)
    - [Configuration Options: Visible Text](#configuration-options-visible-text)
    - [Unique Methods](#unique-methods-4)
    - [Events](#events-4)
  - [The Autcomplete Widget](#the-autcomplete-widget)
    - [Configuration Options](#configuration-options-2)
    - [Unique Methods](#unique-methods-5)
    - [Events](#events-5)
  - [The Progressbar Widget](#the-progressbar-widget)
    - [Configuration Options](#configuration-options-3)
    - [Unique Methods](#unique-methods-6)
    - [Events](#events-6)
  - [Theming Widgets with Themeroller](#theming-widgets-with-themeroller)
  - [The Position Utility](#the-position-utility)
  - [Development](#development)
  - [Build](#build)
  - [Deploy](#deploy)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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

All event handlers get passed an event and ui object, by convention named `e` and `ui`

## The Accordion Widget

[Demo](http://danielabar.github.io/jqui101-tuts/#accordion) | [JavaScript](app/scripts/accordion.js) | [HTML](app/partials/accordion.html)

### Configuration options:

* active (defaults to first panel)
* animate (defaults to slide)
* collapsible (defaults to false, whether all panels can be collapsed at once)
* disabled (defaults to false, whether user can interact with the widget)
* event (defaults to click, controls event that causes panel to open, could be mouseover)
* hidestyle (controls how much space the widget takes up, by default is auto, and determined by panel that has most content)
* icons (controls open and closed icons)

### Events:

* active
* beforeactive
* create (nearly every widget triggers create event when initialized)

## The Tabs Widget

[Demo](http://danielabar.github.io/jqui101-tuts/#tabs) | [JavaScript](app/scripts/tabs.js) | [HTML](app/partials/tabs.html)

### Configuration options:

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

### Unique Method:

`load` used to reload content of remote tab.

Remote tab has href pointing to file where content resides. Should be on same domain.

Remote tab content is lazily loaded - i.e. not loaded until tab is clicked on.

Note that remote tabs are not cached, so every click will result in another request to server.

### Events:

* activate
* beforeactivate
* beforeload
* create
* load

## The Button Widget

[Demo](http://danielabar.github.io/jqui101-tuts/#button) | [JavaScript](app/scripts/button.js) | [HTML](app/partials/button.html)

Button widget more for presentation than functionality. Just has the common configuration options and only create event.

List of icons that can be used with buttons [here](http://jqueryui.com/themeroller/)

Checkbox and radio buttons behave like their native counterparts.
Checbox can be either on or off, and a group of radio buttons can only have one on at a time.
Radio buttons must be grouped in a set, `buttonset()` method is used instead of `button()`

## The Tooltip Widget

[Demo](http://danielabar.github.io/jqui101-tuts/#tooltip) | [JavaScript](app/scripts/tooltip.js) | [HTML](app/partials/tooltip.html)

Designed to replace the native tooltip so that features can be customized such as appearance, position, open/close animations.

Tooltips can be attached to any element. By default, it uses the title attribute as the tooltip text.

### Configuration options:

* content (used with items, changing content used within tooltip, eg: use alt instead of title, can be string literal or a function)
* disabled
* hide (set animation to hide)
* items (thing that tooltip is attached to, this is a jQuery selector)
* positions (default is top left)
* show (set animation to show)
* tooltipclass (add custom class to tooltip so that it can be styled)
* track (use to have tooltip track position of mouse)

### Unique methods

* open (used for triggerring a tooltip when hovering over a different element than the one the tooltip is attached to, eg: help icon)
* close

### Events

* create
* open
* close

## The Dialog Widget

[Demo](http://danielabar.github.io/jqui101-tuts/#dialog) | [JavaScript](app/scripts/dialog.js) | [HTML](app/partials/dialog.html)

Extensive API, highly configurable. Can be draggable, resizable, modal.

Default dialog is resizable, draggable, has close button at top right, and is shown as soon as its initialized.

### Configuration options

* appendto (by default, dialog is added as child of body element, but could append to different element using this option)
* autoopen
* buttons (to add buttons to the dialog)
* closeonescape
* closetext (used to set title attribute of close button that gets added automatically, default is 'close')
* dialogclass
* draggable
* height
* hide
* maxheight
* maxwidth
* minheight
* minwidth
* modal
* position (by default, dialog is positioned at center of screen)
* resizable
* title (to set a title on the dialog, OR set a title attribute on the html container element)
* show
* width

### Unique Methods

* moveToTop (move specified dialog to top of z-index stack)
* isOpen

## The Menu Widget

[Demo](http://danielabar.github.io/jqui101-tuts/#menu) | [JavaScript](app/scripts/menu.js) | [HTML](app/partials/menu.html)

Used to make vertical menus and sub-menus. Works with unordered lists.
css could be tweaked to make horizontal menus as well.

Don't use div as outer container, instead this will be a `<ul>`

Menu will automatically fill the width of its container.

### Configuration Options

* disabled
* icons (any menu item containing a submenu automatically gets an icon indicating this, by default its right arrow, can be changed with this option)
* menus
* position
* role

### Unique Methods

* lower
* collapse (close the most recently opened submenu, method takes no arguments, works with active item)
* collapseAll (close all submenus in a tree)
* expand
* focus
* isFirstItem
* isLastItem
* next
* nextPage
* previous
* previousPage
* select

### Events

* blur
* create
* focus (fired when menu item gains focus, either programmatically via focus method, or via mouse or keyboard)
* select (fired when menu item is clicked or selected with keyboard)

If want to give a non sub-menu entry an icon, need to do that manually in the html.
Add an empty inline element and reference one of the [library icons](http://api.jqueryui.com/theming/icons/).

When working with menu programmatically, need to set which item is active. Then expand and collapse methods can be called.

## The Spinner Widget

[Demo](http://danielabar.github.io/jqui101-tuts/#spinner) | [JavaScript](app/scripts/spinner.js) | [HTML](app/partials/spinner.html)

Attaches to input element, provides way to easily move up and down over values.

Supports min/max values and stepped increments.

### Configuration Options

* counter?
* disabled
* icons (sets icons used for up and down buttons)
* incremental (default action is when user holds down spinner button, rate of change increases the longer its pressed)
  * can be set to false to keep the rate of change constant
  * can supply a function which receives number of spins that have occurred so far, and should return number of steps for current spin)
* max (sets max value spinner can go to, by default there is no limit)
* min (sets min value spinner can go to, by default there is no limit)
* numberformat
  * specify value format such as decimal, currency
  * exact format used depends upon culture option, depends on [culture plugin](https://github.com/jquery/globalize/tree/v0.1.0a1)
* page
* step (used to control number of steps spinner takes when buttons are used)

### Unique Methods

* pageup (move spinner down by specified number of steps, default is 10)
  * for example, if step option is set to 5, and pageup is invoked, spinner would increment by 10 * 5 = 50
* pagedown (move spinner up by specified number of steps, default is 10)
* stepup (move value up by one step)
* stepdown (move value down by one step)

### Events

 * change
 * spin
 * start
 * stop

## The Slider Widget

[Demo](http://danielabar.github.io/jqui101-tuts/#slider) | [JavaScript](app/scripts/slider.js) | [HTML](app/partials/slider.html)

Useful when user is expected to provide one from a set of values. Can be used horizontally and vertically.

Any element can be turned into a slider, but `div` is most commonly used.

By default, fills width of its container.


### Configuratioin Options

* animate
* disabled
* max (default 100)
* min (default 0)
* orientation (default horizontal)
* range
* step (default is 1, so thumb will move smoothly along thetrack)
* value (by default, slider thumb starts at position 0, use this option to change)
* values (used for multiple handles, takes array with values representing handle positiona)

### Unique Methods

These can be used as getters and setters

* value
* values

### Events

Multiple events will fire during any single interaction with the slider.

* create
* start (fires first for an interaction)
* slide (fires after `start` for an interaction, fires on every single mouse move)
* stop (fires when thumb event stops sliding)
* change (fires if value changes)

Note that you can bind to events either during widget initialization, by simply referencing the event name,

OR after using jQuery `on`, in which case, you must reference the widget name followed by event name.

## The Datepicker Widget

[Demo](http://danielabar.github.io/jqui101-tuts/#datepicker) | [JavaScript](app/scripts/datepicker.js) | [HTML](app/partials/datepicker.html)

Attached to standard input elements and provides sensible defaults so can be used out of the box.

### Configuration Options: Visible UI

* changeMonth (default false, set to true to make month selection a dropdown)
* changeYear (default false, set to true to make year selection a dropdown, will show 10 years in past and 10 in future)
* defaultdate
* hideifnoprevnext
* firstday
* maxDate
* minDate (useful to ensure only future dates are selectable, for example, set it to current date)
* navigationasdateformat
* numberofmonths
* selectOtherMonths (default false, given that showOtherMonths is true, make those dates selectable)
* shortyearcutoff
* showOtherMonths (default false, set to true to show dates from previous and next month)
* showbuttonpanel
* showmonthafteryear
* showWeek (default false, set to true to show week of year)
* stepmonths
* yearrange

### Configuration Options: Input and Immediate Vicinity

* altField
* appendText (value is text to be appended, for example, useful to display expected date format)
  * generates span with class `ui-datepicker-append` so styling can be customized
* autoSize
* buttonImage
* buttonImageOnly
* buttonText
* constrainInput
* duration
* showHeading
* showOn
* showOptions

### Configuration Options: Visible Text

All strings displayed within date picker can be localized.
Add appropriate datepicker language script from [here](https://github.com/jquery/jquery-ui/tree/master/ui/i18n)

* closeText
* currentText
* dateFormat (see options [here](http://api.jqueryui.com/datepicker/))
* dayNames
* dayNamesMin
* dayNamesShort
* isRtl
* monthNames
* monthNamesShort
* nextText
* prevText
* weekHeader
* yearSuffix

### Unique Methods

* dialog
* isDisabled
* height
* show
* refresh
* getDate
* setDAte

### Events

Can't bind to these events using jQuery's `on` method.
Must set handlers for them when initializing the datepicker widget, via configuration options.

* beforeShow
* beforeShowDay (most useful, fired before every single date on the calendar is created)
  * for example, could use this to filter out certain dates to make them unselectable
* onChangeMonthYear
* onClose
* onSelect

## The Autcomplete Widget

[Demo](http://danielabar.github.io/jqui101-tuts/#autocomplete) | [JavaScript](app/scripts/autocomplete.js) | [HTML](app/partials/autocomplete.html)

Attached to input element. Needs a datasource to function. Supports several options to connect to datasource:

* Local array, useful for small static dataset
* Url pointing to service that returns json data
* Function that returns matching data

By default, matched letters can be anywhere in string, this behaviour can be changed.

### Configuration Options

* appendTo
* autoFocus (automatically highlight first item in suggestion list)
* delay (wait this number of ms until showing the list, useful for large datasets)
* disable
* minLength
* position (default list position is below the input and left aligned)
* source (has no default, is mandatory to specify this)

### Unique Methods

* close (close list if open)
* search (perform search of data programmatically, as if the input had been typed into)

### Events

* change
* close
* create
* focus
* open
* response
* search
* select

## The Progressbar Widget

[Demo](http://danielabar.github.io/jqui101-tuts/#progressbar) | [JavaScript](app/scripts/progressbar.js) | [HTML](app/partials/progressbar.html)

Used to display progress and percent of a given task.
System needs to tell the widget what the current progress is. Known as a _determinate_ progress bar.

Can be attached to any block level element.

### Configuration Options

* max (what max value of progressbar is, for example, for file upload, this could be size of file)
* value (current value, defautls to 0, but can be set programmatically)

### Unique Methods

* value (returns the current value of the progressbar)

### Events

* change (fired every time value of progressbar changes, useful for updating text indicating amount complete so far)
* complete (fired once 100% is reached)

## Theming Widgets with Themeroller

To customize visual aspects of widgets. Themeroller application can be found [here](http://jqueryui.com/themeroller/).

Use the online app to make your own theme or download from a selection of existing custom themes.

Can also select an existing theme, then click Edit to tweak it, then download your custom version of it.

## The Position Utility

[Demo](http://danielabar.github.io/jqui101-tuts/#position) | [JavaScript](app/scripts/position.js) | [HTML](app/partials/position.html)

Several widgets depend on position utility. It can also be used in custom plugins or code.

Used to position an element relative to any other element.

Can also be used to position elements relative to the document,
for example [Dialog Widget](#the-dialog-widget) uses position utility to center itself vertically and horizontally within the window.

[Autocomplete Widget](#the-autocomplete-widget) by default display list below input.
Position option can be used to customize, for example, to display the list to the right of the input.

Position option takes object, for example

  ```javascript
  position: {
    my: 'left top',   // affects element that is being positioned, first part of string is horizontal pos, second part is vertical pos
    at: 'right top'   // refers to element its being positioned against
  }
  ```
When position utility used with a widget, the widget is the thing that is being positioned against.

When position utility is used with custom code, must manually set the thing that is being positioned against.
This is accomplished using `of` key. For example, to position myElement relative to someOtherElement:

  ```javascript
  $('#myElement').position({
    of: '#someOtherElement',
    my: 'left bottom',
    at: 'right top'
  });
  ```

## Qunit

Test frameowrk for jQuery.

## Development

  ```
  grunt serve
  ```

## Build

  ```
  grunt build
  grunt preview
  ```

Make sure optimized version of site is working locally.

## Deploy

Push changes to master, then:

  ```
  grunt deploy
  ```