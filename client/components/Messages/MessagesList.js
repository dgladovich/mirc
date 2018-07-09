import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Grid, Cell} from 'react-mdl';
import OwnMessage from './OwnMessage';
import ForeignMessage from './ForeignMessage';

import List from '@material-ui/core/List';


const USER_ID = 1;

class MessagesList extends Component {
    constructor(props) {
        super(props);
        this.listRef = React.createRef();
    }
    scrollToBottom(){
        let elem = ReactDom.findDOMNode(this.listRef.current);
        let pixelsToScroll = elem.scrollHeight;

        elem.scrollTop = pixelsToScroll;
    }
    componentDidMount(){
        this.scrollToBottom()
    }
    componentDidUpdate(){
        this.scrollToBottom()
    }
    render() {
        return (
            <div>
                <h3>Online support</h3>
                <Grid>

                    <Cell
                        ref={this.listRef}
                        style={{
                            margin: 'auto',
                            height: '70vh',
                            overflowY: 'scroll',
                            border: '1px solid #e1e1e1',
                            width: 600,
                        }}
                        align='middle'
                    >

                        <List>
                            {
                                /*this.props.messages.map((message) => message.usr === USER_ID ? (
                                <OwnMessage key={message.id} text={message.text} userId={message.usr}/>) : (
                                <ForeignMessage key={message.id} text={message.text} userId={message.usr}/>))*/
                            }
                        </List>

                    </Cell>
                </Grid>
            </div>
        );
    }
}


export default MessagesList;
