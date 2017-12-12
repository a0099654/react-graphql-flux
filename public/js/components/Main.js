import React from 'react';
import API from '../API';
import LinkStores from '../stores/LinkStore';

export default class Main extends React.Component {
    componentDidMount() {
        console.log('1 . here');
        API.fetchLinks();
    }
    render() {
        return (
            <div><h3>links</h3>
                <ul>
                    <li>LALA</li>
                </ul>
            </div>
        );
    }
}
