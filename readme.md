This repo is broken at the moment.

I started with a new angular CLI project: 

    ng new electronAngularBoilerplate

Then I tried to follow the directions at this blog post:

    https://auth0.com/blog/2015/12/15/create-a-desktop-app-with-angular-2-and-electron/
    
With these exceptions:

1. my webpack.config.js has these entries as I believe angular2 has been renamed:

    ```javascript
    '@angular/core',
    '@angular/router',
    '@angular/common',
    '@angular/compiler',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic'
    ```


2. angularCLI uses 'main' as it's file, so electron's main file is called `electron_main.js`

3. In wepback.config.js, I made the build directory be `electron_build` to avoid confusion.

Note: According to the tutorial, electron and angular need seperate package.json files. the one in the project root is my angular one, the electron package.json is under `./src`

Currently working:

- `ng serve` works fine 
- `npm run watch` works fine (see scripts or the tutorial for the webpack command)


Current errors:

These:

```bash  
electron .
electron ./electron_build
electron ./src
electron ./src/app
```  

produce this error block:

```bash
Error opening app
The app provided is not a valid Electron app, please read the docs on how to write one:
https://github.com/electron/electron/tree/v1.1.1/docs

Error: Cannot find module '/home/jeff/dev/ang_proj/electronAngularBoilerplate'
```

Running `npm run electron` produces this error:

```bash
> electron-angular-boilerplate@0.0.0 electron /home/jeff/dev/ang_proj/electronAngularBoilerplate
> electron src/app

Error opening app
The app provided is not a valid Electron app, please read the docs on how to write one:
https://github.com/electron/electron/tree/v1.1.3/docs

Error: Cannot find module '/home/jeff/dev/ang_proj/electronAngularBoilerplate/src/app'

npm ERR! Linux 4.4.0-22-generic
npm ERR! argv "/home/jeff/local/bin/node" "/home/jeff/local/bin/npm" "run" "electron"
npm ERR! node v5.10.1
npm ERR! npm  v3.8.7
npm ERR! code ELIFECYCLE
npm ERR! electron-angular-boilerplate@0.0.0 electron: `electron src/app`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the electron-angular-boilerplate@0.0.0 electron script 'electron src/app'.
npm ERR! Make sure you have the latest version of node.js and npm installed.
npm ERR! If you do, this is most likely a problem with the electron-angular-boilerplate package,
npm ERR! not with npm itself.
npm ERR! Tell the author that this fails on your system:
npm ERR!     electron src/app
npm ERR! You can get information on how to open an issue for this project with:
npm ERR!     npm bugs electron-angular-boilerplate
npm ERR! Or if that isn't available, you can get their info via:
npm ERR!     npm owner ls electron-angular-boilerplate
npm ERR! There is likely additional logging output above.

npm ERR! Please include the following file with any support request:
npm ERR!     /home/jeff/dev/ang_proj/electronAngularBoilerplate/npm-debug.log
```
