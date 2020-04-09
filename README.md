# Tailwindjs/tailwindjs

![version](https://img.shields.io/badge/version-0.1.0-blue.svg) ![license](https://img.shields.io/badge/license-MIT-blue.svg) <a href="https://github.com/tailwindjs/tailwindjs/issues?q=is%3Aopen+is%3Aissue" target="_blank">![GitHub issues open](https://img.shields.io/github/issues/tailwindjs/tailwindjs.svg)</a> <a href="https://github.com/tailwindjs/tailwindjs?q=is%3Aissue+is%3Aclosed" target="_blank">![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/tailwindjs/tailwindjs.svg)</a>

![tailwindjs/tailwindjs]({{--logo-image-here--}})

### A dynamic plugin extension for TailwindCSS.

Tailwindjs/tailwindjs is Free and Open Source. It does not change or add any CSS to the already one from TailwindCSS, It comes with code written with javascript as an extension to TailwindCSS for you to have dynamic components inside your app as well.

It comes with 8 dynamic components, that any website needs.
We plan on implementing more, in the weeks to come.


## Table of Contents

* [Versions](#versions)
* [Components](#components)
* [Quick Start](#quick-start)
* [Documentation](#documentation)
* [Dependencies](#dependencies)
* [Browser Support](#browser-support)
* [Reporting Issues](#reporting-issues)
* [Licensing](#licensing)
* [Resources](#resources)

## Versions

|Angular|JavaScript|React|VueJS|Svelte|
| --- | --- | --- | --- | --- |
| <a href="https://github.com/tailwindjs/angular-tailwindjs" target="_blank">Check Angular</a>  | <a href="https://github.com/tailwindjs/tailwindjs" target="_blank">Check JavaScript</a>  | <a href="https://github.com/tailwindjs/react-tailwindjs" target="_blank">Check React</a>  | <a href="https://github.com/tailwindjs/vue-tailwindjs" target="_blank">Check VueJS</a>  | <a href="https://github.com/tailwindjs/svelte-tailwindjs" target="_blank">Check Svelte</a>  |

## Quick Start

Add the following CDN to your project:
```
<script src="https://cdn.jsdelivr.net/gh/tailwindjs/tailwindjs/dist/tailwindjs.min.js"></script>
```

## Components

- [Alert](#alert)
- [Dropdown](#dropdown)
- [Menu Collpase](#menu-collapse)
- [Modal](#modal)
- [Navbar Collpase](#navbar-collapse)
- [Popover](#popover)
- [Tooltip](#tooltip)
- [Tab Pills](#tab-pills)

## Documentation

After you have installed `@tailwindjs/tailwindjs` into your project, you can import and use our components like so:
```
<script src="path/to/node_module/@tailwindjs/tailwindjs/dist/tailwindjs.min.js"></script>
```
Or, you can add it from our CDN, and no installation will be required:
```
<script src="https://cdn.jsdelivr.net/gh/tailwindjs/tailwindjs/dist/tailwindjs.min.js"></script>
```

### Alert

You need to add an `id` on the alert wrapper.
After that, on the element that you want to add the closing action/event, you need to add
```
data-close="alert"
data-target="#id-of-the-wrapper"
```
Example usage:
```
<div
  class=" px-5 py-3 border border-solid rounded relative mb-4 bg-indigo-200 text-indigo-800 border-indigo-300"
  id="alert-id-88325020"
>
  <span class=""><i class="fa fa-heart"></i></span>
  <span class="">
    <strong class="capitalize">primary!</strong> This is a primary
    alert—check it out!
  </span>
  <button
    class="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 outline-none focus:outline-none opacity-50 px-5 py-3 hover:opacity-75 hover:text-black"
    data-close="alert"
    data-target="#alert-id-88325020"
  >
    <span>×</span>
  </button>
</div>
```

### Dropdown

You will need a toggler element, on which to add the following attributes:
```
data-toggle="dropdown"
data-target="#dropdown-id"
data-placement="placement"
```
Where placement can be one of ["top","bottom","left","right"].
And on the dropdown menu wrapper element, the following one:
```
id="dropdown-id"
```
Here is an example:
```
<button
  class="bg-blue-600 border border-solid border-blue-600 hover:bg-blue-700 hover:border-blue-800 active:bg-blue-700 active:border-blue-800 text-white text-base px-3 py-2 leading-tight rounded font-normal outline-none focus:outline-none align-middle"
  type="button"
  data-toggle="dropdown"
  data-target="#dropdown-77650932"
  data-placement="bottom"
  style="transition: all .15s ease"
>
  primary
</button>

<div class="hidden" id="dropdown-77650932">
  <div
    class="py-2 text-base text-left list-none bg-white border border-solid border-gray-100 rounded"
    style="min-width:12rem"
  >
    <a
      class="block w-full py-1 px-6 clear-both font-normal text-gray-800 whitespace-no-wrap bg-transparent border-0 hover:text-gray-900 hover:bg-gray-100 active:text-white active:bg-blue-500"
      href="#pablo"
    >
      Item 1
    </a>
    <a
      class="block w-full py-1 px-6 clear-both font-normal text-gray-800 whitespace-no-wrap bg-transparent border-0 hover:text-gray-900 hover:bg-gray-100 active:text-white active:bg-blue-500"
      href="#pablo"
    >
      Item 2
    </a>
    <a
      class="block w-full py-1 px-6 clear-both font-normal text-gray-800 whitespace-no-wrap bg-transparent border-0 hover:text-gray-900 hover:bg-gray-100 active:text-white active:bg-blue-500"
      href="#pablo"
    >
      Item 3
    </a>
    <a
      class="block w-full py-1 px-6 clear-both font-normal text-gray-800 whitespace-no-wrap bg-transparent border-0 hover:text-gray-900 hover:bg-gray-100 active:text-white active:bg-blue-500"
      href="#pablo"
    >
      Item 4
    </a>
  </div>
</div>
```

### Menu Collpase

You will need a toggler element, on which to add the following attributes:
```
data-toggle="collapse"
data-target="#menu-collapse"
```
And on the collapse element, the following one:
```
id="menu-collapse"
```
**NOTE** you can change `menu-collapse` with any ID you would like.
Here is a full sample code:
```
<div class="flex flex-wrap py-2">
  <div class="w-full px-4">
    <nav class="mb-2 flex flex-wrap items-center justify-between px-4 py-2 rounded bg-blue-600">
      <div class="flex container mx-auto flex-wrap items-center justify-between px-0 lg:px-4">
        <a class="capitalize text-xl inline-block mr-4 py-1 leading-relaxed whitespace-no-wrap text-white" href="./index.html">
          Navbar Brand
        </a>
        <button class="ml-auto cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-gray-400 rounded bg-transparent block outline-none focus:outline-none text-gray-300 opacity-50 lg:hidden" type="button" data-toggle="collapse" data-target="#navbar-collapse">
          <span aria-hidden="true">⁝⁝⁝</span>
        </button>
        <div class="hidden items-center w-full lg:flex lg:w-auto flex-grow" id="navbar-collapse">
          <ul class="lg:items-center lg:ml-auto flex flex-wrap list-none pl-0 mb-0 flex flex-col list-none pl-0 mb-0 lg:flex-row">
            <li>
              <a class="block py-2 px-2 bg-transparent no-underline text-white opacity-50 hover:opacity-75">
                Simple Link
              </a>
            </li>
            <li>
              <a class="block py-2 px-2 bg-transparent no-underline text-white opacity-50 hover:opacity-75">
                One More Simple Link
              </a>
            </li>
            <li>
              <a class="block py-2 px-2 bg-transparent no-underline text-white opacity-50 hover:opacity-75">
                Another Simple Link
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</div>
```
**NOTE**: You can change the following classes `lg:hidden` (button toggler), `lg:flex lg:w-auto` (collapse element), `lg:items-center lg:ml-auto` (list wrapper) and `lg:flex-row` (list wrapper), with any available breakpoint from TailwindCSS (`sm`,`md`,`lg`,`xl`).
**NOTE**: To check the above example, you need to set your window less then 1023px.

### Modal

You will need a toggler element, on which to add the following attributes:
```
data-toggle="modal"
data-target="#modal-id"
```
And then, on the modal components you will need to add the following ids:
- modal wrapper div
```
id="modal-id"
```
- modal inner div
```
id="modal-id-dialog"
```
- modal sibling div
```
id="modal-id-backdrop"
```
Where `modal-id` can be anything
Here is a full example:
```
<button
  class="capitalize mb-4 bg-yellow-500 border border-solid border-yellow-500 hover:bg-yellow-600 hover:border-yellow-700 active:bg-yellow-600 active:border-yellow-700 text-gray-800 w-full block text-base px-3 py-2 leading-tight rounded font-normal outline-none focus:outline-none align-middle"
  data-target="#regular-modal"
  data-toggle="modal"
  style="transition: all .15s ease"
>
  Open Modal
</button>

<div
  class="opacity-0 z-50 fixed top-0 left-0 hidden w-full h-full overflow-hidden outline-none focus:outline-none transition-opacity duration-75 ease-linear"
  id="regular-modal"
  style="display:none"
>
  <div
    class=" transition-transform duration-300 ease-out relative w-auto m-2 pointer-events-none sm:my-8 sm:mx-auto transform -translate-y-1 sm:max-w-screen-sm"
    id="regular-modal-dialog"
  >
    <div
      class=" relative flex flex-col w-full pointer-events-auto bg-white border border-solid border-gray-600 rounded outline-none focus:outline-none"
    >
      <div
        class=" flex items-start justify-between p-4 border-b border-solid border-gray-300 rounded-t"
      >
        <h5
          class="text-xl mb-2 font-medium leading-tight leading-normal"
        >
          This is a Normy Modal
        </h5>
        <button
          type="button"
          class=" float-right text-2xl font-bold text-black leading-none bg-transparent border-0 opacity-50 p-4 -mr-4 -mt-4 -mb-4 ml-auto cursor-pointer"
          data-target="#regular-modal"
          data-toggle="modal"
        >
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div class=" relative flex-auto p-4">
        <p class="mb-4">
          A long time ago in a galaxy far, far away....
        </p>
        <p class="mb-4">
          The Normy Modal was just a normal-sized modal, working for
          the better of the empire, day by day, being a loyal
          soldier, not asking any questions, doing his part for
          empowering the empire.
        </p>
      </div>
      <div
        class=" flex flex-wrap items-center justify-end p-3 border-t border-solid border-gray-300 rounded-b"
      >
        <button
          class="m-1 bg-blue-600 border border-solid border-blue-600 hover:bg-blue-700 hover:border-blue-800 active:bg-blue-700 active:border-blue-800 text-white text-base px-3 py-2 leading-tight rounded font-normal outline-none focus:outline-none align-middle"
          style="transition: all .15s ease"
        >
          Save changes
        </button>
        <button
          class="m-1 bg-gray-600 border border-solid border-gray-600 hover:bg-gray-700 hover:border-gray-800 active:bg-gray-700 active:border-gray-800 text-white text-base px-3 py-2 leading-tight rounded font-normal outline-none focus:outline-none align-middle"
          data-target="#regular-modal"
          data-toggle="modal"
          style="transition: all .15s ease"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</div>
<div
  class="hidden opacity-50 fixed inset-0 z-40 bg-black"
  id="regular-modal-backdrop"
></div>
```

### Navbar Collpase

You will need a toggler element, on which to add the following attributes:
```
data-toggle="collapse"
data-target="#navbar-collapse"
```
And on the collapse element, the following one:
```
id="navbar-collapse"
```
**NOTE** you can change `navbar-collapse` with any ID you would like.
Here is a full sample code:
```
<nav class="mb-2 flex flex-wrap items-center justify-between px-4 py-2 bg-blue-600">
  <div class="flex container mx-auto flex-wrap items-center justify-between px-0 lg:px-4">
    <a class="capitalize text-xl inline-block mr-4 py-1 leading-relaxed whitespace-no-wrap text-white" href="./index.html">
      Navbar Brand
    </a>
    <button class="ml-auto cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-gray-400 rounded bg-transparent block outline-none focus:outline-none text-gray-300 opacity-50 lg:hidden" type="button" data-toggle="collapse" data-target="#navbar-collapse">
      <span aria-hidden="true">⁝⁝⁝</span>
    </button>
    <div class="hidden items-center w-full lg:flex lg:w-auto flex-grow" id="navbar-collapse">
      <ul class="lg:items-center lg:ml-auto flex flex-wrap list-none pl-0 mb-0 flex flex-col list-none pl-0 mb-0 lg:flex-row">
        <li>
          <a class="block py-2 px-2 bg-transparent no-underline text-white opacity-50 hover:opacity-75">
            Simple Link
          </a>
        </li>
        <li>
          <a class="block py-2 px-2 bg-transparent no-underline text-white opacity-50 hover:opacity-75">
            One More Simple Link
          </a>
        </li>
        <li>
          <a class="block py-2 px-2 bg-transparent no-underline text-white opacity-50 hover:opacity-75">
            Another Simple Link
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```
**NOTE**: you can change the following classes `lg:hidden` (button toggler), `lg:flex lg:w-auto` (collapse element), `lg:items-center lg:ml-auto` (list wrapper) and `lg:flex-row` (list wrapper), with any available breakpoint from TailwindCSS (`sm`,`md`,`lg`,`xl`).
**NOTE**: To check the above example, you need to set your window less then 1023px.

### Popover

You will need a toggler element, on which to add the following attributes:
```
data-toggle="popover"
data-target="#popover-id"
data-placement="placement"
```
Where placement can be one of ["top","bottom","left","right"].
And on the popover element, the following one:
```
id="popover-id"
```
Here is an example:
```
<button
  class=" text-sm px-2 py-1 leading-normal bg-blue-600 border border-solid border-blue-600 hover:bg-blue-700 hover:border-blue-800 active:bg-blue-700 active:border-blue-800 text-white rounded font-normal outline-none focus:outline-none align-middle"
  data-toggle="popover"
  data-target="#popover-75076477"
  data-placement="right"
  style="transition: all .15s ease"
>
  On right
</button>

<div class="hidden" id="popover-75076477">
  <div
    class="border-0 block z-50 font-normal leading-normal text-sm text-left no-underline break-words rounded bg-white border border-solid border-gray-400"
    style="max-width:276px"
  >
    <h3
      class="font-medium leading-tight py-2 px-3 mb-0 border-b border-solid border-gray-200 rounded-t text-base bg-gray-100"
    >
      Popover on right
    </h3>
    <div class="py-2 px-3 text-gray-900">
      A long time ago in a galaxy far, far away....
    </div>
  </div>
</div>
```

### Tooltip

You will need a toggler element, on which to add the following attributes:
```
data-toggle="tooltip"
data-target="#tooltip-id"
data-placement="placement"
```
Where placement can be one of ["top","bottom","left","right"].
And on the tooltip element, the following one:
```
id="tooltip-id"
```
Here is an example:
```
<button
  class=" text-sm px-2 py-1 leading-normal bg-blue-600 border border-solid border-blue-600 hover:bg-blue-700 hover:border-blue-800 active:bg-blue-700 active:border-blue-800 text-white rounded font-normal outline-none focus:outline-none align-middle"
  data-toggle="tooltip"
  data-target="#tooltip-87505381"
  style="transition: all .15s ease"
>
  On top
</button>
<div class="hidden" id="tooltip-87505381">
  <div
    class="border-0 block z-50 font-normal leading-normal text-sm text-left no-underline break-words rounded"
    style="max-width:276px"
  >
    <div
      class="py-1 px-2 text-center rounded text-white bg-black"
      style="max-width:200px"
    >
      Tooltip on top
    </div>
  </div>
</div>
```

### Tab Pills

You will need an unordered list, with anchor elements as children of the list items (`ul > li > a`).
On the anchor element you will have to add the following attributes:
```
data-toggle="tab"
href="#id-of-the-content"
class="text-white bg-blue-600" // for active elements
class="bg-transparent text-blue-600" // for non-active elements
```
And on the content to by displayed alongside the tab, you will have to add the same id:
```
id="id-of-the-content"
```
Example usage:
```
<ul class="flex-col md:flex-row flex flex-wrap list-none pl-0 mb-0">
  <li class="flex-auto text-center">
    <a class="block py-2 px-4 no-underline rounded text-white bg-blue-600 sm:mb-4 md:mb-0" data-toggle="tab" href="#home">
      <i class="mr-2 fas fa-cloud-upload-alt"></i>Home
    </a>
  </li>
  <li class="sm:mb-4 md:mb-0 flex-auto text-center">
    <a class="block py-2 px-4 no-underline rounded bg-transparent text-blue-600" data-toggle="tab" href="#profile">
      <i class="mr-2 far fa-bell"></i>Profile
    </a>
  </li>
  <li class="sm:mb-4 md:mb-0 flex-auto text-center">
    <a class="block py-2 px-4 no-underline rounded bg-transparent text-blue-600" data-toggle="tab" href="#message">
      <i class="mr-2 far fa-calendar-alt"></i>Messages
    </a>
  </li>
</ul>
<div class="mt-2 relative flex flex-col min-w-0 break-words border border-solid border-gray-300 rounded">
  <div class="p-5 flex-auto">
    <div class="block">
      <div class="block" id="home">
        <p class="mb-4">
          Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.
        </p>
        <p>
          Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.
        </p>
      </div>
      <div class="hidden" id="profile">
        <p>
          Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.
        </p>
      </div>
      <div class="hidden" id="message">
        <p>
          Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.
        </p>
      </div>
    </div>
  </div>
</div>
```
If you wish to change the active classes of the anchor elements, and the non-active classes, you can do so, by calling the initTabs function:
```
// initTabs(activeClasses,normalClasses)
//  - activeClasses is for setting the classes for the active tab (anchor element)
//  - normalClasses is for setting the classes for all the tabs (anchor elements) expect the
// one that is currently active, if they are unset, then the default ones will be choosen
// activeClasses = "bg-blue-600 text-white"
// normalClasses = "text-blue-600 bg-transparent"
(function () {
  initTabs(activeClasses,normalClasses);
}());
```
Here is an example of that usage:
```
<ul class="flex-col md:flex-row flex flex-wrap list-none pl-0 mb-0">
  <li class="flex-auto text-center">
    <a class="block py-2 px-4 no-underline rounded text-gray-100 bg-pink-600 sm:mb-4 md:mb-0" data-toggle="tab" href="#home">
      <i class="mr-2 fas fa-cloud-upload-alt"></i>Home
    </a>
  </li>
  <li class="sm:mb-4 md:mb-0 flex-auto text-center">
    <a class="block py-2 px-4 no-underline rounded bg-gray-100 text-pink-600" data-toggle="tab" href="#profile">
      <i class="mr-2 far fa-bell"></i>Profile
    </a>
  </li>
  <li class="sm:mb-4 md:mb-0 flex-auto text-center">
    <a class="block py-2 px-4 no-underline rounded bg-gray-100 text-pink-600" data-toggle="tab" href="#message">
      <i class="mr-2 far fa-calendar-alt"></i>Messages
    </a>
  </li>
</ul>

<script type="text/javascript">
  (function () {
    initTabs("bg-pink-600 text-gray-100","text-pink-600 bg-gray-100");
  }());
</script>
```

### Styles

Do not forget that you will need to either get a compiled version of TailwindCSS, or to compile your own version, but one that will have the following classes from TailwindCSS:
```
px-5 py-3 border border-solid rounded relative mb-4 absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 outline-none focus:outline-none opacity-50 hover:opacity-75 hover:text-black text-xl inline-block mr-5 align-middle mr-8 bg-indigo-200 text-indigo-800 border-indigo-300 bg-gray-300 text-gray-800 border-gray-400 bg-green-200 text-green-800 border-green-300 bg-red-200 text-red-800 border-red-300 bg-orange-200 text-orange-800 border-orange-300 bg-blue-200 text-blue-800 border-blue-300 bg-white text-gray-600 border-gray-100 bg-gray-400 border-gray-500 left-0 z-50 hidden py-2 text-base text-left list-none mt-1 mb-1 mr-1 ml-1 block w-full py-1 px-6 clear-both font-normal whitespace-no-wrap border-0 hover:text-gray-900 hover:bg-gray-100 active:text-white active:bg-blue-500 text-white bg-blue-500 text-gray-400 pointer-events-none mb-2 flex flex-wrap items-center bg-gray-600 justify-between px-4 bg-blue-600 container mx-auto lg:px-4 px-0 capitalize mr-4 leading-relaxed ml-auto cursor-pointer px-3 text-gray-300 lg:hidden lg:flex lg:w-auto flex-grow lg:items-center lg:ml-auto pl-0 mb-0 flex-col lg:flex-row px-2 no-underline mb-3 leading-normal text-sm break-words text-center bg-black mr-2 ml-2 bg-green-600 bg-red-600 bg-yellow-500 bg-teal-500 bg-gray-100 text-gray-900 text-black bg-gray-800 -mb-px flex-auto text-blue-600 hover:text-blue-700 cursor-default rounded-t border-transparent border-b-0 border-b border-gray-200 sm:flex-row md:flex-row xl:flex-row navbar-expand sm:hidden md:hidden xl:hidden p-4 pointer-events-auto border-gray-600 transition-transform duration-300 ease-out w-auto m-2 sm:my-8 sm:mx-auto transform -translate-y-1 sm:max-w-xs md:max-w-screen-md lg:max-w-screen-lg sm:max-w-screen-sm justify-end p-3 border-t border-gray-300 rounded-b items-start opacity-0 fixed h-full overflow-hidden transition-opacity duration-75 ease-linear font-medium leading-tight mb-3mr-3 ml-3 mt-3
```
If you use `purge`, `postcss-purgecss`, `postcss` or any other tool to delete unused `css`, you can add the following array into your ignore (i.e. keep classes / whitelist etc.):
```
["px-5","py-3","border","border-solid","rounded","relative","mb-4","absolute","bg-transparent","text-2xl","font-semibold","leading-none","right-0","top-0","outline-none","focus:outline-none","opacity-50","hover:opacity-75","hover:text-black","text-xl","inline-block","mr-5","align-middle","mr-8","bg-indigo-200","text-indigo-800","border-indigo-300","bg-gray-300","text-gray-800","border-gray-400","bg-green-200","text-green-800","border-green-300","bg-red-200","text-red-800","border-red-300","bg-orange-200","text-orange-800","border-orange-300","bg-blue-200","text-blue-800","border-blue-300","bg-white","text-gray-600","border-gray-100","bg-gray-400","border-gray-500","left-0","z-50","hidden","py-2","text-base","text-left","list-none","mt-1","mb-1","mr-1","ml-1","block","w-full","py-1","px-6","clear-both","font-normal","whitespace-no-wrap","border-0","hover:text-gray-900","hover:bg-gray-100","active:text-white","active:bg-blue-500","text-white","bg-blue-500","text-gray-400","pointer-events-none","mb-2","flex","flex-wrap","items-center","bg-gray-600","justify-between","px-4","bg-blue-600","container","mx-auto","lg:px-4","px-0","capitalize","mr-4","leading-relaxed","ml-auto","cursor-pointer","px-3","text-gray-300","lg:hidden","lg:flex","lg:w-auto","flex-grow","lg:items-center","lg:ml-auto","pl-0","mb-0","flex-col","lg:flex-row","px-2","no-underline","mb-3","leading-normal","text-sm","break-words","text-center","bg-black","mr-2","ml-2","bg-green-600","bg-red-600","bg-yellow-500","bg-teal-500","bg-gray-100","text-gray-900","text-black","bg-gray-800","-mb-px","flex-auto","text-blue-600","hover:text-blue-700","cursor-default","rounded-t","border-transparent","border-b-0","border-b","border-gray-200","sm:flex-row","md:flex-row","xl:flex-row","navbar-expand","sm:hidden","md:hidden","xl:hidden","p-4","pointer-events-auto","border-gray-600","transition-transform","duration-300","ease-out","w-auto","m-2","sm:my-8","sm:mx-auto","transform","-translate-y-1","sm:max-w-xs","md:max-w-screen-md","lg:max-w-screen-lg","sm:max-w-screen-sm","justify-end","p-3","border-t","border-gray-300","rounded-b","items-start","opacity-0","fixed","h-full","overflow-hidden","transition-opacity","duration-75","ease-linear","font-medium","leading-tight","mb-3mr-3","ml-3","mt-3"]
```
Then, you can import your styles inside your files like so:
```
<link rel="stylesheet" href="path/to/your/tailwindcss/compiled/styles.css">
```
**NOTE**: alternatively, you can leave the components without any TailwindCSS styling code and render only HTML.

## Dependencies

**@tailwindjs/tailwindjs** to properly work needs the following dependencies:
```
<!-- Development version -->
<script src="https://unpkg.com/@popperjs/core@2/dist/umd/popper.js"></script>
```
Or
```
<!-- Production version -->
<script src="https://unpkg.com/@popperjs/core@2"></script>
```

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

| Chrome | Firefox | Edge | Safari | Opera |
|:---:|:---:|:---:|:---:|:---:|
| <img src="https://github.com/tailwindjs/tailwindjs/blob/master/assets/logos/chrome-logo.png?raw=true" width="64" height="64"> | <img src="https://github.com/tailwindjs/tailwindjs/blob/master/assets/logos/firefox-logo.png?raw=true" width="64" height="64"> | <img src="https://github.com/tailwindjs/tailwindjs/blob/master/assets/logos/edge-logo.png?raw=true" width="64" height="64"> | <img src="https://github.com/tailwindjs/tailwindjs/blob/master/assets/logos/safari-logo.png?raw=true" width="64" height="64"> | <img src="https://github.com/tailwindjs/tailwindjs/blob/master/assets/logos/opera-logo.png?raw=true" width="64" height="64"> |

## Reporting Issues

We use GitHub Issues as the official bug tracker for the Angular Landing Page. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the @tailwindjs/tailwindjs.
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.

## Contributors
This project exists thanks to all the people who contribute. [[Contribute](CONTRIBUTING.md)].
<a href="https://github.com/tailwindjs/tailwindjs/contributors"><img src="https://opencollective.com/tailwindjs/contributors.svg?width=890&button=false" /></a>

## Licensing

- Copyright 2020 Tailwindjs/tailwindjs

- Licensed under <a href="https://github.com/tailwindjs/tailwindjs/blob/master/LICENSE.md" target="_blank">MIT</a>

## Resources
- Tailwindjs projects: <a href="https://github.com/tailwindjs/" target="_blank">https://github.com/tailwindjs/</a>
- JavaScript & TailwindCSS: <a href="https://github.com/tailwindjs/tailwindjs" target="_blank">https://github.com/tailwindjs/tailwindjs</a>
- Angular & TailwindCSS: <a href="https://github.com/tailwindjs/angular-tailwindjs" target="_blank">https://github.com/tailwindjs/angular-tailwindjs</a>
- React & TailwindCSS: <a href="https://github.com/tailwindjs/angular-tailwindjs" target="_blank">https://github.com/tailwindjs/react-tailwindjs</a>
- Svelte & TailwindCSS: <a href="https://github.com/tailwindjs/angular-tailwindjs" target="_blank">https://github.com/tailwindjs/svelte-tailwindjs</a>
- VueJS & TailwindCSS:  <a href="https://github.com/tailwindjs/angular-tailwindjs" target="_blank">https://github.com/tailwindjs/vue-tailwindjs</a>
- Issues: <a href="https://github.com/tailwindjs/tailwindjs/issues" target="_blank">Github Issues Page</a>
