# [jQuery](https://jquery.com/) - New Wave JavaScript


## Contribution Guides

In the spirit of open source software development,jQuery always encourages community code contribution. To help you get started and before you jump into writing code, be sure to read these important contribution guidelines thoroughly:

1. [Getting Involved](https://contribute.jquery.org/)

2. [Core Style Guide](https://contribute.jquery.org/style-guide/js/)

3. [Writing Code for jQuery Foudation Projects](https://contribute.jquery.org/style-guide/js/)

## Environments in which to us jQuery

  * [Browser support](https://jquery.com/browser-support/)

  * jQuery also supports Node,browser extensions,and other non-browser environments.

## What you need to bulid your own jQuery 

To build jQuery,you need tohave the latest Node.js/npm and git 1.7 or later. Earlier versions might work,but are not supported.

For Windows,you have to download and install git and Node.js.

OS X users shoud install Homebrew. Once Homebrew is installed,run brew install git to install git, and brew install node to install Node.js.

Linux/BSD users should use their appropriate package managers to install git and Nodes.js,or build from source if you swing that way.Easy-peasy.

## How to build your own jQuery

Clone a copy of the main jQuery git repo by running:

    git clone git://github.com/jquery/jquery.git

Enter the jqery directory and run the build script:

```js
cd jquery && npm run build
```

The build version of jQuery will be put in the dist/ subdirectory,along with the minified copy and associated map file.

If you want to create custom build or help with jQuery development,it would be better to install [grunt command line interface](https://github.com/gruntjs/grunt-cli) as a global package:

```js
npm istall -g grunt-cli
```

Make sure you have grunt installed by testing:

```js
grunt -v
```

Now by running the grunt command, in the jquery directory,you can build a full version of jQuery,just like with an npm run build command:

    grunt

There are many other tasks available for jQuery Core:

    grunt -help

## Modules

Special builds can be creadted that exclude subsets of jQuery gunctionality.This allows for smaller custom builds when the builder is certain that those parts of jQuery are not being used. For example, an app that only used JSONP for $.ajax() and did not calculate offsets or positions of elements could exclude the offset and ajax/xhr modules.

Any module may be excluded except for core , and selector. To exclude a module,pass its path relative to the src folder(without the `.js `extension).

Some example modules that can be excluded are:

    * ajax: ALL AJAX functionality: %.ajax(), $.get(), $.post(),$.ajaxSetup(), .load(), transports,and ajax event shorthands such as .ajaxStart().

    * ajax/xhr: The XMLTHTTPRequest AJAX transport only.

    * ajax/script:The <script> AJAX transport only;used to retrieve scripts.

    * ajax/jsonp: The JSONP AJAX transport only; used to retrieve scripts.

    * css: THE

    * css/showHide: Non-animated

    * deprecated: Methods

    * css