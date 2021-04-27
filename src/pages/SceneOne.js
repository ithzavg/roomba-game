const SceneOne = () => {
    const template = `
        <section class="header-scene">
            <button class="btn" id="btn-control-game">
                <img id="img-play-game" src="/src/img/play-game.svg"></img>
            </button>
            <a class="btn" id="btn-exit-game" href="/">exit</a>   
        </section>

        <section class="content-game">
            <img id="img-lamp__scene-one"src="/src/img/floor-lamp.svg" alt="Floor lamp Scene One"></img>
            <img id="img-plant__scene-one" src="/src/img/plant-1.svg" alt="Big plant Scene One"></img>
            <img id="img-couch__scene-one" src="/src/img/couch.svg" alt="Couch Scene One"></img>
            <img id="img-table__scene-one" src="/src/img/table.svg" alt="Table Scene One"></img>
            <img id="img-plantm__scene-one" src="/src/img/plant.svg" alt="Table Scene One"></img>
        </section>

        <canvas id="roomba"></canvas>
    `;
    return template;
}


export default SceneOne;