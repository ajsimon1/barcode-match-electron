const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')

let win

function createWindow () {
  win = new BrowserWindow({
    titleBarStyle: 'hidden',
    width: 800,
    height: 600,
    icon: path.join(__dirname, 'barcode.jpg'),
   })
  win.loadURL(url.format ({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file',
    slashes: true,
  }))
}

app.on('ready', createWindow)
