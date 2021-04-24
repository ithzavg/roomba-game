const Instructions = () =>{
    const template = `
        <section class="modal-header">
            <p>instructions</p>
        </section>
        <section class="modal-body">
            <ul>
                <li>Select your scene</li>
                <li>The game will take you to the scene selected</li>
                <li>Press button play</li>
                <li>Use the keyboard arrows</li>
            </ul>
        </section>
        <section class="modal-footer">
            <button class="btn" id="btn-close-modal">close</button>
        </section>
    `;

    return template;
}




export default Instructions;