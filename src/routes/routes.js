import SceneOne from '../pages/SceneOne';
import Home from '../pages/Home';
import getHash from './getHash';
import resolveRoutes from './resolveRoutes';
import MoveRightLeft from '../utils/MoveRightLeft';
import Start from "../templates/Start";

const routes = {
    '/' : Home,
    '/sceneone' : SceneOne
}


const router = async() =>{
    const content = null || document.getElementById('main-game'); 

    let hash = getHash();


    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : null;

    content.innerHTML = await render();

    const showStart = () =>{
        modal.innerHTML = Start();
        modal.style.display = 'block';
        const btnCloseModal = document.getElementById('btn-close-modal');
        btnCloseModal.addEventListener('click', function(){
            modal.style.display = 'none';
        });
    }


    if(route === "/sceneone"){
        showStart();
        MoveRightLeft();
    }

}

export default router;