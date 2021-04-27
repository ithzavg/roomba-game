import SceneOne from '../pages/SceneOne';
import SceneTwo from '../pages/SceneTwo';
import Home from '../pages/Home';
import Robot from '../templates/Robot';
import getHash from './getHash';
import resolveRoutes from './resolveRoutes';
import objPosition from '../utils/ObjectPosition';

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


    if(route === "/sceneone"){
        const loadRobot = document.getElementById('roomba');
        loadRobot.height = window.innerHeight - 507;
        loadRobot.width = window.innerWidth - 20;

        document.onkeydown = function(e) {
            switch (e.keyCode) {
                case 37:  
                    loadRobot.innerHTML = Robot(loadRobot,objPosition);
                   
                    objPosition.x--;
                    objPosition.xElement--;
                    objPosition.xA--;
                    objPosition.xC--;
                    objPosition.xI--;
                    objPosition.xJ--;
                    objPosition.xK--;

                    break;
                case 39:
                    loadRobot.innerHTML = Robot(loadRobot, objPosition);
                    
                    objPosition.x++;
                    objPosition.xElement++;
                    objPosition.xA++;
                    objPosition.xC++;
                    objPosition.xI++;
                    objPosition.xJ++;
                    objPosition.xK++;

                    break;
            }
        }
    }
}

export default router;