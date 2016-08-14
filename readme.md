

## General Info

I started with a new angular CLI project: 

    ng new electronAngularBoilerplate

Then I added an `electron_main.js` file to bootstrap my electron application. This file is located in `./src` 

The `./src/index.html` file had some changes to work with both electron and angular2 (see "Current Errors" below).

I also renamed the ElectronAngularBoilerplateApp to PrimaryApp and PrimaryComponent. Reason: it's shorter and more descriptive.

_Note: Electron and angular2 need seperate package.json files. The one in the project root is my angular one, The electron package.json is under `./src`_

Currently working:

- `ng serve` : this serves up the web app into the `./dist` folder  
- `npm run electron` : this serves up the electron app the `./dist` folder

## electron live-reloading 

This doesn't work great because electron is being served out of `./dist` and that is the transpiled code.

You can simulate a live reload by building the source while electron is running. In one shell, run:

    npm run electron
    
and in another, run 

    ng build --watch
    
I've had it freeze my app for a few seconds, so it's not as good as a true live-reload.

TODO: set up a watcher. everytime my src directory changes, run ng build. 

## Current Errors:

- The webapp currently runs without any errors.
- The electron app has issues with these lines:


    <!--will give errors in electron... oh well-->
    <script src="vendor/es6-shim/es6-shim.js"></script>
    <script src="vendor/reflect-metadata/Reflect.js"></script>
    <script src="vendor/systemjs/dist/system.src.js"></script>
    <script src="vendor/zone.js/dist/zone.js"></script>


producing these errors:

    file:///vendor/es6-shim/es6-shim.js Failed to load resource: net::ERR_FILE_NOT_FOUND
    file:///vendor/reflect-metadata/Reflect.js Failed to load resource: net::ERR_FILE_NOT_FOUND
    file:///vendor/systemjs/dist/system.src.js Failed to load resource: net::ERR_FILE_NOT_FOUND
    file:///vendor/zone.js/dist/zone.js Failed to load resource: net::ERR_FILE_NOT_FOUND

Those lines are needed by the webapp. Electron is able to load these files in this block:

    <script>
        // if require is defined, we are on node / electron:
        if (!(typeof(require) == "undefined")){
            require('./vendor/es6-shim/es6-shim.js');
            require("./vendor/reflect-metadata/Reflect.js");
            require("./vendor/systemjs/dist/system.src.js");
            require("./vendor/zone.js/dist/zone.js");
            require("./system-config.js");
            require("./main.js");
        } else {
            System.import('system-config.js').then(function () {
                System.import('main');
            }).catch(console.error.bind(console));      
        }
    </script>
    
At this point I do not see a better solution.