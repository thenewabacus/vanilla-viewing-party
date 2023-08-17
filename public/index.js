let roomidtxt = document.getElementById("roomidtxt")
let selectmoviebtn = document.getElementById("selectmoviebtn")
let uploadmoviebtn = document.getElementById("uploadmoviebtn")
let adjectives = [
    "adorable",
    "adventurous",
    "aggressive",
    "agreeable",
    "alert",
    "alive",
    "amused",
    "angry",
    "annoyed",
    "annoying",
    "anxious",
    "arrogant",
    "ashamed",
    "attractive",
    "average",
    "awful",
    "bad",
    "beautiful",
    "better",
    "bewildered",
    "black",
    "bloody",
    "blue",
    "blue-eyed",
    "blushing",
    "bored",
    "brainy",
    "brave",
    "breakable",
    "bright",
    "busy",
    "calm",
    "careful",
    "cautious",
    "charming",
    "cheerful",
    "clean",
    "clear",
    "clever",
    "cloudy",
    "clumsy",
    "colorful",
    "combative",
    "comfortable",
    "concerned",
    "condemned",
    "confused",
    "cooperative",
    "courageous",
    "crazy",
    "creepy",
    "crowded",
    "cruel",
    "curious",
    "cute",
    "dangerous",
    "dark",
    "dead",
    "defeated",
    "defiant",
    "delightful",
    "depressed",
    "determined",
    "different",
    "difficult",
    "disgusted",
    "distinct",
    "disturbed",
    "dizzy",
    "doubtful",
    "drab",
    "dull",
    "eager",
    "easy",
    "elated",
    "elegant",
    "embarrassed",
    "enchanting",
    "encouraging",
    "energetic",
    "enthusiastic",
    "envious",
    "evil",
    "excited",
    "expensive",
    "exuberant",
    "fair",
    "faithful",
    "famous",
    "fancy",
    "fantastic",
    "fierce",
    "filthy",
    "fine",
    "foolish",
    "fragile",
    "frail",
    "frantic",
    "friendly",
    "frightened",
    "funny",
    "gentle",
    "gifted",
    "glamorous",
    "gleaming",
    "glorious",
    "good",
    "gorgeous",
    "graceful",
    "grieving",
    "grotesque",
    "grumpy",
    "handsome",
    "happy",
    "healthy",
    "helpful",
    "helpless",
    "hilarious",
    "homeless",
    "homely",
    "horrible",
    "hungry",
    "hurt",
    "ill",
    "important",
    "impossible",
    "inexpensive",
    "innocent",
    "inquisitive",
    "itchy",
    "jealous",
    "jittery",
    "jolly",
    "joyous",
    "kind",
    "lazy",
    "light",
    "lively",
    "lonely",
    "long",
    "lovely",
    "lucky",
    "magnificent",
    "misty",
    "modern",
    "motionless",
    "muddy",
    "mushy",
    "mysterious",
    "nasty",
    "naughty",
    "nervous",
    "nice",
    "nutty",
    "obedient",
    "obnoxious",
    "odd",
    "old-fashioned",
    "open",
    "outrageous",
    "outstanding",
    "panicky",
    "perfect",
    "plain",
    "pleasant",
    "poised",
    "poor",
    "powerful",
    "precious",
    "prickly",
    "proud",
    "puzzled",
    "quaint",
    "real",
    "relieved",
    "repulsive",
    "rich",
    "scary",
    "selfish",
    "shiny",
    "shy",
    "silly",
    "sleepy",
    "smiling",
    "smoggy",
    "sore",
    "sparkling",
    "splendid",
    "spotless",
    "stormy",
    "strange",
    "stupid",
    "successful",
    "super",
    "talented",
    "tame",
    "tender",
    "tense",
    "terrible",
    "testy",
    "thankful",
    "thoughtful",
    "thoughtless",
    "tired",
    "tough",
    "troubled",
    "ugliest",
    "ugly",
    "uninterested",
    "unsightly",
    "unusual",
    "upset",
    "uptight",
    "vast",
    "victorious",
    "vivacious",
    "wandering",
    "weary",
    "wicked",
    "wide-eyed",
    "wild",
    "witty",
    "worrisome",
    "worried",
    "wrong",
    "zany",
    "zealous",
    "able",
    "acidic",
    "angry",

    "annoyed",
    "anxious",
    "arrogant",
    "ashamed",
    "attractive",
    "average",
    "awesome",
    "awful",
    "bad",
    "beautiful",
    "bitter",
    "black",
    "blue",
    "boiling",
    "brave",
    "breezy",
    "brief",
    "bright",
    "brilliant",
    "broad",
    "broken",
    "bumpy",
    "busy",
    "calm",
    "careful",
    "cautious",
    "charming",
    "cheerful",
    "chilly",
    "clean",
    "clear",
    "clever",
    "cloudy",
    "clumsy",
    "colorful",
    "comfortable",
    "concerned",
    "confused",
    "cool",
    "cooperative",
    "courageous",
    "crazy",
    "creepy",
    "crooked",
    "cruel",
    "curious",
    "cute",
    "dangerous",
    "dark",
    "dead",
    "deep",
    "defiant",
    "delicious",
    "delightful",
    "depressed",
    "determined",
    "dirty",
    "disgusted",
    "distinct",
    "disturbed",
    "dizzy",
    "doubtful",
    "drab",
    "dull",
    "eager",
    "easy",
    "elated",
    "elegant",
    "embarrassed",
    "enchanting",
    "encouraging",
    "energetic",
    "enthusiastic",
    "envious",
    "evil",
    "excited",
    "exhausted",
    "expensive",
    "exuberant",
    "fair",
    "faithful",
    "famous",
    "fancy",
    "fantastic",
    "fierce",
    "filthy",
    "fine",
    "flaky",
    "flat",
    "fluffy",
    "foolish",
    "frantic",
    "fresh",
    "friendly",
    "frightened",
    "funny",
    "furry",
    "gentle",
    "gifted",
    "gigantic",
    "glamorous",
    "gleaming",
    "glorious",
    "good",
    "gorgeous",
    "graceful",
    "grateful",
    "greedy",
    "green",
    "grotesque",
    "grumpy",
    "handsome",
    "happy",
    "healthy",
    "helpful",
    "helpless",
    "high",
    "hilarious",
    "hollow",
    "homely",
    "horrible",
    "hungry",
    "hurt",
    "icy",
    "ideal",
    "immense",
    "impartial",
    "imperfect",
    "important",
    "impossible",
    "incredible",
    "inexpensive",
    "innocent",
    "inquisitive",
    "itchy",
    "jealous",
    "jittery",
    "jolly"
]
// make an array of nouns
let nouns = [
    "apple",
    "book",
    "car",
    "dog",
    "elephant",
    "flower",
    "guitar",
    "house",
    "island",
    "jacket",
    "key",
    "lamp",
    "mountain",
    "notebook",
    "ocean",
    "piano",
    "quilt",
    "river",
    "sun",
    "tree",
    "umbrella",
    "violin",
    "waterfall",
    "xylophone",
    "yacht",
    "zebra",
    "airport",
    "beach",
    "cat",
    "desk",
    "ear",
    "forest",
    "garden",
    "hat",
    "ice cream",
    "jungle",
    "kite",
    "lake",
    "moon",
    "nest",
    "orange",
    "pencil",
    "queen",
    "rain",
    "star",
    "train",
    "universe",
    "vase",
    "wallet",
    "xylophone",
    "yoga mat",
    "zeppelin",
    "apartment",
    "bag",
    "chair",
    "desk",
    "elephant",
    "flower",
    "globe",
    "helmet",
    "island",
    "jacket",
    "kite",
    "laptop",
    "map",
    "necklace",
    "octopus",
    "piano",
    "queen",
    "robot",
    "sailboat",
    "table",
    "umbrella",
    "vase",
    "watch",
    "xylophone",
    "yacht",
    "zebra",
    "apple",
    "bird",
    "cake",
    "dog",
    "elephant",
    "fish",
    "guitar",
    "hat",
    "ice cream",
    "jungle",
    "kangaroo",
    "lion",
    "monkey",
    "nest",
    "orange",
    "peacock",
    "queen",
    "rose",
    "snake",
    "tiger",
    "umbrella",
    "violin",
    "watermelon",
    "xylophone",
    "yoga mat",
    "zeppelin"
]
let pause = document.getElementById("pause");
let movieRadio = document.getElementById('movie-radio')
let play = document.getElementById("play");
let stop = document.getElementById("stop");
let time = document.getElementById("time");
let plus5 = document.getElementById("plus5");
let plus10 = document.getElementById("plus10");
let plus15 = document.getElementById("plus15");
let minus5 = document.getElementById("minus5");
let minus10 = document.getElementById("minus10");
let minus15 = document.getElementById("minus15");
let customSeek = document.getElementById("customSeek");
let ten = document.getElementById("ten");
let thirty = document.getElementById("thirty");
let sixty = document.getElementById("sixty");
let ninty = document.getElementById("ninty");
let syncBtn = document.getElementById("sync");

