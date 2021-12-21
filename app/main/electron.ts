/*
 * @Author: fengtingting
 * @Date: 2021-12-21 15:34:47
 * @LastEditTime: 2021-12-21 16:36:37
 * @LastEditors: fengtingting
 */
import path from 'path'
import { app, BrowserWindow, ipcMain } from 'electron'
import isDev from 'electron-is-dev' // 判断开发环境，生产环境还是开发环境

let mainWindow = null
const ROOT_PATH = app.getAppPath()

console.log(ROOT_PATH, 'ROOT_PATH')

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    frame: true,
    trafficLightPosition: { x: 10, y: 10 },
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
      webviewTag: true
    }
  })
  // const createWindow = () => {
  //   mainWindow = new BrowserWindow({
  //     width: 800,
  //     height: 600,
  //     frame: false,
  //     titleBarStyle: 'hidden',
  //     webPreferences: {
  //       nodeIntegration: true,
  //       enableRemoteModule: true,
  //       contextIsolation: false,
  //       webviewTag: true
  //     }
  //   })
  // }

  if (isDev) {
    mainWindow.loadURL(`http://127.0.0.1:7001`)
    mainWindow.webContents.openDevTools() // 打开调试窗口
  } else {
    mainWindow.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`)
  }

  mainWindow.on('close', () => {
    mainWindow = null
  })
}
//
ipcMain.on('get-root-path', (event, arg: string) => {
  event.reply('reply-root-path', ROOT_PATH)
})

app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
