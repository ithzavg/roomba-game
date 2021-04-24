const Home = () => {
    const template = `
        <header class="game-header">
            <p class="game-title">roomba</p>
            <p class="game-subtitle">lets play!</p>
        </header>

        <section class="game-scenes">
            <a href="#/sceneone">
                <figure id="section__first-scene">
                    <img class="img-scene" src="/src/img/scene1.PNG"></img>
                    <figcaption> Scene 1</figcaption>
                </figure>
            </a>

            <a href="#/scenetwo">
                <figure id="section__second-scene">
                    <img class="img-scene" src="/src/img/scene2.PNG"></img>
                    <figcaption> Scene 2</figcaption>
                </figure>
            </a>
        </section>
    `;

    return template;
}

export default Home;