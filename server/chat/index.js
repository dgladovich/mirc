const socketServer =require('socket.io');
const http = require('http');
const CHAT_SERVER_PORT = process.env.CHAT_SERVER_PORT;
const sub_db = require('../sup_db/models');
const {Message} = sub_db;

module.exports = function ChatServer (app){

    const serve = http.createServer(app);
    const io = socketServer(serve);

    serve.listen(CHAT_SERVER_PORT,()=> {console.log(`Socket server start on port: ${CHAT_SERVER_PORT}`)});

    io.on('connection', (client) => {
        const host = client.handshake.headers.referer;
        console.log(`Client connected: ${host}`)
        Message.findAll({limit: 20}).then((messages)=>{
            console.log('find messages lists')
            console.log(messages)
        })
        client.on('disconnect', ()=>{
            console.log('Clent disconnect')
        })
    });
}