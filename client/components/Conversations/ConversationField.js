import React, {Component} from 'react';
import {List, ListItem, Grid} from 'react-mdl';

class App extends Component {

    componentDidMount() {
        const { dispatch, selectedSubreddit } = this.props;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
            const { dispatch, selectedSubreddit } = nextProps
            dispatch(fetchPostsIfNeeded(selectedSubreddit))
        }
    }


    render() {
        return (
            <div>
                <h1>Conversation field</h1>
                <Grid>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores at culpa debitis
                        delectus eligendi, fugiat fugit ipsam iste neque odio pariatur quia ratione reiciendis repellat
                        tempore veniam veritatis. Omnis?
                    </div>
                    <div>At commodi cumque deserunt dicta ducimus, eaque enim impedit ipsam itaque perspiciatis rem
                        soluta, totam velit? Aspernatur corporis deserunt dolore, incidunt, ipsam labore nesciunt
                        officiis tempora ullam, ut velit veniam!
                    </div>
                    <div>Animi aspernatur autem beatae consectetur, cumque dolorem ducimus eos et, eum explicabo fuga id
                        illum incidunt ipsam modi neque nesciunt odit officiis perferendis quaerat quia repellendus
                        reprehenderit tenetur totam ullam.
                    </div>
                    <div>Accusamus deleniti ducimus eius fuga incidunt, vel veniam voluptates? A ab aliquam voluptatem.
                        Accusamus ad atque aut, consequuntur dolorum enim explicabo iste laudantium nobis officia optio,
                        ratione, repellendus soluta tempora.
                    </div>
                    <div>Amet animi aperiam aspernatur deleniti dignissimos eveniet facere in iusto modi numquam omnis
                        perferendis perspiciatis quae quis sint, tenetur veniam vitae! A dolor et illum mollitia odio
                        officiis quae ullam.
                    </div>
                    <div>Aperiam atque autem blanditiis consectetur cupiditate delectus expedita illo incidunt, ipsa
                        laboriosam libero nisi porro quae quos sit soluta veritatis voluptatibus. Asperiores fugiat in
                        ipsum nostrum porro sapiente tenetur! Fugiat!
                    </div>
                    <div>A ad aliquid at blanditiis commodi cum dignissimos doloribus eaque enim excepturi
                        exercitationem explicabo facere illo in necessitatibus neque, nobis non provident quia
                        recusandae rem repellendus similique sit veritatis voluptates.
                    </div>
                    <div>A aliquam autem corporis cumque distinctio eligendi, est explicabo hic in incidunt iure minima
                        minus molestiae natus, nihil numquam optio perferendis quia reiciendis reprehenderit saepe
                        soluta sunt temporibus totam ullam.
                    </div>
                    <div>Adipisci aperiam at debitis eum id illo inventore ipsum libero natus, nostrum officia quo
                        repellendus sunt temporibus voluptas! Aperiam asperiores eveniet expedita facere iste
                        necessitatibus nostrum sint temporibus veniam, vero.
                    </div>
                    <div>Assumenda autem itaque maxime omnis quibusdam, reprehenderit suscipit ullam vitae. Aliquid
                        consequatur dolorem expedita facere fugiat maxime odio officia soluta tempore? Culpa eius fugit
                        iste optio voluptates? Porro sequi, tenetur.
                    </div>
                </Grid>
            </div>
        );
    }
}


export default App;
