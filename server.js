const express = require('express');
const app = express();
const socketio = require('socket.io');
const http = require('http');
const router = require('./route');
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
const io = socketio(server);
const path = require("path")
//
//
app.use(express.static(path.resolve(__dirname, "./build")))
//

const users = [];
const addUser = ({ id, room }) => {
    const user = { id, room };
    users.push(user);
    return { user };
}
const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);
    if (index !== -1) {
        return users.splice(index, 1)[0];
    }

}
const getUser = (id) => users.find((user) => user.id === id);

const getUserInRoom = (room) => users.filter((user) => user.room == room);
userCount = 0
io.on('connection', (socket) => {
    userCount++;
    socket.emit('userCount', { count: userCount })
    console.log((userCount));
    io.emit('userCount', { count: userCount });
    socket.on('data', (values) => {
        console.log(values);
        socket.broadcast.emit("newData", { new: values.val, color: values.color })
        // io.emit("newData", { new: values.val, color: values.color });

    })
    socket.on('disconnect', () => {
        userCount--;
        socket.emit('userCount', { userCount: userCount });
        io.emit('userCount', { count: userCount });
        // console.log('user has left !! ');

        console.log(userCount);


    })
})

app.use(router);
server.listen(PORT, () => {
    console.log(`server has started on port ${PORT}`);
})





    // socket.on('join', (id, callback) => {

        // const { user, error } = addUser({ id: socket.id, room });
        // if (error) return callback(error);

        // socket.broadcast.to(id).emit("count", {count:userCount});


        // // socket.broadcast.to(user.room).emit("userCount", { userCount: userCount });

        // //  socket.emit("userCount", { userCount: userCount })
        // console.log('we have a new connection !!!');
        // console.log(userCount);
        // // console.log(user.room);




        // socket.join(user.room);
        // io.to(user.room).emit('roomData', { room: user.room, users: getUserInRoom(user.room) })
        // callback();
    // });
    // socket.broadcast.emit("userCount", { userCount: userCount });
    // // socket.emit("userCount", { userCount: userCount })
    // console.log('we have a new connection !!!');
    // console.log(userCount);