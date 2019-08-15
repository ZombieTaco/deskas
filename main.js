'use strict';
const electron = require('electron');
const { globalShortcut } = require('electron')
const { menubar } = require('menubar');

const mb = menubar({index:"file:///index.html", webPreferences: {nodeIntegration: true}, tooltip: "Deskas", icon:"img/icon.png", width:450, height:600, transparent: true, frame: false, preloadWindow: true});

const contextMenu = electron.Menu.buildFromTemplate([
  {
    label: 'About',
    click() {
      electron.dialog.showMessageBox({title: "Deskas", type:"info", message: "Desktop Google Assitant\nBuilt on electron", buttons: ["Close"] });
    }
  },
  {
    label: 'Quit',
    click() {
      mb.app.quit();
    }
  }

]);

mb.on('ready', function ready () {
  if (process.platform == 'win32') {
    mb.tray.setContextMenu(contextMenu);
  }
  globalShortcut.register('alt+q', function () {
    mb.window.show()
  })
});
