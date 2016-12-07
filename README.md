# Definite Elevate CSS #
This is our Open-Source framework CSS for creating beautifull, well-documented and modular CSS framework. Right now
this project still in development. Feel free to ask us and create some issue regarding to the bug/fix/question.

We will continue to work and fix them as soon as possible.

Below are our guidelines how to use this framework.

## Table of Contents ##

- Installation
- Folder Structure Explanation
- Grunt Command Line

### Installation ###
The first thing is, you must have `NPM` installed. And then go to your working directory and just type:  
`npm install`.

After the framework installed, you must install our dependencies. Because we use the `Grunt` as our task runner,
we already create a `Gruntfile.js` for easy use. You don't have to change anything inside the file (but if you
want to create some structure yourself, go on), just use the **Grunt Command Line** as we describe in the third
section.

So, just run `npm install` to install every dependencies. And, that's it! Our framework can be use for your
development.

### Folder Structure Explanation ###
We have structured folder for your development. As we use `BEM` methodology for our styling guide, you may
use them too for better styling syntax.

Our main development directory are inside `srcs` directory. Beside that, all files all the project public
directory. As for example, the root `./` directory are public. This style we use for easy understanding for
newbie fronted. :)

Below is the directory structure and descriptions:

- `./`: Root Directory. Will be public directory.
- `./srcs`: The main development directory. All developed code must remain here.
    - `/assets`: All assets files, like *images, fonts, .etc* will remain here.
    - `/html`: All HTML files. We use `Grunt Bake` for templating. You can check the usage on its github page.
        - `/_partials`: All partial HTML files. For naming, use underscore `_` as prefix. Example: `_my-widget.html`.
        - `/pages`: All page HTML saved here.
    - `/scripts`: We use `Webpack` as our script bundler, so all *javascript* files will remain here. To import other files, just use the node `require` function.
        - `/blocks`: Since we use `BEM` methodology for styling, all component that using javascript can coded here. For example: `navbar.js`.
        - `/vendors`: All related vendor scripts remain here.
        - `elevate.js`: Our main script. Please do not change if you're not a contributor.
        - `vendor.js`: Just require any vendor related scripts here.
    - `/scss`: This is the main development folder for styling and using the framework. Please use the underscore `_` for imported files.
        - `/blocks`: All `BEM` block will remain here. Just in case, please use the convention name related to `BEM` guidelines. For example, any block will have it's directory.
        - `/helpers`: All non `BEM` style for helpers remain here.
        - `/vendors`: All vendor styles remain here.
        - `_variables.scss`: The default theme variable. Please attach your variables here.
        - `elevate.scss`: This is our main SCSS file. Please do not change anything inside this file.

That's it, basically our structure is simple as that. So you may develop your project inside the `srcs` directory.

In any case you want to modify, just don't forget to change your configuration in the `Gruntfile.js`.

### Grunt Command Line ###
We have creating the grunt command line to easy developing, which is:

- `grunt`: This grunt task are the default. It will compile all sources to the production ready.
- `grunt watch`: This will watch the tasks.
- `grunt serve`: We use `Browser Sync` as our auto-reload server. If you use this, don't use the `grunt watch`.
- `grunt clean`: If you need to clean your project, this command will remove all production files.

So far, this document will get updated periodically. In any case you need a better explantion, just feel free to send
us an email to: developer@definite.co.id.

Best Regard,
**Definite Tech**