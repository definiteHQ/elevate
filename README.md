# Definite :: Elevate CSS Framework #
Welcome to our beloved css framework, the "**Elevate**" css framework. Please read the instruction below to use and how to
contributing to this framework.

## Table of Contents ##

* **Contributing**
* **Setup**
* **How To**

### Contributing ###
Before begin contributing, please read this guidlines carefully. We will using **BEM** methodology for all code styling.
Please refer to the BEM tutorial if you want to know more about BEM.

### Setup ###
Before using this framework, you have to install the requirements first. Please read this instructions for
installing the dependencies.

#### 1. Install Node.JS ####
You must have a Node.JS installed on the system. For installing Node.JS, you can go to the official site
of Node.JS here, and select what OS type you prefer to install the Node.JS.

#### 2. Clone This Repo ####
After checking that Node.JS installed, you can clone this repo to your local machine. And then, open up
terminal/command-prompt, change directory to where this cloned repo belonging, and type `npm install`.
And, that's it! All fire up!

### How To ###
Before you begin coding, please note that we've created well-structured environment and directory hierarchy.
We use 3 conditional environments, which is **Testing Environment**, **Development Environment** and **Production Environment**.

We will describe what it's for below:

- `Testing Environment`: This ENV purpose is to be used whenever you want to contribute to this project. We
use this environment for developing this framework. So, don't use this environment for your development/staging/production
project.
- `Development Environment`: Use this ENV when you want to startup your project or developing some existing project.
This is good when the team wants to start the project, fixing some bugs, etc.
- `Production Environment`: For production, use this ENV to have the generated and minified files and folders.

Beside the environment, take a note that we use **Grunt** as our task runner. So, if you un-familliar with Grunt,
we prefer you can learn some basic in their official site.

#### Grunt Command Lists ####
After you install everything, as mentioned above, you can use our generated grunt command for start development.
These commands are:

- `grunt test`: This command is used whenever you want to start development/contribute for this frameworks.
The flow of this command is, first the command will check and delete "**./framework-tests**" directory from root project,
then generate a new files for tests. The public file is inside the **./framework-tests** directory. We recommend to not
modifying the files in that folder, use **./srcs** directory instead for begin coding.
- `grunt test:watch`: Run this command whenever you start developing the `grunt test`. This task will watch
the change and run the `Browser Sync` module and starting the little web server automatically.
- `grunt dev`: Same as `grunt test`, but the difference is the task doesn't create **./framework-tests** directory,
instead **./dist** directory for public. So, your generated public test directory is **./dist**.
- `grunt dev:watch`: Watching the file and folder changes in the **./srcs** directory.
- `grunt`: This is the default task as we serve them for `Production Environment`. Use this task whenever you
finished the project or want to release another version.
- `grunt default:watch`: This watching task is used if you want to watch the current change on `Production Environment`
environment. Please note that this will change any changed files or directories in **./srcs** directory.
- `grunt clean`: For cleaning project root structure. **./dist** and **./framework-tests** directories will removed.

*Note: For all watching task without **Browser Sync**, you can optionally pass `--noserve` parameters.*

For now on, we only can help you how to use this framework, not the well-documented framework components, libraries
or else. It's still on development. So, for any related questions about using the framework, feel free
to ask us via emai to [Definite Developers Mailing List](mailto:developer@definite.co.id).

Good luck and have fun!