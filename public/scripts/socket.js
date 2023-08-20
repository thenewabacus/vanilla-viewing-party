let socket = io()

socket.on('newMessage', (data) => {
    console.log(data)
    console.log("got new message")
    let messageList = "<li>" + data.message + "</li>";
    messageListDiv.innerHTML += messageList//"<div>messssage<div>"
});

socket.on('seekPlus10', (seekPlus10, plus10Press) => {
    if (seekPlus10 == 'seekPlus10') {
        let html;
        html = "<li>" + plus10Press + "</li>";
        logs.innerHTML += html;
        plus10fn();
    }
});
socket.on('seekPlus15', (seekPlus15, plus15Press) => {
    if (seekPlus15 == 'seekPlus15') {
        let html;
        html = "<li>" + plus15Press + "</li>";
        logs.innerHTML += html;
        plus15fn();
    }
});
socket.on('seekMinus5', (seekMinus5, minus5Press) => {
    if (seekMinus5 == 'seekMinus5') {
        let html;
        html = "<li>" + minus5Press + "</li>";
        logs.innerHTML += html;
        minus5fn();
    }
});
socket.on('seekMinus10', (seekMinus10, minus10Press) => {
    if (seekMinus10 == 'seekMinus10') {
        let html;
        html = "<li>" + minus10Press + "</li>";
        logs.innerHTML += html;
        minus10fn();
    }
});
socket.on('seekMinus15', (seekMinus15, minus15Press) => {
    if (seekMinus15 == 'seekMinus15') {
        let html;
        html = "<li>" + minus15Press + "</li>";
        logs.innerHTML += html;
        minus15fn();
    }
});

socket.on('customSeek', (customSeekValue, customSeekLog) => {
    let html;
    html = "<li>" + customSeekLog + "</li>";
    logs.innerHTML += html;
    customSeekfn(customSeekValue);
});
socket.on('tenthPart', (tenthPart, percentSeekLog) => {
    if (tenthPart == 'tenthPart') {
        let html;
        html = "<li>" + percentSeekLog + "</li>";
        logs.innerHTML += html;

        tenthPartfn();
    }
});
socket.on('thirtiethPart', (thirtiethPart, percentSeekLog) => {
    if (thirtiethPart == 'thirtiethPart') {
        let html;
        html = "<li>" + percentSeekLog + "</li>";
        logs.innerHTML += html;

        thirtiethPartfn();
    }
});
socket.on('sixtiethPart', (sixtiethPart, percentSeekLog) => {
    if (sixtiethPart == 'sixtiethPart') {
        let html;
        html = "<li>" + percentSeekLog + "</li>";
        logs.innerHTML += html;
        sixtiethPartfn();
    }
});
socket.on('nintiethPart', (nintiethPart, percentSeekLog) => {
    if (nintiethPart == 'nintiethPart') {
        let html;
        html = "<li>" + percentSeekLog + "</li>";
        logs.innerHTML += html;
        nintiethPartfn();
    }
});
socket.on('syncTime', (syncTime, syncPress) => {
    player.seek(syncTime, true);
    let html;
    html = "<li>" + syncPress + "</li>";
    logs.innerHTML += html;
});

socket.on('newMovie', (data) => {
    console.log(' newmovie received')
    console.log(data)
    movie(data.videoPath)
});
socket.on('play', () => {
    console.log('play event invoked')
    playVideo()
});
socket.on('pause', () => {
    console.log('pause event invoked')
    pauseVideo()
});

socket.on('stop', () => {
    console.log('stop event invoked')
    stopVideo()
});
