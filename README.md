# Electron Factory!

**A minimal factory to build electron apps easily.**

This is a minimal Electron factory to develop and build applications based on the Electron, electron-builder and electron-toolkit documentation.

A basic Electron application needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/daveporras/electron-factory.git
# Go into the repository
cd electron-factory
# Install dependencies
npm install
# Run the app
npm start
```

Note: main.js source code is commented in Spanish :-)
