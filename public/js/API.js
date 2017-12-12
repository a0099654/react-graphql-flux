import { get } from 'jquery';
import ServerActions from './actions/ServerActions';

let API = {
    fetchLinks() {
        get("/data/links").done(response => {
            ServerActions.receiveLinks(response);
        });
    }
};

export default API;