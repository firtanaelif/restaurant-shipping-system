import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';
import Error404Screen from "./screens/Error404Screen.js";
import {parseRequestUrl} from "./utils.js";

const routes = {
    '/': HomeScreen,
    '/product/:id': ProductScreen,
}
const router = async () => {
    const request = parseRequestUrl();
    const parseUrl = (request.resource ? `/${request.resource}` : '/') + (request.id ? '/:id' : '') + (request.verb ? `/${request.verb}` : '');
    const screen = routes[parseUrl]? routes[parseUrl]: Error404Screen;
    const main = document.getElementById('main-container');
    main.innerHTML = await screen.render();
};
window.addEventListener('load', router);
window.addEventListener('hashchange', router);
