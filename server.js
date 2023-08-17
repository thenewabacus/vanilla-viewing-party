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
const httpServer = createServer(app)

let origins = { origin: process.env.HOST }

const socketServer = new Server(httpServer, {
  cors: {
    origin: origins, methods: ["GET", "POST"]
  }
})
module.exports = { socketServer }
SocketConnection(socketServer)
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())
app.use(express.static(__dirname));

// const io = new Server(server);

const port = process.env.PORT || 3000

let morgan = require("morgan")

app.use(morgan("dev"))
SocketConnection(socketServer)
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())
app.use(express.static("public"))
app.get('/getMovieList', async (req, res) => {
  let result = await readMedia()
  return res.status(200).json({result})
})
/**
 * 
 * @todo
 * 
 * fix the folder path
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

// app.get('/', async (req, res) => {
//   return res.status(200).json({ message: "ok" })
// })

// io.on('connection', (socket) => {

//   socket.on('movie', () => {
//     console.log('movie event received');
//     io.emit('movie');
//   });
//   socket.on('synctime', () => {
//     console.log('synctime event received');
//     io.emit('movie');
//   });
//   socket.on('play', () => {
//     console.log('play event received ');
//     io.emit('play');
//   });
//   socket.on('pause', () => {
//     console.log('pause event received ');
//     io.emit('pause');
//   });
//   socket.on('stop', () => {
//     console.log('stop event received ');
//     io.emit('stop');
//   });

// });




app.use(function (req, res, next) {
  return res.status(404).json({ err: 'resource not found' })
})


httpServer.listen(process.env.PORT, () => {
  console.log('listening on http://localhost:' + process.env.PORT);
});