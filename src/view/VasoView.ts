import { BaseView } from "./BaseView";

export class VasoView extends BaseView {

    onButtonClick = () => {}

    constructor() {
        super()
        this.body = `
        <center>
        <p>Vaso</p>
        Teste de input: <input type="text" descricao="teste" id="teste">
        <button id='button'>Voltar</button>
        </center>
        `
    }
    bindViewEvents(): void {
        const button = document.getElementById('button')
        if (button) {
            button.addEventListener('click', () => this.onButtonClick())
        }
    }

}
