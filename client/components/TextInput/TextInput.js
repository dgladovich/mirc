import React, {Component} from 'react';
import {Textfield, Grid, Cell, Icon} from 'react-mdl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import {SEND_MESSAGE, SEND_MESSAGE_SUCCESS, SEND_MESSAGE_ERROR} from "../../constants/ActionTypes";

const SHIFT = 'Shift', CTRL = 'Ctrl', ENTER = 'Enter';

const USER_ID = 1;

class MessagesList extends Component {
    state = {
        label: "Type message here...",
        message: ''
    };

    onChangeValue(e) {
        let mess = e.target.value;
        this.setState({message: mess});

    }

    sendMessage(e) {
        let {dispatch} = this.props;
        let {message} = this.state;

        let mess = {
            ctrl: 2,
            usr: 1,
            text: message
        };
        dispatch({
            type: 'socket',
            types: [SEND_MESSAGE, SEND_MESSAGE_SUCCESS, SEND_MESSAGE_ERROR],
            promise: socket => {
                return socket.emit('messages:add', mess)
            }
        })
        this.setState({message: ''});
    }

    handleKeyPress(e) {
        if (e.key === ENTER) {
            if (e.ctrlKey || e.shiftKey) {
                return false
            } else {
                e.preventDefault();
                this.sendMessage();
            }
        }
    }

    handleKeyDown(e) {
        if (e.ctrlKey && e.key === ENTER) {
            console.log('entering');

            return false;
        }
        if (e.shiftKey && e.key === ENTER) {
            e.preventDefault();
            console.log(' another entering');

            return false;
        }

    }

    render() {
        let {message} = this.state;
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
                                value={message}
                                onChange={this.onChangeValue.bind(this)}
                                onKeyPress={this.handleKeyPress.bind(this)}
                                onKeyDown={this.handleKeyDown.bind(this)}
                            />
                        </Cell>
                        <Cell col={1} align='middle'>
                            <Button onClick={this.sendMessage.bind(this)} variant="fab" color="default"
                                    aria-label="add">
                                <SendIcon/>
                            </Button>
                        </Cell>
                    </Grid>
                </Cell>
            </Grid>
        )
    }
}


export default MessagesList;