let player
let playerExists = ""
let videoPath = "../media/Teach me STATISTICS in half an hour! Seriously..mp4"
/**
 * @todo
 * working on seeing and selecting video to play
 * 
 */
selectmoviebtn.addEventListener('click', async function () {
    console.log('fetching movies list')
    const response = await fetch("http://localhost:3000/getMovieList", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            // You can add any necessary headers here
        }
    });

    const data = await response.json();
    console.log("API response:", data);
})
function movie() {
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
            source: videoPath,
            // mimeType: 'video/mp4',
            parentId: "#player-div",
            height: "300px",
            width: "500px"
        })
    }
}
let condition = 1
let socket = io()
if (condition == 0) {
    socket.emit('chat message', input.value);
    input.value = '';
}

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


movieRadio.addEventListener('click', () => {
    console.log('movie event emited')
    socket.emit('movie', { roomid: roomid });
})
socket.on('movie', () => {
    console.log(' moviecalled')
    movie()
});

play.addEventListener("click", function () {
    console.log('play event emited')
    socket.emit('play');
});
socket.on('play', () => {
    console.log('play event invoked')
    playVideo()
});

pause.addEventListener("click", function () {
    console.log('pause event emited')
    socket.emit('pause');
});
socket.on('pause', () => {
    console.log('pause event invoked')
    pauseVideo()
});

