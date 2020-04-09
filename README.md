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

- Alert
- Dropdown (PopperJS)
- Responsive Menu
- Modal
- Responsive Navbar
- Popover (PopperJS)
- Tooltip (PopperJS)
- Tab Pills

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
- Dropdown (PopperJS)
- Responsive Menu
- Modal
- Responsive Navbar
- Popover (PopperJS)
- Tooltip (PopperJS)

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
