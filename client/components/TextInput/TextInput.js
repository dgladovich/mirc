import React, {Component} from 'react';
import {Textfield, Grid, Cell, Icon} from 'react-mdl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import {SEND_MESSAGE, SEND_MESSAGE_SUCCESS, SEND_MESSAGE_ERROR} from "../../constants/ActionTypes";


const USER_ID = 1;

class MessagesList extends Component {
    state = {
        label: "Type message here...",
    };
    sendMessage(){
        let {dispatch} = this.props;
        let message = {
            ctrl: 2,
            usr: 1,
            text: 'Some new message'
        };
        dispatch({
            type: 'socket',
            types: [SEND_MESSAGE, SEND_MESSAGE_SUCCESS, SEND_MESSAGE_ERROR],
            promise: socket => {
                return socket.emit('messages:add', message)
            }
        })
    }
    render() {
        return (
            <Grid>
                <Cell
                    col={3}
                    style={{
                        margin: 'auto',
                        width: 600
                    }}
                >
                    <Grid>
                        <Cell col={11}>
                            <TextField
                                id="multiline-flexible"
                                placeholder={this.state.label}
                                multiline
                                rows="3"
                                fullWidth
                                rowsMax="4"
                                margin="normal"
                            />
                        </Cell>
                        <Cell col={1} align='middle'>
                            <Button onClick={this.sendMessage.bind(this)} variant="fab" color="default" aria-label="add">
                                <SendIcon />
                            </Button>
                        </Cell>
                    </Grid>
                </Cell>
            </Grid>
        )
    }
}


export default MessagesList;