stop.addEventListener("click", function () {
    console.log('stop event emited')
    socket.emit('stop');
});
socket.on('stop', () => {
    console.log('stop event invoked')
    stopVideo()
});



syncBtn.addEventListener("click", function () {
    console.log('sync event invoked')
    let syncTime = Math.round(player.getCurrentTime());
    console.log('synced');
    //let syncPress = controlIdentity + " pressed syncbutton";
    socket.emit('syncTime', syncTime, syncPress);
});
plus5.addEventListener("click", () => {
    console.log('plus5 event invoked')
    socket.emit('seekPlus5');

});
plus10.addEventListener("click", () => {
    console.log('plus10 event invoked')
    let plus10Press = controlIdentity + " seeked +10 seconds";
    socket.emit('seekPlus10', 'seekPlus10', plus10Press);
});
plus15.addEventListener("click", () => {
    console.log('plus15 event invoked')
    let plus15Press = controlIdentity + " seeked +15 seconds";
    socket.emit('seekPlus15', 'seekPlus15', plus15Press);
});
minus5.addEventListener("click", () => {
    console.log('minus5 event invoked')
    let minus5Press = controlIdentity + " seeked -5 seconds";
    socket.emit('seekMinus5', 'seekMinus5', minus5Press);
});
minus10.addEventListener("click", () => {
    console.log('minus10 event invoked')
    let minus10Press = controlIdentity + " seeked -10 seconds";
    socket.emit('seekMinus10', 'seekMinus10', minus10Press);
});
minus15.addEventListener("click", () => {
    console.log('minus15 event invoked')
    let minus15Press = controlIdentity + " seeked -15 seconds";
    socket.emit('seekMinus15', 'seekMinus15', minus15Press);
});
customSeek.addEventListener('keypress', function (e) {
    console.log('customseek event invoked')
    let customSeekValue = customSeek.value;
    let customSeekLog = controlIdentity + " seeked to " + customSeekValue + " seconds";
    if (e.key === 'Enter') {
        socket.emit('customSeek', customSeekValue, customSeekLog);
        customSeek.value = '';
    }
});
ten.addEventListener("click", () => {
    console.log('tenthPart event invoked')
    let percentSeekLog = controlIdentity + " seeked to 10% of the video";
    socket.emit('tenthPart', 'tenthPart', percentSeekLog);
});
thirty.addEventListener("click", () => {
    console.log('thirtiethPart event invoked')
    let percentSeekLog = controlIdentity + " seeked to 30% of the video";
    socket.emit('thirtiethPart', 'thirtiethPart', percentSeekLog);
});
sixty.addEventListener("click", () => {
    console.log('sixtiethPart event invoked')
    let percentSeekLog = controlIdentity + " seeked to 60% of the video";
    socket.emit('sixtiethPart', 'sixtiethPart', percentSeekLog);
});
ninty.addEventListener("click", () => {
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

let roomid = null
function joinRoom() {
    //randomly generate room id of 8 digits with alphabets and numbers
    //dandomly generate username of random words 
    console.log(roomid)
    username = generateUsername()
    console.log(roomid, username)
    socket.emit('joinRoom', { roomid, username })

    // window.location.href.replace('roomid', roomid)
}

function generateUsername() {
    let randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    let randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    let randomUsername = randomAdjective + randomNoun;
    return randomUsername;
}

// function joinRoom() {
//     const socket = io('http://localhost');
//     console.log(socket)
//     return () => {
//         socket.disconnect();
//     };
// }

let messagetxt = document.getElementById('messagetxt')
function sendMessage() {
    messageVal = messagetxt.value
    socket.emit('message', { roomid: roomid, message: messageVal });
}
messagetxt.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        sendMessage()
    }
});

roomidtxt.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        roomid = roomidtxt.value
        joinRoom()
    }
});

