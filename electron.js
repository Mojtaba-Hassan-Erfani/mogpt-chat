const { app, BrowserWindow, protocol, session } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');

let mainWindow;

const createWindow = () => {
	mainWindow = new BrowserWindow({
		width: 900,
		height: 680,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
			webSecurity: false,
		},
	});

	mainWindow.webContents.session.webRequest.onHeadersReceived((details, callback) => {
		callback({
			responseHeaders: {
				...details.responseHeaders,
				'Access-Control-Allow-Origin': ['*'],
				'Access-Control-Allow-Methods': ['GET, POST, PUT, DELETE, OPTIONS'],
				'Access-Control-Allow-Headers': ['Origin, X-Requested-With, Content-Type, Accept'],
			},
		});
	});


  const startUrl = isDev
    ? 'http://localhost:3000'
    : new URL(
        path.join(__dirname, '../build/index.html'),
        'file:'
      ).toString();

	mainWindow.loadURL(startUrl);
	mainWindow.webContents.openDevTools();
	mainWindow.on('closed', () => (mainWindow = null));
};

app.on('ready', () => {
	// Clear cache and storage data
	session.defaultSession.clearCache();
	session.defaultSession.clearStorageData();
	createWindow();
	// Allow loading local resources
	protocol.registerFileProtocol('file', (request, callback) => {
		const pathname = request.url.replace('file:///', '');
		callback(decodeURIComponent(pathname));
	});
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
	if (mainWindow === null) createWindow();
});
