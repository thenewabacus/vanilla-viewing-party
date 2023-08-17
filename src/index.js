window.onload = () => {
    var socket = io('http://localhost');
    socket.on("connect", () => {
        joinRoom()
        console.log("Connected to Socket.io server");
    });
    socket.on("connect", () => {
        joinRoom()
        console.log("Connected to Socket.io server");
    });
}

function joinRoom() {
    const socket = io('http://localhost');
    console.log(socket)
    return () => {
        socket.disconnect();
    };
}


function joinRoom() {
    const socket = io('http://localhost');
    // console.log(socket)
    return () => {
        socket.disconnect();
    };
}
let roomidtxt = document.getElementById("roomidtxt")

roomidtxt.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        console.log(roomidtxt.value)
    }
});

