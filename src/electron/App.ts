import { app, BrowserWindow } from 'electron';
import { join } from 'path'

class App {
    static mainWindow: Electron.BrowserWindow | null;
    static application: Electron.App;
    static BrowserWindow: typeof BrowserWindow;
    
    private static onWindowAllClosed() {
        if (process.platform !== 'darwin') {
            App.application.quit();
        }
    }

    private static onClose() {
        App.mainWindow = null;
    }

    private static onReady() {
        App.mainWindow = new App.BrowserWindow({
            width: 1200,
            height: 1000,
            icon: __dirname + "/test.ico",
            title: "Regatron"
        });
        
        const path = join('file://', __dirname, '/index.html')
        App.mainWindow.loadURL(path);
        
        App.mainWindow.on('closed', App.onClose);
        
        App.application.on('activate', () => {
            if (App.BrowserWindow.getAllWindows().length === 0) App.onReady()
        })
    }

    static start(app: Electron.App, browserWindow: typeof BrowserWindow) {
        App.BrowserWindow = browserWindow;
        App.application = app;
        App.application.on('window-all-closed', App.onWindowAllClosed);
        App.application.on('ready', App.onReady);
    }
}

App.start(app, BrowserWindow);