import React, {Component} from 'react';
import {List, ListItem, Grid, Cell} from 'react-mdl';
import OwnMessage from './OwnMessage';
import ForeignMessage from './ForeignMessage';


const USER_ID = 1;

class MessagesList extends Component {
    render() {
        return (
            <div>
                <h2>Conversation field</h2>
                <Grid>

                    <Cell style={{
                        margin: 'auto',
                        height: '50vh',
                        overflowY: 'scroll',
                        border: '1px solid #e1e1e1'
                    }} align='middle' cell={4}>

                        <List>
                            {this.props.messages.map((message) => message.usr === USER_ID ? (
                                <OwnMessage key={message.id} text={message.text} userId={message.usr}/>) : (
                                <ForeignMessage key={message.id} text={message.text} userId={message.usr}/>))}
                        </List>

                    </Cell>
                </Grid>
            </div>
        )
            ;
    }
}


export default MessagesList;
