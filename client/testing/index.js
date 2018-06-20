import {normalize, schema} from 'normalizr';
import smart_sup from '../../server/sup_db/models';

const {Message} = smart_sup


Message
    .findAll({
        attributes: ['ctrl'],
        group: ['ctrl']
    })
    .then((ctrls) => {
        let groups = ctrls.map(async (c) => {
            let ctrl = c.toJSON();
            let messages = await Message.findAll({
                where:
                    {
                        ctrl: ctrl.ctrl
                    },
                limit: 100,
                order: [['createdAt', "DESC"]],
                raw: true
            });
            return {
                ctrl: c.ctrl,
                messages: messages
            }
        })
        Promise.all(groups).then((shit)=>{
            console.log(shit)
        })
    });


const user = new schema.Entity('users');
const comment = new schema.Entity('comments', {
    commenter: user
});

const article = new schema.Entity('articles', {
    author: user,
    comments: [comment]
});

