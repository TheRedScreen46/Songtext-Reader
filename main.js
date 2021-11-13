//Import
const { app, BrowserWindow, ipcMain } = require('electron')
const fs = require('fs');

//App
app.whenReady().then(() => {
    createWindow()
})

//Functions
function createWindow () {
    const win = new BrowserWindow({
        icon: __dirname + '/res/icon.ico',
        //frame: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
        width: 800,
        height: 600,
        //minWidth: 800,
        //minHeight: 600
    })
  
    win.loadFile('index.html')
    win.removeMenu()

    win.on('close', () => {
        app.quit()
    })
}

//IPC Main
ipcMain.on('close', () => {
    app.quit()
})
ipcMain.on('window:max', () => {
    if(!mainWindow.isMaximized()){
        mainWindow.maximize()
    } else{
        mainWindow.unmaximize()
    }
})
ipcMain.on('window:min', () => {
    mainWindow.minimize()
})