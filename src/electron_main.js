// main/index.js

'use strict';  
const electron = require('electron'),  
  app = electron.app,
  BrowserWindow = electron.BrowserWindow;  

/* electron-reload will not work because electron runs out of the dist directory. This might change if electron supports TS better.
 to manually update the appp, do this:
  1) run `npm run electron` in one shell.
  2) every time you want to update the electron app, run `ng build` in the second shell
  This will either update the app or freeze your system. 
*/
require("electron-reload")(__dirname);

var mainWindow = null;

app.on('window-all-closed', function() {  
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {  
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.webContents.openDevTools();
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});