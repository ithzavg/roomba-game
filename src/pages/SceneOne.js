const SceneOne = () => {
    const template = `
        <section class="header-scene">
            <button class="btn" id="btn-control-game">
                <img id="img-play-game" src="/src/img/play-game.svg"></img>
            </button>
            <button class="btn btn-reload-game"> reload</button> 
            <a class="btn btn-exit-game"  href="/">exit</a> 
        </section>

        <section class="content-game">
            <img id="img-lamp__scene-one"src="/src/img/floor-lamp.svg" alt="Floor lamp Scene One"></img>
            <img id="img-plant__scene-one" src="/src/img/plant-1.svg" alt="Big plant Scene One"></img>
            <img id="img-couch__scene-one" src="/src/img/couch.svg" alt="Couch Scene One"></img>
            <img id="img-table__scene-one" src="/src/img/table.svg" alt="Table Scene One"></img>
            <img id="img-plantm__scene-one" src="/src/img/plant.svg" alt="Table Scene One"></img>
        </section>


        <div>
            <div class="roomba-vacuum move"></div>
            <div class="rect-blue-right"></div>
            <div class="rect-blue-left"></div>
            <div class="in-circle move-in"></div>
            <label class="text-vacuum">roomba</label>
            <div class="rect-blue"></div>
            <div class="rect-aqua-bottom-1"></div>
            <div class="btn-vacuum"></div>
            <div class="circle-red"></div>
            <div class="rect-aqua-top"></div>
            <div class="rect-yellow"></div>
            <div class="rect-yellow-right"></div>
            <div class="rect-aqua"></div>
            <div class="rect-aqua-bottom"></div>
        </div>

        <div class="path-top"></div>
        <img src="/src/img/trash.svg" class="img-trash one"></img>
        <img src="/src/img/trash.svg" class="img-trash two"></img>
        <img src="/src/img/trash.svg" class="img-trash three"></img>
        <img src="/src/img/trash.svg" class="img-trash four"></img>
        <img src="/src/img/trash.svg" class="img-trash five"></img>
        <div class="path-bottom"></div>
        


    `;
    return template;
}


export default SceneOne;