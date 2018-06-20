import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import {Cell, Grid} from 'react-mdl';


class OwnMessage extends Component {

    render() {
        return (
            <Grid>
                <Cell col={1} align={'middle'}>
                    <Avatar>
                        <ImageIcon />
                    </Avatar>
                </Cell>
                <Cell  col={10} style={{textAlign: 'left'}}>
                    <Cell col={12}><b>Some Name</b> <span>20-06-2018 14:46</span></Cell>
                    {this.props.text}
                </Cell>

            </Grid>
        );
    }
}


export default OwnMessage;
