require('dotenv').config()

const express = require("express")
const SocketConnection = require('./services/socket')
const { Server } = require("socket.io")
const app = express()
const cookieParser = require('cookie-parser')
const cors = require("cors")
const path = require('path')
const fs = require('fs').promises;
const fsSync = require('fs');
//DONOT CHANGE BELOW CODE
const https = require('https');
const privateKey = fsSync.readFileSync(process.env.PRIVATE_KEY, 'utf8');
const certificate = fsSync.readFileSync(process.env.CECRTIFICATE, 'utf8');
const ca = fsSync.readFileSync(process.env.CA, 'utf8');
const credentials = {
  key: privateKey,
  cert: certificate,
  ca: ca
};
const httpsServer = https.createServer(credentials, app);
let origins = { origin: process.env.SOURCE }

const socketServer = new Server(httpsServer, {
  cors: {
    origin: origins, methods: ["GET", "POST"]
  }
})
//DONOT CHANGE ABOVE CODE
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
const folderPath = path.join(__dirname, '/public/media')

app.get('/getMovieList', async (req, res) => {
  let result = await readMedia(folderPath)
  return res.status(200).json({ result })
})
/**
48  *
49  * @todo
50  * username should be generated server side
51  * make the uploads parallel
52  *
53  *
54  * add authhentication
55  *  add accessRights to the files
56  *
57  * store messges to temporary database
58  *
59  * add user activity tracking
60  *
61  */
async function readMedia(folderPath) {

  try {
    const files = await fs.readdir(folderPath);

    const filesList = files.map(file => {
      return path.join(folderPath, file);
    });

    return filesList;
  } catch (err) {
    console.error('Error reading directory:', err);
    throw err;
  }
}
(async () => {
  const rootDirectory = folderPath;
  try {
    const filesList = await readMedia(rootDirectory);
    console.log('Files in the media directory:', filesList);
  } catch (err) {
    console.error('Error:', err);
  }
})();

app.post('/upload', async function (req, res) {
  const fileName = 'public/media/' + req.headers["file-name"];
  console.log(fileName)
  let dataReceived = Buffer.alloc(0);
  req.on("data", chunk => {
    dataReceived = Buffer.concat([dataReceived, chunk]);
  });

  req.on('end', () => {
    fsSync.appendFileSync(fileName, dataReceived);
    return res.status(201).json({ response: 'ok' });
  });
});
app.use(express.static(__dirname, { dotfiles: 'allow' }));
//DONOT CHANGE
httpsServer.listen(443, () => {
  console.log('HTTPS Server running on port 443');
});
//DONOT CHANGE 