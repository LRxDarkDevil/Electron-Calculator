const { app, BrowserWindow } = require('electron');

async function createWindow () {
    const win = new BrowserWindow({
      width: 470,
      height: 790,
      title: "First App",
      // frame:false,
      transparent: true,
      backgroundColor: '#00FFFFFF',
      resizable:false,
      icon: __dirname + '\\calculator.png',
      webPreferences:{
        nodeIntegration:true,
        contextIsolation: false, 
        enableRemoteModule:true 
      }
    })
    win.setMenu(null)
    // win.webContents.openDevTools()
    // win.webContents.on('before-input-event', (event, input) => {
      //  if(input.type == 'keyDown'){
        //  console.log(input.key)
        // }
        // })
        
        
        win.loadFile('index.html')
    //  win.loadURL('http://127.0.0.1:5500/index.html')
  }

 app.whenReady().then(createWindow);