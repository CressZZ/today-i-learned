const {app, BrowserWindow} =  require('electron');
const url = require('url')
const path = require('path')

const HTML = url.format({
  protocol: 'file',
  //문자열로 안하고 path.join으로 한 이유는 윈도우랑 맥이랑 달라서
  pathname: path.join(__dirname,'index.html')
})

console.log(HTML)
console.log("what?")

app.on('ready', () => {
  console.log('ready')

  const win = new BrowserWindow();
  win.loadURL(HTML)
})
