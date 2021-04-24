import SceneOne from '../pages/SceneOne';
import SceneTwo from '../pages/SceneTwo';
import Home from '../pages/Home';
import Robot from '../templates/Robot';
import getHash from './getHash';
import resolveRoutes from './resolveRoutes';

const routes = {
    '/' : Home,
    '/sceneone' : SceneOne,
    '/scenetwo' : SceneTwo
}


const router = async() =>{
    const content = null || document.getElementById('main-game');
    const footer = null || document.getElementById('footer');

    let hash = getHash();


    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : null;

    content.innerHTML = await render();
}

export default router;