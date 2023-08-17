let roomsData = {};
// let roomsData = {
//     "roomid": {
//         "socketid": "username"
//     }
// }
// const socketServer = require('./server')
function SocketConnection(socketServer) {
    socketServer.on('connection', (socket) => {
        console.log(socket.id, 'a user connected');

        socket.on("joinRoom", (data) => {
            console.log('got room');
            socket.join(data.roomid);
            socket.roomid = data.roomid.toString();
            // socket.roomid = data.roomid;
        
            if (!roomsData[data.roomid]) {
                roomsData[data.roomid] = {};
            }
        
            roomsData[data.roomid][socket.id] = data.username;
        
            console.log('roomsData', roomsData);
        });
        socket.on("disconnect", () => {
            if (socket.roomid && roomsData[socket.roomid] && roomsData[socket.roomid][socket.id]) {
                delete roomsData[socket.roomid][socket.id];
                if (Object.keys(roomsData[socket.roomid]).length === 0) {
                    delete roomsData[socket.roomid];
                }
                console.log('User disconnected:', socket.id);
                console.log('roomsData', roomsData);
            }
        });
        socket.on('sendMessage', (data) => {
            ROOMID = data.roomid
            Message = data.message
            console.log(socket.roomid)
            // socket.in(data.roomid).emit('receiveMessage', data, socket.id)
            socket.to(socket.roomid).emit("newMessage", {
                sender: socket.id,
                message: message
            });
        })
        socket.on('movie', (data) => {
            ROOMID = data.roomid
            console.log(ROOMID,'------');
            // socketServer.emit('movie');
            socketServer.in(socket.roomid).emit('movie')
            // socket.emit("movie", {
            //     sender: socket.id,
            //     message: message
            // });
        });
        socket.on('vibrate', (data) => {
            console.log('received and emited vibrate', data)
            socketServer.to(data.roomid).emit('vibrate', { data, socketid: socket.id })
        });
        socket.on('stopVibration', (stopvib) => {
            socketServer.emit('stopVibration', stopvib)
        });
        socket.on('seekPlus5', (seekPlus5, plus5Press) => {
            socketServer.emit('seekPlus5', seekPlus5, plus5Press)
        });
        socket.on('seekPlus10', (seekPlus10, plus10Press) => {
            socketServer.emit('seekPlus10', seekPlus10, plus10Press)
        });
        socket.on('seekPlus15', (seekPlus15, plus15Press) => {
            socketServer.emit('seekPlus15', seekPlus15, plus15Press)
        });
        socket.on('seekMinus5', (seekMinus5, minus5Press) => {
            socketServer.emit('seekMinus5', seekMinus5, minus5Press)
        });
        socket.on('seekMinus10', (seekMinus10, minus10Press) => {
            socketServer.emit('seekMinus10', seekMinus10, minus10Press)
        });
        socket.on('seekMinus15', (seekMinus15, minus15Press) => {
            socketServer.emit('seekMinus15', seekMinus15, minus15Press)
        });
        socket.on('customSeek', (customSeek, customSeekLog) => {
            socketServer.emit('customSeek', customSeek, customSeekLog)

        });
        socket.on('tenthPart', (tenthPart, percentSeekLog) => {
            socketServer.emit('tenthPart', tenthPart, percentSeekLog)
        });
        socket.on('thirtiethPart', (thirtiethPart, percentSeekLog) => {
            socketServer.emit('thirtiethPart', thirtiethPart, percentSeekLog)
        });
        socket.on('sixtiethPart', (sixtiethPart, percentSeekLog) => {
            socketServer.emit('sixtiethPart', sixtiethPart, percentSeekLog)
        });
        socket.on('nintiethPart', (nintiethPart, percentSeekLog) => {
            socketServer.emit('nintiethPart', nintiethPart, percentSeekLog)
        });
        socket.on('pause', (pause, pauseLog) => {
            socketServer.emit('pause', pause, pauseLog)
        });
        socket.on('play', (play, playLog) => {
            socketServer.emit('play', play, playLog)
        });
        socket.on('stop', (stop, stopLog) => {
            socketServer.emit('stop', stop, stopLog)
        });
        socket.on('syncTime', (syncTime, syncPress) => {
            socketServer.emit('syncTime', syncTime, syncPress);
        });
        socket.on('vidFromClient', (vidFromClient) => {
            console.log(vidFromClient)
            socketServer.emit('vidFromServer', vidFromClient)
        })
    });
}

module.exports = SocketConnection;