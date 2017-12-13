import React from 'react';
import API from '../API';
import LinkStores from '../stores/LinkStore';
import PropTypes from 'prop-types'; 

let _getAppState = () => {
    return { links: LinkStores.getAll() }
}
export default class Main extends React.Component {
    static propTypes = {
        limit: PropTypes.number
    }
    
    static defaultProps = {
        limit: 5
    }

    state = _getAppState();

    componentDidMount() {
        API.fetchLinks();
        LinkStores.on("change", this.onChange);
    }

    componentWillUnmount() {
        LinkStores.removeListener("change", this.onChange);
    }

    onChange = () => {
        this.setState(_getAppState());
    }
    render() {
        let content = this.state.links.slice(0, this.props.limit).map(link => {
            return <li key={link._id}>
                <a href={link.url}>{link.title}</a>
            </li>;
        });
        return (
            <div><h3>links</h3>
                <ul>
                    {content}
                </ul>
            </div>
        );
    }
}
