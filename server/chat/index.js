const socketServer = require('socket.io');
const http = require('http');
const CHAT_SERVER_PORT = process.env.CHAT_SERVER_PORT;
const sub_db = require('../sup_db/models');
const moment = require('moment');
const {Message} = sub_db;

module.exports = function ChatServer(app) {

    const serve = http.createServer(app);
    const io = socketServer(serve);

    serve.listen(CHAT_SERVER_PORT, () => {
        console.log(`Socket server start on port: ${CHAT_SERVER_PORT}`)
    });

    io.on('connection', (client) => {
        const host = client.handshake.headers.referer;
        console.log(`Client connected: ${host}`);


        Message.findAll({limit: 20}).then((messages) => {
            let msgs = messages.map(message => message.toJSON());
            client.emit('messages:list', msgs);
        });


        client.on('disconnect', () => {
            console.log('Clent disconnect')
        })
        client.on('messages:request', (params, cb) => {
            const {controllerId} = params;
            Message.findAll({where: {ctrl: controllerId}, limit: 20})
                .then((messages) => {
                    let msgs = messages.map(message => message.toJSON());
                    cb(msgs);
                });
        })
        client.on('messages:add', (message) => {
            let mess = Object.assign({}, message, {createdAt: moment().format('YYYY-MM-DDTHH:mm:ss'), updatedAt: moment().format('YYYY-MM-DDTHH:mm:ss')});
            io.emit('messages:add', mess)
        })
    });
}