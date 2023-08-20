let movieList = []
let dropdownHTML = "";
let player
let playerExists = ""
let roomid;
let getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
let local_stream;
let screenStream;
let peer = null;
let currentPeer = null
let screenSharing = false
let fileData = null;
let CHUNK_SIZE = 0;
let isResumed = true
let lastChunkIDUploaded = 0
let result = null
let plusOne = 0
let videoPath = null //"../media/Teach me STATISTICS in half an hour! Seriously..mp4"

window.onload = async (event) => {
    let dropdownHTML = "";
    const prefixToRemove = "/root/vfe/public/media/";
    movieList = await fetchMovies()
    for (const movieTitle of movieList.result) {
        const modifiedTitle = movieTitle.replace(prefixToRemove, "");
        const fileNameWithoutExtension = modifiedTitle.split('.').slice(0, -1).join('.')//.trim();
        dropdownHTML += `<a onclick="loadMovie('../media/${modifiedTitle}')" id="${fileNameWithoutExtension}">${modifiedTitle}</a>`;
    }
    dropdowncontent.innerHTML = dropdownHTML
};


function loadMovie(p) {

    console.log('inside movie laading')
    videoPath = p
    console.log(videoPath)
}

function check(){
    console.log(videoPath)
}
setTimeout(() => {
    check()
}, 10000);
/**
 * @todo
 * work on user experience
 * 
 */

