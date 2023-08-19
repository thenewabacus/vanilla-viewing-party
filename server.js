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
 * fix the 404 path, it conflicts with other routes
 *  gets: err hhttp headers already sent
 * 
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