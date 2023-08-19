require('dotenv').config()
const express = require("express")
const SocketConnection = require('./services/socket')
const { createServer } = require("http")
const { Server } = require("socket.io")
const app = express()
const cookieParser = require('cookie-parser')
const cors = require("cors")
const path = require('path')
const fs = require('fs').promises;
const fsSync = require('fs');
const httpServer = createServer(app)
let headersSent = false
let origins = { origin: process.env.HOST }

const socketServer = new Server(httpServer, {
  cors: {
    origin: origins, methods: ["GET", "POST"]
  }
})
module.exports = { socketServer }
SocketConnection(socketServer)
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())
const port = process.env.PORT || 3000
let morgan = require("morgan")
app.use(morgan("dev"))
app.use(cookieParser())
app.use(express.static("public"))
app.get('/getMovieList', async (req, res) => {
  let result = await readMedia()
  return res.status(200).json({ result })
})
/**
 * 
 * @todo
 * 
 * fix the folder path
 * fix upload bug, err
 * node:_http_outgoing:648
    throw new ERR_HTTP_HEADERS_SENT('set');
    ^

Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    at new NodeError (node:internal/errors:405:5)
    at ServerResponse.setHeader (node:_http_outgoing:648:11)
    at ServerResponse.header (/root/vfe/node_modules/express/lib/response.js:794:10)
    at ServerResponse.send (/root/vfe/node_modules/express/lib/response.js:174:12)
    at ServerResponse.json (/root/vfe/node_modules/express/lib/response.js:278:15)
    at IncomingMessage.<anonymous> (/root/vfe/server.js:76:30)
    at IncomingMessage.emit (node:events:514:28)
    at addChunk (node:internal/streams/readable:324:12)
    at readableAddChunk (node:internal/streams/readable:297:9)
    at Readable.push (node:internal/streams/readable:234:10) {
  code: 'ERR_HTTP_HEADERS_SENT'
}
 */
const folderPath = path.join(__dirname, '/public/media')
console.log(folderPath)
async function readMedia(folderPath) {
  try {
    const files = await fs.readdir('/root/vfe/public/media');

    const filesList = files.map(file => {
      return path.join('/root/vfe/public/media', file);
    });

    return filesList;
  } catch (err) {
    console.error('Error reading directory:', err);
    throw err;
  }
}
(async () => {
  const rootDirectory = '/root/vfe/public/media';

  try {
    const filesList = await readMedia(rootDirectory);
    console.log('Files in the media directory:', filesList);
  } catch (err) {
    console.error('Error:', err);
  }
})();

// app.post('/upload', (req, res) => {
//   console.log('hooooooooooooooooooooOOOOOOOOOOOOOO')
// })


app.post('/upload', async function (req, res) {
  console.log('got request==========')
  const fileName = 'public/media/' + req.headers["file-name"];
  console.log(fileName)
  
  let dataReceived = Buffer.alloc(0);
  
  req.on("data", chunk => {
    console.log('got data======')
    dataReceived = Buffer.concat([dataReceived, chunk]);
  });
  
  req.on('end', () => {
    fsSync.appendFileSync(fileName, dataReceived);
    return res.status(201).json({ response: 'ok' });
  });
});
app.use(function (req, res, next) {
  res.sendFile('public/notFound.html', { root: __dirname })
  next()
})
httpServer.listen(process.env.PORT, () => {
  console.log('listening on http://localhost:' + process.env.PORT);
});