async function fetchMovies() {
    console.log('fetching movies list')
    const response = await fetch("/getMovieList", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    const data = await response.json();
    return data
}

function movie(path) {
    console.log('movieInvokked')
    if (playerExists == 'player-div') {
        console.log('alredy')

    } else {
        let playerdiv = document.createElement('div')
        playerdiv.id = 'player-div'
        playerExists = playerdiv.id
        console.log(playerExists)

        document.getElementById('movie-div-parent').appendChild(playerdiv)
        player = new Clappr.Player({
            source: path,
            // mimeType: 'video/mp4',
            parentId: "#player-div",
            height: "300px",
            width: "500px"
        })
    }
}

movieRadio.addEventListener('click', () => {
    console.log('movie event emited')
    console.log(videoPath,'=========================')
    socket.emit('sendMovie', { roomid, videoPath });
})


playBtn.addEventListener("click", function () {
    console.log('play event emited')
    socket.emit('play');
});


pauseBtn.addEventListener("click", function () {
    console.log('pause event emited')
    socket.emit('pause');
});

stopBtn.addEventListener("click", function () {
    console.log('stop event emited')
    socket.emit('stop');
});

syncBtn.addEventListener("click", function () {
    console.log('sync event invoked')
    let syncTime = Math.round(player.getCurrentTime());
    console.log('synced');
    //let syncPress = controlIdentity + " pressed syncbutton";
    socket.emit('syncTime', syncTime, syncPress);
});
plus5Btn.addEventListener("click", () => {
    console.log('plus5 event invoked')
    socket.emit('seekPlus5');

});
plus10Btn.addEventListener("click", () => {
    console.log('plus10 event invoked')
    let plus10Press = controlIdentity + " seeked +10 seconds";
    socket.emit('seekPlus10', 'seekPlus10', plus10Press);
});
plus15Btn.addEventListener("click", () => {
    console.log('plus15 event invoked')
    let plus15Press = controlIdentity + " seeked +15 seconds";
    socket.emit('seekPlus15', 'seekPlus15', plus15Press);
});
minus5Btn.addEventListener("click", () => {
    console.log('minus5 event invoked')
    let minus5Press = controlIdentity + " seeked -5 seconds";
    socket.emit('seekMinus5', 'seekMinus5', minus5Press);
});
minus10Btn.addEventListener("click", () => {
    console.log('minus10 event invoked')
    let minus10Press = controlIdentity + " seeked -10 seconds";
    socket.emit('seekMinus10', 'seekMinus10', minus10Press);
});
minus15Btn.addEventListener("click", () => {
    console.log('minus15 event invoked')
    let minus15Press = controlIdentity + " seeked -15 seconds";
    socket.emit('seekMinus15', 'seekMinus15', minus15Press);
});
customSeekTxt.addEventListener('keypress', function (e) {
    console.log('customseek event invoked')
    let customSeekValue = customSeek.value;
    let customSeekLog = controlIdentity + " seeked to " + customSeekValue + " seconds";
    if (e.key === 'Enter') {
        socket.emit('customSeek', customSeekValue, customSeekLog);
        customSeek.value = '';
    }
});
tenBtn.addEventListener("click", () => {
    console.log('tenthPart event invoked')
    let percentSeekLog = controlIdentity + " seeked to 10% of the video";
    socket.emit('tenthPart', 'tenthPart', percentSeekLog);
});
thirtyBtn.addEventListener("click", () => {
    console.log('thirtiethPart event invoked')
    let percentSeekLog = controlIdentity + " seeked to 30% of the video";
    socket.emit('thirtiethPart', 'thirtiethPart', percentSeekLog);
});
sixtyBtn.addEventListener("click", () => {
    console.log('sixtiethPart event invoked')
    let percentSeekLog = controlIdentity + " seeked to 60% of the video";
    socket.emit('sixtiethPart', 'sixtiethPart', percentSeekLog);
});
nintyBtn.addEventListener("click", () => {
    console.log('nintiethPart event invoked')
    let percentSeekLog = controlIdentity + " seeked to 90% of the video";
    socket.emit('nintiethPart', 'nintiethPart', percentSeekLog);
});


function tenthPartfn() {
    let tenth = player.getDuration() / 10;
    player.seek(tenth, true)
    console.log('tenthPartfn function executed')
    //scrollToBottom('logs-wrapper');
}
function thirtiethPartfn() {
    let tenth = player.getDuration() / 10;
    let thirtieth = tenth * 3;
    player.seek(thirtieth, true)
    console.log('thirtiethPartfn function executed')
    //scrollToBottom('logs-wrapper');
}
function sixtiethPartfn() {
    let tenth = player.getDuration() / 10;
    let sixtieth = tenth * 6;
    player.seek(sixtieth, true)
    console.log('sixtiethPartfn function executed')
    //scrollToBottom('logs-wrapper');
}
function nintiethPartfn() {
    let tenth = player.getDuration() / 10;
    let nintieth = tenth * 9;
    player.seek(nintieth, true)
    console.log('nintiethPartfn function executed')
    //scrollToBottom('logs-wrapper');
}



function pauseVideo() {
    player.pause();
    console.log('pauseVideo function executed')
    //scrollToBottom('logs-wrapper');
}
function playVideo() {
    player.play();
    console.log('playVideo function executed')
    //scrollToBottom('logs-wrapper');
}
function stopVideo() {
    player.stop();
    console.log('stopVideo function executed')
    //scrollToBottom('logs-wrapper');
}
function plus5fn() {
    player.seek(Math.round(player.getCurrentTime() + 5), true)
    console.log('plus5fn function executed')
    //scrollToBottom('logs-wrapper');
}
function plus10fn() {
    player.seek(Math.round(player.getCurrentTime() + 10), true)
    console.log('plus15fn function executed')
    //scrollToBottom('logs-wrapper');
}
function plus15fn() {
    player.seek(Math.round(player.getCurrentTime() + 15), true)
    console.log('plus15fn function executed')
    //scrollToBottom('logs-wrapper');
}
function minus5fn() {
    player.seek(Math.round(player.getCurrentTime() - 5), true)
    console.log('minus5fn function executed')
    //scrollToBottom('logs-wrapper');
}
function minus10fn() {
    player.seek(Math.round(player.getCurrentTime() - 10), true)
    console.log('minus10fn function executed')
    //scrollToBottom('logs-wrapper');
}
function minus15fn() {
    player.seek(Math.round(player.getCurrentTime() - 15), true)
    console.log('minus15fn function executed')
    //scrollToBottom('logs-wrapper');
}
function customSeekfn(value) {
    player.seek(Math.round(value), true);
    console.log('customSeekfn function executed')
    //scrollToBottom('logs-wrapper');
}
function scrollToBottom(id) {
    let div = document.getElementById(id);

    div.scrollTop = div.scrollHeight - div.clientHeight;
    console.log('scrollToBottom executed');
}

function setLocalStream(stream) {
    let video = document.getElementById("local-video");

    video.srcObject = stream;
    video.muted = true;
    console.log('set local stream')
    video.play();

}

function setRemoteStream(stream) {
    let video = document.getElementById("remote-video");
    video.srcObject = stream;
    console.log('set remote stream')
    video.play();
}
function createRoom() {
    roomid = roomidTxt.value;
    console.log("Creating Room")
    username = generateUsername()
    console.log(roomid, username)

    if (roomid == " " || roomid == "") {
        alert(" enter roomid")
        return;
    }
    peer = new Peer(roomid)
    peer.on('open', (id) => {
        console.log(" Connected with id: ", id)
        getUserMedia({ video: true, audio: true }, (stream) => {
            local_stream = stream;
            setLocalStream(local_stream)
        }, (err) => {
            console.log(err)
        })
    })
    peer.on('call', (call) => {
        call.answer(local_stream);
        call.on('stream', (stream) => {
            setRemoteStream(stream)
        })
        currentPeer = call;
    })
    socket.emit('joinRoom', { roomid, username })
}

function joinRoom() {
    console.log("JOINED ROOM")
    roomid = roomidTxt.value;
    console.log(roomid)
    username = generateUsername()
    console.log(roomid, username)
    if (roomid == " " || roomid == "") {
        alert(" enter room")
        return;
    }
    console.log('rooooooooooooooom', roomid)
    peer = new Peer()
    peer.on('open', (id) => {
        console.log("Connected with id: " + id)
        getUserMedia({ video: true, audio: true }, (stream) => {
            local_stream = stream;
            setLocalStream(local_stream)
            let call = peer.call(roomid, stream)
            call.on('stream', (stream) => {
                setRemoteStream(stream);
            })
            currentPeer = call;
        }, (err) => {
            console.log(err)
        })

    })
    socket.emit('joinRoom', { roomid, username })

}
/**
 * 
 * @todo
 * to run screenshare stop the movie, and replace it with the screenshare video
 * 
 */


// function startScreenShare() {
//     if (screenSharing) {
//         stopScreenSharing()
//     }
//     navigator.mediaDevices.getDisplayMedia({ video: true }).then((stream) => {
//         screenStream = stream;
//         let videoTrack = screenStream.getVideoTracks()[0];
//         videoTrack.onended = () => {
//             stopScreenSharing()
//         }
//         if (peer) {
//             let sender = currentPeer.peerConnection.getSenders().find(function (s) {
//                 return s.track.kind == videoTrack.kind;
//             })
//             sender.replaceTrack(videoTrack)
//             screenSharing = true
//         }
//         console.log(screenStream)
//     })
// }



// function stopScreenSharing() {
//     if (!screenSharing) return;
//     let videoTrack = local_stream.getVideoTracks()[0];
//     if (peer) {
//         let sender = currentPeer.peerConnection.getSenders().find(function (s) {
//             return s.track.kind == videoTrack.kind;
//         })
//         sender.replaceTrack(videoTrack)
//     }
//     screenStream.getTracks().forEach(function (track) {
//         track.stop();
//     });
//     screenSharing = false
// }

function generateUsername() {
    let randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    let randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    let randomUsername = randomAdjective + randomNoun;
    return randomUsername;
}
let times = 0
function sendMessage() {
    console.log(times++)
    let messageVal = document.getElementById('messagetxt').value
    console.log('message', messageVal)
    socket.emit('sendMessage', { roomid: roomid, message: messageVal });
}


messageTxt.addEventListener("Enter", (event) => {
    if (event.key === "Enter") {
        // event.preventDefault();
        console.log('message enrter presed')
        sendMessage()
    }
});


pauseBtn.addEventListener("click", function () {
    // console.log(lastChunkIDUploaded, 'sdfsdfsd')

    isResumed = !isResumed
    // console.log('resumed', isResumed)
    if (isResumed) {
        pauseBtn.value = 'resumed'
        upload(result)
    } else {
        pauseBtn.value = 'paused'
    }
})

uploadBtn.addEventListener("click", async () => {
    // console.log(lastChunkIDUploaded,'sdfsdfsd')
    result = await readFile(f);
    console.log(result)
    upload(result)
})
async function readFile(f) {
    if (!fileData) {
        const fileReader = new FileReader();
        const file = f.files[0];

        fileData = await new Promise((resolve, reject) => {
            fileReader.onload = (ev) => {
                const fileMetadata = {
                    Name: file.name,
                    Size: file.size,
                    Type: file.type,
                    theFile: ev.target.result
                };
                resolve({ fileData: ev.target.result, fileMetadata });
            };

            fileReader.onerror = (error) => {
                reject(error);
            };

            fileReader.readAsArrayBuffer(file);
        });
    }

    return fileData;
}

async function upload(file) {
    console.log('upload invoked')
    if (file.fileData.byteLength < 100 * 1024 * 1024) {
        CHUNK_SIZE = 50000; // 50 KB
        console.log('chunk A ', file.fileData.byteLength / 1000000)
    } else if (file.fileData.byteLength < 200 * 1024 * 1024) {
        CHUNK_SIZE = 100000; // 100 KB
        console.log('chunk B ', file.fileData.byteLength / 1000000)
    } else if (file.fileData.byteLength < 500 * 1024 * 1024) {
        CHUNK_SIZE = 200000; // 200 KB
        console.log('chunk C ', file.fileData.byteLength / 1000000)
    } else {
        CHUNK_SIZE = 500000; // 500 KB
        console.log('chunk D ', file.fileData.byteLength / 1000000)
    }
    let chunkCount = Math.ceil(file.fileData.byteLength / CHUNK_SIZE);
    // console.log(file.fileMetadata.Name, 'chink count')
    for (let chunkId = lastChunkIDUploaded + plusOne; chunkId < chunkCount + 1; chunkId++) {
        if (isResumed) {
            const chunk = file.fileData.slice(chunkId * CHUNK_SIZE, (chunkId * CHUNK_SIZE) + CHUNK_SIZE);

            const response = await fetch("/upload", {
                "method": "POST",
                "headers": {
                    "content-type": "application/octet-stream",
                    "content-length": chunk.byteLength,
                    "file-name": file.fileMetadata.Name
                },
                "body": chunk
            });
            if (response.status === 201) {
                lastChunkIDUploaded = chunkId;
                // console.log('lastuploadedchunkid', lastChunkIDUploaded);
                uploadStatusDiv.textContent = `${lastChunkIDUploaded} uploaded out of ${chunkCount}`;
            } else {
                uploadStatusDiv.textContent = `${chunkId} uploaded out of ${chunkCount}, couldn't upload further`;
                return
            }
        } else {
            // console.log('paused');
            return;
        }
    }
}