// Módulos para el control de la vida de la aplicación y crear una ventana navegadora nativa.
const {app, BrowserWindow} = require('electron');
const path = require('path');

// Mantiene una referencia global del objeto window, si no lo hace, la ventana será cerrada automáticamente cuando el objeto JavaScript sea basura.
let mainWindow;

function createWindow () {
  // Crea la ventana navegadora.
  mainWindow = new BrowserWindow({width: 800, height: 600});

  // Si la variable de entorno (definida en el package.json) existe, usará la url de desarrollo para cargar la ventana, de lo contrario usará el archivo index.html de la carpeta build.

  // Y carga el index.html de la app.
  /* mainWindow.loadFile('index.html'); */
  mainWindow.loadFile(path.join(__dirname, './app/index.html'));

  // Abre las DevTools.
  // mainWindow.webContents.openDevTools();

  // Emitido cuando la ventana es cerrada.
  mainWindow.on('closed', function () {
    // Abandona el objeto window, usualmente se deberia almacenar ventanas en un array si la aplicación soporta multiventanas, éste deberia ser el momento cuando se debería borrar el elemento correspondiente.
    mainWindow = null;
  });
}

// Éste método será llamado cuando Electron haya finalizado la inicialización and esté listo para crear ventanas navegadoras. Algunas APIs pueden solo ser usadas después que éste evento ocurra.
app.on('ready', createWindow);

// Sale cuando todas las ventanas estén cerradas.
app.on('window-all-closed', function () {
  // En OS X ésto es común para aplicaciones y su barra de menú para mantenerse activa hasta que el usuario salga explícitamente con Cmd + Q.
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  // En OS X ésto es común para recrear una ventana en la aplicación cuando el ícono del dock sea clickeado y no haya otra ventana abierta.
  if (mainWindow === null) {
    createWindow();
  }
});

// En éste archivo se puede incluir el resto del código de los principales procesos específicos de la aplicación. Tambien se pueden colocar en archivos separados y luego importarlos aquí.